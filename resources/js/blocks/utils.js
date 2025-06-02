/**
 * Shared utility functions for DigiBlocks
 * Path: digiblocks/resources/js/blocks/utils.js
 */

/**
 * Checks if a block is active
 * 
 * @param {string} blockName The name of the block to check
 * @return {boolean} Whether the block is active
 */
export const getBlockActiveStatus = (blockName) => {
    // Check if block is in the inactive list
    if (typeof window.digiBlocksData !== 'undefined' && 
        window.digiBlocksData.inactiveBlocks && 
        typeof window.digiBlocksData.inactiveBlocks[blockName] !== 'undefined' && 
        window.digiBlocksData.inactiveBlocks[blockName] === true) {
        return false;
    }
    
    // By default, all blocks are active
    return true;
};

/**
 * Check if DigiCommerce is active
 */
export const isDigiActive = () => {
    return typeof window.digiBlocksData !== 'undefined' && window.digiBlocksData.isDigiActive;
};

/**
 * Check if DigiCommerce Pro is active
 */
export const isDigiProActive = () => {
    return typeof window.digiBlocksData !== 'undefined' && window.digiBlocksData.isDigiProActive;
};

/**
 * Check if WooCommerce is active
 */
export const isWooActive = () => {
    // Check if the woocommerce global object exists
    return typeof window.wc !== 'undefined' || 
           (typeof window.digiBlocksData !== 'undefined' && window.digiBlocksData.isWooActive);
};