<?php
/**
 * Product Gallery Block JavaScript
 *
 * @package DigiBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Get block attributes.
$id             = isset( $attrs['id'] ) ? $attrs['id'] : '';
$enableLightbox = isset( $attrs['enableLightbox'] ) ? $attrs['enableLightbox'] : true;

// Only generate JS if we have a block ID
if ( empty( $id ) ) {
    $digiblocks_js_output = '';
    return;
}

// JavaScript Output
ob_start();
?>
/* Product Gallery Block - <?php echo esc_attr( $id ); ?> */
document.addEventListener('DOMContentLoaded', function() {
    const galleryBlock = document.querySelector('.<?php echo esc_attr( $id ); ?>');
    
    if (!galleryBlock) return;
    
    const mainImage = galleryBlock.querySelector('.digiblocks-main-image img');
    const thumbnails = galleryBlock.querySelectorAll('.digiblocks-thumbnail');
    const mainImageContainer = galleryBlock.querySelector('.digiblocks-main-image');
    
    if (!mainImage || !thumbnails.length) return;
    
    let currentImageIndex = 0;
    let allImages = [];
    
    // Collect all image data
    thumbnails.forEach((thumbnail, index) => {
        const img = thumbnail.querySelector('img');
        if (img) {
            allImages.push({
                src: img.src,
                alt: img.alt || '',
                fullSrc: img.getAttribute('data-full-src') || img.src
            });
        }
    });
    
    // Handle thumbnail clicks
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            
            // Update main image
            const img = thumbnail.querySelector('img');
            if (img && mainImage) {
                const newSrc = img.getAttribute('data-full-src') || img.src;
                mainImage.src = newSrc;
                mainImage.alt = img.alt || '';
                currentImageIndex = index;
            }
        });
    });
    
    <?php if ( $enableLightbox ) : ?>
    // Create and manage lightbox
    let lightboxEl = null;
    
    // Create SVG icons with dynamically constructed namespace to avoid minification issues
    function createSvgIcon(viewBox, pathData, size) {
        // Construct the namespace URL to avoid minification treating // as comment
        const svgNamespace = 'http' + ':' + '/' + '/' + 'www.w3.org/2000/svg';
        
        const svg = document.createElementNS(svgNamespace, 'svg');
        const path = document.createElementNS(svgNamespace, 'path');
        
        svg.setAttribute('viewBox', viewBox);
        svg.setAttribute('width', size || '20');
        svg.setAttribute('height', size || '20');
        svg.setAttribute('fill', '#fff');
        
        path.setAttribute('d', pathData);
        svg.appendChild(path);
        
        return svg.outerHTML;
    }
    
    function getCloseIcon() {
        return createSvgIcon('0 0 384 512', 'M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z');
    }
    
    function getLeftIcon() {
        return createSvgIcon('0 0 448 512', 'M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z');
    }
    
    function getRightIcon() {
        return createSvgIcon('0 0 448 512', 'M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z');
    }

	function createLightbox() {
        if (lightboxEl) return lightboxEl;
        
        lightboxEl = document.createElement('div');
        lightboxEl.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); display: flex; align-items: center; justify-content: center; z-index: 999999; opacity: 0; visibility: hidden; transition: all 0.3s ease; -webkit-backdrop-filter: blur(0.1875rem); backdrop-filter: blur(0.1875rem);';
        
        lightboxEl.innerHTML = '<div style="position: relative; max-width: 90%; max-height: 90%; display: flex; align-items: center; justify-content: center;">' +
            '<img style="max-width: 100%; max-height: 85vh; object-fit: contain; border-radius: 8px;" src="" alt="" />' +
            '<button type="button" style="position: absolute; top: 0; right: -50px; background: transparent; border: none; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; outline: none;" aria-label="Close">' +
                getCloseIcon() +
            '</button>' +
            (allImages.length > 1 ? 
                '<button type="button" style="position: absolute; left: -60px; top: 50%; transform: translateY(-50%); background: transparent; border: none; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; outline: none;" aria-label="Previous">' +
                    getLeftIcon() +
                '</button>' +
                '<button type="button" style="position: absolute; right: -60px; top: 50%; transform: translateY(-50%); background: transparent; border: none; border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; outline: none;" aria-label="Next">' +
                    getRightIcon() +
                '</button>' +
                '<div style="position: absolute; bottom: -50px; left: 50%; transform: translateX(-50%); background: rgba(255, 255, 255, 0.9); padding: 8px 16px; border-radius: 20px; font-size: 14px; color: #333;">' +
                    '<span class="current">1</span> / <span class="total">' + allImages.length + '</span>' +
                '</div>' 
            : '') +
        '</div>';
        
        document.body.appendChild(lightboxEl);
        return lightboxEl;
    }
    
    function openLightbox(index) {
        const lightbox = createLightbox();
        const lightboxImage = lightbox.querySelector('img');
        
        if (allImages[index] && lightboxImage) {
            lightboxImage.src = allImages[index].fullSrc;
            lightboxImage.alt = allImages[index].alt;
            currentImageIndex = index;
            
            const currentCounter = lightbox.querySelector('.current');
            if (currentCounter) {
                currentCounter.textContent = index + 1;
            }
            
            lightbox.style.opacity = '1';
            lightbox.style.visibility = 'visible';
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeLightbox() {
        if (lightboxEl) {
            lightboxEl.style.opacity = '0';
            lightboxEl.style.visibility = 'hidden';
            document.body.style.overflow = '';
        }
    }
    
    function navigateLightbox(direction) {
        let newIndex = currentImageIndex;
        
        if (direction === 'next') {
            newIndex = (currentImageIndex + 1) % allImages.length;
        } else if (direction === 'prev') {
            newIndex = currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1;
        }
        
        openLightbox(newIndex);
        
        // Update active thumbnail
        thumbnails.forEach(t => t.classList.remove('active'));
        if (thumbnails[newIndex]) {
            thumbnails[newIndex].classList.add('active');
        }
        
        // Update main image
        if (allImages[newIndex] && mainImage) {
            mainImage.src = allImages[newIndex].fullSrc;
            mainImage.alt = allImages[newIndex].alt;
        }
    }
    
    // Main image click to open lightbox
    if (mainImageContainer) {
        mainImageContainer.addEventListener('click', function(e) {
            e.preventDefault();
            openLightbox(currentImageIndex);
        });
    }
    
    // Event delegation for lightbox controls
    document.addEventListener('click', function(e) {
        if (!lightboxEl || lightboxEl.style.visibility !== 'visible') return;
        
        // Close button
        if (e.target.closest('button[aria-label="Close"]')) {
            e.preventDefault();
            closeLightbox();
        }
        // Previous button
        else if (e.target.closest('button[aria-label="Previous"]')) {
            e.preventDefault();
            navigateLightbox('prev');
        }
        // Next button
        else if (e.target.closest('button[aria-label="Next"]')) {
            e.preventDefault();
            navigateLightbox('next');
        }
        // Click outside content
        else if (e.target === lightboxEl) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightboxEl || lightboxEl.style.visibility !== 'visible') return;
        
        switch(e.key) {
            case 'Escape':
                e.preventDefault();
                closeLightbox();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (allImages.length > 1) {
                    navigateLightbox('prev');
                }
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (allImages.length > 1) {
                    navigateLightbox('next');
                }
                break;
        }
    });
    <?php endif; ?>
    
    // Set first thumbnail as active initially
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }
});
<?php
$digiblocks_js_output = ob_get_clean();