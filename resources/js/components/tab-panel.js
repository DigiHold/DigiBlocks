/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;

/**
 * DigiBlocks Custom Tab Panel Component
 * 
 * Renders a custom tab panel with icon and label tabs for inspector controls.
 * 
 * @param {Object} props Component properties
 * @param {Array} props.tabs Array of tab objects with name, title, and icon properties
 * @param {string} props.activeTab Currently active tab name
 * @param {Function} props.onSelect Function to call when a tab is selected
 * @param {React.ReactNode} props.children The content to render inside the tab panel
 * @returns {JSX.Element} The rendered component
 */
const CustomTabPanel = ({ 
    tabs, 
    activeTab, 
    onSelect,
	customClass,
    children
}) => {
    return (
        <div className={`digiblocks-tab-panel ${customClass || ''}`}>
            <div className="digiblocks-tabs-wrapper">
                {tabs.map(tab => (
                    <button
                        key={tab.name}
                        className={`digiblocks-tab-button ${activeTab === tab.name ? 'is-active' : ''}`}
                        onClick={() => onSelect(tab.name)}
                        aria-selected={activeTab === tab.name}
                        role="tab"
                    >
                        <span 
                            className="digiblocks-tab-icon"
                            dangerouslySetInnerHTML={{ __html: tab.icon }}
                        />
                        <span className="digiblocks-tab-title">{tab.title}</span>
                    </button>
                ))}
            </div>
            <div className="digiblocks-tab-content">
                {children}
            </div>
        </div>
    );
};

export default CustomTabPanel;