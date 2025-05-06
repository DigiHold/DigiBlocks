/**
 * Helper Functions
 * 
 * Utility functions for DigiBlocks
 */

/**
 * Custom hook to handle unique block ID generation
 *
 * @param {string} id Current block ID from attributes
 * @param {string} clientId Block client ID from WordPress
 * @param {Function} setAttributes Function to update block attributes
 * @param {boolean} isParent Whether this block is a parent container with inner blocks
 * @return {string} The current block ID
 */
export const useBlockId = (id, clientId, setAttributes, isParent = false) => {
    const { useEffect, useRef } = wp.element;
    const { getBlock, getBlocks } = wp.data.select('core/block-editor');
    const { updateBlockAttributes } = wp.data.dispatch('core/block-editor');
    
    // Track if this is an initial render
    const isInitialRender = useRef(true);
    
    // First generate or verify own ID
    useEffect(() => {
        // Generate a new ID if none exists
        if (!id || id === '') {
            const randomStr = Math.random().toString(36).substr(2, 9);
            setAttributes({ id: `digi-${randomStr}` });
        }
    }, []);
    
    // Helper function to find all blocks recursively, including nested blocks
    const getAllBlocksRecursively = (blocks = []) => {
        let allBlocks = [];
        
        blocks.forEach(block => {
            allBlocks.push(block);
            
            if (block.innerBlocks && block.innerBlocks.length > 0) {
                allBlocks = allBlocks.concat(getAllBlocksRecursively(block.innerBlocks));
            }
        });
        
        return allBlocks;
    };
    
    useEffect(() => {
        // Skip this effect on initial render
        if (isInitialRender.current) {
            isInitialRender.current = false;
            return;
        }
        
        // Check if this is a duplicate block
        const block = getBlock(clientId);
        
        if (block && id && id !== '') {
            setTimeout(() => {
                // Get all blocks including nested ones
                const rootBlocks = getBlocks();
                const allBlocks = getAllBlocksRecursively(rootBlocks);
                
                // Check if multiple blocks have the same ID
                const duplicates = allBlocks.filter(b => 
                    b.attributes && b.attributes.id === id && b.clientId !== clientId
                );
                
                if (duplicates.length > 0) {
                    // This is a duplicate, generate a new ID
                    const randomStr = Math.random().toString(36).substr(2, 9);
                    const newId = `digi-${randomStr}`;
                    setAttributes({ id: newId });
                    
                    // If this is a parent block, we need to update IDs of inner blocks too
                    if (isParent && block.innerBlocks && block.innerBlocks.length > 0) {
                        block.innerBlocks.forEach(innerBlock => {
                            // Generate a new unique ID for each inner block
                            const innerRandomStr = Math.random().toString(36).substr(2, 9);
                            updateBlockAttributes(innerBlock.clientId, { 
                                id: `digi-${innerRandomStr}` 
                            });
                            
                            // Recursively handle nested inner blocks if needed
                            const nestedBlock = getBlock(innerBlock.clientId);
                            if (nestedBlock && nestedBlock.innerBlocks && nestedBlock.innerBlocks.length > 0) {
                                nestedBlock.innerBlocks.forEach(nestedInnerBlock => {
                                    const nestedRandomStr = Math.random().toString(36).substr(2, 9);
                                    updateBlockAttributes(nestedInnerBlock.clientId, { 
                                        id: `digi-${nestedRandomStr}` 
                                    });
                                });
                            }
                        });
                    }
                }
            }, 10); // Slight delay to ensure the DOM has updated
        }
    }, [clientId, id]);
    
    return id;
};

/**
 * Trigger animation preview for a block
 * 
 * @param {string} id - The block's unique ID
 * @param {string} animation - The animation name
 * @param {Object} animations - The animations object containing keyframes
 * @param {Object} previewTimeoutRef - useRef object to store timeout reference
 * @return {void}
 */
