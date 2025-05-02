/**
 * Font Awesome Icon Control Component
 */

const { __ } = wp.i18n;
const { 
    Button, 
    Spinner, 
    TextControl, 
    Modal,
    Notice
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Create SVG element from icon data - uses the first available style
 */
const createSvgFromPath = (iconData) => {
    // Return placeholder SVG if no valid icon data
    if (!iconData || !iconData.svg || Object.keys(iconData.svg).length === 0) {
        // Return a simple placeholder SVG
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
        </svg>`;
    }

    try {
        // Get the first available style
        const firstStyle = Object.keys(iconData.svg)[0];
        const { width, height, path } = iconData.svg[firstStyle];
        
        if (!width || !height || !path) {
            throw new Error('Invalid SVG data');
        }
        
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="1em" height="1em">
            <path d="${path}"></path>
        </svg>`;
    } catch (error) {
        console.error('Error creating SVG from path:', error);
        // Return a simple placeholder SVG on error
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
        </svg>`;
    }
};

/**
 * Font Awesome Icon Control Component
 */
const FontAwesomeControl = ({
    label = __('Icon', 'digiblocks'),
    value = null,
    onChange,
}) => {
    // State for modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // State for icon data
    const [icons, setIcons] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    // Error state
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    // Keep processed icons
    const iconsCache = useRef({});
    
    // Paginated rendering for better performance
    const [visibleIcons, setVisibleIcons] = useState([]);
    const [page, setPage] = useState(1);
    const iconsPerPage = 100;
    
    /**
     * Process raw icon data from PHP
     */
    const processIconData = () => {
        if (Object.keys(iconsCache.current).length > 0) {
            return;
        }
        
        setIsLoading(true);
        setHasError(false);
        
        try {
            // Get icons from global variable passed from PHP
            if (!window.digiBlocksData) {
                throw new Error('Icon data not found. digiBlocksData is not defined.');
            }
            
            const rawIcons = window.digiBlocksData.fontAwesomeIcons;
            
            if (!rawIcons) {
                throw new Error('Icon data not found. fontAwesomeIcons is not defined.');
            }
            
            const categoryList = rawIcons.digiblocks_category_list || [];
            
            // Process icons (exclude the special category list key)
            const processedIcons = Object.entries(rawIcons)
                .filter(([key]) => key !== 'digiblocks_category_list')
                .map(([id, iconData]) => {
                    // Process categories - remove duplicates
                    const categories = Array.from(new Set(iconData.custom_categories || []));
                    
                    return {
                        id,
                        name: iconData.label || id,
                        categories,
                        // Create SVG using first available style
                        svg: createSvgFromPath(iconData),
                        // Store the raw data for future reference
                        rawData: iconData
                    };
                });
            
            // Process categories from the provided category list
            const processedCategories = [
                // Add "All Icons" category
                {
                    id: 'all',
                    name: __('All Icons', 'digiblocks'),
                    count: processedIcons.length
                }
            ];
            
            // Add categories from the category list
            if (categoryList && categoryList.length) {
                categoryList.forEach(category => {
                    const iconCount = processedIcons.filter(icon => 
                        icon.categories.includes(category.slug)
                    ).length;
                    
                    processedCategories.push({
                        id: category.slug,
                        name: category.title,
                        count: iconCount
                    });
                });
            }
            
            // Store icons by category for faster filtering
            const iconsByCategory = {};
            
            // All icons category
            iconsByCategory['all'] = processedIcons;
            
            // Populate icons for each category
            processedCategories.forEach(category => {
                if (category.id !== 'all') {
                    iconsByCategory[category.id] = processedIcons.filter(
                        icon => icon.categories.includes(category.id)
                    );
                }
            });
            
            setCategories(processedCategories);
            iconsCache.current = iconsByCategory;
            setIcons(iconsByCategory['all']);
            updateVisibleIcons(iconsByCategory['all'], 1);
        } catch (error) {
            console.error('Error processing Font Awesome icons:', error);
            setHasError(true);
            setErrorMessage(error.message || 'An error occurred while loading icons.');
            // Set empty default values so the UI doesn't break
            setCategories([{ id: 'all', name: 'All Icons', count: 0 }]);
            iconsCache.current = { 'all': [] };
            setIcons([]);
            setVisibleIcons([]);
        } finally {
            setIsLoading(false);
        }
    };
    
    /**
     * Update visible icons with pagination
     */
    const updateVisibleIcons = (filteredIcons, currentPage) => {
        const startIndex = (currentPage - 1) * iconsPerPage;
        const endIndex = startIndex + iconsPerPage;
        setVisibleIcons(filteredIcons.slice(startIndex, endIndex));
        setPage(currentPage);
    };
    
    /**
     * Filter icons by category and search term only
     */
    const filterIcons = () => {
        try {
            // Get base icons by selected category
            let filteredIcons = iconsCache.current[selectedCategory] || [];
            
            // Filter by search term if provided
            if (searchTerm.trim().length > 0) {
                const term = searchTerm.toLowerCase().trim();
                filteredIcons = filteredIcons.filter(icon => 
                    icon.name.toLowerCase().includes(term) || 
                    icon.id.toLowerCase().includes(term)
                );
            }
            
            setIcons(filteredIcons);
            updateVisibleIcons(filteredIcons, 1);
        } catch (error) {
            console.error('Error filtering icons:', error);
            setHasError(true);
            setErrorMessage('Failed to filter icons.');
            setIcons([]);
            setVisibleIcons([]);
        }
    };
    
    /**
     * Load more icons when scrolling
     */
    const loadMoreIcons = () => {
        if (page * iconsPerPage < icons.length) {
            updateVisibleIcons(icons, page + 1);
        }
    };
    
    /**
     * Select an icon and close the modal
     */
    const selectIcon = (icon) => {
        // Prepare the icon data for the onChange handler
        const selectedIcon = {
            id: icon.id,
            name: icon.name,
            svg: icon.svg,
            categories: icon.categories
        };
        
        onChange(selectedIcon);
        setIsModalOpen(false);
    };
    
    /**
     * Remove the selected icon
     */
    const removeIcon = (e) => {
        e.stopPropagation();
        onChange(null);
    };
    
    /**
     * Process icons when modal opens for the first time
     */
    useEffect(() => {
        if (isModalOpen && categories.length === 0) {
            processIconData();
        }
    }, [isModalOpen]);
    
    /**
     * Filter icons when category or search term changes
     */
    useEffect(() => {
        if (Object.keys(iconsCache.current).length > 0) {
            filterIcons();
        }
    }, [selectedCategory, searchTerm]);
    
    /**
     * Render icon selector UI
     */
    return (
        <div className="digiblocks-font-awesome-control">
            <div className="digiblocks-custom-ip">
                <span className="digiblocks-control-label">{label}</span>
                <div 
                    className="digiblocks-ip-placeholder-wrap"
                    onClick={() => setIsModalOpen(true)}
                >
                    {value && (
                        <div className="digiblocks-ip-remove-icon" onClick={removeIcon}>
                            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path>
                            </svg>
                        </div>
                    )}
                    
                    <div className="digiblocks-ip-selected-icon">
                        <div className="digiblocks-ip-selected-icon-overlay"></div>
                        <div className="digiblocks-ip-selected-icon-value">
                            {value ? (
                                <span dangerouslySetInnerHTML={{ __html: value.svg }} />
                            ) : (
                                <div className="digiblocks-ip-no-icon">
                                    <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ opacity: 0.4 }}>
                                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="digiblocks-ip-actions">
                        <span>{value ? __('Change Icon', 'digiblocks') : __('Click to choose your icon', 'digiblocks')}</span>
                    </div>
                </div>
            </div>
            
            {isModalOpen && (
                <Modal
                    className="digiblocks-ip-modal-wrapper"
                    onRequestClose={() => setIsModalOpen(false)}
                    shouldCloseOnClickOutside={true}
                    overlayClassName="digiblocks-ip-modal-wrapper-overlay"
                >
                    <div className="digiblocks-ip-header">
                        <h2>{__('Select Icon', 'digiblocks')}</h2>
                        <div className="digiblocks-ip-search-container">
                            <div className="digiblocks-ip-search-bar">
                                <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                </svg>
                                <TextControl
                                    placeholder={__('Search Icons', 'digiblocks')}
                                    value={searchTerm}
                                    onChange={setSearchTerm}
                                />
                                {searchTerm && (
                                    <span 
                                        onClick={() => setSearchTerm('')}
                                        title={__('Clear Search', 'digiblocks')}
                                    >
                                        ×
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    {hasError && (
                        <Notice status="error" isDismissible={false}>
                            {errorMessage || __('An error occurred while loading icons.', 'digiblocks')}
                        </Notice>
                    )}
                    
                    <div className="digiblocks-ip-lr-container">
                        <div className="digiblocks-ip-left">
                            <div className="digiblocks-ip-categories-list">
                                {categories.map((category) => (
                                    <div
                                        key={category.id}
                                        className={`${selectedCategory === category.id ? 'selected' : ''}`}
                                        onClick={() => setSelectedCategory(category.id)}
                                    >
                                        {category.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="digiblocks-ip-right">
                            <div className="digiblocks-ip-modal-container">
                                {isLoading ? (
                                    <div className="digiblocks-ip-loading">
                                        <Spinner />
                                        <p>{__('Loading icons...', 'digiblocks')}</p>
                                    </div>
                                ) : visibleIcons.length === 0 ? (
                                    <div className="digiblocks-ip-icons icon-not-found">
                                        <p>{__('No icons found. Try a different search term or category.', 'digiblocks')}</p>
                                    </div>
                                ) : (
                                    <div className="digiblocks-ip-icons">
                                        {visibleIcons.map((icon) => (
                                            <div
                                                key={icon.id}
                                                className={`digiblocks-icon-item ${value && value.id === icon.id ? 'selected' : ''}`}
                                                onClick={() => selectIcon(icon)}
                                                title={icon.name}
                                            >
                                                <span dangerouslySetInnerHTML={{ __html: icon.svg }} />
                                                <span>{icon.name}</span>
                                            </div>
                                        ))}
                                        
                                        {icons.length > visibleIcons.length && (
                                            <Button
                                                isPrimary
                                                className="digiblocks-ip-load-more"
                                                onClick={loadMoreIcons}
                                            >
                                                {__('Load More', 'digiblocks')}
                                            </Button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <div className="digiblocks-ip-footer">
                        <Button
                            isPrimary
                            onClick={() => setIsModalOpen(false)}
                        >
                            {__('Close', 'digiblocks')}
                        </Button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default FontAwesomeControl;