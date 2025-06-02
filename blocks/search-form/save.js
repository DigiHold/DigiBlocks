/**
 * WordPress dependencies
 */
const { useBlockProps } = wp.blockEditor;

/**
 * Save function for the Search Form block
 */
const SearchFormSave = ({ attributes }) => {
    const {
        id,
        anchor,
        customClasses,
        placeholder,
        buttonText,
        searchType,
        enableAjax,
        postTypes,
        animation,
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-search-form-block",
        id,
        animation !== "none" ? `animate-${animation}` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Get the block props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
    });

    // Build form action URL based on search type
    const homeUrl = window.digiBlocksData?.homeUrl || window.digiBlocksSearchData?.home_url || window.location.origin;
    let actionUrl = homeUrl;
    if (searchType === 'post') {
        actionUrl += '/?post_type=post';
    } else if (searchType === 'page') {
        actionUrl += '/?post_type=page';
    } else if (searchType === 'custom' && postTypes.length > 0) {
        actionUrl += '/?post_type=' + postTypes.join(',');
    }

    // Available post types from WordPress
    const availablePostTypes = [
        { label: 'All Types', value: 'all' },
        ...(window.digiBlocksData?.postTypes || [
            { label: 'Posts', value: 'post' },
            { label: 'Pages', value: 'page' },
        ])
    ];

    return (
        <div {...blockProps}>
            <form 
                className="digiblocks-search-form" 
                method="get" 
                action={actionUrl}
                data-ajax={enableAjax ? '1' : '0'}
                data-search-type={searchType}
                data-post-types={searchType === 'custom' ? postTypes.join(',') : ''}
            >
                
                <div className="digiblocks-search-input-wrapper">
                    <input
                        type="search"
                        className="digiblocks-search-input"
                        name="s"
                        placeholder={placeholder || 'Search...'}
                        aria-label="Search"
                        required
                    />
                    
                    {enableAjax && (
                        <div className="digiblocks-search-results" aria-live="polite">
                            {/* AJAX results will be populated here */}
                        </div>
                    )}
                </div>
                
                <button type="submit" className="digiblocks-search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                    {buttonText && (
						<span className="digiblocks-search-button-text">
							{buttonText}
						</span>
					)}
                </button>
            </form>
        </div>
    );
};

export default SearchFormSave;