export const animationPreview = (id, animation, animations, previewTimeoutRef) => {
    // Only proceed if we have a valid animation
    if (!animation || animation === 'none') {
        return;
    }
    
    // Clear any existing timeout
    if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
    }
    
    // Find the block element
    const blockElement = document.querySelector(`.${id}`);
    if (!blockElement) {
        return;
    }
    
    // Generate a timestamp to ensure unique animation names on each click
    const timestamp = Date.now();
    
    // Apply animation directly
    if (animations[animation]) {
        // Extract the original animation name from the keyframes
        const originalKeyframes = animations[animation].keyframes;
        const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
        
        if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
            console.error('Could not extract animation name from keyframes');
            return;
        }
        
        const originalAnimName = originalAnimNameMatch[1];
        const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
        
        // Create a style element with a unique animation name to avoid conflicts
        const styleElement = document.createElement('style');
        styleElement.id = `animation-style-${id}_${timestamp}`;
        
        // Replace the original animation name with our unique name
        const updatedKeyframes = originalKeyframes.replace(
            new RegExp(originalAnimName, 'g'),
            uniqueAnimName
        );
        
        styleElement.textContent = `
            ${updatedKeyframes}
            
            .${id} {
                animation: none; /* Reset first */
            }
        `;
        
        // Remove any existing animation style for this block
        document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach(el => {
            el.remove();
        });
        
        // Add the style to the document
        document.head.appendChild(styleElement);
        
        // Force reflow to ensure animation reset
        blockElement.offsetHeight;
        
        // Now apply the animation
        const animationStyleElement = document.createElement('style');
        animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
        animationStyleElement.textContent = `
            .${id} {
                animation: ${uniqueAnimName} 1.5s forwards !important;
            }
        `;
        document.head.appendChild(animationStyleElement);
        
        // Clean up after animation
        previewTimeoutRef.current = setTimeout(() => {
            styleElement.remove();
            animationStyleElement.remove();
            blockElement.style.animation = '';
        }, 1500);
    }
};

/**
 * Convert font name for URL
 * 
 * @param {string} fontName - Font name
 * @return {string} URL-friendly font name
 */
export const prepareFontForUrl = (fontName) => {
    return fontName.replace(/\s+/g, '+');
};

/**
 * Load Google Font in the admin area
 * 
 * @param {string} fontFamily - Font family name
 * @param {string} fontWeight - Font weight (optional)
 * @return {void}
 */
