/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Login Link block
 * Returns null for server-side rendering
 */
const LoginLinkSave = () => {
    // Since we're using server-side rendering,
    // we don't need to render anything here
    return null;
};

export default LoginLinkSave;