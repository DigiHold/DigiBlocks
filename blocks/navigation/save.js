/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Navigation block
 */
const NavigationSave = () => {
    // Since we're using server-side rendering,
    // we don't need to render anything here
    return null;
};

export default NavigationSave;