<?php
/**
 * Table of Contents Block Script
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get block attributes
$id = isset( $attrs['id'] ) ? $attrs['id'] : 'digi-block';

// JavaScript output
ob_start();
?>
(function() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTableOfContents);
    } else {
        initTableOfContents();
    }
    
    function initTableOfContents() {
        const tocBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
        if (!tocBlock) return;
        
        const tocContainer = tocBlock.querySelector('.digiblocks-toc-container');
        const tocContent = tocBlock.querySelector('.digiblocks-toc-content');
        
        if (!tocContainer || !tocContent) return;
        
        // Get settings from data attributes
        const headingSelector = tocContainer.dataset.headingSelector || 'h2';
        const maxDepth = parseInt(tocContainer.dataset.maxDepth || 3, 10);
        const scrollOffset = parseInt(tocContainer.dataset.scrollOffset || 30, 10);
        const smoothScroll = tocContainer.dataset.smoothScroll === 'true';
        const showAsCollapsible = tocContainer.hasAttribute('data-initial-collapsed');
        const initialCollapsed = tocContainer.dataset.initialCollapsed === 'true';
        const showText = tocContainer.dataset.showText || 'Show';
        const hideText = tocContainer.dataset.hideText || 'Hide';
        
        // Get toggle button if collapsible
        const toggleButton = tocBlock.querySelector('.digiblocks-toc-toggle-button');
        
        // Set up toggle button functionality
        if (toggleButton) {
            toggleButton.addEventListener('click', function(e) {
                const isCollapsed = tocContent.style.display === 'none';
                
                // Toggle visibility
                tocContent.style.display = isCollapsed ? 'block' : 'none';
                
                // Update button text and aria-expanded
                toggleButton.textContent = isCollapsed ? hideText : showText;
                toggleButton.setAttribute('aria-expanded', isCollapsed);
            });
        }
        
        // Find all headings in the content
        // Convert selector string to actual selectors
        let selectors = [];
        if (headingSelector === 'h2') {
            selectors = ['h2'];
        } else if (headingSelector === 'h2,h3') {
            selectors = ['h2', 'h3'];
        } else if (headingSelector === 'h2,h3,h4') {
            selectors = ['h2', 'h3', 'h4'];
        }
        
        // Get content area - look specifically for DigiBlocks content containers
        let contentArea = document.querySelector('.digiblocks-post-content');
        if (!contentArea) {
            contentArea = document.querySelector('.digi-post-content-single');
        }
        if (!contentArea) {
            // Fallbacks in case our specific containers aren't found
            contentArea = document.querySelector('main');
        }
        if (!contentArea) {
            contentArea = document.querySelector('.content-area');
        }
        if (!contentArea) {
            contentArea = document.querySelector('.entry-content');
        }
        if (!contentArea) {
            contentArea = document.body;
        }
        
        // Find headings using the selector
        const headings = Array.from(contentArea.querySelectorAll(selectors.join(',')));
        
        if (headings.length === 0) {
            // No headings found, just return
            return;
        }
        
        // Filter headings based on nesting level
        const filteredHeadings = headings.filter(heading => {
            const level = parseInt(heading.tagName.substring(1), 10);
            return level <= maxDepth;
        });
        
        if (filteredHeadings.length === 0) {
            // No matching headings with current settings
            return;
        }
        
        // Generate the list type
        const listType = tocContainer.classList.contains('ordered') ? 'ol' : 'ul';
        const tocList = document.createElement(listType);
        tocList.className = 'digiblocks-toc-list';
        
        // Process all headings and add them to the TOC
        filteredHeadings.forEach((heading, index) => {
            // Ensure the heading has an ID
            if (!heading.id) {
                // Generate an ID from the heading text
                const headingId = heading.textContent
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-');
                heading.id = `heading-${headingId}-${index}`;
            }
            
            // Create list item
            const listItem = document.createElement('li');
            
            // Get the heading level and calculate indent
            const level = parseInt(heading.tagName.substring(1), 10);
            const indent = (level - 2) * 16; // 16px for each level after H2
            
            if (level > 2) {
                listItem.style.paddingLeft = `${indent}px`;
            }
            
            // Create link
            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent;
            
            // Add smooth scrolling functionality
            if (smoothScroll) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        // Make sure the offset is sensible - use 20px as default minimum if user set 0
                        const actualOffset = scrollOffset === 0 ? 20 : scrollOffset;
                        
                        // Get the element's position
                        const rect = targetElement.getBoundingClientRect();
                        
                        // Calculate position with offset
                        // We want to scroll to just above the heading with the specified offset
                        const targetPosition = window.pageYOffset + rect.top - actualOffset;
                        
                        // Perform smooth scroll
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Set focus to the heading for accessibility
                        targetElement.setAttribute('tabindex', '-1');
                        targetElement.focus({ preventScroll: true }); // Prevent additional scroll when focusing
                    }
                });
            }
            
            // Add link to list item
            listItem.appendChild(link);
            
            // Add list item to TOC list
            tocList.appendChild(listItem);
        });
        
        // Add the list to the TOC content
        tocContent.innerHTML = '';
        tocContent.appendChild(tocList);
    }
})();
<?php
$digiblocks_js_output = ob_get_clean();