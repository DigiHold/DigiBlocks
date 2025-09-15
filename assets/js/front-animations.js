(()=>{document.addEventListener("DOMContentLoaded",function(){let n=document.querySelectorAll('[class*="animate-"]');if(n.length===0)return;let e="digiblocks-animations-keyframes",o=document.getElementById(e);o||(o=document.createElement("style"),o.id=e,o.textContent=`
            @keyframes digiBlocksFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes digiBlocksFadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes digiBlocksFadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes digiBlocksFadeInLeft {
                from { opacity: 0; transform: translateX(-20px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes digiBlocksFadeInRight {
                from { opacity: 0; transform: translateX(20px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes digiBlocksZoomIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
            @keyframes digiBlocksZoomOut {
                from { opacity: 0; transform: scale(1.05); }
                to { opacity: 1; transform: scale(1); }
            }
            @keyframes digiBlocksSlideInUp {
                from { transform: translateY(100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes digiBlocksSlideInDown {
                from { transform: translateY(-100%); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes digiBlocksSlideInLeft {
                from { transform: translateX(-100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes digiBlocksSlideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes digiBlocksBounceIn {
                0% { opacity: 0; transform: scale(0.3); }
                50% { opacity: 1; transform: scale(1.05); }
                70% { opacity: 1; transform: scale(0.9); }
                100% { opacity: 1; transform: scale(1); }
            }
            @keyframes digiBlocksFlipInX {
                0% { opacity: 0; transform: rotateX(90deg); }
                100% { opacity: 1; transform: rotateX(0deg); }
            }
            @keyframes digiBlocksFlipInY {
                0% { opacity: 0; transform: rotateY(90deg); }
                100% { opacity: 1; transform: rotateY(0deg); }
            }
            @keyframes digiBlocksRotateIn {
                0% { opacity: 0; transform: rotate(-200deg); }
                100% { opacity: 1; transform: rotate(0deg); }
            }
            @keyframes digiBlocksPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            @keyframes digiBlocksShake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `,document.head.appendChild(o));let s={"fade-in":{animation:"digiBlocksFadeIn 0.8s forwards",initialStyle:"opacity: 0;"},"fade-in-up":{animation:"digiBlocksFadeInUp 0.8s forwards",initialStyle:"opacity: 0; transform: translateY(20px);"},"fade-in-down":{animation:"digiBlocksFadeInDown 0.8s forwards",initialStyle:"opacity: 0; transform: translateY(-20px);"},"fade-in-left":{animation:"digiBlocksFadeInLeft 0.8s forwards",initialStyle:"opacity: 0; transform: translateX(-20px);"},"fade-in-right":{animation:"digiBlocksFadeInRight 0.8s forwards",initialStyle:"opacity: 0; transform: translateX(20px);"},"zoom-in":{animation:"digiBlocksZoomIn 0.8s forwards",initialStyle:"opacity: 0; transform: scale(0.95);"},"zoom-out":{animation:"digiBlocksZoomOut 0.8s forwards",initialStyle:"opacity: 0; transform: scale(1.05);"},"slide-in-up":{animation:"digiBlocksSlideInUp 0.8s forwards",initialStyle:"opacity: 0; transform: translateY(100%);"},"slide-in-down":{animation:"digiBlocksSlideInDown 0.8s forwards",initialStyle:"opacity: 0; transform: translateY(-100%);"},"slide-in-left":{animation:"digiBlocksSlideInLeft 0.8s forwards",initialStyle:"opacity: 0; transform: translateX(-100%);"},"slide-in-right":{animation:"digiBlocksSlideInRight 0.8s forwards",initialStyle:"opacity: 0; transform: translateX(100%);"},"bounce-in":{animation:"digiBlocksBounceIn 0.8s forwards",initialStyle:"opacity: 0; transform: scale(0.3);"},"flip-in-x":{animation:"digiBlocksFlipInX 0.8s forwards",initialStyle:"opacity: 0; transform: rotateX(90deg); backface-visibility: visible;"},"flip-in-y":{animation:"digiBlocksFlipInY 0.8s forwards",initialStyle:"opacity: 0; transform: rotateY(90deg); backface-visibility: visible;"},"rotate-in":{animation:"digiBlocksRotateIn 0.8s forwards",initialStyle:"opacity: 0; transform: rotate(-200deg);"},pulse:{animation:"digiBlocksPulse 1.5s infinite",initialStyle:""},shake:{animation:"digiBlocksShake 0.8s",initialStyle:""}};if("IntersectionObserver"in window){let t=new IntersectionObserver(i=>{i.forEach(a=>{if(a.isIntersecting){c(a.target);let r=l(a.target);r&&!s[r].animation.includes("infinite")&&t.unobserve(a.target)}})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});n.forEach(i=>t.observe(i))}else n.forEach(t=>{setTimeout(()=>c(t),100)});function l(t){let i=t.className.split(" ");for(let a of i)if(a.startsWith("animate-"))return a.replace("animate-","");return null}function c(t){let i=l(t);if(!i||!s[i])return;let a=s[i];a.initialStyle&&a.initialStyle.split(";").forEach(f=>{if(f.trim()){let[m,d]=f.split(":");m&&d&&(t.style[m.trim()]=d.trim())}}),t.offsetWidth,t.style.animation=a.animation,t.style.transition="all 0.3s ease"}});})();
