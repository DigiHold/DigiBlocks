/**
 * DigiBlocks Global Utilities
 *
 * This file initializes the global digi object with utility functions and components
 */

// Define the digi object immediately, before any imports
window.digi = window.digi || {};
window.digi.utils = window.digi.utils || {};
window.digi.components = window.digi.components || {};
window.digi.icons = window.digi.icons || {};

// Define device icons BEFORE imports to ensure they're available immediately
window.digi.icons.deviceIcons = {
    desktop: (
        <svg width="8" height="7" viewBox="0 0 8 7" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z" />
        </svg>
    ),
    tablet: (
        <svg width="6" height="8" viewBox="0 0 6 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0H1C0.447715 0 0 0.447715 0 1V7C0 7.55228 0.447715 8 1 8H5C5.55228 8 6 7.55228 6 7V1C6 0.447715 5.55228 0 5 0ZM5 7H1V1H5V7Z" />
        </svg>
    ),
    mobile: (
        <svg width="4" height="8" viewBox="0 0 4 8" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33333 0H0.666667C0.297995 0 0 0.298 0 0.666667V7.33333C0 7.702 0.297995 8 0.666667 8H3.33333C3.70201 8 4 7.702 4 7.33333V0.666667C4 0.298 3.70201 0 3.33333 0ZM2 7.33333C1.63201 7.33333 1.33333 7.03467 1.33333 6.66667C1.33333 6.29867 1.63201 6 2 6C2.36799 6 2.66667 6.29867 2.66667 6.66667C2.66667 7.03467 2.36799 7.33333 2 7.33333ZM3.33333 5.33333H0.666667V1.33333H3.33333V5.33333Z" />
        </svg>
    )
};

// UI State manager for preserving inspector panel states across device changes
window.digi.uiState = {
    // Current active tab and panel states
    activeTab: 'options', // Default tab
    activePanels: {},
    blockTabs: {}, // Store tab state per block ID
    
    // Set the active inspector tab
    setActiveTab(tab, blockId = null) {
        if (blockId) {
            this.blockTabs[blockId] = tab;
        } else {
            this.activeTab = tab;
        }
    },
    
    // Get the active tab for a block
    getActiveTab(blockId = null) {
        if (blockId && this.blockTabs[blockId]) {
            return this.blockTabs[blockId];
        }
        return this.activeTab;
    },
    
    // Set a panel's open state
    setPanelState(tabName, panelName, isOpen) {
        if (!this.activePanels[tabName]) {
            this.activePanels[tabName] = {};
        }
        this.activePanels[tabName][panelName] = isOpen;
    },
    
    // Get a panel's open state
    getPanelState(tabName, panelName) {
        return this.activePanels[tabName]?.[panelName];
    }
};

