/**
 * Imports the dotlottie player library
 */
import { DotLottie } from '@lottiefiles/dotlottie-web';

// Expose DotLottie to window for editor use
window.DotLottie = DotLottie;

// Initialize lottie containers
const initLottieContainers = () => {
    const containers = document.querySelectorAll('.digiblocks-lottie-container');
    
    containers.forEach(container => {
        // Skip if already initialized or missing source
        if (!container.dataset.src || container.classList.contains('lottie-initialized')) {
            return;
        }
        
        try {
            // Mark as initialized
            container.classList.add('lottie-initialized');
            
            // Get the canvas element (it's already in the HTML)
            const canvas = container.querySelector('canvas');
            if (!canvas) {
                console.error('Canvas element not found in Lottie container');
                return;
            }
            
            // Parse settings from data attributes
            const autoplay = container.dataset.autoplay === 'true';
            const loop = container.dataset.loop === 'true';
            const speed = parseFloat(container.dataset.speed || '1');
            
            // Initialize DotLottie player
            const dotLottie = new DotLottie({
                autoplay: autoplay,
                loop: loop,
                canvas: canvas,
                src: container.dataset.src,
            });
            
            // Wait for animation to be loaded before setting speed
            dotLottie.addEventListener('load', () => {
                // Set speed if not default
                if (speed !== 1) {
                    dotLottie.setSpeed(speed);
                }
                
                // If loop is false, we need to handle "play once" behavior
                if (!loop) {
                    dotLottie.addEventListener('complete', () => {
                        // When animation finishes, ensure it stops
                        dotLottie.pause();
                        // Move to the first frame
                        dotLottie.goToFrame(0);
                    });
                }
                
                // Add play/pause controls if needed
                if (container.dataset.controls === 'true') {
                    createControls(container, dotLottie, autoplay);
                }
            });
            
            // Add to container data for access
            container.dotLottiePlayer = dotLottie;
            
            // Handle errors
            dotLottie.addEventListener('error', (error) => {
                console.error('Lottie animation error:', error);
                container.innerHTML = `
                    <div class="digiblocks-lottie-error" style="
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                        color: #cc1818;
                        max-width: 90%;
                        padding: 10px;
                        background: rgba(255,255,255,0.8);
                        border-radius: 4px;
                    ">Failed to load animation. Please check the URL or file.</div>
                `;
            });
        } catch (error) {
            console.error('Error initializing Lottie animation:', error);
            container.innerHTML = `
                <div class="digiblocks-lottie-error" style="
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    color: #cc1818;
                    max-width: 90%;
                    padding: 10px;
                    background: rgba(255,255,255,0.8);
                    border-radius: 4px;
                ">Error initializing animation.</div>
            `;
        }
    });
};

// Create play/pause controls for an animation
const createControls = (container, dotLottie, initiallyPlaying) => {
    // Create controls wrapper
    const controls = document.createElement('div');
    controls.className = 'digiblocks-lottie-controls';
    controls.style.position = 'absolute';
    controls.style.bottom = '10px';
    controls.style.left = '0';
    controls.style.right = '0';
    controls.style.display = 'flex';
    controls.style.justifyContent = 'center';
    controls.style.zIndex = '10';
    
    // Create play/pause button
    const playPauseBtn = document.createElement('button');
    playPauseBtn.className = 'digiblocks-lottie-play-pause';
    playPauseBtn.innerHTML = initiallyPlaying ? '⏸️' : '▶️';
    playPauseBtn.style.background = 'rgba(0,0,0,0.3)';
    playPauseBtn.style.color = 'white';
    playPauseBtn.style.border = 'none';
    playPauseBtn.style.borderRadius = '4px';
    playPauseBtn.style.padding = '5px 10px';
    playPauseBtn.style.cursor = 'pointer';
    
    // Set initial state and add click handler
    let isPlaying = initiallyPlaying;
    
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            dotLottie.pause();
            playPauseBtn.innerHTML = '▶️';
        } else {
            dotLottie.play();
            playPauseBtn.innerHTML = '⏸️';
        }
        isPlaying = !isPlaying;
    });
    
    // Add button to controls and controls to container
    controls.appendChild(playPauseBtn);
    container.appendChild(controls);
};

// Set up a MutationObserver to detect dynamic Lottie containers
const setupObserver = () => {
    const observer = new MutationObserver((mutations) => {
        let shouldInit = false;
        
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && 
                        (node.classList?.contains('digiblocks-lottie-container') || 
                         node.querySelector?.('.digiblocks-lottie-container'))) {
                        shouldInit = true;
                    }
                });
            }
        });
        
        if (shouldInit) {
            initLottieContainers();
        }
    });
    
    observer.observe(document.body, { 
        childList: true, 
        subtree: true 
    });
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initLottieContainers();
        setupObserver();
    });
} else {
    initLottieContainers();
    setupObserver();
}

// Also initialize on window load
window.addEventListener('load', initLottieContainers);