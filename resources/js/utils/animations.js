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
                from { opacity: 0; transform: translate3d(0, 100%, 0); }
                to { opacity: 1; transform: none; }
            }
        `,
        animation: 'digiBlocksFadeInUp 0.8s forwards',
    },
    'fade-in-down': {
        keyframes: `
            @keyframes digiBlocksFadeInDown {
                from { opacity: 0; transform: translate3d(0, -100%, 0); }
                to { opacity: 1; transform: none; }
            }
        `,
        animation: 'digiBlocksFadeInDown 0.8s forwards',
    },
    'fade-in-left': {
        keyframes: `
            @keyframes digiBlocksFadeInLeft {
                from { opacity: 0; transform: translate3d(-100%, 0, 0); }
                to { opacity: 1; transform: none; }
            }
        `,
        animation: 'digiBlocksFadeInLeft 0.8s forwards',
    },
    'fade-in-right': {
        keyframes: `
            @keyframes digiBlocksFadeInRight {
                from { opacity: 0; transform: translate3d(100%, 0, 0); }
                to { opacity: 1; transform: none; }
            }
        `,
        animation: 'digiBlocksFadeInRight 0.8s forwards',
    },
    'zoom-in': {
        keyframes: `
            @keyframes digiBlocksZoomIn {
                from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); }
                50% { opacity: 1; }
            }
        `,
        animation: 'digiBlocksZoomIn 0.8s forwards',
    },
    'zoom-out': {
        keyframes: `
            @keyframes digiBlocksZoomOut {
                from { transform: scale3d(1, 1, 1); }
                50% { transform: scale3d(0.95, 0.95, 0.95); }
                to { transform: scale3d(1, 1, 1); }
            }
        `,
        animation: 'digiBlocksZoomOut 0.8s',
    },
    'slide-in-up': {
        keyframes: `
            @keyframes digiBlocksSlideInUp {
                from { transform: translate3d(0, 100%, 0); }
                to { transform: translate3d(0, 0, 0); }
            }
        `,
        animation: 'digiBlocksSlideInUp 0.8s forwards',
    },
    'slide-in-down': {
        keyframes: `
            @keyframes digiBlocksSlideInDown {
                from { transform: translate3d(0, -100%, 0); }
                to { transform: translate3d(0, 0, 0); }
            }
        `,
        animation: 'digiBlocksSlideInDown 0.8s forwards',
    },
    'slide-in-left': {
        keyframes: `
            @keyframes digiBlocksSlideInLeft {
                from { transform: translate3d(-100%, 0, 0); }
                to { transform: translate3d(0, 0, 0); }
            }
        `,
        animation: 'digiBlocksSlideInLeft 0.8s forwards',
    },
    'slide-in-right': {
        keyframes: `
            @keyframes digiBlocksSlideInRight {
                from { transform: translate3d(100%, 0, 0); }
                to { transform: translate3d(0, 0, 0); }
            }
        `,
        animation: 'digiBlocksSlideInRight 0.8s forwards',
    },
    'bounce-in': {
        keyframes: `
            @keyframes digiBlocksBounceIn {
                20%, 40%, 60%, 80%, from, to {
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                }
                0% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); }
                20% { transform: scale3d(1.1, 1.1, 1.1); }
                40% { transform: scale3d(0.9, 0.9, 0.9); }
                60% { opacity: 1; transform: scale3d(1.03, 1.03, 1.03); }
                80% { transform: scale3d(0.97, 0.97, 0.97); }
                to { opacity: 1; transform: scale3d(1, 1, 1); }
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
                from { transform-origin: center; transform: rotate3d(0, 0, 1, -200deg); opacity: 0; }
                to { transform-origin: center; transform: none; opacity: 1; }
            }
        `,
        animation: 'digiBlocksRotateIn 0.8s forwards',
    },
    'pulse': {
        keyframes: `
            @keyframes digiBlocksPulse {
                from, to { transform: scale3d(1, 1, 1); }
                50% { transform: scale3d(1.05, 1.05, 1.05); }
            }
        `,
        animation: 'digiBlocksPulse 1.5s infinite',
    },
    'shake': {
        keyframes: `
            @keyframes digiBlocksShake {
                from, to { transform: translate3d(0, 0, 0); }
                10%, 30%, 50%, 70%, 90% { transform: translate3d(-10px, 0, 0); }
                20%, 40%, 60%, 80% { transform: translate3d(10px, 0, 0); }
            }
        `,
        animation: 'digiBlocksShake 0.8s',
    },
    'zoom-in-down': {
        keyframes: `
            @keyframes digiBlocksZoomInDown {
                from { opacity: 0; transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0); animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
                60% { opacity: 1; transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0); animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); }
            }
        `,
        animation: 'digiBlocksZoomInDown 0.8s forwards',
    },
    'zoom-in-left': {
        keyframes: `
            @keyframes digiBlocksZoomInLeft {
                from { opacity: 0; transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0); animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
                60% { opacity: 1; transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0); animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); }
            }
        `,
        animation: 'digiBlocksZoomInLeft 0.8s forwards',
    },
    'zoom-in-right': {
        keyframes: `
            @keyframes digiBlocksZoomInRight {
                from { opacity: 0; transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0); animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
                60% { opacity: 1; transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0); animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); }
            }
        `,
        animation: 'digiBlocksZoomInRight 0.8s forwards',
    },
    'zoom-in-up': {
        keyframes: `
            @keyframes digiBlocksZoomInUp {
                from { opacity: 0; transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0); animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }
                60% { opacity: 1; transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0); animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); }
            }
        `,
        animation: 'digiBlocksZoomInUp 0.8s forwards',
    },
    'bounce-in-down': {
        keyframes: `
            @keyframes digiBlocksBounceInDown {
                60%, 75%, 90%, from, to {
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                }
                0% { opacity: 0; transform: translate3d(0, -3000px, 0); }
                60% { opacity: 1; transform: translate3d(0, 25px, 0); }
                75% { transform: translate3d(0, -10px, 0); }
                90% { transform: translate3d(0, 5px, 0); }
                to { transform: none; }
            }
        `,
        animation: 'digiBlocksBounceInDown 0.8s forwards',
    },
    'bounce-in-left': {
        keyframes: `
            @keyframes digiBlocksBounceInLeft {
                60%, 75%, 90%, from, to {
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                }
                0% { opacity: 0; transform: translate3d(-3000px, 0, 0); }
                60% { opacity: 1; transform: translate3d(25px, 0, 0); }
                75% { transform: translate3d(-10px, 0, 0); }
                90% { transform: translate3d(5px, 0, 0); }
                to { transform: none; }
            }
        `,
        animation: 'digiBlocksBounceInLeft 0.8s forwards',
    },
    'bounce-in-right': {
        keyframes: `
            @keyframes digiBlocksBounceInRight {
                60%, 75%, 90%, from, to {
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                }
                from { opacity: 0; transform: translate3d(3000px, 0, 0); }
                60% { opacity: 1; transform: translate3d(-25px, 0, 0); }
                75% { transform: translate3d(10px, 0, 0); }
                90% { transform: translate3d(-5px, 0, 0); }
                to { transform: none; }
            }
        `,
        animation: 'digiBlocksBounceInRight 0.8s forwards',
    },
    'bounce-in-up': {
        keyframes: `
            @keyframes digiBlocksBounceInUp {
                60%, 75%, 90%, from, to {
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                }
                from { opacity: 0; transform: translate3d(0, 3000px, 0); }
                60% { opacity: 1; transform: translate3d(0, -20px, 0); }
                75% { transform: translate3d(0, 10px, 0); }
                90% { transform: translate3d(0, -5px, 0); }
                to { transform: translate3d(0, 0, 0); }
            }
        `,
        animation: 'digiBlocksBounceInUp 0.8s forwards',
    },
    'rotate-in-down-left': {
        keyframes: `
            @keyframes digiBlocksRotateInDownLeft {
                from { transform-origin: left bottom; transform: rotate3d(0, 0, 1, -45deg); opacity: 0; }
                to { transform-origin: left bottom; transform: none; opacity: 1; }
            }
        `,
        animation: 'digiBlocksRotateInDownLeft 0.8s forwards',
    },
    'rotate-in-down-right': {
        keyframes: `
            @keyframes digiBlocksRotateInDownRight {
                from { transform-origin: right bottom; transform: rotate3d(0, 0, 1, 45deg); opacity: 0; }
                to { transform-origin: right bottom; transform: none; opacity: 1; }
            }
        `,
        animation: 'digiBlocksRotateInDownRight 0.8s forwards',
    },
    'rotate-in-up-left': {
        keyframes: `
            @keyframes digiBlocksRotateInUpLeft {
                from { transform-origin: left bottom; transform: rotate3d(0, 0, 1, 45deg); opacity: 0; }
                to { transform-origin: left bottom; transform: none; opacity: 1; }
            }
        `,
        animation: 'digiBlocksRotateInUpLeft 0.8s forwards',
    },
    'rotate-in-up-right': {
        keyframes: `
            @keyframes digiBlocksRotateInUpRight {
                from { transform-origin: right bottom; transform: rotate3d(0, 0, 1, -90deg); opacity: 0; }
                to { transform-origin: right bottom; transform: none; opacity: 1; }
            }
        `,
        animation: 'digiBlocksRotateInUpRight 0.8s forwards',
    },
    'bounce': {
        keyframes: `
            @keyframes digiBlocksBounce {
                20%, 53%, 80%, from, to {
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                    transform: translate3d(0, 0, 0);
                }
                40%, 43% {
                    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
                    transform: translate3d(0, -30px, 0);
                }
                70% {
                    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
                    transform: translate3d(0, -15px, 0);
                }
                90% { transform: translate3d(0, -4px, 0); }
            }
        `,
        animation: 'digiBlocksBounce 1s infinite',
    },
    'flash': {
        keyframes: `
            @keyframes digiBlocksFlash {
                0%, 50%, 100% { opacity: 1; }
                25%, 75% { opacity: 0; }
            }
        `,
        animation: 'digiBlocksFlash 2s infinite',
    },
    'rubber-band': {
        keyframes: `
            @keyframes digiBlocksRubberBand {
                from, to { transform: scale3d(1, 1, 1); }
                30% { transform: scale3d(1.25, 0.75, 1); }
                40% { transform: scale3d(0.75, 1.25, 1); }
                50% { transform: scale3d(1.15, 0.85, 1); }
                65% { transform: scale3d(0.95, 1.05, 1); }
                75% { transform: scale3d(1.05, 0.95, 1); }
            }
        `,
        animation: 'digiBlocksRubberBand 1s',
    },
    'head-shake': {
        keyframes: `
            @keyframes digiBlocksHeadShake {
                0% { transform: translateX(0); }
                6.5% { transform: translateX(-6px) rotateY(-9deg); }
                18.5% { transform: translateX(5px) rotateY(7deg); }
                31.5% { transform: translateX(-3px) rotateY(-5deg); }
                43.5% { transform: translateX(2px) rotateY(3deg); }
                50% { transform: translateX(0); }
            }
        `,
        animation: 'digiBlocksHeadShake 1s ease-in-out',
    },
    'swing': {
        keyframes: `
            @keyframes digiBlocksSwing {
                20% { transform: rotate3d(0, 0, 1, 15deg); }
                40% { transform: rotate3d(0, 0, 1, -10deg); }
                60% { transform: rotate3d(0, 0, 1, 5deg); }
                80% { transform: rotate3d(0, 0, 1, -5deg); }
                to { transform: rotate3d(0, 0, 1, 0deg); }
            }
        `,
        animation: 'digiBlocksSwing 1s',
    },
    'tada': {
        keyframes: `
            @keyframes digiBlocksTada {
                from, to { transform: scale3d(1, 1, 1); }
                10%, 20% { transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }
                30%, 50%, 70%, 90% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }
                40%, 60%, 80% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }
            }
        `,
        animation: 'digiBlocksTada 1s',
    },
    'wobble': {
        keyframes: `
            @keyframes digiBlocksWobble {
                from, to { transform: none; }
                15% { transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }
                30% { transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }
                45% { transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }
                60% { transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }
                75% { transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }
            }
        `,
        animation: 'digiBlocksWobble 1s',
    },
    'jello': {
        keyframes: `
            @keyframes digiBlocksJello {
                11.1%, from, to { transform: none; }
                22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); }
                33.3% { transform: skewX(6.25deg) skewY(6.25deg); }
                44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); }
                55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); }
                66.6% { transform: skewX(-0.78125deg) skewY(-0.78125deg); }
                77.7% { transform: skewX(0.390625deg) skewY(0.390625deg); }
                88.8% { transform: skewX(-0.1953125deg) skewY(-0.1953125deg); }
            }
        `,
        animation: 'digiBlocksJello 1s',
    },
    'light-speed-in': {
        keyframes: `
            @keyframes digiBlocksLightSpeedIn {
                from { transform: translate3d(100%, 0, 0) skewX(-30deg); opacity: 0; }
                60% { transform: skewX(20deg); opacity: 1; }
                80% { transform: skewX(-5deg); opacity: 1; }
                to { transform: none; opacity: 1; }
            }
        `,
        animation: 'digiBlocksLightSpeedIn 0.8s ease-out forwards',
    },
    'roll-in': {
        keyframes: `
            @keyframes digiBlocksRollIn {
                from { opacity: 0; transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }
                to { opacity: 1; transform: none; }
            }
        `,
        animation: 'digiBlocksRollIn 0.8s forwards',
    }
};

export default animations;