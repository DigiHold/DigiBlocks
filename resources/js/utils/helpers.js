/**
 * Helper Functions
 * 
 * Utility functions for DigiBlocks
 */

/**
 * Convert color to RGB format
 * 
 * @param {string} color - Hex color
 * @return {object} RGB color object
 */
export const hexToRgb = (hex) => {
    if (!hex) {
        return { r: 0, g: 0, b: 0 };
    }
    
    // Remove hash if present
    hex = hex.replace(/^#/, '');
    
    // Convert shorthand (3 digits) to full form (6 digits)
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return { r, g, b };
};

/**
 * Convert RGB to Hex color
 * 
 * @param {number} r - Red (0-255)
 * @param {number} g - Green (0-255)
 * @param {number} b - Blue (0-255)
 * @return {string} Hex color
 */
export const rgbToHex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

/**
 * Add transparency to a color
 * 
 * @param {string} color - Hex color
 * @param {number} opacity - Opacity value (0-1)
 * @return {string} RGBA color
 */
export const hexToRgba = (color, opacity = 1) => {
    const { r, g, b } = hexToRgb(color);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Check if device is mobile
 * 
 * @return {boolean} True if mobile device
 */
export const isMobile = () => {
    return window.innerWidth <= 767;
};

/**
 * Check if device is tablet
 * 
 * @return {boolean} True if tablet device
 */
export const isTablet = () => {
    return window.innerWidth > 767 && window.innerWidth <= 991;
};

/**
 * Check if device is desktop
 * 
 * @return {boolean} True if desktop device
 */
export const isDesktop = () => {
    return window.innerWidth > 991;
};

/**
 * Get current device type
 * 
 * @return {string} Device type (mobile, tablet, desktop)
 */
export const getDeviceType = () => {
    if (isMobile()) {
        return 'mobile';
    } else if (isTablet()) {
        return 'tablet';
    }
    return 'desktop';
};

/**
 * Convert string to camelCase
 * 
 * @param {string} str - Input string
 * @return {string} camelCase string
 */
export const toCamelCase = (str) => {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
            return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
        })
        .replace(/\s+|-/g, '');
};

/**
 * Convert string to kebab-case
 * 
 * @param {string} str - Input string
 * @return {string} kebab-case string
 */
export const toKebabCase = (str) => {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
};

/**
 * Debounce function
 * 
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @return {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Throttle function
 * 
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit time in ms
 * @return {Function} Throttled function
 */
export const throttle = (func, limit = 300) => {
    let inThrottle;
    return function throttledFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
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