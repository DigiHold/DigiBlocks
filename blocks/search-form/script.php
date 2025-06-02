<?php
/**
 * Search Form Block JavaScript
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id = isset( $attrs['id'] ) ? $attrs['id'] : '';
$enableAjax = isset( $attrs['enableAjax'] ) ? $attrs['enableAjax'] : false;
$searchType = isset( $attrs['searchType'] ) ? $attrs['searchType'] : 'all';
$postTypes = isset( $attrs['postTypes'] ) ? $attrs['postTypes'] : array();

// Only generate JS if we have a block ID and AJAX is enabled
if ( empty( $id ) || ! $enableAjax ) {
    $digiblocks_js_output = '';
    return;
}

// JavaScript Output
ob_start();
?>
/* Search Form Block - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const searchBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
    
    if (!searchBlock) return;
    
    // Check if we have the localized data
    if (typeof digiBlocksData === 'undefined' || !digiBlocksData.search) {
        console.error('DigiBlocks Search: Missing AJAX data');
        return;
    }
    
    const searchForm = searchBlock.querySelector('.digiblocks-search-form');
    const searchInput = searchBlock.querySelector('.digiblocks-search-input');
    const postTypeSelector = searchBlock.querySelector('.digiblocks-post-type-selector');
    const resultsContainer = searchBlock.querySelector('.digiblocks-search-results');
    
    if (!searchForm || !searchInput) return;
    
    // Configuration
    const config = {
        searchType: '<?php echo esc_js( $searchType ); ?>',
        customPostTypes: <?php echo wp_json_encode( $postTypes ); ?>,
        strings: {
            noResults: '<?php echo esc_js( __( 'No results found.', 'digiblocks' ) ); ?>',
            searchFailed: '<?php echo esc_js( __( 'Search failed. Please try again.', 'digiblocks' ) ); ?>',
            loading: '<?php echo esc_js( __( 'Searching...', 'digiblocks' ) ); ?>'
        }
    };
    
    let searchTimeout;
    let currentRequest;
    
    // Handle form submission
    searchForm.addEventListener('submit', function(e) {
        if (searchForm.dataset.ajax === '1') {
            e.preventDefault();
            performSearch();
        }
    });
    
    // Handle live search on input
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        
        const query = e.target.value.trim();
        
        if (query.length < 2) {
            hideResults();
            return;
        }
        
        // Debounce search
        searchTimeout = setTimeout(performSearch, 300);
    });
    
    // Handle post type change
    if (postTypeSelector) {
        postTypeSelector.addEventListener('change', function() {
            if (searchInput.value.trim().length >= 2) {
                performSearch();
            }
        });
    }
    
    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchBlock.contains(e.target)) {
            hideResults();
        }
    });
    
    // Handle keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
        if (!resultsContainer || !resultsContainer.classList.contains('show')) {
            return;
        }
        
        const items = resultsContainer.querySelectorAll('.digiblocks-search-result-item');
        const activeItem = resultsContainer.querySelector('.digiblocks-search-result-item.active');
        let currentIndex = -1;
        
        if (activeItem) {
            currentIndex = Array.from(items).indexOf(activeItem);
        }
        
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
                setActiveItem(items, currentIndex);
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
                setActiveItem(items, currentIndex);
                break;
                
            case 'Enter':
                if (activeItem) {
                    e.preventDefault();
                    const link = activeItem.querySelector('a') || activeItem;
                    if (link.href) {
                        window.location.href = link.href;
                    } else if (link.dataset.url) {
                        window.location.href = link.dataset.url;
                    }
                }
                break;
                
            case 'Escape':
                hideResults();
                searchInput.blur();
                break;
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim();
        
        if (query.length < 2) {
            hideResults();
            return;
        }
        
        // Cancel previous request
        if (currentRequest) {
            currentRequest.abort();
        }
        
        showLoading();
        
        // Get selected post type
        let postType = config.searchType;
        if (postTypeSelector && postTypeSelector.value) {
            postType = postTypeSelector.value;
        }
        
        // Prepare search data
        const formData = new FormData();
        formData.append('action', 'digiblocks_ajax_search');
        formData.append('nonce', digiBlocksData.search.search_nonce);
        formData.append('query', query);
        formData.append('post_type', postType);
        
        // Add custom post types if needed
        if (config.searchType === 'custom' && config.customPostTypes.length > 0) {
            formData.append('custom_post_types', config.customPostTypes.join(','));
        }
        
        // Make AJAX request
        currentRequest = fetch(digiBlocksData.ajax_url, {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            currentRequest = null;
            
            if (data.success) {
                displayResults(data.data);
            } else {
                showError(data.data && data.data.message ? data.data.message : config.strings.searchFailed);
            }
        })
        .catch(function(error) {
            currentRequest = null;
            
            if (error.name !== 'AbortError') {
                console.error('Search error:', error);
                showError(config.strings.searchFailed);
            }
        });
    }
    
    function displayResults(results) {
        if (!resultsContainer) return;
        
        resultsContainer.innerHTML = '';
        
        if (!results || results.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'digiblocks-search-no-results';
            noResults.textContent = config.strings.noResults;
            resultsContainer.appendChild(noResults);
        } else {
            results.forEach(function(result, index) {
                const resultItem = document.createElement('div');
                resultItem.className = 'digiblocks-search-result-item';
                resultItem.dataset.url = result.url;
                
                const title = document.createElement('div');
                title.className = 'digiblocks-search-result-title';
                title.textContent = result.title;
                resultItem.appendChild(title);
                
                if (result.excerpt) {
                    const excerpt = document.createElement('div');
                    excerpt.className = 'digiblocks-search-result-excerpt';
                    excerpt.textContent = result.excerpt;
                    resultItem.appendChild(excerpt);
                }
                
                if (result.post_type) {
                    const type = document.createElement('div');
                    type.className = 'digiblocks-search-result-type';
                    type.textContent = result.post_type;
                    resultItem.appendChild(type);
                }
                
                resultItem.addEventListener('click', function() {
                    window.location.href = result.url;
                });
                
                resultItem.addEventListener('mouseenter', function() {
                    setActiveItem(resultsContainer.querySelectorAll('.digiblocks-search-result-item'), index);
                });
                
                resultsContainer.appendChild(resultItem);
            });
        }
        
        showResults();
    }
    
    function showLoading() {
        if (!resultsContainer) return;
        
        const loading = document.createElement('div');
        loading.className = 'digiblocks-search-loading';
        loading.textContent = config.strings.loading;
        
        resultsContainer.innerHTML = '';
        resultsContainer.appendChild(loading);
        showResults();
    }
    
    function showError(message) {
        if (!resultsContainer) return;
        
        const error = document.createElement('div');
        error.className = 'digiblocks-search-no-results';
        error.textContent = message;
        
        resultsContainer.innerHTML = '';
        resultsContainer.appendChild(error);
        showResults();
    }
    
    function showResults() {
        if (resultsContainer) {
            resultsContainer.classList.add('show');
        }
    }
    
    function hideResults() {
        if (resultsContainer) {
            resultsContainer.classList.remove('show');
        }
    }
    
    function setActiveItem(items, index) {
        items.forEach(function(item) {
            item.classList.remove('active');
        });
        if (items[index]) {
            items[index].classList.add('active');
        }
    }
});
<?php
$digiblocks_js_output = ob_get_clean();