export const loadGoogleFont = (fontFamily, fontWeight = '') => {
    // Skip if no font family is provided or it's a system font
    if (!fontFamily || 
        fontFamily === '' || 
        fontFamily.includes(',') ||  // System fonts typically include commas
        fontFamily === 'system-ui') {
        return;
    }
    
    // Track loaded fonts to avoid duplicates
    window.digi = window.digi || {};
    window.digi.loadedFonts = window.digi.loadedFonts || {};
    const fontKey = `${fontFamily}-${fontWeight}`;
    
    // Skip if this exact font+weight is already loaded
    if (window.digi.loadedFonts[fontKey]) {
        return;
    }
    
    // Check if we have Google Fonts data
    let googleFontsData = window.digi?.getGoogleFonts;
    
    // If it's a function, execute it to get the data
    if (typeof googleFontsData === 'function') {
        googleFontsData = googleFontsData();
    }
    
    // Check if the selected font is in our Google Fonts list
    if (googleFontsData && googleFontsData[fontFamily]) {
        // Get font data
        const fontData = googleFontsData[fontFamily];
        
        // If no specific weight is provided, use the default or first available weight
        if (!fontWeight || fontWeight === '') {
            // Find the default weight if available
            const defaultWeightIndex = fontData.weight.indexOf('Default');
            if (defaultWeightIndex !== -1) {
                // If 'Default' is found but it's not the actual weight value, get the actual default weight
                if (fontData.weight[defaultWeightIndex] === 'Default' && fontData.i && fontData.i[0] === 'normal') {
                    fontWeight = fontData.weight[1] || '400'; // Use the next weight or 400
                } else {
                    fontWeight = '400'; // Default to 400 if no other information
                }
            } else {
                // Use the first available weight
                fontWeight = fontData.weight[0] === 'Default' ? 
                             (fontData.weight[1] || '400') : 
                             (fontData.weight[0] || '400');
            }
        }
        
        // Replace spaces with plus signs for URL
        const formattedFontFamily = prepareFontForUrl(fontFamily);
        
        // Create the Google Fonts URL
        const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedFontFamily}:wght@${fontWeight}&display=swap`;
        
        // Check if this font is already loaded
        const existingLink = document.querySelector(`link[href*="${formattedFontFamily}"]`);
        if (existingLink) {
            // If already loaded but with different weights, update the href
            if (!existingLink.href.includes(`wght@${fontWeight}`)) {
                // Get current weights
                const weightMatch = existingLink.href.match(/wght@([^&]+)/);
                if (weightMatch && weightMatch[1]) {
                    const currentWeights = weightMatch[1].split(';');
                    if (!currentWeights.includes(fontWeight)) {
                        // Add new weight to existing weights
                        currentWeights.push(fontWeight);
                        const newWeights = currentWeights.join(';');
                        existingLink.href = existingLink.href.replace(/wght@([^&]+)/, `wght@${newWeights}`);
                    }
                }
            }
            
            // Mark this font as loaded
            window.digi.loadedFonts[fontKey] = true;
            return;
        }
        
        // Create link element for the Google Font
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = fontUrl;
        
        // Add custom attributes to help with debugging
        linkElement.setAttribute('data-font-family', fontFamily);
        linkElement.setAttribute('data-font-weight', fontWeight);
        linkElement.setAttribute('data-auto-loaded', 'true');
        
        // Add to document head
        document.head.appendChild(linkElement);
        
        // Mark this font as loaded
        window.digi.loadedFonts[fontKey] = true;
    }
};

/**
 * Extract typography settings from blocks and load Google Fonts
 * This scans through blocks recursively to find typography settings
 * 
 * @return {void}
 */
export const initializeGoogleFonts = () => {
    // Only run in editor environment
    if (!wp || !wp.data || !wp.data.select) {
        return;
    }
    
    try {
        // Get all blocks from the editor
        const { getBlocks } = wp.data.select('core/block-editor') || wp.data.select('core/editor');
        
        if (!getBlocks) {
            return;
        }
        
        const blocks = getBlocks();
        
        // Function to extract typography settings from block attributes recursively
        const extractFontsFromBlocks = (blocksList) => {
            blocksList.forEach(block => {
                // Check if the block has attributes with typography settings
                if (block.attributes) {
                    // Common attribute names that might contain typography settings
                    const typographyAttrs = [
                        'typography', 
                        'titleTypography', 
                        'contentTypography',
                        'headingTypography',
                        'textTypography',
                        'buttonTypography'
                    ];
                    
                    // Check each potential typography attribute
                    typographyAttrs.forEach(attrName => {
                        const typoSettings = block.attributes[attrName];
                        if (typoSettings && typoSettings.fontFamily) {
                            // Load the font if it's a Google font
                            loadGoogleFont(typoSettings.fontFamily, typoSettings.fontWeight || '');
                        }
                    });
                    
                    // Some blocks might store typography inside style object
                    if (block.attributes.style && block.attributes.style.typography) {
                        const typoSettings = block.attributes.style.typography;
                        if (typoSettings.fontFamily) {
                            loadGoogleFont(typoSettings.fontFamily, typoSettings.fontWeight || '');
                        }
                    }
                }
                
                // Recursively process inner blocks
                if (block.innerBlocks && block.innerBlocks.length > 0) {
                    extractFontsFromBlocks(block.innerBlocks);
                }
            });
        };
        
        // Process all blocks
        extractFontsFromBlocks(blocks);
        
    } catch (error) {
        console.error('Error initializing Google Fonts:', error);
    }
};

/**
 * Scan for typography controls in the DOM and load their fonts
 * This is a backup method to catch any fonts not loaded through block attributes
 * 
 * @return {void}
 */
export const scanForTypographyControls = () => {
    try {
        // Get all typography control elements
        const typographyControls = document.querySelectorAll('.digiblocks-typography-options');
        
        typographyControls.forEach(control => {
            // Try to determine the font family and weight from data attributes or select elements
            let fontFamily = control.getAttribute('data-font-family');
            let fontWeight = control.getAttribute('data-font-weight');
            
            // If not found in attributes, try to find select elements
            if (!fontFamily) {
                const fontFamilySelect = control.querySelector('select#font-family');
                if (fontFamilySelect) {
                    fontFamily = fontFamilySelect.value;
                }
                
                // Find weight if available
                if (!fontWeight) {
                    const weightSelect = control.querySelector('select[aria-label="Weight"]');
                    if (weightSelect) {
                        fontWeight = weightSelect.value;
                    }
                }
            }
            
            // Load the font if it's a Google font
            if (fontFamily && !fontFamily.includes(',') && fontFamily !== 'system-ui') {
                loadGoogleFont(fontFamily, fontWeight || '');
            }
        });
    } catch (error) {
        console.error('Error scanning for typography controls:', error);
    }
};

/**
 * Initialize Google Fonts when WordPress is fully loaded
 * This sets up event listeners and triggers font loading at the right times
 * 
 * @return {void}
 */
export const initializeGoogleFontsOnLoad = () => {
    // If we're in the WordPress editor
    if (typeof wp !== 'undefined' && wp.domReady) {
        wp.domReady(() => {
            // Wait a bit to make sure blocks are loaded
            setTimeout(() => {
                initializeGoogleFonts();
                scanForTypographyControls();
            }, 1000);
        });
    }
    
    // Also listen for editor content changes to catch newly added blocks
    if (typeof wp !== 'undefined' && wp.data && wp.data.subscribe) {
        wp.data.subscribe(() => {
            const editorSelect = wp.data.select('core/block-editor');
            
            // Only scan for fonts when user is not typing (to avoid constant rescanning)
            if (editorSelect && typeof editorSelect.isTyping === 'function' && !editorSelect.isTyping()) {
                // Debounce to avoid excessive calls
                clearTimeout(window.digi._fontUpdateTimeout);
                window.digi._fontUpdateTimeout = setTimeout(() => {
                    initializeGoogleFonts();
                }, 2000);
            }
        });
    }
};