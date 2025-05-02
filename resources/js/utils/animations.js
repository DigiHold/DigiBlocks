/**
 * Animations Library
 * 
 * Collection of animations for DigiBlocks
 */

const animations = {
    'fade-in': {
        keyframes: `
            @keyframes digiBlocksFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `,
        animation: 'digiBlocksFadeIn 0.8s forwards',
    },
    'fade-in-up': {
        keyframes: `
            @keyframes digiBlocksFadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `,
        animation: 'digiBlocksFadeInUp 0.8s forwards',
    },
    'fade-in-down': {
        keyframes: `
            @keyframes digiBlocksFadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `,
        animation: 'digiBlocksFadeInDown 0.8s forwards',
    },
    'fade-in-left': {
        keyframes: `
            @keyframes digiBlocksFadeInLeft {
                from { opacity: 0; transform: translateX(-20px); }
                to { opacity: 1; transform: translateX(0); }
            }
        `,
        animation: 'digiBlocksFadeInLeft 0.8s forwards',
    },
    'fade-in-right': {
        keyframes: `
            @keyframes digiBlocksFadeInRight {
                from { opacity: 0; transform: translateX(20px); }
                to { opacity: 1; transform: translateX(0); }
            }
        `,
        animation: 'digiBlocksFadeInRight 0.8s forwards',
    },
    'zoom-in': {
        keyframes: `
            @keyframes digiBlocksZoomIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
        `,
        animation: 'digiBlocksZoomIn 0.8s forwards',
    },
    'zoom-out': {
        keyframes: `
            @keyframes digiBlocksZoomOut {
                from { opacity: 0; transform: scale(1.05); }
                to { opacity: 1; transform: scale(1); }
            }
        `,
        animation: 'digiBlocksZoomOut 0.8s forwards',
    },
    'slide-in-up': {
        keyframes: `
            @keyframes digiBlocksSlideInUp {
                from { transform: translateY(100%); }
                to { transform: translateY(0); }
            }
        `,
        animation: 'digiBlocksSlideInUp 0.8s forwards',
    },
    'slide-in-down': {
        keyframes: `
            @keyframes digiBlocksSlideInDown {
                from { transform: translateY(-100%); }
                to { transform: translateY(0); }
            }
        `,
        animation: 'digiBlocksSlideInDown 0.8s forwards',
    },
    'slide-in-left': {
        keyframes: `
            @keyframes digiBlocksSlideInLeft {
                from { transform: translateX(-100%); }
                to { transform: translateX(0); }
            }
        `,
        animation: 'digiBlocksSlideInLeft 0.8s forwards',
    },
    'slide-in-right': {
        keyframes: `
            @keyframes digiBlocksSlideInRight {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
            }
        `,
        animation: 'digiBlocksSlideInRight 0.8s forwards',
    },
    'bounce-in': {
        keyframes: `
            @keyframes digiBlocksBounceIn {
                0% { opacity: 0; transform: scale(0.3); }
                50% { opacity: 1; transform: scale(1.05); }
                70% { opacity: 1; transform: scale(0.9); }
                100% { opacity: 1; transform: scale(1); }
            }
        `,
        animation: 'digiBlocksBounceIn 0.8s forwards',
    },
    'flip-in-x': {
        keyframes: `
            @keyframes digiBlocksFlipInX {
                0% { opacity: 0; transform: rotateX(90deg); }
                100% { opacity: 1; transform: rotateX(0deg); }
            }
        `,
        animation: 'digiBlocksFlipInX 0.8s forwards',
    },
    'flip-in-y': {
        keyframes: `
            @keyframes digiBlocksFlipInY {
                0% { opacity: 0; transform: rotateY(90deg); }
                100% { opacity: 1; transform: rotateY(0deg); }
            }
        `,
        animation: 'digiBlocksFlipInY 0.8s forwards',
    },
    'rotate-in': {
        keyframes: `
            @keyframes digiBlocksRotateIn {
                0% { opacity: 0; transform: rotate(-200deg); }
                100% { opacity: 1; transform: rotate(0deg); }
            }
        `,
        animation: 'digiBlocksRotateIn 0.8s forwards',
    },
    'pulse': {
        keyframes: `
            @keyframes digiBlocksPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `,
        animation: 'digiBlocksPulse 1.5s infinite',
    },
    'shake': {
        keyframes: `
            @keyframes digiBlocksShake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `,
        animation: 'digiBlocksShake 0.8s',
    }
};

export default animations;