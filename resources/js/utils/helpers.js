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
export const useBlockId = (id, clientId, setAttributes) => {
    const { useEffect } = wp.element;
    const { subscribe } = wp.data;
    const { getBlock } = wp.data.select('core/block-editor');
    const { updateBlockAttributes } = wp.data.dispatch('core/block-editor');
    
    // Generate a random ID with your preferred format
    const generateUniqueId = () => {
        return 'digi-' + Math.random().toString(36).substring(2, 11);
    };
    
    // Initialize ID if not set
    useEffect(() => {
        if (!id || id === '') {
            const newId = generateUniqueId();
            setAttributes({ id: newId });
            
            // Add ID to global registry to track used IDs
            if (!window.digiBlocksUsedIds) {
                window.digiBlocksUsedIds = new Set();
            }
            window.digiBlocksUsedIds.add(newId);
        }
    }, []);
    
    // Set up a global duplicate detection system if not already present
    useEffect(() => {
        // Only set up once per editor instance
        if (!window.digiBlocksDuplicationHandler) {
            // Global registry of used IDs
            if (!window.digiBlocksUsedIds) {
                window.digiBlocksUsedIds = new Set();
            }
            
            // Global tracking of last known blocks
            if (!window.digiBlocksLastKnownBlocks) {
                window.digiBlocksLastKnownBlocks = new Set();
            }
            
            // Function to process a block and its inner blocks recursively
            const processBlock = (block) => {
                // Skip if already processed
                if (window.digiBlocksLastKnownBlocks.has(block.clientId)) {
                    return;
                }
                
                // Check if this block has an ID attribute that's already used elsewhere
                if (block.attributes && block.attributes.id) {
                    const blockId = block.attributes.id;
                    
                    // If ID is already in the registry but for a different block,
                    // this is likely a duplicate - force a new ID
                    if (window.digiBlocksUsedIds.has(blockId) && 
                        !window.digiBlocksLastKnownBlocks.has(block.clientId)) {
                        
                        // Generate new unique ID
                        const newId = generateUniqueId();
                        
                        // Update the block with new ID
                        updateBlockAttributes(block.clientId, { id: newId });
                        
                        // Add new ID to registry
                        window.digiBlocksUsedIds.add(newId);
                    } else {
                        // Register this ID as used
                        window.digiBlocksUsedIds.add(blockId);
                    }
                }
                
                // Add to known blocks
                window.digiBlocksLastKnownBlocks.add(block.clientId);
                
                // Process inner blocks recursively
                if (block.innerBlocks && block.innerBlocks.length > 0) {
                    block.innerBlocks.forEach(innerBlock => {
                        processBlock(innerBlock);
                    });
                }
            };
            
            // Subscribe to block editor changes
            const unsubscribe = subscribe(() => {
                // Get current blocks from editor
                const currentBlocks = wp.data.select('core/block-editor').getBlocks();
                
                // Process all blocks
                currentBlocks.forEach(block => {
                    processBlock(block);
                });
            });
            
            // Store the unsubscribe function
            window.digiBlocksDuplicationHandler = unsubscribe;
        }
        
        // Clean up subscription when component unmounts
        return () => {
            // Only clean up when the last block is being removed
            const remainingBlocks = wp.data.select('core/block-editor').getBlockCount();
            if (remainingBlocks <= 1) {
                if (window.digiBlocksDuplicationHandler) {
                    window.digiBlocksDuplicationHandler();
                    window.digiBlocksDuplicationHandler = null;
                    window.digiBlocksUsedIds = new Set();
                    window.digiBlocksLastKnownBlocks = new Set();
                }
            }
        };
    }, []);
    
    // Add direct duplication listener for this specific block
    useEffect(() => {
        if (id) {
            const checkAndFixDuplication = () => {
                // Get the actual block from the editor
                const block = getBlock(clientId);
                
                if (block && block.attributes && block.attributes.id === id) {
                    // Verify this ID isn't duplicated elsewhere
                    const allBlocks = wp.data.select('core/block-editor').getBlocks();
                    
                    // Flatten all blocks including nested ones
                    const flattenBlocks = (blocks) => {
                        let result = [];
                        blocks.forEach(block => {
                            result.push(block);
                            if (block.innerBlocks && block.innerBlocks.length) {
                                result = result.concat(flattenBlocks(block.innerBlocks));
                            }
                        });
                        return result;
                    };
                    
                    const flatBlocks = flattenBlocks(allBlocks);
                    
                    // Check for duplicates
                    const duplicates = flatBlocks.filter(b => 
                        b.attributes && 
                        b.attributes.id === id && 
                        b.clientId !== clientId
                    );
                    
                    if (duplicates.length > 0) {
                        // Found duplicates! Generate a new ID
                        const newId = generateUniqueId();
                        setAttributes({ id: newId });
                        
                        // Register the new ID
                        if (window.digiBlocksUsedIds) {
                            window.digiBlocksUsedIds.add(newId);
                        }
                    }
                }
            };
            
            // Run the check immediately and then on a short delay
            checkAndFixDuplication();
            
            // Also set a timeout to catch any delayed duplications
            const timeoutId = setTimeout(checkAndFixDuplication, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [id, clientId]);
    
    return id;
};

/**
 * Generate CSS for dimension properties with responsive fallbacks
 * 
 * @param {Object} dimensions Responsive dimensions object (desktop, tablet, mobile)
 * @param {string} property CSS property name (padding, margin, etc.)
 * @param {string} device Current device (desktop, tablet, mobile)
 * @param {boolean} important Whether to add !important flag
 * @return {string} CSS with property and values or empty string
 */
export const getDimensionCSS = (dimensions, property, device = 'desktop', important = false) => {
    // Check if dimensions object exists
    if (!dimensions) {
        return '';
    }
    
    // Helper to check if dimension object has any values
    const hasDimensionValues = (dim) => {
        return dim && (
            (dim.top !== undefined && dim.top !== '') ||
            (dim.right !== undefined && dim.right !== '') ||
            (dim.bottom !== undefined && dim.bottom !== '') ||
            (dim.left !== undefined && dim.left !== '')
        );
    };
    
    // Get dimension values with fallback support
    let values;
    
    // First try the current device
    if (dimensions[device] && hasDimensionValues(dimensions[device])) {
        values = dimensions[device];
    } 
    // Fallback from tablet to desktop
    else if (device === 'tablet' && dimensions.desktop && hasDimensionValues(dimensions.desktop)) {
        values = dimensions.desktop;
    } 
    // Fallback from mobile to tablet or desktop
    else if (device === 'mobile') {
        if (dimensions.tablet && hasDimensionValues(dimensions.tablet)) {
            values = dimensions.tablet;
        } else if (dimensions.desktop && hasDimensionValues(dimensions.desktop)) {
            values = dimensions.desktop;
        }
    }
    
    // If no values found, return empty string
    if (!values) {
        return '';
    }
    
    // Get unit or default to px
    const unit = values.unit || 'px';
    
    // Normalize values (empty string becomes 0)
    const top = values.top !== '' ? values.top : '0';
    const right = values.right !== '' ? values.right : '0';
    const bottom = values.bottom !== '' ? values.bottom : '0';
    const left = values.left !== '' ? values.left : '0';
    
    // Add !important flag if needed
    const importantFlag = important ? ' !important' : '';
    
    // Return formatted CSS
    return `${property}: ${top}${unit} ${right}${unit} ${bottom}${unit} ${left}${unit}${importantFlag};`;
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