// Replace responsive state with an adapter to Gutenberg's system
window.digi.responsiveState = {
    // Property to get current device - will use the latest Gutenberg API
    get activeDevice() {
        try {
            const wp = window.wp;
            // Try the newer non-experimental API first
            if (wp?.data?.select('core/editor')?.getDeviceType) {
                const device = wp.data.select('core/editor').getDeviceType();
                return this._convertFromGutenberg(device);
            }
            // Try experimental edit-post API
            if (wp?.data?.select('core/edit-post')?.__experimentalGetPreviewDeviceType) {
                const device = wp.data.select('core/edit-post').__experimentalGetPreviewDeviceType();
                return this._convertFromGutenberg(device);
            }
            // Try experimental edit-site API as fallback
            if (wp?.data?.select('core/edit-site')?.__experimentalGetPreviewDeviceType) {
                const device = wp.data.select('core/edit-site').__experimentalGetPreviewDeviceType();
                return this._convertFromGutenberg(device);
            }
        } catch (e) {
            console.warn('DigiBlocks: Could not get Gutenberg device type', e);
        }
        return 'desktop'; // Default fallback
    },
    
    // Convert from Gutenberg device names to our device names
    _convertFromGutenberg(device) {
        if (device === 'Desktop') return 'desktop';
        if (device === 'Tablet') return 'tablet';
        if (device === 'Mobile') return 'mobile';
        return 'desktop'; // Fallback
    },
    
    // Convert to Gutenberg device names from our device names
    _convertToGutenberg(device) {
        if (device === 'desktop') return 'Desktop';
        if (device === 'tablet') return 'Tablet';
        if (device === 'mobile') return 'Mobile';
        return 'Desktop'; // Fallback
    },
    
    // Toggle to next device in sequence
    toggleDevice() {
        try {
            const wp = window.wp;
            const currentDevice = this.activeDevice;
            const nextDevice = 
                currentDevice === 'desktop' ? 'Tablet' : 
                currentDevice === 'tablet' ? 'Mobile' : 'Desktop';
            
            // Try the newer non-experimental API first
            if (wp?.data?.dispatch('core/editor')?.setDeviceType) {
                wp.data.dispatch('core/editor').setDeviceType(nextDevice);
                return;
            }
            
            // Try experimental edit-post API
            if (wp?.data?.dispatch('core/edit-post')?.__experimentalSetPreviewDeviceType) {
                wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType(nextDevice);
                return;
            }
            
            // Try experimental edit-site API as fallback
            if (wp?.data?.dispatch('core/edit-site')?.__experimentalSetPreviewDeviceType) {
                wp.data.dispatch('core/edit-site').__experimentalSetPreviewDeviceType(nextDevice);
                return;
            }
        } catch (e) {
            console.warn('DigiBlocks: Could not set Gutenberg device type', e);
        }
    },
    
    listeners: [],
    
    // Subscribe to Gutenberg's device changes
    subscribe(callback) {
        const wp = window.wp;
        if (!wp?.data?.subscribe) return () => {};
        
        let lastDevice = this.activeDevice;
        
        // Subscribe to data store changes
        const unsubscribe = wp.data.subscribe(() => {
            const currentDevice = this.activeDevice;
            if (currentDevice !== lastDevice) {
                lastDevice = currentDevice;
                
                // Update body attribute for CSS
                document.body.setAttribute('data-digiblocks-device', currentDevice);
                
                // Call the callback
                callback(currentDevice);
                
                // After a small delay, try to restore UI state
                setTimeout(() => {
                    try {
                        // Get the selected block's client ID
                        const selectedBlockClientId = wp.data.select('core/block-editor')?.getSelectedBlockClientId();
                        if (!selectedBlockClientId) return;
                        
                        // Find the active tab for this block
                        const activeTab = window.digi.uiState.getActiveTab(selectedBlockClientId);
                        if (!activeTab) return;
                        
                        // Find and click the tab button
                        const tabButtons = document.querySelectorAll('.digiblocks-tab-button');
                        tabButtons.forEach(button => {
                            if (button.getAttribute('data-tab') === activeTab) {
                                button.click();
                            }
                        });
                    } catch (e) {
                        // Silent fail
                    }
                }, 100);
            }
        });
        
        // Add to listeners array for tracking
        this.listeners.push({ callback, unsubscribe });
        
        // Return the unsubscribe function
        return () => {
            this.listeners = this.listeners.filter(listener => listener.unsubscribe !== unsubscribe);
            unsubscribe();
        };
    },
    
    // For backward compatibility
    setActiveDevice(device) {
        try {
            const wp = window.wp;
            const gutenbergDevice = this._convertToGutenberg(device);
            
            // Try the newer non-experimental API first
            if (wp?.data?.dispatch('core/editor')?.setDeviceType) {
                wp.data.dispatch('core/editor').setDeviceType(gutenbergDevice);
                return;
            }
            
            // Try experimental edit-post API
            if (wp?.data?.dispatch('core/edit-post')?.__experimentalSetPreviewDeviceType) {
                wp.data.dispatch('core/edit-post').__experimentalSetPreviewDeviceType(gutenbergDevice);
                return;
            }
            
            // Try experimental edit-site API as fallback
            if (wp?.data?.dispatch('core/edit-site')?.__experimentalSetPreviewDeviceType) {
                wp.data.dispatch('core/edit-site').__experimentalSetPreviewDeviceType(gutenbergDevice);
                return;
            }
        } catch (e) {
            console.warn('DigiBlocks: Could not set Gutenberg device type', e);
        }
    },
    
    // Notify all listeners of device change (for backward compatibility)
    notifyListeners() {
        const device = this.activeDevice;
        this.listeners.forEach(listener => listener.callback(device));
    },
    
    // Get next device in sequence (for aria labels)
    getNextDevice() {
        const current = this.activeDevice;
        if (current === 'desktop') return 'tablet';
        if (current === 'tablet') return 'mobile';
        return 'desktop';
    }
};

// Helper to create device toggle button 
window.digi.createDeviceToggleButton = (Button, className = '') => {
    const { __ } = wp.i18n;
    return (
        <Button 
            className={`digiblocks-responsive-common-button ${className}`}
            onClick={() => window.digi.responsiveState.toggleDevice()}
            aria-label={__(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")}
        >
            {window.digi.icons.deviceIcons[window.digi.responsiveState.activeDevice]}
        </Button>
    );
};

// Create global tracking object for loaded fonts
window.digi.loadedFonts = window.digi.loadedFonts || {};

// Import utilities
import animations from './utils/animations';
import getGoogleFonts from './utils/google-fonts';
import { 
    useBlockId,
    getDimensionCSS,
    animationPreview,
    prepareFontForUrl,
    loadGoogleFont,
    initializeGoogleFonts,
    scanForTypographyControls,
    initializeGoogleFontsOnLoad
} from './utils/helpers';

// Import components
import ResponsiveControl from './components/responsive-control';
import DimensionControl from './components/dimension-control';
import TypographyControl from './components/typography-control';
import ResponsiveRangeControl from './components/range-control';
import ResponsiveButtonGroup from './components/button-group-control';
import BoxShadowControl from './components/box-shadow-control';
import CustomTabPanel from './components/tab-panel';
import FontAwesomeControl from './components/font-awesome-control';

// Tab Icons for Inspector Controls
const tabIcons = {
    optionsIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path d="M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.2-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.2-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z"/></svg>',
    styleIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path d="M480 258.3c-.1 14.1-13.8 29.7-38.1 29.7L344 288c-44.2 0-80 35.8-80 80c0 5.6 .6 11.2 1.7 16.6c2.9 13.8 8.9 27.3 13.2 37c.8 1.7 1.5 3.3 2.1 4.8c5 11.6 6.9 18.2 6.9 23.5c0 19.2-12.3 29.6-22.7 30c-3.1 .1-6.2 .2-9.3 .2C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224c0 .8 0 1.6 0 2.3zm32 .3c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48l97.9 0c36.5 0 69.7-24.8 70.1-61.3zM152 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm8-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>',
    advancedIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM184 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z"/></svg>',
    fieldIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24"><path d="M582.8 45.5l11.9 11.9c12.5 12.5 12.5 32.8 0 45.2L568 129.4l-57-57 26.4-26.8c12.5-12.6 32.8-12.7 45.4-.1zM346.2 239.2L488.5 95.1 545.4 152 402.3 295.2c-4.4 4.4-10 7.4-16.1 8.7l-61.5 12.9 12.9-61.7c1.3-6 4.2-11.5 8.6-15.9zM514.7 23.1L323.4 216.7c-8.6 8.7-14.6 19.8-17.1 31.8l-18 85.7c-1.1 5.3 .5 10.8 4.3 14.6s9.3 5.5 14.6 4.3l85.5-17.9c12.2-2.6 23.3-8.6 32.1-17.4L617.4 125.3c25-25 25-65.5 0-90.5L605.5 22.8c-25.1-25.1-65.8-25-90.8 .3zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 176c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l240 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 128zm64 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>',
    backgroundIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path d="M64 64C46.3 64 32 78.3 32 96l0 233.4 67.7-67.7c15.6-15.6 40.9-15.6 56.6 0L224 329.4 355.7 197.7c15.6-15.6 40.9-15.6 56.6 0L480 265.4 480 96c0-17.7-14.3-32-32-32L64 64zM32 374.6L32 416c0 17.7 14.3 32 32 32l41.4 0 96-96-67.7-67.7c-3.1-3.1-8.2-3.1-11.3 0L32 374.6zM389.7 220.3c-3.1-3.1-8.2-3.1-11.3 0L150.6 448 448 448c17.7 0 32-14.3 32-32l0-105.4-90.3-90.3zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-64 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>',
};

// Assign the utilities to the digi.utils object
window.digi.utils.animations = animations;
window.digi.utils.useBlockId = useBlockId;
window.digi.utils.getDimensionCSS = getDimensionCSS;
window.digi.utils.animationPreview = animationPreview;
window.digi.utils.prepareFontForUrl = prepareFontForUrl;
window.digi.utils.loadGoogleFont = loadGoogleFont;
window.digi.utils.initializeGoogleFonts = initializeGoogleFonts;
window.digi.utils.scanForTypographyControls = scanForTypographyControls;
window.digi.utils.initializeGoogleFontsOnLoad = initializeGoogleFontsOnLoad;

// Google fonts
window.digi.getGoogleFonts = getGoogleFonts;

// Assign tab icons to the digi.icons object
window.digi.icons.tabIcons = tabIcons;

// Track panel states globally across the editor
window.digi.panelStates = {};

/**
 * Custom TabPanelBody that maintains open/closed state across tab switches
 */
window.digi.components.TabPanelBody = ({ tab, name, title, children, initialOpen = false }) => {
    const { PanelBody } = wp.components;
    const { useState, useEffect } = wp.element;

    // Create a unique key for this panel
    const stateKey = `${tab}-${name}`;
    
    // Check if we already have a stored state for this panel
    if (window.digi.panelStates[stateKey] === undefined) {
        window.digi.panelStates[stateKey] = initialOpen;
    }
    
    // Check for UI state first, then fall back to panel states
    const getSavedState = () => {
        // Try UI state first
        const uiState = window.digi.uiState?.getPanelState(tab, name);
        if (uiState !== undefined) {
            return uiState;
        }
        
        // Fall back to panel state
        return window.digi.panelStates[stateKey];
    };
    
    // Track open state locally but initialize from the global store
    const [isOpen, setIsOpen] = useState(getSavedState());
    
    // When open state changes, update the global store
    const handleToggle = (open) => {
        setIsOpen(open);
        window.digi.panelStates[stateKey] = open;
        
        // Also update UI state if available
        if (window.digi.uiState) {
            window.digi.uiState.setPanelState(tab, name, open);
        }
    };
    
    // Update local state if global state changes
    useEffect(() => {
        const savedState = getSavedState();
        if (savedState !== isOpen) {
            setIsOpen(savedState);
        }
    }, [window.digi.panelStates[stateKey]]);
    
    return (
        <PanelBody
            title={title}
            initialOpen={isOpen}
            opened={isOpen}
            onToggle={handleToggle}
        >
            {children}
        </PanelBody>
    );
};

// Assign components to the digi.components object
window.digi.components.ResponsiveControl = ResponsiveControl;
window.digi.components.DimensionControl = DimensionControl;
window.digi.components.TypographyControl = TypographyControl;
window.digi.components.ResponsiveRangeControl = ResponsiveRangeControl;
window.digi.components.ResponsiveButtonGroup = ResponsiveButtonGroup;
window.digi.components.BoxShadowControl = BoxShadowControl;
window.digi.components.CustomTabPanel = CustomTabPanel;
window.digi.components.FontAwesomeControl = FontAwesomeControl;

// Initialize fonts when WordPress is fully loaded
window.digi.utils.initializeGoogleFontsOnLoad();