(() => {
  // resources/js/utils/animations.js
  var animations = {
    "fade-in": {
      keyframes: `
            @keyframes digiBlocksFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `,
      animation: "digiBlocksFadeIn 0.8s forwards"
    },
    "fade-in-up": {
      keyframes: `
            @keyframes digiBlocksFadeInUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `,
      animation: "digiBlocksFadeInUp 0.8s forwards"
    },
    "fade-in-down": {
      keyframes: `
            @keyframes digiBlocksFadeInDown {
                from { opacity: 0; transform: translateY(-20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `,
      animation: "digiBlocksFadeInDown 0.8s forwards"
    },
    "fade-in-left": {
      keyframes: `
            @keyframes digiBlocksFadeInLeft {
                from { opacity: 0; transform: translateX(-20px); }
                to { opacity: 1; transform: translateX(0); }
            }
        `,
      animation: "digiBlocksFadeInLeft 0.8s forwards"
    },
    "fade-in-right": {
      keyframes: `
            @keyframes digiBlocksFadeInRight {
                from { opacity: 0; transform: translateX(20px); }
                to { opacity: 1; transform: translateX(0); }
            }
        `,
      animation: "digiBlocksFadeInRight 0.8s forwards"
    },
    "zoom-in": {
      keyframes: `
            @keyframes digiBlocksZoomIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
        `,
      animation: "digiBlocksZoomIn 0.8s forwards"
    },
    "zoom-out": {
      keyframes: `
            @keyframes digiBlocksZoomOut {
                from { opacity: 0; transform: scale(1.05); }
                to { opacity: 1; transform: scale(1); }
            }
        `,
      animation: "digiBlocksZoomOut 0.8s forwards"
    },
    "slide-in-up": {
      keyframes: `
            @keyframes digiBlocksSlideInUp {
                from { transform: translateY(100%); }
                to { transform: translateY(0); }
            }
        `,
      animation: "digiBlocksSlideInUp 0.8s forwards"
    },
    "slide-in-down": {
      keyframes: `
            @keyframes digiBlocksSlideInDown {
                from { transform: translateY(-100%); }
                to { transform: translateY(0); }
            }
        `,
      animation: "digiBlocksSlideInDown 0.8s forwards"
    },
    "slide-in-left": {
      keyframes: `
            @keyframes digiBlocksSlideInLeft {
                from { transform: translateX(-100%); }
                to { transform: translateX(0); }
            }
        `,
      animation: "digiBlocksSlideInLeft 0.8s forwards"
    },
    "slide-in-right": {
      keyframes: `
            @keyframes digiBlocksSlideInRight {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
            }
        `,
      animation: "digiBlocksSlideInRight 0.8s forwards"
    },
    "bounce-in": {
      keyframes: `
            @keyframes digiBlocksBounceIn {
                0% { opacity: 0; transform: scale(0.3); }
                50% { opacity: 1; transform: scale(1.05); }
                70% { opacity: 1; transform: scale(0.9); }
                100% { opacity: 1; transform: scale(1); }
            }
        `,
      animation: "digiBlocksBounceIn 0.8s forwards"
    },
    "flip-in-x": {
      keyframes: `
            @keyframes digiBlocksFlipInX {
                0% { opacity: 0; transform: rotateX(90deg); }
                100% { opacity: 1; transform: rotateX(0deg); }
            }
        `,
      animation: "digiBlocksFlipInX 0.8s forwards"
    },
    "flip-in-y": {
      keyframes: `
            @keyframes digiBlocksFlipInY {
                0% { opacity: 0; transform: rotateY(90deg); }
                100% { opacity: 1; transform: rotateY(0deg); }
            }
        `,
      animation: "digiBlocksFlipInY 0.8s forwards"
    },
    "rotate-in": {
      keyframes: `
            @keyframes digiBlocksRotateIn {
                0% { opacity: 0; transform: rotate(-200deg); }
                100% { opacity: 1; transform: rotate(0deg); }
            }
        `,
      animation: "digiBlocksRotateIn 0.8s forwards"
    },
    "pulse": {
      keyframes: `
            @keyframes digiBlocksPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `,
      animation: "digiBlocksPulse 1.5s infinite"
    },
    "shake": {
      keyframes: `
            @keyframes digiBlocksShake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `,
      animation: "digiBlocksShake 0.8s"
    }
  };
  var animations_default = animations;

  // resources/js/utils/google-fonts.js
  var getGoogleFonts = { "ABeeZee": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "ADLaM Display": { "v": ["regular"], "subset": ["adlam", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "AR One Sans": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Abel": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Abhaya Libre": { "v": ["regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "sinhala"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Aboreto": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Abril Fatface": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Abyssinica SIL": { "v": ["regular"], "subset": ["ethiopic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Aclonica": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Acme": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Actor": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Adamina": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Advent Pro": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Afacad": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic-ext", "latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Afacad Flux": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Agbalumo": { "v": ["regular"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Agdasima": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Aguafina Script": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Akatab": { "v": ["regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "tifinagh"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Akaya Kanadaka": { "v": ["regular"], "subset": ["kannada", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Akaya Telivigala": { "v": ["regular"], "subset": ["latin", "latin-ext", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Akronim": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Akshar": { "v": ["300", "regular", "500", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Aladin": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Alata": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Alatsi": { "v": ["regular"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Albert Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Aldrich": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Alef": { "v": ["regular", "700"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Alegreya": { "v": ["regular", "500", "600", "700", "800", "900", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Alegreya SC": { "v": ["regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "700", "800", "900"], "i": ["normal", "italic"] }, "Alegreya Sans": { "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "300", "400", "500", "700", "800", "900"], "i": ["normal", "italic"] }, "Alegreya Sans SC": { "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "300", "400", "500", "700", "800", "900"], "i": ["normal", "italic"] }, "Aleo": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Alex Brush": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Alexandria": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Alfa Slab One": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Alice": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Alike": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Alike Angular": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Alkalami": { "v": ["regular"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Alkatra": { "v": ["regular", "500", "600", "700"], "subset": ["bengali", "devanagari", "latin", "latin-ext", "oriya"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Allan": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Allerta": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Allerta Stencil": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Allison": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Allura": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Almarai": { "v": ["300", "regular", "700", "800"], "subset": ["arabic", "latin"], "weight": ["Default", "300", "400", "700", "800"], "i": ["normal"] }, "Almendra": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Almendra Display": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Almendra SC": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Alumni Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Alumni Sans Collegiate One": { "v": ["regular", "italic"], "subset": ["cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Alumni Sans Inline One": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Alumni Sans Pinstripe": { "v": ["regular", "italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Amarante": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Amaranth": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Amatic SC": { "v": ["regular", "700"], "subset": ["cyrillic", "hebrew", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Amethysta": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Amiko": { "v": ["regular", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "600", "700"], "i": ["normal"] }, "Amiri": { "v": ["regular", "italic", "700", "700italic"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Amiri Quran": { "v": ["regular"], "subset": ["arabic", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Amita": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Anaheim": { "v": ["regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Andada Pro": { "v": ["regular", "500", "600", "700", "800", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Andika": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Anek Bangla": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["bengali", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Anek Devanagari": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Anek Gujarati": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["gujarati", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Anek Gurmukhi": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["gurmukhi", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Anek Kannada": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["kannada", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Anek Latin": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Anek Malayalam": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "malayalam"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Anek Odia": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "oriya"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Anek Tamil": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "tamil"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Anek Telugu": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "telugu"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Angkor": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Annapurna SIL": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Annie Use Your Telescope": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Anonymous Pro": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "greek", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Anta": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Antic": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Antic Didone": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Antic Slab": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Anton": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Anton SC": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Antonio": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Anuphan": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Anybody": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Aoboshi One": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Arapey": { "v": ["regular", "italic"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Arbutus": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Arbutus Slab": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Architects Daughter": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Archivo": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Archivo Black": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Archivo Narrow": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Are You Serious": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Aref Ruqaa": { "v": ["regular", "700"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Aref Ruqaa Ink": { "v": ["regular", "700"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Arima": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["greek", "greek-ext", "latin", "latin-ext", "malayalam", "tamil", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Arimo": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "hebrew", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Arizonia": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Armata": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Arsenal": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Arsenal SC": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Artifika": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Arvo": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Arya": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Asap": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Asap Condensed": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Asar": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Asset": { "v": ["regular"], "subset": ["cyrillic-ext", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Assistant": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Astloch": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Asul": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Athiti": { "v": ["200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Atkinson Hyperlegible": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Atma": { "v": ["300", "regular", "500", "600", "700"], "subset": ["bengali", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Atomic Age": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Aubrey": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Audiowide": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Autour One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Average": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Average Sans": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Averia Gruesa Libre": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Averia Libre": { "v": ["300", "300italic", "regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "300", "400", "700"], "i": ["normal", "italic"] }, "Averia Sans Libre": { "v": ["300", "300italic", "regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "300", "400", "700"], "i": ["normal", "italic"] }, "Averia Serif Libre": { "v": ["300", "300italic", "regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "300", "400", "700"], "i": ["normal", "italic"] }, "Azeret Mono": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "B612": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "B612 Mono": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "BIZ UDGothic": { "v": ["regular", "700"], "subset": ["cyrillic", "greek-ext", "japanese", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "BIZ UDMincho": { "v": ["regular", "700"], "subset": ["cyrillic", "greek-ext", "japanese", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "BIZ UDPGothic": { "v": ["regular", "700"], "subset": ["cyrillic", "greek-ext", "japanese", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "BIZ UDPMincho": { "v": ["regular", "700"], "subset": ["cyrillic", "greek-ext", "japanese", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Babylonica": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bacasime Antique": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Bad Script": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bagel Fat One": { "v": ["regular"], "subset": ["korean", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Bahiana": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Bahianita": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bai Jamjuree": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Bakbak One": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ballet": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Baloo 2": { "v": ["regular", "500", "600", "700", "800"], "subset": ["devanagari", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Baloo Bhai 2": { "v": ["regular", "500", "600", "700", "800"], "subset": ["gujarati", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Baloo Bhaijaan 2": { "v": ["regular", "500", "600", "700", "800"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Baloo Bhaina 2": { "v": ["regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "oriya", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Baloo Chettan 2": { "v": ["regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "malayalam", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Baloo Da 2": { "v": ["regular", "500", "600", "700", "800"], "subset": ["bengali", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Baloo Paaji 2": { "v": ["regular", "500", "600", "700", "800"], "subset": ["gurmukhi", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Baloo Tamma 2": { "v": ["regular", "500", "600", "700", "800"], "subset": ["kannada", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Baloo Tammudu 2": { "v": ["regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "telugu", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Baloo Thambi 2": { "v": ["regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "tamil", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Balsamiq Sans": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Balthazar": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Bangers": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Barlow": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Barlow Condensed": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Barlow Semi Condensed": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Barriecito": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Barrio": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Basic": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Baskervville": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Baskervville SC": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Battambang": { "v": ["100", "300", "regular", "700", "900"], "subset": ["khmer", "latin"], "weight": ["Default", "100", "300", "400", "700", "900"], "i": ["normal"] }, "Baumans": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Bayon": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Be Vietnam Pro": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Beau Rivage": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bebas Neue": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Beiruti": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Belanosima": { "v": ["regular", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "600", "700"], "i": ["normal"] }, "Belgrano": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Bellefair": { "v": ["regular"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Belleza": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Bellota": { "v": ["300", "300italic", "regular", "italic", "700", "700italic"], "subset": ["cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "700"], "i": ["normal", "italic"] }, "Bellota Text": { "v": ["300", "300italic", "regular", "italic", "700", "700italic"], "subset": ["cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "700"], "i": ["normal", "italic"] }, "BenchNine": { "v": ["300", "regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "Benne": { "v": ["regular"], "subset": ["kannada", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Bentham": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Berkshire Swash": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Besley": { "v": ["regular", "500", "600", "700", "800", "900", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Beth Ellen": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Bevan": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "BhuTuka Expanded One": { "v": ["regular"], "subset": ["gurmukhi", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Big Shoulders Display": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Big Shoulders Inline Display": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Big Shoulders Inline Text": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Big Shoulders Stencil Display": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Big Shoulders Stencil Text": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Big Shoulders Text": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Bigelow Rules": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Bigshot One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Bilbo": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bilbo Swash Caps": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "BioRhyme": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "BioRhyme Expanded": { "v": ["200", "300", "regular", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "700", "800"], "i": ["normal"] }, "Birthstone": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Birthstone Bounce": { "v": ["regular", "500"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500"], "i": ["normal"] }, "Biryani": { "v": ["200", "300", "regular", "600", "700", "800", "900"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "600", "700", "800", "900"], "i": ["normal"] }, "Bitter": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Black And White Picture": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Black Han Sans": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Black Ops One": { "v": ["regular"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Blaka": { "v": ["regular"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Blaka Hollow": { "v": ["regular"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Blaka Ink": { "v": ["regular"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Blinker": { "v": ["100", "200", "300", "regular", "600", "700", "800", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "600", "700", "800", "900"], "i": ["normal"] }, "Bodoni Moda": { "v": ["regular", "500", "600", "700", "800", "900", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Bodoni Moda SC": { "v": ["regular", "500", "600", "700", "800", "900", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Bokor": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Bona Nova": { "v": ["regular", "italic", "700"], "subset": ["cyrillic", "cyrillic-ext", "greek", "hebrew", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Bona Nova SC": { "v": ["regular", "italic", "700"], "subset": ["cyrillic", "cyrillic-ext", "greek", "hebrew", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Bonbon": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Bonheur Royale": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Boogaloo": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Borel": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bowlby One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Bowlby One SC": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Braah One": { "v": ["regular"], "subset": ["gurmukhi", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Brawler": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Bree Serif": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Bricolage Grotesque": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Bruno Ace": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Bruno Ace SC": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Brygada 1918": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Bubblegum Sans": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Bubbler One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Buda": { "v": ["300"], "subset": ["latin"], "weight": ["Default", "300", "400"], "i": ["normal"] }, "Buenard": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Bungee": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bungee Hairline": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bungee Inline": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bungee Outline": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bungee Shade": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bungee Spice": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Bungee Tint": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Butcherman": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Butterfly Kids": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Cabin": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Cabin Condensed": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Cabin Sketch": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Cactus Classical Serif": { "v": ["regular"], "subset": ["chinese-hongkong", "cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Caesar Dressing": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Cagliostro": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Cairo": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Cairo Play": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Caladea": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Calistoga": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Calligraffitti": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Cambay": { "v": ["regular", "italic", "700", "700italic"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Cambo": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Candal": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Cantarell": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Cantata One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Cantora One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Caprasimo": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Capriola": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Caramel": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Carattere": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Cardo": { "v": ["regular", "italic", "700"], "subset": ["greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Carlito": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Carme": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Carrois Gothic": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Carrois Gothic SC": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Carter One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Castoro": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Castoro Titling": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Catamaran": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "tamil"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Caudex": { "v": ["regular", "italic", "700", "700italic"], "subset": ["greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Caveat": { "v": ["regular", "500", "600", "700"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Caveat Brush": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Cedarville Cursive": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Ceviche One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Chakra Petch": { "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Changa": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Changa One": { "v": ["regular", "italic"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Chango": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Charis SIL": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Charm": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Charmonman": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Chathura": { "v": ["100", "300", "regular", "700", "800"], "subset": ["latin", "telugu"], "weight": ["Default", "100", "300", "400", "700", "800"], "i": ["normal"] }, "Chau Philomene One": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Chela One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Chelsea Market": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Chenla": { "v": ["regular"], "subset": ["khmer"], "weight": ["Default", "400"], "i": ["normal"] }, "Cherish": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Cherry Bomb One": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Cherry Cream Soda": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Cherry Swash": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Chewy": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Chicle": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Chilanka": { "v": ["regular"], "subset": ["latin", "latin-ext", "malayalam"], "weight": ["Default", "400"], "i": ["normal"] }, "Chivo": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Chivo Mono": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Chocolate Classical Sans": { "v": ["regular"], "subset": ["chinese-hongkong", "cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Chokokutai": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Chonburi": { "v": ["regular"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Cinzel": { "v": ["regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Cinzel Decorative": { "v": ["regular", "700", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700", "900"], "i": ["normal"] }, "Clicker Script": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Climate Crisis": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Coda": { "v": ["regular", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "800"], "i": ["normal"] }, "Codystar": { "v": ["300", "regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400"], "i": ["normal"] }, "Coiny": { "v": ["regular"], "subset": ["latin", "latin-ext", "tamil", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Combo": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Comfortaa": { "v": ["300", "regular", "500", "600", "700"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Comforter": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Comforter Brush": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Comic Neue": { "v": ["300", "300italic", "regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "300", "400", "700"], "i": ["normal", "italic"] }, "Coming Soon": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Comme": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Commissioner": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Concert One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Condiment": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Content": { "v": ["regular", "700"], "subset": ["khmer"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Contrail One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Convergence": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Cookie": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Copse": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Corben": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Corinthia": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Cormorant": { "v": ["300", "regular", "500", "600", "700", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Cormorant Garamond": { "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Cormorant Infant": { "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Cormorant SC": { "v": ["300", "regular", "500", "600", "700"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Cormorant Unicase": { "v": ["300", "regular", "500", "600", "700"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Cormorant Upright": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Courgette": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Courier Prime": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Cousine": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "hebrew", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Coustard": { "v": ["regular", "900"], "subset": ["latin"], "weight": ["Default", "400", "900"], "i": ["normal"] }, "Covered By Your Grace": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Crafty Girls": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Creepster": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Crete Round": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Crimson Pro": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Crimson Text": { "v": ["regular", "italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "600", "700"], "i": ["normal", "italic"] }, "Croissant One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Crushed": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Cuprum": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Cute Font": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Cutive": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Cutive Mono": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "DM Mono": { "v": ["300", "300italic", "regular", "italic", "500", "500italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500"], "i": ["normal", "italic"] }, "DM Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "DM Serif Display": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "DM Serif Text": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Dai Banna SIL": { "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext", "new-tai-lue"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Damion": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Dancing Script": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Danfo": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Dangrek": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Darker Grotesque": { "v": ["300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Darumadrop One": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "David Libre": { "v": ["regular", "500", "700"], "subset": ["hebrew", "latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "400", "500", "700"], "i": ["normal"] }, "Dawning of a New Day": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Days One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Dekko": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Dela Gothic One": { "v": ["regular"], "subset": ["cyrillic", "greek", "japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Delicious Handrawn": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Delius": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Delius Swash Caps": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Delius Unicase": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Della Respira": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Denk One": { "v": ["regular"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Devonshire": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Dhurjati": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Didact Gothic": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Diphylleia": { "v": ["regular"], "subset": ["korean", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Diplomata": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Diplomata SC": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Do Hyeon": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Dokdo": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Domine": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Donegal One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Dongle": { "v": ["300", "regular", "700"], "subset": ["korean", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "Doppio One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Dorsa": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Dosis": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "DotGothic16": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Doto": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Dr Sugiyama": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Duru Sans": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "DynaPuff": { "v": ["regular", "500", "600", "700"], "subset": ["cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Dynalight": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "EB Garamond": { "v": ["regular", "500", "600", "700", "800", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Eagle Lake": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "East Sea Dokdo": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Eater": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Economica": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Eczar": { "v": ["regular", "500", "600", "700", "800"], "subset": ["devanagari", "greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Edu AU VIC WA NT Arrows": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Edu AU VIC WA NT Dots": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Edu AU VIC WA NT Guides": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Edu AU VIC WA NT Hand": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Edu AU VIC WA NT Pre": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Edu NSW ACT Foundation": { "v": ["regular", "500", "600", "700"], "subset": ["latin"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Edu QLD Beginner": { "v": ["regular", "500", "600", "700"], "subset": ["latin"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Edu SA Beginner": { "v": ["regular", "500", "600", "700"], "subset": ["latin"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Edu TAS Beginner": { "v": ["regular", "500", "600", "700"], "subset": ["latin"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Edu VIC WA NT Beginner": { "v": ["regular", "500", "600", "700"], "subset": ["latin"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "El Messiri": { "v": ["regular", "500", "600", "700"], "subset": ["arabic", "cyrillic", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Electrolize": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Elsie": { "v": ["regular", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "900"], "i": ["normal"] }, "Elsie Swash Caps": { "v": ["regular", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "900"], "i": ["normal"] }, "Emblema One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Emilys Candy": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Encode Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Encode Sans Condensed": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Encode Sans Expanded": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Encode Sans SC": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Encode Sans Semi Condensed": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Encode Sans Semi Expanded": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Engagement": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Englebert": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Enriqueta": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Ephesis": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Epilogue": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Erica One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Esteban": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Estonia": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Euphoria Script": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ewert": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Exo": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Exo 2": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Expletus Sans": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Explora": { "v": ["regular"], "subset": ["cherokee", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Faculty Glyphic": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Fahkwang": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Familjen Grotesk": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Fanwood Text": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Farro": { "v": ["300", "regular", "500", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "700"], "i": ["normal"] }, "Farsan": { "v": ["regular"], "subset": ["gujarati", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Fascinate": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Fascinate Inline": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Faster One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Fasthand": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Fauna One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Faustina": { "v": ["300", "regular", "500", "600", "700", "800", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Federant": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Federo": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Felipa": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Fenix": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Festive": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Figtree": { "v": ["300", "regular", "500", "600", "700", "800", "900", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Finger Paint": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Finlandica": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Fira Code": { "v": ["300", "regular", "500", "600", "700"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Fira Mono": { "v": ["regular", "500", "700"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "400", "500", "700"], "i": ["normal"] }, "Fira Sans": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Fira Sans Condensed": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Fira Sans Extra Condensed": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Fjalla One": { "v": ["regular"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Fjord One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Flamenco": { "v": ["300", "regular"], "subset": ["latin"], "weight": ["Default", "300", "400"], "i": ["normal"] }, "Flavors": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Fleur De Leah": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Flow Block": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Flow Circular": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Flow Rounded": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Foldit": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Fondamento": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Fontdiner Swanky": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Forum": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Fragment Mono": { "v": ["regular", "italic"], "subset": ["cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Francois One": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Frank Ruhl Libre": { "v": ["300", "regular", "500", "600", "700", "800", "900"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Fraunces": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Freckle Face": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Fredericka the Great": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Fredoka": { "v": ["300", "regular", "500", "600", "700"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Freehand": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Freeman": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Fresca": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Frijole": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Fruktur": { "v": ["regular", "italic"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Fugaz One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Fuggles": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Funnel Display": { "v": ["300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Funnel Sans": { "v": ["300", "regular", "500", "600", "700", "800", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Fustat": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Fuzzy Bubbles": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "GFS Didot": { "v": ["regular"], "subset": ["greek"], "weight": ["Default", "400"], "i": ["normal"] }, "GFS Neohellenic": { "v": ["regular", "italic", "700", "700italic"], "subset": ["greek"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Ga Maamli": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Gabarito": { "v": ["regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Gabriela": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Gaegu": { "v": ["300", "regular", "700"], "subset": ["korean", "latin"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "Gafata": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Gajraj One": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Galada": { "v": ["regular"], "subset": ["bengali", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Galdeano": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Galindo": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Gamja Flower": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Gantari": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Gasoek One": { "v": ["regular"], "subset": ["korean", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Gayathri": { "v": ["100", "regular", "700"], "subset": ["latin", "malayalam"], "weight": ["Default", "100", "400", "700"], "i": ["normal"] }, "Geist": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Geist Mono": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Gelasio": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Gemunu Libre": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "sinhala"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Genos": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cherokee", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Gentium Book Plus": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Gentium Plus": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Geo": { "v": ["regular", "italic"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Geologica": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Georama": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Geostar": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Geostar Fill": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Germania One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Gideon Roman": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Gidugu": { "v": ["regular"], "subset": ["latin", "latin-ext", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Gilda Display": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Girassol": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Give You Glory": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Glass Antiqua": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Glegoo": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Gloock": { "v": ["regular"], "subset": ["cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Gloria Hallelujah": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Glory": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Gluten": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Goblin One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Gochi Hand": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Goldman": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Golos Text": { "v": ["regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Gorditas": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Gothic A1": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "korean", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Gotu": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Goudy Bookletter 1911": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Gowun Batang": { "v": ["regular", "700"], "subset": ["korean", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Gowun Dodum": { "v": ["regular"], "subset": ["korean", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Graduate": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Grand Hotel": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Grandiflora One": { "v": ["regular"], "subset": ["korean", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Grandstander": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Grape Nuts": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Gravitas One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Great Vibes": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Grechen Fuemen": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Grenze": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Grenze Gotisch": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Grey Qo": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Griffy": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Gruppo": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Gudea": { "v": ["regular", "italic", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Gugi": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Gulzar": { "v": ["regular"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Gupter": { "v": ["regular", "500", "700"], "subset": ["latin"], "weight": ["Default", "400", "500", "700"], "i": ["normal"] }, "Gurajada": { "v": ["regular"], "subset": ["latin", "latin-ext", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Gwendolyn": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Habibi": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Hachi Maru Pop": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Hahmlet": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["korean", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Halant": { "v": ["300", "regular", "500", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Hammersmith One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Hanalei": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Hanalei Fill": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Handjet": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["arabic", "armenian", "cyrillic", "cyrillic-ext", "greek", "hebrew", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Handlee": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Hanken Grotesk": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Hanuman": { "v": ["100", "300", "regular", "700", "900"], "subset": ["khmer", "latin"], "weight": ["Default", "100", "300", "400", "700", "900"], "i": ["normal"] }, "Happy Monkey": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Harmattan": { "v": ["regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Headland One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Hedvig Letters Sans": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Hedvig Letters Serif": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Heebo": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["hebrew", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Henny Penny": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Hepta Slab": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Herr Von Muellerhoff": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Hi Melody": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Hina Mincho": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Hind": { "v": ["300", "regular", "500", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Hind Guntur": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "telugu"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Hind Madurai": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "tamil"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Hind Mysuru": { "v": ["300", "regular", "500", "600", "700"], "subset": ["kannada", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Hind Siliguri": { "v": ["300", "regular", "500", "600", "700"], "subset": ["bengali", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Hind Vadodara": { "v": ["300", "regular", "500", "600", "700"], "subset": ["gujarati", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Holtwood One SC": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Homemade Apple": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Homenaje": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Honk": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Host Grotesk": { "v": ["300", "regular", "500", "600", "700", "800", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Hubballi": { "v": ["regular"], "subset": ["kannada", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Hubot Sans": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Hurricane": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "IBM Plex Mono": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "IBM Plex Sans": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "IBM Plex Sans Arabic": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["arabic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "IBM Plex Sans Condensed": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "IBM Plex Sans Devanagari": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["cyrillic-ext", "devanagari", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "IBM Plex Sans Hebrew": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "IBM Plex Sans JP": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "IBM Plex Sans KR": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["korean", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "IBM Plex Sans Thai": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["cyrillic-ext", "latin", "latin-ext", "thai"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "IBM Plex Sans Thai Looped": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["cyrillic-ext", "latin", "latin-ext", "thai"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "IBM Plex Serif": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "IM Fell DW Pica": { "v": ["regular", "italic"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "IM Fell DW Pica SC": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "IM Fell Double Pica": { "v": ["regular", "italic"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "IM Fell Double Pica SC": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "IM Fell English": { "v": ["regular", "italic"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "IM Fell English SC": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "IM Fell French Canon": { "v": ["regular", "italic"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "IM Fell French Canon SC": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "IM Fell Great Primer": { "v": ["regular", "italic"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "IM Fell Great Primer SC": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Ibarra Real Nova": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Iceberg": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Iceland": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Imbue": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Imperial Script": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Imprima": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Inclusive Sans": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Inconsolata": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Inder": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Indie Flower": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ingrid Darling": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Inika": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Inknut Antiqua": { "v": ["300", "regular", "500", "600", "700", "800", "900"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Inria Sans": { "v": ["300", "300italic", "regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "700"], "i": ["normal", "italic"] }, "Inria Serif": { "v": ["300", "300italic", "regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "700"], "i": ["normal", "italic"] }, "Inspiration": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Instrument Sans": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Instrument Serif": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Inter": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Inter Tight": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Irish Grover": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Island Moments": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Istok Web": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Italiana": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Italianno": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Itim": { "v": ["regular"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Jacquard 12": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Jacquard 12 Charted": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Jacquard 24": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jacquard 24 Charted": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jacquarda Bastarda 9": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Jacquarda Bastarda 9 Charted": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Jacques Francois": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Jacques Francois Shadow": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Jaini": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jaini Purva": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jaldi": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Jaro": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Jersey 10": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jersey 10 Charted": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jersey 15": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jersey 15 Charted": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jersey 20": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jersey 20 Charted": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jersey 25": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jersey 25 Charted": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "JetBrains Mono": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Jim Nightshade": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Joan": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jockey One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jolly Lodger": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jomhuria": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jomolhari": { "v": ["regular"], "subset": ["latin", "tibetan"], "weight": ["Default", "400"], "i": ["normal"] }, "Josefin Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Josefin Slab": { "v": ["100", "200", "300", "regular", "500", "600", "700", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Jost": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Joti One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Jua": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Judson": { "v": ["regular", "italic", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Julee": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Julius Sans One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Junge": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Jura": { "v": ["300", "regular", "500", "600", "700"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "kayah-li", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Just Another Hand": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Just Me Again Down Here": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "K2D": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Kablammo": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Kadwa": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Kaisei Decol": { "v": ["regular", "500", "700"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400", "500", "700"], "i": ["normal"] }, "Kaisei HarunoUmi": { "v": ["regular", "500", "700"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400", "500", "700"], "i": ["normal"] }, "Kaisei Opti": { "v": ["regular", "500", "700"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400", "500", "700"], "i": ["normal"] }, "Kaisei Tokumin": { "v": ["regular", "500", "700", "800"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400", "500", "700", "800"], "i": ["normal"] }, "Kalam": { "v": ["300", "regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "Kalnia": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "math"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Kalnia Glaze": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Kameron": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Kanit": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Kantumruy Pro": { "v": ["100", "200", "300", "regular", "500", "600", "700", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["khmer", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Karantina": { "v": ["300", "regular", "700"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "Karla": { "v": ["200", "300", "regular", "500", "600", "700", "800", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Karla Tamil Inclined": { "v": ["regular", "700"], "subset": ["tamil"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Karla Tamil Upright": { "v": ["regular", "700"], "subset": ["tamil"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Karma": { "v": ["300", "regular", "500", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Katibeh": { "v": ["regular"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kaushan Script": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kavivanar": { "v": ["regular"], "subset": ["latin", "latin-ext", "tamil"], "weight": ["Default", "400"], "i": ["normal"] }, "Kavoon": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kay Pho Du": { "v": ["regular", "500", "600", "700"], "subset": ["kayah-li", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Kdam Thmor Pro": { "v": ["regular"], "subset": ["khmer", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Keania One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kelly Slab": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kenia": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Khand": { "v": ["300", "regular", "500", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Khmer": { "v": ["regular"], "subset": ["khmer"], "weight": ["Default", "400"], "i": ["normal"] }, "Khula": { "v": ["300", "regular", "600", "700", "800"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "600", "700", "800"], "i": ["normal"] }, "Kings": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Kirang Haerang": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Kite One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kiwi Maru": { "v": ["300", "regular", "500"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500"], "i": ["normal"] }, "Klee One": { "v": ["regular", "600"], "subset": ["cyrillic", "greek-ext", "japanese", "latin", "latin-ext"], "weight": ["Default", "400", "600"], "i": ["normal"] }, "Knewave": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "KoHo": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Kodchasan": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Kode Mono": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Koh Santepheap": { "v": ["100", "300", "regular", "700", "900"], "subset": ["khmer", "latin"], "weight": ["Default", "100", "300", "400", "700", "900"], "i": ["normal"] }, "Kolker Brush": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Konkhmer Sleokchher": { "v": ["regular"], "subset": ["khmer", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kosugi": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kosugi Maru": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kotta One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Koulen": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Kranky": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Kreon": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Kristi": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Krona One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Krub": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Kufam": { "v": ["regular", "500", "600", "700", "800", "900", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Kulim Park": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "600", "700"], "i": ["normal", "italic"] }, "Kumar One": { "v": ["regular"], "subset": ["gujarati", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kumar One Outline": { "v": ["regular"], "subset": ["gujarati", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Kumbh Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Kurale": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "LXGW WenKai Mono TC": { "v": ["300", "regular", "700"], "subset": ["chinese-hongkong", "cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "lisu", "vietnamese"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "LXGW WenKai TC": { "v": ["300", "regular", "700"], "subset": ["chinese-hongkong", "cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "lisu", "vietnamese"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "La Belle Aurore": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Labrada": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Lacquer": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Laila": { "v": ["300", "regular", "500", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Lakki Reddy": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Lalezar": { "v": ["regular"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Lancelot": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Langar": { "v": ["regular"], "subset": ["gurmukhi", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Lateef": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Lato": { "v": ["100", "100italic", "300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "300", "400", "700", "900"], "i": ["normal", "italic"] }, "Lavishly Yours": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "League Gothic": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "League Script": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "League Spartan": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Leckerli One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Ledger": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Lekton": { "v": ["regular", "italic", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Lemon": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Lemonada": { "v": ["300", "regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Lexend": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Lexend Deca": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Lexend Exa": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Lexend Giga": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Lexend Mega": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Lexend Peta": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Lexend Tera": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Lexend Zetta": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Libre Barcode 128": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Libre Barcode 128 Text": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Libre Barcode 39": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Libre Barcode 39 Extended": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Libre Barcode 39 Extended Text": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Libre Barcode 39 Text": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Libre Barcode EAN13 Text": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Libre Baskerville": { "v": ["regular", "italic", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Libre Bodoni": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Libre Caslon Display": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Libre Caslon Text": { "v": ["regular", "italic", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Libre Franklin": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Licorice": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Life Savers": { "v": ["regular", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700", "800"], "i": ["normal"] }, "Lilita One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Lily Script One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Limelight": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Linden Hill": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Linefont": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Lisu Bosa": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "lisu"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Literata": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Liu Jian Mao Cao": { "v": ["regular"], "subset": ["chinese-simplified", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Livvic": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "900", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "900"], "i": ["normal", "italic"] }, "Lobster": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Lobster Two": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Londrina Outline": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Londrina Shadow": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Londrina Sketch": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Londrina Solid": { "v": ["100", "300", "regular", "900"], "subset": ["latin"], "weight": ["Default", "100", "300", "400", "900"], "i": ["normal"] }, "Long Cang": { "v": ["regular"], "subset": ["chinese-simplified", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Lora": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Love Light": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Love Ya Like A Sister": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Loved by the King": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Lovers Quarrel": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Luckiest Guy": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Lugrasimo": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Lumanosimo": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Lunasima": { "v": ["regular", "700"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "hebrew", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Lusitana": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Lustria": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Luxurious Roman": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Luxurious Script": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "M PLUS 1": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "M PLUS 1 Code": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "M PLUS 1p": { "v": ["100", "300", "regular", "500", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "hebrew", "japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "300", "400", "500", "700", "800", "900"], "i": ["normal"] }, "M PLUS 2": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "M PLUS Code Latin": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "M PLUS Rounded 1c": { "v": ["100", "300", "regular", "500", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "hebrew", "japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "300", "400", "500", "700", "800", "900"], "i": ["normal"] }, "Ma Shan Zheng": { "v": ["regular"], "subset": ["chinese-simplified", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Macondo": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Macondo Swash Caps": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Mada": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Madimi One": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Magra": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Maiden Orange": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Maitree": { "v": ["200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Major Mono Display": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Mako": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Mali": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Mallanna": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Maname": { "v": ["regular"], "subset": ["latin", "latin-ext", "sinhala", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Mandali": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Manjari": { "v": ["100", "regular", "700"], "subset": ["latin", "latin-ext", "malayalam"], "weight": ["Default", "100", "400", "700"], "i": ["normal"] }, "Manrope": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Mansalva": { "v": ["regular"], "subset": ["greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Manuale": { "v": ["300", "regular", "500", "600", "700", "800", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Marcellus": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Marcellus SC": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Marck Script": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Margarine": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Marhey": { "v": ["300", "regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Markazi Text": { "v": ["regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Marko One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Marmelad": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Martel": { "v": ["200", "300", "regular", "600", "700", "800", "900"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "600", "700", "800", "900"], "i": ["normal"] }, "Martel Sans": { "v": ["200", "300", "regular", "600", "700", "800", "900"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "600", "700", "800", "900"], "i": ["normal"] }, "Martian Mono": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Marvel": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Mate": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Mate SC": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Matemasie": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Material Icons": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Material Icons Outlined": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Material Icons Round": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Material Icons Sharp": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Material Icons Two Tone": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Material Symbols Outlined": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Material Symbols Rounded": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Material Symbols Sharp": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Maven Pro": { "v": ["regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "McLaren": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Mea Culpa": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Meddon": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "MedievalSharp": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Medula One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Meera Inimai": { "v": ["regular"], "subset": ["latin", "tamil"], "weight": ["Default", "400"], "i": ["normal"] }, "Megrim": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Meie Script": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Meow Script": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Merienda": { "v": ["300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Merriweather": { "v": ["300", "300italic", "regular", "italic", "700", "700italic", "900", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "700", "900"], "i": ["normal", "italic"] }, "Merriweather Sans": { "v": ["300", "regular", "500", "600", "700", "800", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Metal": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Metal Mania": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Metamorphous": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Metrophobic": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Michroma": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Micro 5": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Micro 5 Charted": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Milonga": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Miltonian": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Miltonian Tattoo": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Mina": { "v": ["regular", "700"], "subset": ["bengali", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Mingzat": { "v": ["regular"], "subset": ["latin", "latin-ext", "lepcha"], "weight": ["Default", "400"], "i": ["normal"] }, "Miniver": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Miriam Libre": { "v": ["regular", "500", "600", "700"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Mirza": { "v": ["regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Miss Fajardose": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Mitr": { "v": ["200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Mochiy Pop One": { "v": ["regular"], "subset": ["japanese", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Mochiy Pop P One": { "v": ["regular"], "subset": ["japanese", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Modak": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Modern Antiqua": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Moderustic": { "v": ["300", "regular", "500", "600", "700", "800"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Mogra": { "v": ["regular"], "subset": ["gujarati", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Mohave": { "v": ["300", "regular", "500", "600", "700", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Moirai One": { "v": ["regular"], "subset": ["korean", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Molengo": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Molle": { "v": ["italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Mona Sans": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Monda": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Monofett": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Monomaniac One": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Monoton": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Monsieur La Doulaise": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Montaga": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Montagu Slab": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "MonteCarlo": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Montez": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Montserrat": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Montserrat Alternates": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Montserrat Subrayada": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Montserrat Underline": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Moo Lah Lah": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Mooli": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Moon Dance": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Moul": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Moulpali": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Mountains of Christmas": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Mouse Memoirs": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Mr Bedfort": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Mr Dafoe": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Mr De Haviland": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Mrs Saint Delafield": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Mrs Sheppards": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ms Madi": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Mukta": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Mukta Mahee": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["gurmukhi", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Mukta Malar": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "tamil"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Mukta Vaani": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["gujarati", "latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Mulish": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Murecho": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "greek", "japanese", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "MuseoModerno": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "My Soul": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Mynerve": { "v": ["regular"], "subset": ["greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Mystery Quest": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "NTR": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Nabla": { "v": ["regular"], "subset": ["cyrillic-ext", "latin", "latin-ext", "math", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Namdhinggo": { "v": ["regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "limbu"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Nanum Brush Script": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Nanum Gothic": { "v": ["regular", "700", "800"], "subset": ["korean", "latin"], "weight": ["Default", "400", "700", "800"], "i": ["normal"] }, "Nanum Gothic Coding": { "v": ["regular", "700"], "subset": ["korean", "latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Nanum Myeongjo": { "v": ["regular", "700", "800"], "subset": ["korean", "latin"], "weight": ["Default", "400", "700", "800"], "i": ["normal"] }, "Nanum Pen Script": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Narnoor": { "v": ["regular", "500", "600", "700", "800"], "subset": ["gunjala-gondi", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Neonderthaw": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Nerko One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Neucha": { "v": ["regular"], "subset": ["cyrillic", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Neuton": { "v": ["200", "300", "regular", "italic", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "700", "800"], "i": ["normal", "italic"] }, "New Amsterdam": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "New Rocker": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "New Tegomin": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "News Cycle": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Newsreader": { "v": ["200", "300", "regular", "500", "600", "700", "800", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Niconne": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Niramit": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Nixie One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Nobile": { "v": ["regular", "italic", "500", "500italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "700"], "i": ["normal", "italic"] }, "Nokora": { "v": ["100", "300", "regular", "700", "900"], "subset": ["khmer", "latin"], "weight": ["Default", "100", "300", "400", "700", "900"], "i": ["normal"] }, "Norican": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Nosifer": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Notable": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Nothing You Could Do": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Noticia Text": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Noto Color Emoji": { "v": ["regular"], "subset": ["emoji"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Emoji": { "v": ["300", "regular", "500", "600", "700"], "subset": ["emoji"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Kufi Arabic": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["arabic", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Music": { "v": ["regular"], "subset": ["latin", "latin-ext", "music"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Naskh Arabic": { "v": ["regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Nastaliq Urdu": { "v": ["regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Rashi Hebrew": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["greek-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "devanagari", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Noto Sans Adlam": { "v": ["regular", "500", "600", "700"], "subset": ["adlam", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Adlam Unjoined": { "v": ["regular", "500", "600", "700"], "subset": ["adlam", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Anatolian Hieroglyphs": { "v": ["regular"], "subset": ["anatolian-hieroglyphs", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Arabic": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["arabic"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Armenian": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["armenian", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Avestan": { "v": ["regular"], "subset": ["avestan", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Balinese": { "v": ["regular", "500", "600", "700"], "subset": ["balinese", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Bamum": { "v": ["regular", "500", "600", "700"], "subset": ["bamum", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Bassa Vah": { "v": ["regular", "500", "600", "700"], "subset": ["bassa-vah", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Batak": { "v": ["regular"], "subset": ["batak", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Bengali": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["bengali", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Bhaiksuki": { "v": ["regular"], "subset": ["bhaiksuki", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Brahmi": { "v": ["regular"], "subset": ["brahmi", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Buginese": { "v": ["regular"], "subset": ["buginese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Buhid": { "v": ["regular"], "subset": ["buhid", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Canadian Aboriginal": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["canadian-aboriginal", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Carian": { "v": ["regular"], "subset": ["carian", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Caucasian Albanian": { "v": ["regular"], "subset": ["caucasian-albanian", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Chakma": { "v": ["regular"], "subset": ["chakma", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Cham": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cham", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Cherokee": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cherokee", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Chorasmian": { "v": ["regular"], "subset": ["chorasmian", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Coptic": { "v": ["regular"], "subset": ["coptic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Cuneiform": { "v": ["regular"], "subset": ["cuneiform", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Cypriot": { "v": ["regular"], "subset": ["cypriot", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Cypro Minoan": { "v": ["regular"], "subset": ["cypro-minoan", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Deseret": { "v": ["regular"], "subset": ["deseret", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Devanagari": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Display": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Noto Sans Duployan": { "v": ["regular", "700"], "subset": ["duployan", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Noto Sans Egyptian Hieroglyphs": { "v": ["regular"], "subset": ["egyptian-hieroglyphs", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Elbasan": { "v": ["regular"], "subset": ["elbasan", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Elymaic": { "v": ["regular"], "subset": ["elymaic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Ethiopic": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["ethiopic", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Georgian": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic-ext", "georgian", "greek-ext", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Glagolitic": { "v": ["regular"], "subset": ["cyrillic-ext", "glagolitic", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Gothic": { "v": ["regular"], "subset": ["gothic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Grantha": { "v": ["regular"], "subset": ["grantha", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Gujarati": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["gujarati", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Gunjala Gondi": { "v": ["regular", "500", "600", "700"], "subset": ["gunjala-gondi", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Gurmukhi": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["gurmukhi", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans HK": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["chinese-hongkong", "cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Hanifi Rohingya": { "v": ["regular", "500", "600", "700"], "subset": ["hanifi-rohingya", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Hanunoo": { "v": ["regular"], "subset": ["hanunoo", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Hatran": { "v": ["regular"], "subset": ["hatran", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Hebrew": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic-ext", "greek-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Imperial Aramaic": { "v": ["regular"], "subset": ["imperial-aramaic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Indic Siyaq Numbers": { "v": ["regular"], "subset": ["indic-siyaq-numbers", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Inscriptional Pahlavi": { "v": ["regular"], "subset": ["inscriptional-pahlavi", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Inscriptional Parthian": { "v": ["regular"], "subset": ["inscriptional-parthian", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans JP": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Javanese": { "v": ["regular", "500", "600", "700"], "subset": ["javanese", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans KR": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "korean", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Kaithi": { "v": ["regular"], "subset": ["kaithi", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Kannada": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["kannada", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Kawi": { "v": ["regular", "500", "600", "700"], "subset": ["kawi", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Kayah Li": { "v": ["regular", "500", "600", "700"], "subset": ["kayah-li", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Kharoshthi": { "v": ["regular"], "subset": ["kharoshthi", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Khmer": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["khmer", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Khojki": { "v": ["regular"], "subset": ["khojki", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Khudawadi": { "v": ["regular"], "subset": ["khudawadi", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Lao": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["lao", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Lao Looped": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["lao", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Lepcha": { "v": ["regular"], "subset": ["latin", "latin-ext", "lepcha"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Limbu": { "v": ["regular"], "subset": ["latin", "latin-ext", "limbu"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Linear A": { "v": ["regular"], "subset": ["latin", "latin-ext", "linear-a"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Linear B": { "v": ["regular"], "subset": ["latin", "latin-ext", "linear-b"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Lisu": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "lisu"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Lycian": { "v": ["regular"], "subset": ["lycian"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Lydian": { "v": ["regular"], "subset": ["latin", "latin-ext", "lydian"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Mahajani": { "v": ["regular"], "subset": ["latin", "latin-ext", "mahajani"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Malayalam": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "malayalam"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Mandaic": { "v": ["regular"], "subset": ["latin", "latin-ext", "mandaic"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Manichaean": { "v": ["regular"], "subset": ["latin", "latin-ext", "manichaean"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Marchen": { "v": ["regular"], "subset": ["latin", "latin-ext", "marchen"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Masaram Gondi": { "v": ["regular"], "subset": ["latin", "latin-ext", "masaram-gondi"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Math": { "v": ["regular"], "subset": ["math"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Mayan Numerals": { "v": ["regular"], "subset": ["latin", "latin-ext", "mayan-numerals"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Medefaidrin": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "medefaidrin"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Meetei Mayek": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "meetei-mayek"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Mende Kikakui": { "v": ["regular"], "subset": ["latin", "latin-ext", "mende-kikakui"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Meroitic": { "v": ["regular"], "subset": ["latin", "latin-ext", "meroitic", "meroitic-cursive", "meroitic-hieroglyphs"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Miao": { "v": ["regular"], "subset": ["latin", "latin-ext", "miao"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Modi": { "v": ["regular"], "subset": ["latin", "latin-ext", "modi"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Mongolian": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "mongolian", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Mono": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Mro": { "v": ["regular"], "subset": ["latin", "latin-ext", "mro"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Multani": { "v": ["regular"], "subset": ["latin", "latin-ext", "multani"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Myanmar": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["myanmar"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans NKo": { "v": ["regular"], "subset": ["latin", "latin-ext", "nko"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans NKo Unjoined": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "nko"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Nabataean": { "v": ["regular"], "subset": ["latin", "latin-ext", "nabataean"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Nag Mundari": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "nag-mundari"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Nandinagari": { "v": ["regular"], "subset": ["latin", "latin-ext", "nandinagari"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans New Tai Lue": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "new-tai-lue"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Newa": { "v": ["regular"], "subset": ["latin", "latin-ext", "newa"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Nushu": { "v": ["regular"], "subset": ["latin", "latin-ext", "nushu"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Ogham": { "v": ["regular"], "subset": ["latin", "latin-ext", "ogham"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Ol Chiki": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "ol-chiki"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Old Hungarian": { "v": ["regular"], "subset": ["latin", "latin-ext", "old-hungarian"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Old Italic": { "v": ["regular"], "subset": ["latin", "latin-ext", "old-italic"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Old North Arabian": { "v": ["regular"], "subset": ["latin", "latin-ext", "old-north-arabian"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Old Permic": { "v": ["regular"], "subset": ["cyrillic-ext", "latin", "latin-ext", "old-permic"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Old Persian": { "v": ["regular"], "subset": ["latin", "latin-ext", "old-persian"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Old Sogdian": { "v": ["regular"], "subset": ["latin", "latin-ext", "old-sogdian"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Old South Arabian": { "v": ["regular"], "subset": ["latin", "latin-ext", "old-south-arabian"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Old Turkic": { "v": ["regular"], "subset": ["latin", "latin-ext", "old-turkic"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Oriya": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "oriya"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Osage": { "v": ["regular"], "subset": ["latin", "latin-ext", "osage"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Osmanya": { "v": ["regular"], "subset": ["latin", "latin-ext", "osmanya"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Pahawh Hmong": { "v": ["regular"], "subset": ["latin", "latin-ext", "pahawh-hmong"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Palmyrene": { "v": ["regular"], "subset": ["latin", "latin-ext", "palmyrene"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Pau Cin Hau": { "v": ["regular"], "subset": ["latin", "latin-ext", "pau-cin-hau"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Phags Pa": { "v": ["regular"], "subset": ["phags-pa"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Phoenician": { "v": ["regular"], "subset": ["latin", "latin-ext", "phoenician"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Psalter Pahlavi": { "v": ["regular"], "subset": ["latin", "latin-ext", "psalter-pahlavi"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Rejang": { "v": ["regular"], "subset": ["latin", "latin-ext", "rejang"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Runic": { "v": ["regular"], "subset": ["latin", "latin-ext", "runic"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans SC": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["chinese-simplified", "cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Samaritan": { "v": ["regular"], "subset": ["latin", "latin-ext", "samaritan"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Saurashtra": { "v": ["regular"], "subset": ["latin", "latin-ext", "saurashtra"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Sharada": { "v": ["regular"], "subset": ["latin", "latin-ext", "sharada"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Shavian": { "v": ["regular"], "subset": ["latin", "latin-ext", "shavian"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Siddham": { "v": ["regular"], "subset": ["latin", "latin-ext", "siddham"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans SignWriting": { "v": ["regular"], "subset": ["latin", "latin-ext", "signwriting"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Sinhala": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "sinhala"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Sogdian": { "v": ["regular"], "subset": ["latin", "latin-ext", "sogdian"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Sora Sompeng": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "sora-sompeng"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Soyombo": { "v": ["regular"], "subset": ["latin", "latin-ext", "soyombo"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Sundanese": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "sundanese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Syloti Nagri": { "v": ["regular"], "subset": ["latin", "latin-ext", "syloti-nagri"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Symbols": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "symbols"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Symbols 2": { "v": ["regular"], "subset": ["braille", "latin", "latin-ext", "math", "mayan-numerals", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Syriac": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "syriac"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Syriac Eastern": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "syriac"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans TC": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["chinese-traditional", "cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Tagalog": { "v": ["regular"], "subset": ["latin", "latin-ext", "tagalog"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Tagbanwa": { "v": ["regular"], "subset": ["latin", "latin-ext", "tagbanwa"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Tai Le": { "v": ["regular"], "subset": ["latin", "latin-ext", "tai-le"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Tai Tham": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "tai-tham"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Tai Viet": { "v": ["regular"], "subset": ["latin", "latin-ext", "tai-viet"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Takri": { "v": ["regular"], "subset": ["latin", "latin-ext", "takri"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Tamil": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "tamil"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Tamil Supplement": { "v": ["regular"], "subset": ["latin", "latin-ext", "tamil-supplement"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Tangsa": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "tangsa"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Telugu": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "telugu"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Thaana": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "thaana"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Thai": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "thai"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Thai Looped": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "thai"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Sans Tifinagh": { "v": ["regular"], "subset": ["latin", "latin-ext", "tifinagh"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Tirhuta": { "v": ["regular"], "subset": ["latin", "latin-ext", "tirhuta"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Ugaritic": { "v": ["regular"], "subset": ["latin", "latin-ext", "ugaritic"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Vai": { "v": ["regular"], "subset": ["latin", "latin-ext", "vai"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Vithkuqi": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vithkuqi"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Sans Wancho": { "v": ["regular"], "subset": ["latin", "latin-ext", "wancho"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Warang Citi": { "v": ["regular"], "subset": ["latin", "latin-ext", "warang-citi"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Yi": { "v": ["regular"], "subset": ["latin", "latin-ext", "yi"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Sans Zanabazar Square": { "v": ["regular"], "subset": ["latin", "latin-ext", "zanabazar-square"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Serif": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Noto Serif Ahom": { "v": ["regular"], "subset": ["ahom", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Serif Armenian": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["armenian", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Balinese": { "v": ["regular"], "subset": ["balinese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Serif Bengali": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["bengali", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Devanagari": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Display": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Noto Serif Dogra": { "v": ["regular"], "subset": ["dogra", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Serif Ethiopic": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["ethiopic", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Georgian": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["georgian", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Grantha": { "v": ["regular"], "subset": ["grantha", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Serif Gujarati": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["gujarati", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Gurmukhi": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["gurmukhi", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif HK": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["chinese-hongkong", "cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Hebrew": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif JP": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif KR": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "korean", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Kannada": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["kannada", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Khitan Small Script": { "v": ["regular"], "subset": ["khitan-small-script", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Serif Khmer": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["khmer", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Khojki": { "v": ["regular", "500", "600", "700"], "subset": ["khojki", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Serif Lao": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["lao", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Makasar": { "v": ["regular"], "subset": ["latin", "latin-ext", "makasar"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Serif Malayalam": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "malayalam"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Myanmar": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["myanmar"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif NP Hmong": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "nyiakeng-puachue-hmong"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Serif Old Uyghur": { "v": ["regular"], "subset": ["latin", "latin-ext", "old-uyghur"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Serif Oriya": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "oriya"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Serif Ottoman Siyaq": { "v": ["regular"], "subset": ["latin", "latin-ext", "ottoman-siyaq-numbers"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Serif SC": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["chinese-simplified", "cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Sinhala": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "sinhala"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif TC": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["chinese-traditional", "cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Tamil": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "tamil"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Noto Serif Tangut": { "v": ["regular"], "subset": ["latin", "latin-ext", "tangut"], "weight": ["Default", "400"], "i": ["normal"] }, "Noto Serif Telugu": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "telugu"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Thai": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "thai"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Tibetan": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "tibetan"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Noto Serif Toto": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "toto"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Serif Vithkuqi": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vithkuqi"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Serif Yezidi": { "v": ["regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "yezidi"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Traditional Nushu": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "nushu"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Noto Znamenny Musical Notation": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols", "znamenny"], "weight": ["Default", "400"], "i": ["normal"] }, "Nova Cut": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Nova Flat": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Nova Mono": { "v": ["regular"], "subset": ["greek", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Nova Oval": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Nova Round": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Nova Script": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Nova Slim": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Nova Square": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Numans": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Nunito": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Nunito Sans": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Nuosu SIL": { "v": ["regular"], "subset": ["latin", "latin-ext", "yi"], "weight": ["Default", "400"], "i": ["normal"] }, "Odibee Sans": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Odor Mean Chey": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Offside": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Oi": { "v": ["regular"], "subset": ["arabic", "cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "tamil", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Ojuju": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Old Standard TT": { "v": ["regular", "italic", "700"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Oldenburg": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ole": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Oleo Script": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Oleo Script Swash Caps": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Onest": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Oooh Baby": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Open Sans": { "v": ["300", "regular", "500", "600", "700", "800", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "hebrew", "latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Oranienbaum": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Orbit": { "v": ["regular"], "subset": ["korean", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Orbitron": { "v": ["regular", "500", "600", "700", "800", "900"], "subset": ["latin"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Oregano": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Orelega One": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Orienta": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Original Surfer": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Oswald": { "v": ["200", "300", "regular", "500", "600", "700"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Outfit": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Over the Rainbow": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Overlock": { "v": ["regular", "italic", "700", "700italic", "900", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700", "900"], "i": ["normal", "italic"] }, "Overlock SC": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Overpass": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Overpass Mono": { "v": ["300", "regular", "500", "600", "700"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Ovo": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Oxanium": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Oxygen": { "v": ["300", "regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "Oxygen Mono": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "PT Mono": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "PT Sans": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "PT Sans Caption": { "v": ["regular", "700"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "PT Sans Narrow": { "v": ["regular", "700"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "PT Serif": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "PT Serif Caption": { "v": ["regular", "italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Pacifico": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Padauk": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "myanmar"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Padyakke Expanded One": { "v": ["regular"], "subset": ["kannada", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Palanquin": { "v": ["100", "200", "300", "regular", "500", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Palanquin Dark": { "v": ["regular", "500", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Palette Mosaic": { "v": ["regular"], "subset": ["japanese", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Pangolin": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Paprika": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Parisienne": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Parkinsans": { "v": ["300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Passero One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Passion One": { "v": ["regular", "700", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700", "900"], "i": ["normal"] }, "Passions Conflict": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Pathway Extreme": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Pathway Gothic One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Patrick Hand": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Patrick Hand SC": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Pattaya": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Patua One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Pavanam": { "v": ["regular"], "subset": ["latin", "latin-ext", "tamil"], "weight": ["Default", "400"], "i": ["normal"] }, "Paytone One": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Peddana": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Peralta": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Permanent Marker": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Petemoss": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Petit Formal Script": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Petrona": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Phetsarath": { "v": ["regular", "700"], "subset": ["lao"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Philosopher": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Phudu": { "v": ["300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Piazzolla": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Piedra": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Pinyon Script": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Pirata One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Pixelify Sans": { "v": ["regular", "500", "600", "700"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Plaster": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Platypi": { "v": ["300", "regular", "500", "600", "700", "800", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Play": { "v": ["regular", "700"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Playball": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Playfair": { "v": ["300", "regular", "500", "600", "700", "800", "900", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Playfair Display": { "v": ["regular", "500", "600", "700", "800", "900", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Playfair Display SC": { "v": ["regular", "italic", "700", "700italic", "900", "900italic"], "subset": ["cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700", "900"], "i": ["normal", "italic"] }, "Playpen Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["emoji", "latin", "latin-ext", "math", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Playwrite AR": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite AT": { "v": ["100", "200", "300", "regular", "100italic", "200italic", "300italic", "italic"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal", "italic"] }, "Playwrite AU NSW": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite AU QLD": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite AU SA": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite AU TAS": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite AU VIC": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite BE VLG": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite BE WAL": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite BR": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite CA": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite CL": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite CO": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite CU": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite CZ": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite DE Grund": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite DE LA": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite DE SAS": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite DE VA": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite DK Loopet": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite DK Uloopet": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite ES": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite ES Deco": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite FR Moderne": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite FR Trad": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite GB J": { "v": ["100", "200", "300", "regular", "100italic", "200italic", "300italic", "italic"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal", "italic"] }, "Playwrite GB S": { "v": ["100", "200", "300", "regular", "100italic", "200italic", "300italic", "italic"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal", "italic"] }, "Playwrite HR": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite HR Lijeva": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite HU": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite ID": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite IE": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite IN": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite IS": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite IT Moderna": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite IT Trad": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite MX": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite NG Modern": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite NL": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite NO": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite NZ": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite PE": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite PL": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite PT": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite RO": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite SK": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite TZ": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite US Modern": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite US Trad": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite VN": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Playwrite ZA": { "v": ["100", "200", "300", "regular"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400"], "i": ["normal"] }, "Plus Jakarta Sans": { "v": ["200", "300", "regular", "500", "600", "700", "800", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Podkova": { "v": ["regular", "500", "600", "700", "800"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Poetsen One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Poiret One": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Poller One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Poltawski Nowy": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Poly": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Pompiere": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Ponnala": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Pontano Sans": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Poor Story": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Poppins": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Port Lligat Sans": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Port Lligat Slab": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Potta One": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Pragati Narrow": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Praise": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Prata": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Preahvihear": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Press Start 2P": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Pridi": { "v": ["200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Princess Sofia": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Prociono": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Prompt": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Prosto One": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Protest Guerrilla": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Protest Revolution": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Protest Riot": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Protest Strike": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Proza Libre": { "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Public Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Puppies Play": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Puritan": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Purple Purse": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Qahiri": { "v": ["regular"], "subset": ["arabic", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Quando": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Quantico": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Quattrocento": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Quattrocento Sans": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Questrial": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Quicksand": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Quintessential": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Qwigley": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Qwitcher Grypen": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "REM": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Racing Sans One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Radio Canada": { "v": ["300", "regular", "500", "600", "700", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["canadian-aboriginal", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Radio Canada Big": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Radley": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Rajdhani": { "v": ["300", "regular", "500", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Rakkas": { "v": ["regular"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Raleway": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Raleway Dots": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ramabhadra": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Ramaraja": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Rambla": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Rammetto One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rampart One": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ranchers": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rancho": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Ranga": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Rasa": { "v": ["300", "regular", "500", "600", "700", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["gujarati", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Rationale": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Ravi Prakash": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Readex Pro": { "v": ["200", "300", "regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Recursive": { "v": ["300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Red Hat Display": { "v": ["300", "regular", "500", "600", "700", "800", "900", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Red Hat Mono": { "v": ["300", "regular", "500", "600", "700", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Red Hat Text": { "v": ["300", "regular", "500", "600", "700", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Red Rose": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Redacted": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Redacted Script": { "v": ["300", "regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "Reddit Mono": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Reddit Sans": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Reddit Sans Condensed": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Redressed": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Reem Kufi": { "v": ["regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Reem Kufi Fun": { "v": ["regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Reem Kufi Ink": { "v": ["regular"], "subset": ["arabic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Reenie Beanie": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Reggae One": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rethink Sans": { "v": ["regular", "500", "600", "700", "800", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Revalia": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rhodium Libre": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ribeye": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ribeye Marrow": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Righteous": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Risque": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Road Rage": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Roboto": { "v": ["100", "100italic", "300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic", "900", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "300", "400", "500", "700", "900"], "i": ["normal", "italic"] }, "Roboto Condensed": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Roboto Flex": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Roboto Mono": { "v": ["100", "200", "300", "regular", "500", "600", "700", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Roboto Serif": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Roboto Slab": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Rochester": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Rock 3D": { "v": ["regular"], "subset": ["japanese", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Rock Salt": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "RocknRoll One": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rokkitt": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Romanesco": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ropa Sans": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Rosario": { "v": ["300", "regular", "500", "600", "700", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Rosarivo": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Rouge Script": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Rowdies": { "v": ["300", "regular", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "Rozha One": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik": { "v": ["300", "regular", "500", "600", "700", "800", "900", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["arabic", "cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Rubik 80s Fade": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Beastly": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Broken Fax": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Bubbles": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Burned": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Dirt": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Distressed": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Doodle Shadow": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Doodle Triangles": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Gemstones": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Glitch": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Glitch Pop": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Iso": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Lines": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Maps": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Marker Hatch": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Maze": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Microbe": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Mono One": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Moonrocks": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Pixels": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Puddles": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Scribble": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Spray Paint": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Storm": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Vinyl": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rubik Wet Paint": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ruda": { "v": ["regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Rufina": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Ruge Boogie": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Ruluko": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Rum Raisin": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ruslan Display": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Russo One": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ruthie": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Ruwudu": { "v": ["regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Rye": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "STIX Two Text": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "SUSE": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Sacramento": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Sahitya": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Sail": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Saira": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Saira Condensed": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Saira Extra Condensed": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Saira Semi Condensed": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Saira Stencil One": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Salsa": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Sanchez": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Sancreek": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Sankofa Display": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Sansita": { "v": ["regular", "italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700", "800", "900"], "i": ["normal", "italic"] }, "Sansita Swashed": { "v": ["300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Sarabun": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Sarala": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Sarina": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Sarpanch": { "v": ["regular", "500", "600", "700", "800", "900"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Sassy Frass": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Satisfy": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Sawarabi Gothic": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Sawarabi Mincho": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Scada": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Scheherazade New": { "v": ["regular", "500", "600", "700"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal"] }, "Schibsted Grotesk": { "v": ["regular", "500", "600", "700", "800", "900", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Schoolbell": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Scope One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Seaweed Script": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Secular One": { "v": ["regular"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Sedan": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Sedan SC": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Sedgwick Ave": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Sedgwick Ave Display": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Sen": { "v": ["regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Send Flowers": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Sevillana": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Seymour One": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Shadows Into Light": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Shadows Into Light Two": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Shalimar": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Shantell Sans": { "v": ["300", "regular", "500", "600", "700", "800", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Shanti": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Share": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Share Tech": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Share Tech Mono": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Shippori Antique": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Shippori Antique B1": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Shippori Mincho": { "v": ["regular", "500", "600", "700", "800"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Shippori Mincho B1": { "v": ["regular", "500", "600", "700", "800"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Shizuru": { "v": ["regular"], "subset": ["japanese", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Shojumaru": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Short Stack": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Shrikhand": { "v": ["regular"], "subset": ["gujarati", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Siemreap": { "v": ["regular"], "subset": ["khmer"], "weight": ["Default", "400"], "i": ["normal"] }, "Sigmar": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Sigmar One": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Signika": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Signika Negative": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Silkscreen": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Simonetta": { "v": ["regular", "italic", "900", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "900"], "i": ["normal", "italic"] }, "Single Day": { "v": ["regular"], "subset": ["korean"], "weight": ["Default", "400"], "i": ["normal"] }, "Sintony": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Sirin Stencil": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Six Caps": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Sixtyfour": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Sixtyfour Convergence": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Skranji": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Slabo 13px": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Slabo 27px": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Slackey": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Slackside One": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Smokum": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Smooch": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Smooch Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Smythe": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Sniglet": { "v": ["regular", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "800"], "i": ["normal"] }, "Snippet": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Snowburst One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Sofadi One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Sofia": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Sofia Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Sofia Sans Condensed": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Sofia Sans Extra Condensed": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Sofia Sans Semi Condensed": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Solitreo": { "v": ["regular"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Solway": { "v": ["300", "regular", "500", "700", "800"], "subset": ["latin"], "weight": ["Default", "300", "400", "500", "700", "800"], "i": ["normal"] }, "Sometype Mono": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Song Myung": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Sono": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Sonsie One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Sora": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Sorts Mill Goudy": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Sour Gummy": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Source Code Pro": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Source Sans 3": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Source Serif 4": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Space Grotesk": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Space Mono": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Special Elite": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Spectral": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Spectral SC": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Spicy Rice": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Spinnaker": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Spirax": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Splash": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Spline Sans": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Spline Sans Mono": { "v": ["300", "regular", "500", "600", "700", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Squada One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Square Peg": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Sree Krushnadevaraya": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Sriracha": { "v": ["regular"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Srisakdi": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Staatliches": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Stalemate": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Stalinist One": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Stardos Stencil": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Stick": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Stick No Bills": { "v": ["200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "sinhala"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Stint Ultra Condensed": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Stint Ultra Expanded": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Stoke": { "v": ["300", "regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400"], "i": ["normal"] }, "Strait": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Style Script": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Stylish": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Sue Ellen Francisco": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Suez One": { "v": ["regular"], "subset": ["hebrew", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Sulphur Point": { "v": ["300", "regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "700"], "i": ["normal"] }, "Sumana": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Sunflower": { "v": ["300", "500", "700"], "subset": ["korean", "latin"], "weight": ["Default", "300", "400", "500", "700"], "i": ["normal"] }, "Sunshiney": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Supermercado One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Sura": { "v": ["regular", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Suranna": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Suravaram": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Suwannaphum": { "v": ["100", "300", "regular", "700", "900"], "subset": ["khmer", "latin"], "weight": ["Default", "100", "300", "400", "700", "900"], "i": ["normal"] }, "Swanky and Moo Moo": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Syncopate": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Syne": { "v": ["regular", "500", "600", "700", "800"], "subset": ["greek", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Syne Mono": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Syne Tactile": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Tac One": { "v": ["regular"], "subset": ["latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Tai Heritage Pro": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "tai-viet", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Tajawal": { "v": ["200", "300", "regular", "500", "700", "800", "900"], "subset": ["arabic", "latin"], "weight": ["Default", "200", "300", "400", "500", "700", "800", "900"], "i": ["normal"] }, "Tangerine": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Tapestry": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Taprom": { "v": ["regular"], "subset": ["khmer", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Tauri": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Taviraj": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Teachers": { "v": ["regular", "500", "600", "700", "800", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["greek-ext", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Teko": { "v": ["300", "regular", "500", "600", "700"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Tektur": { "v": ["regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Telex": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Tenali Ramakrishna": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Tenor Sans": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Text Me One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Texturina": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Thasadith": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "The Girl Next Door": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "The Nautigal": { "v": ["regular", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Tienne": { "v": ["regular", "700", "900"], "subset": ["latin"], "weight": ["Default", "400", "700", "900"], "i": ["normal"] }, "Tillana": { "v": ["regular", "500", "600", "700", "800"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Tilt Neon": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Tilt Prism": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Tilt Warp": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Timmana": { "v": ["regular"], "subset": ["latin", "telugu"], "weight": ["Default", "400"], "i": ["normal"] }, "Tinos": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "hebrew", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Tiny5": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Tiro Bangla": { "v": ["regular", "italic"], "subset": ["bengali", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Tiro Devanagari Hindi": { "v": ["regular", "italic"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Tiro Devanagari Marathi": { "v": ["regular", "italic"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Tiro Devanagari Sanskrit": { "v": ["regular", "italic"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Tiro Gurmukhi": { "v": ["regular", "italic"], "subset": ["gurmukhi", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Tiro Kannada": { "v": ["regular", "italic"], "subset": ["kannada", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Tiro Tamil": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext", "tamil"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Tiro Telugu": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext", "telugu"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Titan One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Titillium Web": { "v": ["200", "200italic", "300", "300italic", "regular", "italic", "600", "600italic", "700", "700italic", "900"], "subset": ["latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "600", "700", "900"], "i": ["normal", "italic"] }, "Tomorrow": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Tourney": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Trade Winds": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Train One": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Trirong": { "v": ["100", "100italic", "200", "200italic", "300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic", "900", "900italic"], "subset": ["latin", "latin-ext", "thai", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Trispace": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Trocchi": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Trochut": { "v": ["regular", "italic", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Truculenta": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Trykker": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Tsukimi Rounded": { "v": ["300", "regular", "500", "600", "700"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Tulpen One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Turret Road": { "v": ["200", "300", "regular", "500", "700", "800"], "subset": ["latin", "latin-ext"], "weight": ["Default", "200", "300", "400", "500", "700", "800"], "i": ["normal"] }, "Twinkle Star": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Ubuntu": { "v": ["300", "300italic", "regular", "italic", "500", "500italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "700"], "i": ["normal", "italic"] }, "Ubuntu Condensed": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Ubuntu Mono": { "v": ["regular", "italic", "700", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Ubuntu Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Ubuntu Sans Mono": { "v": ["regular", "500", "600", "700", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Uchen": { "v": ["regular"], "subset": ["latin", "tibetan"], "weight": ["Default", "400"], "i": ["normal"] }, "Ultra": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Unbounded": { "v": ["200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Uncial Antiqua": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Underdog": { "v": ["regular"], "subset": ["cyrillic", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Unica One": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "UnifrakturCook": { "v": ["700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "UnifrakturMaguntia": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Unkempt": { "v": ["regular", "700"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal"] }, "Unlock": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Unna": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Updock": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Urbanist": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "VT323": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Vampiro One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Varela": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Varela Round": { "v": ["regular"], "subset": ["hebrew", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Varta": { "v": ["300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Vast Shadow": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Vazirmatn": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["arabic", "latin", "latin-ext"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Vesper Libre": { "v": ["regular", "500", "700", "900"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400", "500", "700", "900"], "i": ["normal"] }, "Viaoda Libre": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Vibes": { "v": ["regular"], "subset": ["arabic", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Vibur": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Victor Mono": { "v": ["100", "200", "300", "regular", "500", "600", "700", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Vidaloka": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Viga": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Vina Sans": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Voces": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Volkhov": { "v": ["regular", "italic", "700", "700italic"], "subset": ["latin"], "weight": ["Default", "400", "700"], "i": ["normal", "italic"] }, "Vollkorn": { "v": ["regular", "500", "600", "700", "800", "900", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Vollkorn SC": { "v": ["regular", "600", "700", "900"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "600", "700", "900"], "i": ["normal"] }, "Voltaire": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Vujahday Script": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Waiting for the Sunrise": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Wallpoet": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Walter Turncoat": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Warnes": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Water Brush": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Waterfall": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Wavefont": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["latin"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Wellfleet": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Wendy One": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Whisper": { "v": ["regular"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "WindSong": { "v": ["regular", "500"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500"], "i": ["normal"] }, "Wire One": { "v": ["regular"], "subset": ["latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Wittgenstein": { "v": ["regular", "500", "600", "700", "800", "900", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Wix Madefor Display": { "v": ["regular", "500", "600", "700", "800"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal"] }, "Wix Madefor Text": { "v": ["regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic", "800", "800italic"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400", "500", "600", "700", "800"], "i": ["normal", "italic"] }, "Work Sans": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Workbench": { "v": ["regular"], "subset": ["latin", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Xanh Mono": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Yaldevi": { "v": ["200", "300", "regular", "500", "600", "700"], "subset": ["latin", "latin-ext", "sinhala"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Yanone Kaffeesatz": { "v": ["200", "300", "regular", "500", "600", "700"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "200", "300", "400", "500", "600", "700"], "i": ["normal"] }, "Yantramanav": { "v": ["100", "300", "regular", "500", "700", "900"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "100", "300", "400", "500", "700", "900"], "i": ["normal"] }, "Yarndings 12": { "v": ["regular"], "subset": ["latin", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Yarndings 12 Charted": { "v": ["regular"], "subset": ["latin", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Yarndings 20": { "v": ["regular"], "subset": ["latin", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Yarndings 20 Charted": { "v": ["regular"], "subset": ["latin", "math", "symbols"], "weight": ["Default", "400"], "i": ["normal"] }, "Yatra One": { "v": ["regular"], "subset": ["devanagari", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Yellowtail": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Yeon Sung": { "v": ["regular"], "subset": ["korean", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Yeseva One": { "v": ["regular"], "subset": ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Yesteryear": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Yomogi": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext", "vietnamese"], "weight": ["Default", "400"], "i": ["normal"] }, "Young Serif": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Yrsa": { "v": ["300", "regular", "500", "600", "700", "300italic", "italic", "500italic", "600italic", "700italic"], "subset": ["latin", "latin-ext", "vietnamese"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Ysabeau": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Ysabeau Infant": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Ysabeau Office": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900", "100italic", "200italic", "300italic", "italic", "500italic", "600italic", "700italic", "800italic", "900italic"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal", "italic"] }, "Ysabeau SC": { "v": ["100", "200", "300", "regular", "500", "600", "700", "800", "900"], "subset": ["cyrillic", "cyrillic-ext", "greek", "latin", "latin-ext", "math", "symbols", "vietnamese"], "weight": ["Default", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "i": ["normal"] }, "Yuji Boku": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Yuji Hentaigana Akari": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Yuji Hentaigana Akebono": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Yuji Mai": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Yuji Syuku": { "v": ["regular"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Yusei Magic": { "v": ["regular"], "subset": ["japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "ZCOOL KuaiLe": { "v": ["regular"], "subset": ["chinese-simplified", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "ZCOOL QingKe HuangYou": { "v": ["regular"], "subset": ["chinese-simplified", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "ZCOOL XiaoWei": { "v": ["regular"], "subset": ["chinese-simplified", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Zain": { "v": ["200", "300", "300italic", "regular", "italic", "700", "800", "900"], "subset": ["arabic", "latin"], "weight": ["Default", "200", "300", "400", "700", "800", "900"], "i": ["normal", "italic"] }, "Zen Antique": { "v": ["regular"], "subset": ["cyrillic", "greek", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Zen Antique Soft": { "v": ["regular"], "subset": ["cyrillic", "greek", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Zen Dots": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Zen Kaku Gothic Antique": { "v": ["300", "regular", "500", "700", "900"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "700", "900"], "i": ["normal"] }, "Zen Kaku Gothic New": { "v": ["300", "regular", "500", "700", "900"], "subset": ["cyrillic", "japanese", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "700", "900"], "i": ["normal"] }, "Zen Kurenaido": { "v": ["regular"], "subset": ["cyrillic", "greek", "japanese", "latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Zen Loop": { "v": ["regular", "italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal", "italic"] }, "Zen Maru Gothic": { "v": ["300", "regular", "500", "700", "900"], "subset": ["cyrillic", "greek", "japanese", "latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "700", "900"], "i": ["normal"] }, "Zen Old Mincho": { "v": ["regular", "500", "600", "700", "900"], "subset": ["cyrillic", "greek", "japanese", "latin", "latin-ext"], "weight": ["Default", "400", "500", "600", "700", "900"], "i": ["normal"] }, "Zen Tokyo Zoo": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Zeyada": { "v": ["regular"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400"], "i": ["normal"] }, "Zhi Mang Xing": { "v": ["regular"], "subset": ["chinese-simplified", "latin"], "weight": ["Default", "400"], "i": ["normal"] }, "Zilla Slab": { "v": ["300", "300italic", "regular", "italic", "500", "500italic", "600", "600italic", "700", "700italic"], "subset": ["latin", "latin-ext"], "weight": ["Default", "300", "400", "500", "600", "700"], "i": ["normal", "italic"] }, "Zilla Slab Highlight": { "v": ["regular", "700"], "subset": ["latin", "latin-ext"], "weight": ["Default", "400", "700"], "i": ["normal"] } };
  var google_fonts_default = getGoogleFonts;

  // resources/js/utils/helpers.js
  var useBlockId = (id, clientId, setAttributes) => {
    const { useEffect: useEffect7 } = window.wp.element;
    const { subscribe } = window.wp.data;
    const { getBlock } = window.wp.data.select("core/block-editor");
    const { updateBlockAttributes } = window.wp.data.dispatch("core/block-editor");
    const generateUniqueId = () => {
      return "digi-" + Math.random().toString(36).substring(2, 11);
    };
    useEffect7(() => {
      if (!id || id === "") {
        const newId = generateUniqueId();
        setAttributes({ id: newId });
        if (!window.digiBlocksUsedIds) {
          window.digiBlocksUsedIds = /* @__PURE__ */ new Set();
        }
        window.digiBlocksUsedIds.add(newId);
      }
    }, []);
    useEffect7(() => {
      if (!window.digiBlocksDuplicationHandler) {
        if (!window.digiBlocksUsedIds) {
          window.digiBlocksUsedIds = /* @__PURE__ */ new Set();
        }
        if (!window.digiBlocksLastKnownBlocks) {
          window.digiBlocksLastKnownBlocks = /* @__PURE__ */ new Set();
        }
        const processBlock = (block) => {
          if (window.digiBlocksLastKnownBlocks.has(block.clientId)) {
            return;
          }
          if (block.attributes && block.attributes.id) {
            const blockId = block.attributes.id;
            if (window.digiBlocksUsedIds.has(blockId) && !window.digiBlocksLastKnownBlocks.has(block.clientId)) {
              const newId = generateUniqueId();
              updateBlockAttributes(block.clientId, { id: newId });
              window.digiBlocksUsedIds.add(newId);
            } else {
              window.digiBlocksUsedIds.add(blockId);
            }
          }
          window.digiBlocksLastKnownBlocks.add(block.clientId);
          if (block.innerBlocks && block.innerBlocks.length > 0) {
            block.innerBlocks.forEach((innerBlock) => {
              processBlock(innerBlock);
            });
          }
        };
        const unsubscribe = subscribe(() => {
          const currentBlocks = window.wp.data.select("core/block-editor").getBlocks();
          currentBlocks.forEach((block) => {
            processBlock(block);
          });
        });
        window.digiBlocksDuplicationHandler = unsubscribe;
      }
      return () => {
        const remainingBlocks = window.wp.data.select("core/block-editor").getBlockCount();
        if (remainingBlocks <= 1) {
          if (window.digiBlocksDuplicationHandler) {
            window.digiBlocksDuplicationHandler();
            window.digiBlocksDuplicationHandler = null;
            window.digiBlocksUsedIds = /* @__PURE__ */ new Set();
            window.digiBlocksLastKnownBlocks = /* @__PURE__ */ new Set();
          }
        }
      };
    }, []);
    useEffect7(() => {
      if (id) {
        const checkAndFixDuplication = () => {
          const block = getBlock(clientId);
          if (block && block.attributes && block.attributes.id === id) {
            const allBlocks = window.wp.data.select("core/block-editor").getBlocks();
            const flattenBlocks = (blocks) => {
              let result = [];
              blocks.forEach((block2) => {
                result.push(block2);
                if (block2.innerBlocks && block2.innerBlocks.length) {
                  result = result.concat(flattenBlocks(block2.innerBlocks));
                }
              });
              return result;
            };
            const flatBlocks = flattenBlocks(allBlocks);
            const duplicates = flatBlocks.filter(
              (b) => b.attributes && b.attributes.id === id && b.clientId !== clientId
            );
            if (duplicates.length > 0) {
              const newId = generateUniqueId();
              setAttributes({ id: newId });
              if (window.digiBlocksUsedIds) {
                window.digiBlocksUsedIds.add(newId);
              }
            }
          }
        };
        checkAndFixDuplication();
        const timeoutId = setTimeout(checkAndFixDuplication, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [id, clientId]);
    return id;
  };
  var getDimensionCSS = (dimensions, property, device = "desktop", important = false) => {
    if (!dimensions) {
      return "";
    }
    const hasDimensionValues = (dim) => {
      return dim && (dim.top !== void 0 && dim.top !== "" || dim.right !== void 0 && dim.right !== "" || dim.bottom !== void 0 && dim.bottom !== "" || dim.left !== void 0 && dim.left !== "");
    };
    let values;
    if (dimensions[device] && hasDimensionValues(dimensions[device])) {
      values = dimensions[device];
    } else if (device === "tablet" && dimensions.desktop && hasDimensionValues(dimensions.desktop)) {
      values = dimensions.desktop;
    } else if (device === "mobile") {
      if (dimensions.tablet && hasDimensionValues(dimensions.tablet)) {
        values = dimensions.tablet;
      } else if (dimensions.desktop && hasDimensionValues(dimensions.desktop)) {
        values = dimensions.desktop;
      }
    }
    if (!values) {
      return "";
    }
    const unit = values.unit || "px";
    const top = values.top !== "" ? values.top : "0";
    const right = values.right !== "" ? values.right : "0";
    const bottom = values.bottom !== "" ? values.bottom : "0";
    const left = values.left !== "" ? values.left : "0";
    const importantFlag = important ? " !important" : "";
    return `${property}: ${top}${unit} ${right}${unit} ${bottom}${unit} ${left}${unit}${importantFlag};`;
  };
  var animationPreview = (id, animation, animations2, previewTimeoutRef) => {
    if (!animation || animation === "none") {
      return;
    }
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current);
    }
    const blockElement = document.querySelector(`.${id}`);
    if (!blockElement) {
      return;
    }
    const timestamp = Date.now();
    if (animations2[animation]) {
      const originalKeyframes = animations2[animation].keyframes;
      const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
      if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
        console.error("Could not extract animation name from keyframes");
        return;
      }
      const originalAnimName = originalAnimNameMatch[1];
      const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
      const styleElement = document.createElement("style");
      styleElement.id = `animation-style-${id}_${timestamp}`;
      const updatedKeyframes = originalKeyframes.replace(
        new RegExp(originalAnimName, "g"),
        uniqueAnimName
      );
      styleElement.textContent = `
            ${updatedKeyframes}
            
            .${id} {
                animation: none; /* Reset first */
            }
        `;
      document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach((el) => {
        el.remove();
      });
      document.head.appendChild(styleElement);
      blockElement.offsetHeight;
      const animationStyleElement = document.createElement("style");
      animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
      animationStyleElement.textContent = `
            .${id} {
                animation: ${uniqueAnimName} 1.5s forwards !important;
            }
        `;
      document.head.appendChild(animationStyleElement);
      previewTimeoutRef.current = setTimeout(() => {
        styleElement.remove();
        animationStyleElement.remove();
        blockElement.style.animation = "";
      }, 1500);
    }
  };
  var prepareFontForUrl = (fontName) => {
    return fontName.replace(/\s+/g, "+");
  };
  var loadGoogleFont = (fontFamily, fontWeight = "") => {
    if (!fontFamily || fontFamily === "" || fontFamily.includes(",") || // System fonts typically include commas
    fontFamily === "system-ui") {
      return;
    }
    window.digi = window.digi || {};
    window.digi.loadedFonts = window.digi.loadedFonts || {};
    const fontKey = `${fontFamily}-${fontWeight}`;
    if (window.digi.loadedFonts[fontKey]) {
      return;
    }
    let googleFontsData = window.digi?.getGoogleFonts;
    if (typeof googleFontsData === "function") {
      googleFontsData = googleFontsData();
    }
    if (googleFontsData && googleFontsData[fontFamily]) {
      const fontData = googleFontsData[fontFamily];
      if (!fontWeight || fontWeight === "") {
        const defaultWeightIndex = fontData.weight.indexOf("Default");
        if (defaultWeightIndex !== -1) {
          if (fontData.weight[defaultWeightIndex] === "Default" && fontData.i && fontData.i[0] === "normal") {
            fontWeight = fontData.weight[1] || "400";
          } else {
            fontWeight = "400";
          }
        } else {
          fontWeight = fontData.weight[0] === "Default" ? fontData.weight[1] || "400" : fontData.weight[0] || "400";
        }
      }
      const formattedFontFamily = prepareFontForUrl(fontFamily);
      const fontUrl = `https://fonts.googleapis.com/css?family=${formattedFontFamily}:${fontWeight}&display=swap`;
      const existingLink = document.querySelector(`link[href*="${formattedFontFamily}"]`);
      if (existingLink) {
        if (!existingLink.href.includes(`:${fontWeight}`)) {
          const weightMatch = existingLink.href.match(/:([^&]+)/);
          if (weightMatch && weightMatch[1]) {
            const currentWeights = weightMatch[1].split(",");
            if (!currentWeights.includes(fontWeight)) {
              currentWeights.push(fontWeight);
              const newWeights = currentWeights.join(",");
              existingLink.href = existingLink.href.replace(/:([^&]+)/, `:${newWeights}`);
            }
          }
        }
        window.digi.loadedFonts[fontKey] = true;
        return;
      }
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = fontUrl;
      linkElement.setAttribute("data-font-family", fontFamily);
      linkElement.setAttribute("data-font-weight", fontWeight);
      linkElement.setAttribute("data-auto-loaded", "true");
      document.head.appendChild(linkElement);
      window.digi.loadedFonts[fontKey] = true;
    }
  };
  var initializeGoogleFonts = () => {
    if (!window.wp || !window.wp.data || !window.wp.data.select) {
      return;
    }
    try {
      const { getBlocks } = window.wp.data.select("core/block-editor") || window.wp.data.select("core/editor");
      if (!getBlocks) {
        return;
      }
      const blocks = getBlocks();
      const extractFontsFromBlocks = (blocksList) => {
        blocksList.forEach((block) => {
          if (block.attributes) {
            const typographyAttrs = [
              "typography",
              "titleTypography",
              "contentTypography",
              "headingTypography",
              "textTypography",
              "buttonTypography"
            ];
            typographyAttrs.forEach((attrName) => {
              const typoSettings = block.attributes[attrName];
              if (typoSettings && typoSettings.fontFamily) {
                loadGoogleFont(typoSettings.fontFamily, typoSettings.fontWeight || "");
              }
            });
            if (block.attributes.style && block.attributes.style.typography) {
              const typoSettings = block.attributes.style.typography;
              if (typoSettings.fontFamily) {
                loadGoogleFont(typoSettings.fontFamily, typoSettings.fontWeight || "");
              }
            }
          }
          if (block.innerBlocks && block.innerBlocks.length > 0) {
            extractFontsFromBlocks(block.innerBlocks);
          }
        });
      };
      extractFontsFromBlocks(blocks);
    } catch (error) {
      console.error("Error initializing Google Fonts:", error);
    }
  };
  var scanForTypographyControls = () => {
    try {
      const typographyControls = document.querySelectorAll(".digiblocks-typography-options");
      typographyControls.forEach((control) => {
        let fontFamily = control.getAttribute("data-font-family");
        let fontWeight = control.getAttribute("data-font-weight");
        if (!fontFamily) {
          const fontFamilySelect = control.querySelector("select#font-family");
          if (fontFamilySelect) {
            fontFamily = fontFamilySelect.value;
          }
          if (!fontWeight) {
            const weightSelect = control.querySelector('select[aria-label="Weight"]');
            if (weightSelect) {
              fontWeight = weightSelect.value;
            }
          }
        }
        if (fontFamily && !fontFamily.includes(",") && fontFamily !== "system-ui") {
          loadGoogleFont(fontFamily, fontWeight || "");
        }
      });
    } catch (error) {
      console.error("Error scanning for typography controls:", error);
    }
  };
  var injectFontsIntoPreviewIframe = () => {
    try {
      if (!window.wp || !window.wp.data) {
        return;
      }
      window.digi = window.digi || {};
      window.digi.deviceFonts = window.digi.deviceFonts || {
        desktop: {},
        tablet: {},
        mobile: {}
      };
      const findAndInjectFonts = () => {
        const previewIframe = document.querySelector(".edit-post-visual-editor iframe");
        if (previewIframe && previewIframe.contentDocument) {
          const fontStylesheets = Array.from(document.querySelectorAll('link[href*="fonts.googleapis.com"]'));
          const iframeDocument = previewIframe.contentDocument;
          const existingStylesheets = Array.from(iframeDocument.querySelectorAll('link[href*="fonts.googleapis.com"]')).map((link) => link.href);
          fontStylesheets.forEach((stylesheet) => {
            if (!existingStylesheets.includes(stylesheet.href)) {
              const newLink = iframeDocument.createElement("link");
              newLink.rel = "stylesheet";
              newLink.href = stylesheet.href;
              if (stylesheet.hasAttribute("data-font-family")) {
                newLink.setAttribute("data-font-family", stylesheet.getAttribute("data-font-family"));
              }
              if (stylesheet.hasAttribute("data-font-weight")) {
                newLink.setAttribute("data-font-weight", stylesheet.getAttribute("data-font-weight"));
              }
              iframeDocument.head.appendChild(newLink);
            }
          });
          if (!iframeDocument._fontSelectionListenerAdded) {
            iframeDocument._fontSelectionListenerAdded = true;
            iframeDocument.addEventListener("click", (e) => {
              const isFontControl = e.target.closest(".components-custom-select-control__item") || e.target.closest(".components-custom-select-control__button");
              if (isFontControl) {
                setTimeout(() => {
                  const iframeFontLinks = Array.from(iframeDocument.querySelectorAll('link[href*="fonts.googleapis.com"]'));
                  iframeFontLinks.forEach((link) => {
                    const fontExists = document.querySelector(`link[href="${link.href}"]`);
                    if (!fontExists) {
                      const newLink = document.createElement("link");
                      newLink.rel = "stylesheet";
                      newLink.href = link.href;
                      if (link.hasAttribute("data-font-family")) {
                        newLink.setAttribute("data-font-family", link.getAttribute("data-font-family"));
                      }
                      if (link.hasAttribute("data-font-weight")) {
                        newLink.setAttribute("data-font-weight", link.getAttribute("data-font-weight"));
                      }
                      document.head.appendChild(newLink);
                    }
                  });
                }, 500);
              }
            });
          }
        }
      };
      const originalLoadGoogleFont = window.digi.utils.loadGoogleFont;
      window.digi.utils.loadGoogleFont = (fontFamily, fontWeight = "") => {
        originalLoadGoogleFont(fontFamily, fontWeight);
        const currentDevice = window.digi.responsiveState.activeDevice;
        if (!window.digi.deviceFonts[currentDevice]) {
          window.digi.deviceFonts[currentDevice] = {};
        }
        const fontKey = `${fontFamily}|${fontWeight || "400"}`;
        window.digi.deviceFonts[currentDevice][fontKey] = true;
        const previewIframe = document.querySelector(".edit-post-visual-editor iframe");
        if (previewIframe && previewIframe.contentDocument) {
          const iframeDoc = previewIframe.contentDocument;
          if (!fontFamily || fontFamily === "" || fontFamily.includes(",") || fontFamily === "system-ui") {
            return;
          }
          const formattedFontFamily = fontFamily.replace(/\s+/g, "+");
          const fontUrl = `https://fonts.googleapis.com/css?family=${formattedFontFamily}:${fontWeight || "400"}&display=swap`;
          const existingLink = iframeDoc.querySelector(`link[href*="${formattedFontFamily}"]`);
          if (existingLink) {
            if (!existingLink.href.includes(`:${fontWeight}`)) {
              const weightMatch = existingLink.href.match(/:([^&]+)/);
              if (weightMatch && weightMatch[1]) {
                const currentWeights = weightMatch[1].split(",");
                if (!currentWeights.includes(fontWeight)) {
                  currentWeights.push(fontWeight || "400");
                  const newWeights = currentWeights.join(",");
                  existingLink.href = existingLink.href.replace(/:([^&]+)/, `:${newWeights}`);
                }
              }
            }
            return;
          }
          const linkElement = iframeDoc.createElement("link");
          linkElement.rel = "stylesheet";
          linkElement.href = fontUrl;
          linkElement.setAttribute("data-font-family", fontFamily);
          linkElement.setAttribute("data-font-weight", fontWeight || "400");
          linkElement.setAttribute("data-auto-loaded", "true");
          iframeDoc.head.appendChild(linkElement);
        }
      };
      let previousDevice = null;
      const observer = new MutationObserver(() => {
        const currentDevice = window.digi.responsiveState.activeDevice;
        if (currentDevice !== previousDevice) {
          previousDevice = currentDevice;
          setTimeout(findAndInjectFonts, 300);
          setTimeout(findAndInjectFonts, 1e3);
          if (window.digi.deviceFonts[currentDevice]) {
            Object.keys(window.digi.deviceFonts[currentDevice]).forEach((fontKey) => {
              const [fontFamily, fontWeight] = fontKey.split("|");
              originalLoadGoogleFont(fontFamily, fontWeight);
            });
          }
        }
        const iframe = document.querySelector(".edit-post-visual-editor iframe");
        if (iframe && iframe.contentDocument) {
          findAndInjectFonts();
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });
      const fontObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === "childList") {
            const addedNodes = Array.from(mutation.addedNodes);
            const hasNewFontLink = addedNodes.some(
              (node) => node.nodeName === "LINK" && node.href && node.href.includes("fonts.googleapis.com")
            );
            if (hasNewFontLink) {
              findAndInjectFonts();
            }
          }
        }
      });
      fontObserver.observe(document.head, {
        childList: true
      });
      if (window.wp.data && window.wp.data.subscribe) {
        window.wp.data.subscribe(() => {
          const currentDevice = window.digi.responsiveState.activeDevice;
          if (currentDevice !== previousDevice) {
            previousDevice = currentDevice;
            setTimeout(findAndInjectFonts, 500);
            if (window.digi.deviceFonts[currentDevice]) {
              Object.keys(window.digi.deviceFonts[currentDevice]).forEach((fontKey) => {
                const [fontFamily, fontWeight] = fontKey.split("|");
                originalLoadGoogleFont(fontFamily, fontWeight);
              });
            }
          }
        });
      }
      findAndInjectFonts();
    } catch (error) {
      console.error("Error setting up font injection for preview:", error);
    }
  };
  var initializeGoogleFontsOnLoad = () => {
    if (typeof window.wp !== "undefined" && window.wp.domReady) {
      window.wp.domReady(() => {
        setTimeout(() => {
          initializeGoogleFonts();
          scanForTypographyControls();
          injectFontsIntoPreviewIframe();
        }, 1e3);
      });
    }
    if (typeof window.wp !== "undefined" && window.wp.data && window.wp.data.subscribe) {
      window.wp.data.subscribe(() => {
        const editorSelect = window.wp.data.select("core/block-editor");
        if (editorSelect && typeof editorSelect.isTyping === "function" && !editorSelect.isTyping()) {
          clearTimeout(window.digi._fontUpdateTimeout);
          window.digi._fontUpdateTimeout = setTimeout(() => {
            initializeGoogleFonts();
          }, 2e3);
        }
      });
    }
  };

  // resources/js/components/responsive-control.js
  var { __ } = window.wp.i18n;
  var { Button } = window.wp.components;
  var { cloneElement, Children, isValidElement, useEffect, useState } = window.wp.element;
  var ResponsiveControl = ({
    label,
    children
  }) => {
    const [activeDevice, setLocalActiveDevice] = useState(
      window.digi?.responsiveState?.activeDevice || "desktop"
    );
    useEffect(() => {
      if (!window.digi?.responsiveState?.subscribe)
        return;
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
        document.body.setAttribute("data-digiblocks-device", device);
      });
      return unsubscribe;
    }, []);
    const getDeviceIcon = (device) => {
      if (window.digi?.icons?.deviceIcons?.[device]) {
        return window.digi.icons.deviceIcons[device];
      }
      return fallbackIcons[device];
    };
    const handleToggleDevice = () => {
      if (window.digi?.responsiveState?.toggleDevice) {
        window.digi.responsiveState.toggleDevice();
      } else {
        const nextDevice = activeDevice === "desktop" ? "tablet" : activeDevice === "tablet" ? "mobile" : "desktop";
        setLocalActiveDevice(nextDevice);
        document.body.setAttribute("data-digiblocks-device", nextDevice);
      }
    };
    const getNextDevice = () => {
      if (window.digi?.responsiveState?.getNextDevice) {
        return window.digi.responsiveState.getNextDevice();
      }
      if (activeDevice === "desktop")
        return "tablet";
      if (activeDevice === "tablet")
        return "mobile";
      return "desktop";
    };
    const createToggleButton = () => {
      return /* @__PURE__ */ wp.element.createElement(
        Button,
        {
          className: `digiblocks-responsive-common-button digiblocks-device-${activeDevice}`,
          onClick: handleToggleDevice,
          "aria-label": __(`Switch to ${getNextDevice()} view`, "digiblocks")
        },
        getDeviceIcon(activeDevice)
      );
    };
    const isDimensionControl = () => {
      if (!children)
        return false;
      try {
        const childType = Children.only(children).type;
        if (childType && childType.name === "DimensionControl") {
          return true;
        }
        const childProps = Children.only(children).props;
        return childProps && childProps.values && childProps.values.unit;
      } catch (e) {
        return false;
      }
    };
    if (isDimensionControl()) {
      const childrenWithProps = Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            isResponsive: true,
            label,
            deviceIcon: getDeviceIcon(activeDevice),
            toggleDevice: handleToggleDevice,
            deviceLabel: __(`Switch to ${getNextDevice()} view`, "digiblocks")
          });
        }
        return child;
      });
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-content" }, childrenWithProps));
    }
    return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, label), createToggleButton())), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-content" }, children));
  };
  var responsive_control_default = ResponsiveControl;

  // resources/js/components/dimension-control.js
  var { __: __2 } = window.wp.i18n;
  var {
    Button: Button2,
    Dashicon,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption
  } = window.wp.components;
  var { useState: useState2, useEffect: useEffect2 } = window.wp.element;
  var DimensionControl = ({
    label,
    values = { top: "", right: "", bottom: "", left: "", unit: "px" },
    onChange,
    allowNegative = false,
    isResponsive = false,
    deviceIcon = null,
    toggleDevice = null,
    deviceLabel = "",
    min = 0,
    max = 100,
    step = 1,
    units = [
      { value: "px", label: "px" },
      { value: "rem", label: "rem" },
      { value: "em", label: "em" },
      { value: "%", label: "%" }
    ]
  }) => {
    const [isLinked, setIsLinked] = useState2(true);
    const [isDefault, setIsDefault] = useState2(true);
    const [activeDevice, setLocalActiveDevice] = useState2(window.digi.responsiveState.activeDevice);
    useEffect2(() => {
      if (isResponsive) {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
          setLocalActiveDevice(device);
        });
        return unsubscribe;
      }
    }, [isResponsive]);
    useEffect2(() => {
      const isAtDefault = values.top === "" && values.right === "" && values.bottom === "" && values.left === "";
      setIsDefault(isAtDefault);
    }, [values]);
    const handleValueChange = (key, value) => {
      let newValues = { ...values };
      if (isLinked) {
        newValues = {
          ...newValues,
          top: value,
          right: value,
          bottom: value,
          left: value
        };
      } else {
        newValues[key] = value;
      }
      const hasAnyValue = ["top", "right", "bottom", "left"].some(
        (side) => newValues[side] !== "" && newValues[side] !== void 0
      );
      if (hasAnyValue) {
        ["top", "right", "bottom", "left"].forEach((side) => {
          if (newValues[side] === "" || newValues[side] === void 0) {
            newValues[side] = 0;
          }
        });
      }
      onChange(newValues);
    };
    const handleUnitChange = (unit) => {
      onChange({
        ...values,
        unit
      });
    };
    const getMaxValue = (unit) => {
      switch (unit) {
        case "px":
          return 500;
        case "rem":
          return 30;
        case "em":
          return 30;
        case "%":
          return 100;
        default:
          return 100;
      }
    };
    const getStepValue = (unit) => {
      switch (unit) {
        case "px":
          return 1;
        case "rem":
          return 0.1;
        case "em":
          return 0.1;
        case "%":
          return 1;
        default:
          return 1;
      }
    };
    const resetValues = () => {
      onChange({
        top: "",
        right: "",
        bottom: "",
        left: "",
        unit: values.unit
      });
    };
    const renderDeviceIcon = () => {
      if (deviceIcon) {
        return deviceIcon;
      }
      return window.digi.deviceIcons[activeDevice];
    };
    const handleToggleDevice = () => {
      if (toggleDevice) {
        toggleDevice();
      } else {
        window.digi.responsiveState.toggleDevice();
      }
    };
    const handleInputChange = (key, e) => {
      const inputValue = e.target.value;
      if (inputValue === "" || inputValue === "-") {
        handleValueChange(key, "");
      } else {
        const numValue = parseFloat(inputValue);
        if (!isNaN(numValue)) {
          handleValueChange(key, numValue);
        }
      }
    };
    return /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-dimension-control ${isResponsive ? "is-responsive" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, label), isResponsive && /* @__PURE__ */ wp.element.createElement(
      Button2,
      {
        className: "digiblocks-responsive-common-button",
        onClick: handleToggleDevice,
        "aria-label": deviceLabel || __2(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")
      },
      renderDeviceIcon()
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__actions" }, /* @__PURE__ */ wp.element.createElement("div", null, /* @__PURE__ */ wp.element.createElement(
      Button2,
      {
        isSmall: true,
        className: "digiblocks-reset",
        icon: "image-rotate",
        onClick: resetValues,
        disabled: isDefault,
        "aria-label": __2("Reset", "digiblocks")
      }
    )), /* @__PURE__ */ wp.element.createElement(
      ToggleGroupControl,
      {
        value: values.unit,
        onChange: handleUnitChange,
        isSmall: true,
        isBlock: true,
        hideLabelFromVision: true,
        "aria-label": __2("Select Units", "digiblocks"),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      },
      units.map((unit) => /* @__PURE__ */ wp.element.createElement(
        ToggleGroupControlOption,
        {
          key: unit.value,
          value: unit.value,
          label: unit.label
        }
      ))
    ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-spacing-inputs" }, /* @__PURE__ */ wp.element.createElement(
      "input",
      {
        className: "digiblocks-spacing-input",
        type: "number",
        value: values.top === "" ? "" : values.top,
        onChange: (e) => handleInputChange("top", e),
        min: allowNegative ? -getMaxValue(values.unit) : 0,
        max: getMaxValue(values.unit),
        step: getStepValue(values.unit),
        "aria-label": __2("Top", "digiblocks")
      }
    ), /* @__PURE__ */ wp.element.createElement(
      "input",
      {
        className: "digiblocks-spacing-input",
        type: "number",
        value: values.right === "" ? "" : values.right,
        onChange: (e) => handleInputChange("right", e),
        min: allowNegative ? -getMaxValue(values.unit) : 0,
        max: getMaxValue(values.unit),
        step: getStepValue(values.unit),
        "aria-label": __2("Right", "digiblocks")
      }
    ), /* @__PURE__ */ wp.element.createElement(
      "input",
      {
        className: "digiblocks-spacing-input",
        type: "number",
        value: values.bottom === "" ? "" : values.bottom,
        onChange: (e) => handleInputChange("bottom", e),
        min: allowNegative ? -getMaxValue(values.unit) : 0,
        max: getMaxValue(values.unit),
        step: getStepValue(values.unit),
        "aria-label": __2("Bottom", "digiblocks")
      }
    ), /* @__PURE__ */ wp.element.createElement(
      "input",
      {
        className: "digiblocks-spacing-input",
        type: "number",
        value: values.left === "" ? "" : values.left,
        onChange: (e) => handleInputChange("left", e),
        min: allowNegative ? -getMaxValue(values.unit) : 0,
        max: getMaxValue(values.unit),
        step: getStepValue(values.unit),
        "aria-label": __2("Left", "digiblocks")
      }
    ), /* @__PURE__ */ wp.element.createElement(
      "span",
      {
        className: `digiblocks-spacing-link ${!isLinked ? "digiblocks-spacing-control-disconnected" : ""} dashicons ${isLinked ? "dashicons-admin-links" : "dashicons-editor-unlink"}`,
        onClick: () => setIsLinked(!isLinked),
        title: isLinked ? __2("Unlink values", "digiblocks") : __2("Link values", "digiblocks"),
        role: "button",
        tabIndex: "0",
        onKeyPress: (event) => {
          if (event.key === "Enter" || event.key === " ") {
            setIsLinked(!isLinked);
          }
        }
      }
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-spacing-labels" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-spacing-label" }, __2("Top", "digiblocks")), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-spacing-label" }, __2("Right", "digiblocks")), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-spacing-label" }, __2("Bottom", "digiblocks")), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-spacing-label" }, __2("Left", "digiblocks")), /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-spacing-label digiblocks-spacing-link-label" })));
  };
  var dimension_control_default = DimensionControl;

  // resources/js/components/typography-control.js
  var { __: __3 } = window.wp.i18n;
  var {
    SelectControl,
    RangeControl,
    Button: Button3,
    __experimentalToggleGroupControl: ToggleGroupControl2,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption2
  } = window.wp.components;
  var { useState: useState3, useEffect: useEffect3 } = window.wp.element;
  var TypographyControl = ({ label, value, onChange, defaults = {} }) => {
    const [controlId] = useState3(`typography-${Math.random().toString(36).substr(2, 9)}`);
    const [isOpen, setIsOpen] = useState3(() => {
      return window.digi.uiState.getPanelState("typography", controlId) ?? false;
    });
    const [fontWeightOptions, setFontWeightOptions] = useState3([
      { label: __3("Default", "digiblocks"), value: "" },
      { label: "100", value: "100" },
      { label: "200", value: "200" },
      { label: "300", value: "300" },
      { label: "400", value: "400" },
      { label: "500", value: "500" },
      { label: "600", value: "600" },
      { label: "700", value: "700" },
      { label: "800", value: "800" },
      { label: "900", value: "900" }
    ]);
    const [fontFamilyOptions, setFontFamilyOptions] = useState3([
      { label: __3("Default", "digiblocks"), value: "" },
      { label: __3("System UI", "digiblocks"), value: "system-ui" },
      { label: __3("Arial", "digiblocks"), value: "Arial, sans-serif" },
      { label: __3("Helvetica", "digiblocks"), value: "Helvetica, sans-serif" },
      { label: __3("Times New Roman", "digiblocks"), value: "Times New Roman, serif" },
      { label: __3("Georgia", "digiblocks"), value: "Georgia, serif" }
    ]);
    const [fontLoaded, setFontLoaded] = useState3(false);
    const [localActiveDevice, setLocalActiveDevice] = useState3(
      window.digi?.responsiveState?.activeDevice || "desktop"
    );
    const values = {
      fontFamily: "",
      fontSize: { desktop: 16, tablet: 15, mobile: 14 },
      fontSizeUnit: "px",
      fontWeight: "",
      fontStyle: "normal",
      textTransform: "",
      textDecoration: "",
      lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
      lineHeightUnit: "em",
      letterSpacing: { desktop: 0, tablet: 0, mobile: 0 },
      letterSpacingUnit: "px",
      ...defaults,
      ...value
    };
    useEffect3(() => {
      if (!window.digi?.responsiveState?.subscribe)
        return;
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
        document.body.setAttribute("data-digiblocks-device", device);
      });
      return unsubscribe;
    }, []);
    useEffect3(() => {
      let googleFontsData = window.digi?.getGoogleFonts;
      if (typeof googleFontsData === "function") {
        googleFontsData = googleFontsData();
      }
      if (googleFontsData && typeof googleFontsData === "object") {
        const googleFontOptions = Object.keys(googleFontsData).map((fontName) => ({
          label: fontName,
          value: fontName
        }));
        const systemFontOptions = [
          { label: __3("Default", "digiblocks"), value: "" },
          { label: __3("System UI", "digiblocks"), value: "system-ui" },
          { label: __3("Arial", "digiblocks"), value: "Arial, sans-serif" },
          { label: __3("Helvetica", "digiblocks"), value: "Helvetica, sans-serif" },
          { label: __3("Times New Roman", "digiblocks"), value: "Times New Roman, serif" },
          { label: __3("Georgia", "digiblocks"), value: "Georgia, serif" }
        ];
        setFontFamilyOptions([...systemFontOptions, ...googleFontOptions]);
      }
    }, []);
    useEffect3(() => {
      if (values.fontFamily && !values.fontFamily.includes(",") && values.fontFamily !== "system-ui") {
        setTimeout(() => {
          window.digi.utils.loadGoogleFont(values.fontFamily, values.fontWeight || "");
          setFontLoaded(true);
        }, 0);
      }
    }, [values.fontFamily, values.fontWeight]);
    useEffect3(() => {
      if (!fontLoaded && values.fontFamily && !values.fontFamily.includes(",") && values.fontFamily !== "system-ui") {
        const timer = setTimeout(() => {
          window.digi.utils.loadGoogleFont(values.fontFamily, values.fontWeight || "");
          setFontLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
      }
    }, [fontLoaded]);
    useEffect3(() => {
      if (!values.fontFamily || values.fontFamily === "" || values.fontFamily.includes(",") || // System fonts typically include commas
      values.fontFamily === "system-ui") {
        setFontWeightOptions([
          { label: __3("Default", "digiblocks"), value: "" },
          { label: "100", value: "100" },
          { label: "200", value: "200" },
          { label: "300", value: "300" },
          { label: "400", value: "400" },
          { label: "500", value: "500" },
          { label: "600", value: "600" },
          { label: "700", value: "700" },
          { label: "800", value: "800" },
          { label: "900", value: "900" }
        ]);
        return;
      }
      let googleFontsData = window.digi?.getGoogleFonts;
      if (typeof googleFontsData === "function") {
        googleFontsData = googleFontsData();
      }
      if (googleFontsData && googleFontsData[values.fontFamily] && googleFontsData[values.fontFamily].weight) {
        const fontData = googleFontsData[values.fontFamily];
        const weights = fontData.weight.map((weight) => ({
          label: weight === "Default" ? __3("Default", "digiblocks") : weight,
          value: weight === "Default" ? "" : weight
        }));
        setFontWeightOptions(weights);
        const weightExists = weights.some((option) => option.value === values.fontWeight);
        if (!weightExists && values.fontWeight !== "") {
          updateTypographyValue("fontWeight", "");
        }
      }
    }, [values.fontFamily]);
    const fontSizeUnits = [
      { label: "px", value: "px" },
      { label: "em", value: "em" },
      { label: "rem", value: "rem" },
      { label: "vw", value: "vw" }
    ];
    const lineHeightUnits = [
      { label: "px", value: "px" },
      { label: "em", value: "em" }
    ];
    const letterSpacingUnits = [
      { label: "px", value: "px" },
      { label: "em", value: "em" }
    ];
    const fontStyleOptions = [
      { label: __3("Default", "digiblocks"), value: "normal" },
      { label: __3("Italic", "digiblocks"), value: "italic" },
      { label: __3("Oblique", "digiblocks"), value: "oblique" }
    ];
    const textTransformOptions = [
      { label: __3("Default", "digiblocks"), value: "" },
      { label: __3("None", "digiblocks"), value: "none" },
      { label: __3("Capitalize", "digiblocks"), value: "capitalize" },
      { label: __3("Uppercase", "digiblocks"), value: "uppercase" },
      { label: __3("Lowercase", "digiblocks"), value: "lowercase" }
    ];
    const textDecorationOptions = [
      { label: __3("Default", "digiblocks"), value: "" },
      { label: __3("None", "digiblocks"), value: "none" },
      { label: __3("Underline", "digiblocks"), value: "underline" },
      { label: __3("Overline", "digiblocks"), value: "overline" },
      { label: __3("Line Through", "digiblocks"), value: "line-through" }
    ];
    const updateTypographyValue = (property, newValue) => {
      const updatedValues = {
        ...values,
        [property]: newValue
      };
      onChange(updatedValues);
      if (property === "fontFamily") {
        window.digi.utils.loadGoogleFont(newValue);
      } else if (property === "fontWeight" && values.fontFamily) {
        window.digi.utils.loadGoogleFont(values.fontFamily, newValue);
      }
    };
    const updateResponsiveValue = (property, device, newValue) => {
      onChange({
        ...values,
        [property]: {
          ...values[property],
          [device]: newValue
        }
      });
    };
    const toggleTypographyPanel = () => {
      const newState = !isOpen;
      setIsOpen(newState);
      window.digi.uiState.setPanelState("typography", controlId, newState);
    };
    const getDeviceIcon = (device) => {
      if (window.digi?.icons?.deviceIcons?.[device]) {
        return window.digi.icons.deviceIcons[device];
      }
      return /* @__PURE__ */ wp.element.createElement("span", { className: `dashicon dashicons dashicons-${device}` });
    };
    const handleToggleDevice = () => {
      if (window.digi?.responsiveState?.toggleDevice) {
        window.digi.responsiveState.toggleDevice();
      } else {
        const nextDevice = localActiveDevice === "desktop" ? "tablet" : localActiveDevice === "tablet" ? "mobile" : "desktop";
        setLocalActiveDevice(nextDevice);
        document.body.setAttribute("data-digiblocks-device", nextDevice);
      }
    };
    return /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-typography-options digiblocks-control-popup__options ${isOpen ? "active" : ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control-popup__options--action-wrapper" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, label || __3("Typography", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
      "button",
      {
        type: "button",
        "aria-pressed": isOpen,
        className: `components-button digiblocks-typography-button digiblocks-control-popup__options--action-button ${isOpen ? "is-pressed" : ""}`,
        onClick: toggleTypographyPanel
      },
      /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-edit" })
    )), isOpen && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-typography-advanced digiblocks-control-popup" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control digiblocks-font-family-searchable-select__wrapper" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-input-control__label", htmlFor: "font-family" }, __3("Font Family", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
      SelectControl,
      {
        id: "font-family",
        value: values.fontFamily,
        options: fontFamilyOptions,
        onChange: (newValue) => updateTypographyValue("fontFamily", newValue),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __3("Font Size", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
      Button3,
      {
        className: "digiblocks-responsive-common-button",
        onClick: handleToggleDevice,
        "aria-label": __3(`Switch to ${window.digi?.responsiveState?.getNextDevice() || "next"} view`, "digiblocks")
      },
      getDeviceIcon(localActiveDevice)
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__actions digiblocks-control__actions" }, /* @__PURE__ */ wp.element.createElement("div", { tabIndex: "0" }, /* @__PURE__ */ wp.element.createElement(
      "button",
      {
        type: "button",
        disabled: values.fontSize[localActiveDevice] === defaults.fontSize?.[localActiveDevice],
        className: "components-button digiblocks-reset is-secondary is-small",
        onClick: () => updateResponsiveValue("fontSize", localActiveDevice, defaults.fontSize?.[localActiveDevice] || 16)
      },
      /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
    )), /* @__PURE__ */ wp.element.createElement(
      ToggleGroupControl2,
      {
        value: values.fontSizeUnit,
        onChange: (value2) => updateTypographyValue("fontSizeUnit", value2),
        isBlock: true,
        isSmall: true,
        hideLabelFromVision: true,
        "aria-label": __3("Select Units", "digiblocks"),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      },
      fontSizeUnits.map((unit) => /* @__PURE__ */ wp.element.createElement(
        ToggleGroupControlOption2,
        {
          key: unit.value,
          value: unit.value,
          label: unit.label
        }
      ))
    ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__mobile-controls" }, /* @__PURE__ */ wp.element.createElement(
      RangeControl,
      {
        value: values.fontSize[localActiveDevice],
        onChange: (newValue) => updateResponsiveValue("fontSize", localActiveDevice, newValue),
        min: 0,
        max: 200,
        step: values.fontSizeUnit === "px" ? 1 : 0.1,
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }
    )))))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-select-control digiblocks-select-control--layout-inline" }, /* @__PURE__ */ wp.element.createElement(
      SelectControl,
      {
        label: __3("Weight", "digiblocks"),
        value: values.fontWeight,
        options: fontWeightOptions,
        onChange: (newValue) => updateTypographyValue("fontWeight", newValue),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-select-control digiblocks-select-control--layout-inline" }, /* @__PURE__ */ wp.element.createElement(
      SelectControl,
      {
        label: __3("Style", "digiblocks"),
        value: values.fontStyle,
        options: fontStyleOptions,
        onChange: (newValue) => updateTypographyValue("fontStyle", newValue),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-select-control digiblocks-select-control--layout-inline" }, /* @__PURE__ */ wp.element.createElement(
      SelectControl,
      {
        label: __3("Transform", "digiblocks"),
        value: values.textTransform,
        options: textTransformOptions,
        onChange: (newValue) => updateTypographyValue("textTransform", newValue),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-typography-decoration" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-select-control digiblocks-select-control--layout-inline" }, /* @__PURE__ */ wp.element.createElement(
      SelectControl,
      {
        label: __3("Decoration", "digiblocks"),
        value: values.textDecoration,
        options: textDecorationOptions,
        onChange: (newValue) => updateTypographyValue("textDecoration", newValue),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }
    ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __3("Line Height", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
      Button3,
      {
        className: "digiblocks-responsive-common-button",
        onClick: handleToggleDevice,
        "aria-label": __3(`Switch to ${window.digi?.responsiveState?.getNextDevice() || "next"} view`, "digiblocks")
      },
      getDeviceIcon(localActiveDevice)
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__actions digiblocks-control__actions" }, /* @__PURE__ */ wp.element.createElement("div", { tabIndex: "0" }, /* @__PURE__ */ wp.element.createElement(
      "button",
      {
        type: "button",
        disabled: values.lineHeight[localActiveDevice] === defaults.lineHeight?.[localActiveDevice],
        className: "components-button digiblocks-reset is-secondary is-small",
        onClick: () => updateResponsiveValue("lineHeight", localActiveDevice, defaults.lineHeight?.[localActiveDevice] || 1.5)
      },
      /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
    )), /* @__PURE__ */ wp.element.createElement(
      ToggleGroupControl2,
      {
        value: values.lineHeightUnit,
        onChange: (value2) => updateTypographyValue("lineHeightUnit", value2),
        isBlock: true,
        isSmall: true,
        hideLabelFromVision: true,
        "aria-label": __3("Select Units", "digiblocks"),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      },
      lineHeightUnits.map((unit) => /* @__PURE__ */ wp.element.createElement(
        ToggleGroupControlOption2,
        {
          key: unit.value,
          value: unit.value,
          label: unit.label
        }
      ))
    ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__mobile-controls" }, /* @__PURE__ */ wp.element.createElement(
      RangeControl,
      {
        value: values.lineHeight[localActiveDevice],
        onChange: (newValue) => updateResponsiveValue("lineHeight", localActiveDevice, newValue),
        min: 0,
        max: values.lineHeightUnit === "px" ? 200 : 3,
        step: values.lineHeightUnit === "px" ? 1 : 0.1,
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }
    )))))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, __3("Letter Spacing", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
      Button3,
      {
        className: "digiblocks-responsive-common-button",
        onClick: handleToggleDevice,
        "aria-label": __3(`Switch to ${window.digi?.responsiveState?.getNextDevice() || "next"} view`, "digiblocks")
      },
      getDeviceIcon(localActiveDevice)
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__actions digiblocks-control__actions" }, /* @__PURE__ */ wp.element.createElement("div", { tabIndex: "0" }, /* @__PURE__ */ wp.element.createElement(
      "button",
      {
        type: "button",
        disabled: values.letterSpacing[localActiveDevice] === defaults.letterSpacing?.[localActiveDevice],
        className: "components-button digiblocks-reset is-secondary is-small",
        onClick: () => updateResponsiveValue("letterSpacing", localActiveDevice, defaults.letterSpacing?.[localActiveDevice] || 0)
      },
      /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
    )), /* @__PURE__ */ wp.element.createElement(
      ToggleGroupControl2,
      {
        value: values.letterSpacingUnit,
        onChange: (value2) => updateTypographyValue("letterSpacingUnit", value2),
        isBlock: true,
        isSmall: true,
        hideLabelFromVision: true,
        "aria-label": __3("Select Units", "digiblocks"),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      },
      letterSpacingUnits.map((unit) => /* @__PURE__ */ wp.element.createElement(
        ToggleGroupControlOption2,
        {
          key: unit.value,
          value: unit.value,
          label: unit.label
        }
      ))
    ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__mobile-controls" }, /* @__PURE__ */ wp.element.createElement(
      RangeControl,
      {
        value: values.letterSpacing[localActiveDevice],
        onChange: (newValue) => updateResponsiveValue("letterSpacing", localActiveDevice, newValue),
        min: -50,
        max: 200,
        step: values.letterSpacingUnit === "px" ? 1 : 0.1,
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }
    ))))))));
  };
  var typography_control_default = TypographyControl;

  // resources/js/components/range-control.js
  var { __: __4 } = window.wp.i18n;
  var {
    Button: Button4,
    __experimentalToggleGroupControl: ToggleGroupControl3,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption3
  } = window.wp.components;
  var { useState: useState4, useEffect: useEffect4 } = window.wp.element;
  var ResponsiveRangeControl = ({
    label,
    value,
    onChange,
    units = [
      { label: "px", value: "px" },
      { label: "%", value: "%" },
      { label: "em", value: "em" },
      { label: "rem", value: "rem" },
      { label: "vh", value: "vh" }
    ],
    defaultUnit = "px",
    min = 0,
    max = 100,
    step = 1,
    defaultValues = null
  }) => {
    const [localActiveDevice, setLocalActiveDevice] = useState4(
      window.digi?.responsiveState?.activeDevice || "desktop"
    );
    const [currentUnit, setCurrentUnit] = useState4(defaultUnit);
    const [inputValue, setInputValue] = useState4("");
    const [inputId] = useState4(`range-control-${Math.floor(Math.random() * 1e4)}`);
    const ensureResponsiveValue = (val) => {
      if (!val || typeof val !== "object") {
        return {
          desktop: { value: "", unit: defaultUnit },
          tablet: { value: "", unit: defaultUnit },
          mobile: { value: "", unit: defaultUnit }
        };
      }
      const result = {};
      ["desktop", "tablet", "mobile"].forEach((device) => {
        if (val[device] && typeof val[device] === "object") {
          result[device] = {
            value: val[device].value !== void 0 ? val[device].value : "",
            unit: val[device].unit || defaultUnit
          };
        } else {
          const deviceValue = typeof val[device] === "number" ? val[device] : "";
          result[device] = { value: deviceValue, unit: defaultUnit };
        }
      });
      return result;
    };
    const values = ensureResponsiveValue(value);
    useEffect4(() => {
      if (!window.digi?.responsiveState?.subscribe)
        return;
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
        document.body.setAttribute("data-digiblocks-device", device);
      });
      return unsubscribe;
    }, []);
    useEffect4(() => {
      if (values[localActiveDevice]) {
        if (values[localActiveDevice].unit) {
          setCurrentUnit(values[localActiveDevice].unit);
        }
        setInputValue(values[localActiveDevice].value === "" ? "" : String(values[localActiveDevice].value));
      }
    }, [localActiveDevice, values]);
    const handleInputChange = (e) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      if (newValue === "") {
        const updatedValues = {
          ...values,
          [localActiveDevice]: { value: "", unit: currentUnit }
        };
        onChange(updatedValues);
        return;
      }
      const numValue = parseFloat(newValue);
      if (!isNaN(numValue)) {
        const updatedValues = {
          ...values,
          [localActiveDevice]: { value: numValue, unit: currentUnit }
        };
        onChange(updatedValues);
      }
    };
    const handleSliderChange = (e) => {
      const newValue = parseFloat(e.target.value);
      const updatedValues = {
        ...values,
        [localActiveDevice]: { value: newValue, unit: currentUnit }
      };
      onChange(updatedValues);
      setInputValue(String(newValue));
    };
    const resetValue = () => {
      let defaultValue = "";
      if (defaultValues) {
        defaultValue = defaultValues[localActiveDevice] !== void 0 ? defaultValues[localActiveDevice] : defaultValues.default !== void 0 ? defaultValues.default : "";
      }
      const updatedValues = {
        ...values,
        [localActiveDevice]: { value: defaultValue, unit: currentUnit }
      };
      onChange(updatedValues);
      setInputValue(defaultValue === "" ? "" : String(defaultValue));
    };
    const getDeviceIcon = (device) => {
      if (window.digi?.icons?.deviceIcons?.[device]) {
        return window.digi.icons.deviceIcons[device];
      }
      return /* @__PURE__ */ wp.element.createElement("span", { className: `dashicon dashicons dashicons-${device}` });
    };
    const handleToggleDevice = () => {
      if (window.digi?.responsiveState?.toggleDevice) {
        window.digi.responsiveState.toggleDevice();
      } else {
        const nextDevice = localActiveDevice === "desktop" ? "tablet" : localActiveDevice === "tablet" ? "mobile" : "desktop";
        setLocalActiveDevice(nextDevice);
        document.body.setAttribute("data-digiblocks-device", nextDevice);
      }
    };
    const isResetDisabled = () => {
      if (!defaultValues && values[localActiveDevice].value === "")
        return true;
      if (defaultValues) {
        const defaultValue = defaultValues[localActiveDevice] !== void 0 ? defaultValues[localActiveDevice] : defaultValues.default !== void 0 ? defaultValues.default : "";
        return values[localActiveDevice].value === defaultValue;
      }
      return false;
    };
    const getPercentage = () => {
      if (values[localActiveDevice].value === "")
        return 0;
      const value2 = parseFloat(values[localActiveDevice].value);
      return Math.max(0, Math.min(100, (value2 - min) / (max - min) * 100));
    };
    const percentage = getPercentage();
    return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, label), /* @__PURE__ */ wp.element.createElement(
      Button4,
      {
        className: "digiblocks-responsive-common-button",
        onClick: handleToggleDevice,
        "aria-label": __4(`Switch to ${window.digi?.responsiveState?.getNextDevice() || "next"} view`, "digiblocks")
      },
      getDeviceIcon(localActiveDevice)
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__actions digiblocks-control__actions" }, /* @__PURE__ */ wp.element.createElement("div", { tabIndex: "0" }, /* @__PURE__ */ wp.element.createElement(
      "button",
      {
        type: "button",
        disabled: isResetDisabled(),
        className: "components-button digiblocks-reset is-secondary is-small",
        onClick: resetValue
      },
      /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
    )), units && units.length > 1 && /* @__PURE__ */ wp.element.createElement(
      ToggleGroupControl3,
      {
        value: currentUnit,
        onChange: (unit) => {
          setCurrentUnit(unit);
          const updatedValues = {
            ...values,
            [localActiveDevice]: { ...values[localActiveDevice], unit }
          };
          onChange(updatedValues);
        },
        isBlock: true,
        isSmall: true,
        hideLabelFromVision: true,
        "aria-label": __4("Select Units", "digiblocks"),
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      },
      units.map((unit) => /* @__PURE__ */ wp.element.createElement(
        ToggleGroupControlOption3,
        {
          key: unit.value,
          value: unit.value,
          label: unit.label
        }
      ))
    ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__mobile-controls" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-custom-range-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "range-slider-wrapper" }, /* @__PURE__ */ wp.element.createElement(
      "input",
      {
        className: "range-slider",
        id: inputId,
        max,
        min,
        step,
        type: "range",
        value: values[localActiveDevice].value === "" ? 0 : values[localActiveDevice].value,
        onChange: handleSliderChange
      }
    ), /* @__PURE__ */ wp.element.createElement("div", { className: "range-track" }, /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        className: "range-track-fill",
        style: { width: `${percentage}%` }
      }
    )), /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        className: "range-thumb",
        style: { left: `${percentage}%` }
      }
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "input-wrapper" }, /* @__PURE__ */ wp.element.createElement(
      "input",
      {
        className: "number-input",
        type: "number",
        id: `number-${inputId}`,
        value: inputValue,
        onChange: handleInputChange,
        min,
        max,
        step
      }
    ))))))));
  };
  var range_control_default = ResponsiveRangeControl;

  // resources/js/components/button-group-control.js
  var { __: __5 } = window.wp.i18n;
  var {
    Button: Button5,
    __experimentalToggleGroupControl: ToggleGroupControl4,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption4
  } = window.wp.components;
  var { useState: useState5, useEffect: useEffect5 } = window.wp.element;
  var ResponsiveButtonGroup = ({
    label,
    value,
    onChange,
    options = [],
    defaultValue = options.length > 0 ? options[0].value : "",
    defaultValues = null
  }) => {
    const [localActiveDevice, setLocalActiveDevice] = useState5(
      window.digi?.responsiveState?.activeDevice || "desktop"
    );
    useEffect5(() => {
      if (!window.digi?.responsiveState?.subscribe)
        return;
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
        document.body.setAttribute("data-digiblocks-device", device);
      });
      return unsubscribe;
    }, []);
    const ensureResponsiveValue = (val) => {
      if (!val || typeof val !== "object") {
        return {
          desktop: defaultValue,
          tablet: defaultValue,
          mobile: defaultValue
        };
      }
      const result = {};
      ["desktop", "tablet", "mobile"].forEach((device) => {
        if (val[device] !== void 0) {
          result[device] = val[device];
        } else {
          result[device] = defaultValue;
        }
      });
      return result;
    };
    const values = ensureResponsiveValue(value);
    const updateValue = (newValue) => {
      onChange({
        ...values,
        [localActiveDevice]: newValue
      });
    };
    const resetValue = () => {
      if (defaultValues) {
        const defaultVal = defaultValues[localActiveDevice] !== void 0 ? defaultValues[localActiveDevice] : defaultValues.default !== void 0 ? defaultValues.default : options[0].value;
        updateValue(defaultVal);
      } else {
        updateValue(defaultValue);
      }
    };
    const isResetDisabled = () => {
      if (!defaultValues)
        return false;
      const defaultVal = defaultValues[localActiveDevice] !== void 0 ? defaultValues[localActiveDevice] : defaultValues.default !== void 0 ? defaultValues.default : options[0].value;
      return values[localActiveDevice] === defaultVal;
    };
    const handleToggleDevice = () => {
      if (window.digi?.responsiveState?.toggleDevice) {
        window.digi.responsiveState.toggleDevice();
      } else {
        const nextDevice = localActiveDevice === "desktop" ? "tablet" : localActiveDevice === "tablet" ? "mobile" : "desktop";
        setLocalActiveDevice(nextDevice);
        document.body.setAttribute("data-digiblocks-device", nextDevice);
      }
    };
    const getDeviceIcon = (device) => {
      if (window.digi?.icons?.deviceIcons?.[device]) {
        return window.digi.icons.deviceIcons[device];
      }
      return /* @__PURE__ */ wp.element.createElement("span", { className: `dashicon dashicons dashicons-${device}` });
    };
    return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-control-inner" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control digiblocks-size-type-field-tabs" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-control__header" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-responsive-label-wrap" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, label), /* @__PURE__ */ wp.element.createElement(
      Button5,
      {
        className: "digiblocks-responsive-common-button",
        onClick: handleToggleDevice,
        "aria-label": __5(`Switch to ${window.digi?.responsiveState?.getNextDevice() || "next"} view`, "digiblocks")
      },
      getDeviceIcon(localActiveDevice)
    )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__actions digiblocks-control__actions" }, /* @__PURE__ */ wp.element.createElement("div", { tabIndex: "0" }, /* @__PURE__ */ wp.element.createElement(
      "button",
      {
        type: "button",
        disabled: isResetDisabled(),
        className: "components-button digiblocks-reset is-secondary is-small",
        onClick: resetValue
      },
      /* @__PURE__ */ wp.element.createElement("span", { className: "dashicon dashicons dashicons-image-rotate" })
    )))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-range-control__mobile-controls" }, /* @__PURE__ */ wp.element.createElement(
      ToggleGroupControl4,
      {
        value: values[localActiveDevice],
        onChange: updateValue,
        isBlock: true,
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      },
      options.map((option) => /* @__PURE__ */ wp.element.createElement(
        ToggleGroupControlOption4,
        {
          key: option.value,
          value: option.value,
          label: option.label
        }
      ))
    ))))));
  };
  var button_group_control_default = ResponsiveButtonGroup;

  // resources/js/components/box-shadow-control.js
  var { __: __6 } = window.wp.i18n;
  var { RangeControl: RangeControl2, TabPanel, ToggleControl, __experimentalToggleGroupControl: ToggleGroupControl5, __experimentalToggleGroupControlOption: ToggleGroupControlOption5 } = window.wp.components;
  var { PanelColorSettings } = window.wp.blockEditor;
  var BoxShadowControl = ({
    normalValue = {},
    hoverValue = {},
    onNormalChange,
    onHoverChange,
    label = __6("Box Shadow", "digiblocks")
  }) => {
    const defaultShadow = {
      enable: false,
      color: "rgba(0, 0, 0, 0.2)",
      horizontal: 0,
      vertical: 0,
      blur: 0,
      spread: 0,
      position: "outset"
    };
    const normal = { ...defaultShadow, ...normalValue };
    const hover = { ...defaultShadow, ...hoverValue };
    const tabs = [
      {
        name: "normal",
        title: __6("Normal", "digiblocks"),
        className: "digiblocks-tab-1 normal"
      },
      {
        name: "hover",
        title: __6("Hover", "digiblocks"),
        className: "digiblocks-tab-2 hover"
      }
    ];
    const updateShadowProperty = (tab, property, value) => {
      if (tab === "normal") {
        onNormalChange({
          ...normal,
          [property]: value
        });
      } else {
        onHoverChange({
          ...hover,
          [property]: value
        });
      }
    };
    const getShadowCSS = (shadow) => {
      if (!shadow.enable)
        return "none";
      const inset = shadow.position === "inset" ? "inset " : "";
      return `${inset}${shadow.horizontal}px ${shadow.vertical}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
    };
    const renderShadowControls = (tab) => {
      const currentValue = tab === "normal" ? normal : hover;
      return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-box-shadow-controls" }, label && /* @__PURE__ */ wp.element.createElement("h2", { className: "digiblocks-control-label" }, label), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-toggle-wrapper", style: { marginBottom: "16px" } }, /* @__PURE__ */ wp.element.createElement(
        ToggleControl,
        {
          label: __6("Enable Box Shadow", "digiblocks"),
          checked: currentValue.enable,
          onChange: () => updateShadowProperty(tab, "enable", !currentValue.enable),
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      )), currentValue.enable && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
        PanelColorSettings,
        {
          title: __6(
            "Color",
            "digiblocks"
          ),
          enableAlpha: true,
          colorSettings: [
            {
              value: currentValue.color,
              onChange: (value) => updateShadowProperty(tab, "color", value),
              label: __6(
                "Color",
                "digiblocks"
              )
            }
          ]
        }
      ), /* @__PURE__ */ wp.element.createElement(
        RangeControl2,
        {
          label: __6("Horizontal", "digiblocks"),
          value: currentValue.horizontal,
          onChange: (value) => updateShadowProperty(tab, "horizontal", value),
          min: -100,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: 0,
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        RangeControl2,
        {
          label: __6("Vertical", "digiblocks"),
          value: currentValue.vertical,
          onChange: (value) => updateShadowProperty(tab, "vertical", value),
          min: -100,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: 0,
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        RangeControl2,
        {
          label: __6("Blur", "digiblocks"),
          value: currentValue.blur,
          onChange: (value) => updateShadowProperty(tab, "blur", value),
          min: 0,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: 0,
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement(
        RangeControl2,
        {
          label: __6("Spread", "digiblocks"),
          value: currentValue.spread,
          onChange: (value) => updateShadowProperty(tab, "spread", value),
          min: -100,
          max: 100,
          step: 1,
          allowReset: true,
          resetFallbackValue: 0,
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        }
      ), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-multi-buttons-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-multi-buttons-control__label" }, __6("Position", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
        ToggleGroupControl5,
        {
          value: currentValue.position,
          onChange: (value) => updateShadowProperty(tab, "position", value),
          isBlock: true,
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true
        },
        /* @__PURE__ */ wp.element.createElement(
          ToggleGroupControlOption5,
          {
            value: "outset",
            label: __6("Outset", "digiblocks")
          }
        ),
        /* @__PURE__ */ wp.element.createElement(
          ToggleGroupControlOption5,
          {
            value: "inset",
            label: __6("Inset", "digiblocks")
          }
        )
      ))));
    };
    return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-box-shadow-control" }, /* @__PURE__ */ wp.element.createElement(
      TabPanel,
      {
        className: "digiblocks-control-tabs",
        activeClass: "active-tab",
        tabs
      },
      (tab) => renderShadowControls(tab.name)
    ));
  };
  var box_shadow_control_default = BoxShadowControl;

  // resources/js/components/tab-panel.js
  var { __: __7 } = window.wp.i18n;
  var { Fragment } = window.wp.element;
  var CustomTabPanel = ({
    tabs,
    activeTab,
    onSelect,
    customClass,
    children
  }) => {
    const selectedBlockId = window.wp.data.select("core/block-editor")?.getSelectedBlockClientId();
    const handleTabSelect = (tabName) => {
      if (window.digi.uiState && selectedBlockId) {
        window.digi.uiState.setActiveTab(tabName, selectedBlockId);
      }
      onSelect(tabName);
    };
    return /* @__PURE__ */ wp.element.createElement("div", { className: `digiblocks-tab-panel ${customClass || ""}` }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-tabs-wrapper" }, tabs.map((tab) => /* @__PURE__ */ wp.element.createElement(
      "button",
      {
        key: tab.name,
        className: `digiblocks-tab-button ${activeTab === tab.name ? "is-active" : ""}`,
        onClick: () => handleTabSelect(tab.name),
        "aria-selected": activeTab === tab.name,
        role: "tab",
        "data-tab": tab.name
      },
      /* @__PURE__ */ wp.element.createElement(
        "span",
        {
          className: "digiblocks-tab-icon",
          dangerouslySetInnerHTML: { __html: tab.icon }
        }
      ),
      /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-tab-title" }, tab.title)
    ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-tab-content" }, children));
  };
  var tab_panel_default = CustomTabPanel;

  // resources/js/components/font-awesome-control.js
  var { __: __8 } = window.wp.i18n;
  var {
    Button: Button6,
    Spinner,
    TextControl,
    Modal,
    Notice
  } = window.wp.components;
  var { useState: useState6, useEffect: useEffect6, useRef } = window.wp.element;
  var createSvgFromPath = (iconData) => {
    if (!iconData || !iconData.svg || Object.keys(iconData.svg).length === 0) {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
        </svg>`;
    }
    try {
      const firstStyle = Object.keys(iconData.svg)[0];
      const { width, height, path } = iconData.svg[firstStyle];
      if (!width || !height || !path) {
        throw new Error("Invalid SVG data");
      }
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="1em" height="1em">
            <path d="${path}"></path>
        </svg>`;
    } catch (error) {
      console.error("Error creating SVG from path:", error);
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
        </svg>`;
    }
  };
  var FontAwesomeControl = ({
    label = __8("Icon", "digiblocks"),
    value = null,
    onChange
  }) => {
    const [isModalOpen, setIsModalOpen] = useState6(false);
    const [icons, setIcons] = useState6([]);
    const [categories, setCategories] = useState6([]);
    const [selectedCategory, setSelectedCategory] = useState6("all");
    const [searchTerm, setSearchTerm] = useState6("");
    const [isLoading, setIsLoading] = useState6(true);
    const [hasError, setHasError] = useState6(false);
    const [errorMessage, setErrorMessage] = useState6("");
    const iconsCache = useRef({});
    const [visibleIcons, setVisibleIcons] = useState6([]);
    const [page, setPage] = useState6(1);
    const iconsPerPage = 100;
    const processIconData = () => {
      if (Object.keys(iconsCache.current).length > 0) {
        return;
      }
      setIsLoading(true);
      setHasError(false);
      try {
        if (!window.digiBlocksData) {
          throw new Error("Icon data not found. digiBlocksData is not defined.");
        }
        const rawIcons = window.digiBlocksData.fontAwesomeIcons;
        if (!rawIcons) {
          throw new Error("Icon data not found. fontAwesomeIcons is not defined.");
        }
        const categoryList = rawIcons.digiblocks_category_list || [];
        const processedIcons = Object.entries(rawIcons).filter(([key]) => key !== "digiblocks_category_list").map(([id, iconData]) => {
          const categories2 = Array.from(new Set(iconData.custom_categories || []));
          return {
            id,
            name: iconData.label || id,
            categories: categories2,
            // Create SVG using first available style
            svg: createSvgFromPath(iconData),
            // Store the raw data for future reference
            rawData: iconData
          };
        });
        const processedCategories = [
          // Add "All Icons" category
          {
            id: "all",
            name: __8("All Icons", "digiblocks"),
            count: processedIcons.length
          }
        ];
        if (categoryList && categoryList.length) {
          categoryList.forEach((category) => {
            const iconCount = processedIcons.filter(
              (icon) => icon.categories.includes(category.slug)
            ).length;
            processedCategories.push({
              id: category.slug,
              name: category.title,
              count: iconCount
            });
          });
        }
        const iconsByCategory = {};
        iconsByCategory["all"] = processedIcons;
        processedCategories.forEach((category) => {
          if (category.id !== "all") {
            iconsByCategory[category.id] = processedIcons.filter(
              (icon) => icon.categories.includes(category.id)
            );
          }
        });
        setCategories(processedCategories);
        iconsCache.current = iconsByCategory;
        setIcons(iconsByCategory["all"]);
        updateVisibleIcons(iconsByCategory["all"], 1);
      } catch (error) {
        console.error("Error processing Font Awesome icons:", error);
        setHasError(true);
        setErrorMessage(error.message || "An error occurred while loading icons.");
        setCategories([{ id: "all", name: "All Icons", count: 0 }]);
        iconsCache.current = { "all": [] };
        setIcons([]);
        setVisibleIcons([]);
      } finally {
        setIsLoading(false);
      }
    };
    const updateVisibleIcons = (filteredIcons, currentPage) => {
      const startIndex = (currentPage - 1) * iconsPerPage;
      const endIndex = startIndex + iconsPerPage;
      setVisibleIcons(filteredIcons.slice(startIndex, endIndex));
      setPage(currentPage);
    };
    const filterIcons = () => {
      try {
        let filteredIcons = iconsCache.current[selectedCategory] || [];
        if (searchTerm.trim().length > 0) {
          const term = searchTerm.toLowerCase().trim();
          filteredIcons = filteredIcons.filter(
            (icon) => icon.name.toLowerCase().includes(term) || icon.id.toLowerCase().includes(term)
          );
        }
        setIcons(filteredIcons);
        updateVisibleIcons(filteredIcons, 1);
      } catch (error) {
        console.error("Error filtering icons:", error);
        setHasError(true);
        setErrorMessage("Failed to filter icons.");
        setIcons([]);
        setVisibleIcons([]);
      }
    };
    const loadMoreIcons = () => {
      if (page * iconsPerPage < icons.length) {
        updateVisibleIcons(icons, page + 1);
      }
    };
    const selectIcon = (icon) => {
      const selectedIcon = {
        id: icon.id,
        name: icon.name,
        svg: icon.svg,
        categories: icon.categories
      };
      onChange(selectedIcon);
      setIsModalOpen(false);
    };
    const removeIcon = (e) => {
      e.stopPropagation();
      onChange(null);
    };
    useEffect6(() => {
      if (isModalOpen && categories.length === 0) {
        processIconData();
      }
    }, [isModalOpen]);
    useEffect6(() => {
      if (Object.keys(iconsCache.current).length > 0) {
        filterIcons();
      }
    }, [selectedCategory, searchTerm]);
    return /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-font-awesome-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-custom-ip" }, /* @__PURE__ */ wp.element.createElement("span", { className: "digiblocks-control-label" }, label), /* @__PURE__ */ wp.element.createElement(
      "div",
      {
        className: "digiblocks-ip-placeholder-wrap",
        onClick: () => setIsModalOpen(true)
      },
      value && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-remove-icon", onClick: removeIcon }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "https://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" }))),
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-selected-icon" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-selected-icon-overlay" }), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-selected-icon-value" }, value ? /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: value.svg } }) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-no-icon" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "https://www.w3.org/2000/svg", viewBox: "0 0 512 512", style: { opacity: 0.4 } }, /* @__PURE__ */ wp.element.createElement("path", { d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" }))))),
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-actions" }, /* @__PURE__ */ wp.element.createElement("span", null, value ? __8("Change Icon", "digiblocks") : __8("Click to choose your icon", "digiblocks")))
    )), isModalOpen && /* @__PURE__ */ wp.element.createElement(
      Modal,
      {
        className: "digiblocks-ip-modal-wrapper",
        onRequestClose: () => setIsModalOpen(false),
        shouldCloseOnClickOutside: true,
        overlayClassName: "digiblocks-ip-modal-wrapper-overlay"
      },
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-header" }, /* @__PURE__ */ wp.element.createElement("h2", null, __8("Select Icon", "digiblocks")), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-search-container" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-search-bar" }, /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "https://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" })), /* @__PURE__ */ wp.element.createElement(
        TextControl,
        {
          placeholder: __8("Search Icons", "digiblocks"),
          value: searchTerm,
          onChange: setSearchTerm
        }
      ), searchTerm && /* @__PURE__ */ wp.element.createElement(
        "span",
        {
          onClick: () => setSearchTerm(""),
          title: __8("Clear Search", "digiblocks")
        },
        "\xD7"
      )))),
      hasError && /* @__PURE__ */ wp.element.createElement(Notice, { status: "error", isDismissible: false }, errorMessage || __8("An error occurred while loading icons.", "digiblocks")),
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-lr-container" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-left" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-categories-list" }, categories.map((category) => /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          key: category.id,
          className: `${selectedCategory === category.id ? "selected" : ""}`,
          onClick: () => setSelectedCategory(category.id)
        },
        category.name
      )))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-right" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-modal-container" }, isLoading ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-loading" }, /* @__PURE__ */ wp.element.createElement(Spinner, null), /* @__PURE__ */ wp.element.createElement("p", null, __8("Loading icons...", "digiblocks"))) : visibleIcons.length === 0 ? /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-icons icon-not-found" }, /* @__PURE__ */ wp.element.createElement("p", null, __8("No icons found. Try a different search term or category.", "digiblocks"))) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-icons" }, visibleIcons.map((icon) => /* @__PURE__ */ wp.element.createElement(
        "div",
        {
          key: icon.id,
          className: `digiblocks-icon-item ${value && value.id === icon.id ? "selected" : ""}`,
          onClick: () => selectIcon(icon),
          title: icon.name
        },
        /* @__PURE__ */ wp.element.createElement("span", { dangerouslySetInnerHTML: { __html: icon.svg } }),
        /* @__PURE__ */ wp.element.createElement("span", null, icon.name)
      )), icons.length > visibleIcons.length && /* @__PURE__ */ wp.element.createElement(
        Button6,
        {
          isPrimary: true,
          className: "digiblocks-ip-load-more",
          onClick: loadMoreIcons
        },
        __8("Load More", "digiblocks")
      ))))),
      /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-ip-footer" }, /* @__PURE__ */ wp.element.createElement(
        Button6,
        {
          isPrimary: true,
          onClick: () => setIsModalOpen(false)
        },
        __8("Close", "digiblocks")
      ))
    ));
  };
  var font_awesome_control_default = FontAwesomeControl;

  // resources/js/globals.js
  window.digi = window.digi || {};
  window.digi.utils = window.digi.utils || {};
  window.digi.components = window.digi.components || {};
  window.digi.icons = window.digi.icons || {};
  window.digi.icons.deviceIcons = {
    desktop: /* @__PURE__ */ wp.element.createElement("svg", { width: "8", height: "7", viewBox: "0 0 8 7", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z" })),
    tablet: /* @__PURE__ */ wp.element.createElement("svg", { width: "6", height: "8", viewBox: "0 0 6 8", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M5 0H1C0.447715 0 0 0.447715 0 1V7C0 7.55228 0.447715 8 1 8H5C5.55228 8 6 7.55228 6 7V1C6 0.447715 5.55228 0 5 0ZM5 7H1V1H5V7Z" })),
    mobile: /* @__PURE__ */ wp.element.createElement("svg", { width: "4", height: "8", viewBox: "0 0 4 8", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M3.33333 0H0.666667C0.297995 0 0 0.298 0 0.666667V7.33333C0 7.702 0.297995 8 0.666667 8H3.33333C3.70201 8 4 7.702 4 7.33333V0.666667C4 0.298 3.70201 0 3.33333 0ZM2 7.33333C1.63201 7.33333 1.33333 7.03467 1.33333 6.66667C1.33333 6.29867 1.63201 6 2 6C2.36799 6 2.66667 6.29867 2.66667 6.66667C2.66667 7.03467 2.36799 7.33333 2 7.33333ZM3.33333 5.33333H0.666667V1.33333H3.33333V5.33333Z" }))
  };
  window.digi.uiState = {
    // Current active tab and panel states
    activeTab: "options",
    // Default tab
    activePanels: {},
    blockTabs: {},
    // Store tab state per block ID
    // Set the active inspector tab
    setActiveTab(tab, blockId = null) {
      if (blockId) {
        this.blockTabs[blockId] = tab;
      } else {
        this.activeTab = tab;
      }
    },
    // Get the active tab for a block
    getActiveTab(blockId = null) {
      if (blockId && this.blockTabs[blockId]) {
        return this.blockTabs[blockId];
      }
      return this.activeTab;
    },
    // Set a panel's open state
    setPanelState(tabName, panelName, isOpen) {
      if (!this.activePanels[tabName]) {
        this.activePanels[tabName] = {};
      }
      this.activePanels[tabName][panelName] = isOpen;
    },
    // Get a panel's open state
    getPanelState(tabName, panelName) {
      return this.activePanels[tabName]?.[panelName];
    }
  };
  window.digi.responsiveState = {
    // Property to get current device - will use the latest Gutenberg API
    get activeDevice() {
      try {
        const wp2 = window.wp;
        if (wp2?.data?.select("core/editor")?.getDeviceType) {
          const device = wp2.data.select("core/editor").getDeviceType();
          return this._convertFromGutenberg(device);
        }
        if (wp2?.data?.select("core/edit-post")?.__experimentalGetPreviewDeviceType) {
          const device = wp2.data.select("core/edit-post").__experimentalGetPreviewDeviceType();
          return this._convertFromGutenberg(device);
        }
        if (wp2?.data?.select("core/edit-site")?.__experimentalGetPreviewDeviceType) {
          const device = wp2.data.select("core/edit-site").__experimentalGetPreviewDeviceType();
          return this._convertFromGutenberg(device);
        }
      } catch (e) {
        console.warn("DigiBlocks: Could not get Gutenberg device type", e);
      }
      return "desktop";
    },
    // Convert from Gutenberg device names to our device names
    _convertFromGutenberg(device) {
      if (device === "Desktop")
        return "desktop";
      if (device === "Tablet")
        return "tablet";
      if (device === "Mobile")
        return "mobile";
      return "desktop";
    },
    // Convert to Gutenberg device names from our device names
    _convertToGutenberg(device) {
      if (device === "desktop")
        return "Desktop";
      if (device === "tablet")
        return "Tablet";
      if (device === "mobile")
        return "Mobile";
      return "Desktop";
    },
    // Toggle to next device in sequence
    toggleDevice() {
      try {
        const wp2 = window.wp;
        const currentDevice = this.activeDevice;
        const nextDevice = currentDevice === "desktop" ? "Tablet" : currentDevice === "tablet" ? "Mobile" : "Desktop";
        if (wp2?.data?.dispatch("core/editor")?.setDeviceType) {
          wp2.data.dispatch("core/editor").setDeviceType(nextDevice);
          return;
        }
        if (wp2?.data?.dispatch("core/edit-post")?.__experimentalSetPreviewDeviceType) {
          wp2.data.dispatch("core/edit-post").__experimentalSetPreviewDeviceType(nextDevice);
          return;
        }
        if (wp2?.data?.dispatch("core/edit-site")?.__experimentalSetPreviewDeviceType) {
          wp2.data.dispatch("core/edit-site").__experimentalSetPreviewDeviceType(nextDevice);
          return;
        }
      } catch (e) {
        console.warn("DigiBlocks: Could not set Gutenberg device type", e);
      }
    },
    listeners: [],
    // Subscribe to Gutenberg's device changes
    subscribe(callback) {
      const wp2 = window.wp;
      if (!wp2?.data?.subscribe)
        return () => {
        };
      let lastDevice = this.activeDevice;
      const unsubscribe = wp2.data.subscribe(() => {
        const currentDevice = this.activeDevice;
        if (currentDevice !== lastDevice) {
          lastDevice = currentDevice;
          document.body.setAttribute("data-digiblocks-device", currentDevice);
          callback(currentDevice);
          setTimeout(() => {
            try {
              const selectedBlockClientId = wp2.data.select("core/block-editor")?.getSelectedBlockClientId();
              if (!selectedBlockClientId)
                return;
              const activeTab = window.digi.uiState.getActiveTab(selectedBlockClientId);
              if (!activeTab)
                return;
              const tabButtons = document.querySelectorAll(".digiblocks-tab-button");
              tabButtons.forEach((button) => {
                if (button.getAttribute("data-tab") === activeTab) {
                  button.click();
                }
              });
            } catch (e) {
            }
          }, 100);
        }
      });
      this.listeners.push({ callback, unsubscribe });
      return () => {
        this.listeners = this.listeners.filter((listener) => listener.unsubscribe !== unsubscribe);
        unsubscribe();
      };
    },
    // For backward compatibility
    setActiveDevice(device) {
      try {
        const wp2 = window.wp;
        const gutenbergDevice = this._convertToGutenberg(device);
        if (wp2?.data?.dispatch("core/editor")?.setDeviceType) {
          wp2.data.dispatch("core/editor").setDeviceType(gutenbergDevice);
          return;
        }
        if (wp2?.data?.dispatch("core/edit-post")?.__experimentalSetPreviewDeviceType) {
          wp2.data.dispatch("core/edit-post").__experimentalSetPreviewDeviceType(gutenbergDevice);
          return;
        }
        if (wp2?.data?.dispatch("core/edit-site")?.__experimentalSetPreviewDeviceType) {
          wp2.data.dispatch("core/edit-site").__experimentalSetPreviewDeviceType(gutenbergDevice);
          return;
        }
      } catch (e) {
        console.warn("DigiBlocks: Could not set Gutenberg device type", e);
      }
    },
    // Notify all listeners of device change (for backward compatibility)
    notifyListeners() {
      const device = this.activeDevice;
      this.listeners.forEach((listener) => listener.callback(device));
    },
    // Get next device in sequence (for aria labels)
    getNextDevice() {
      const current = this.activeDevice;
      if (current === "desktop")
        return "tablet";
      if (current === "tablet")
        return "mobile";
      return "desktop";
    }
  };
  window.digi.createDeviceToggleButton = (Button7, className = "") => {
    const { __: __9 } = window.wp.i18n;
    return /* @__PURE__ */ wp.element.createElement(
      Button7,
      {
        className: `digiblocks-responsive-common-button ${className}`,
        onClick: () => window.digi.responsiveState.toggleDevice(),
        "aria-label": __9(`Switch to ${window.digi.responsiveState.getNextDevice()} view`, "digiblocks")
      },
      window.digi.icons.deviceIcons[window.digi.responsiveState.activeDevice]
    );
  };
  window.digi.loadedFonts = window.digi.loadedFonts || {};
  var tabIcons = {
    optionsIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path d="M223.3 37.8c.4-1.5 1.3-2.8 2.4-3.8c9.9-1.3 20-2 30.3-2s20.4 .7 30.3 2c1.1 1 1.9 2.3 2.4 3.8l13.7 47.7c3.5 12.1 12.2 21.1 22.5 26.1c7.6 3.6 14.8 7.8 21.7 12.5c9.4 6.5 21.7 9.5 33.9 6.5l48.2-12c1.5-.4 3-.3 4.4 .2c5.4 6.9 10.4 14.2 14.9 21.8l4.3 7.4c4.2 7.5 7.9 15.3 11.2 23.3c-.3 1.5-1 2.9-2.1 4L426.8 211c-8.7 9-12.2 21.1-11.3 32.5c.3 4.1 .5 8.3 .5 12.5s-.2 8.4-.5 12.5c-.9 11.4 2.6 23.5 11.3 32.5l34.5 35.7c1.1 1.1 1.8 2.5 2.1 4c-3.3 8-7 15.8-11.2 23.4l-4.2 7.3c-4.6 7.6-9.6 14.8-14.9 21.8c-1.4 .5-2.9 .5-4.4 .2l-48.2-12c-12.2-3-24.4 0-33.9 6.5c-6.9 4.7-14.1 8.9-21.7 12.5c-10.3 4.9-19.1 14-22.5 26.1l-13.7 47.7c-.4 1.5-1.3 2.8-2.4 3.8c-9.9 1.3-20 2-30.3 2s-20.4-.7-30.3-2c-1.1-1-1.9-2.3-2.4-3.8l-13.7-47.7c-3.5-12.1-12.2-21.1-22.5-26.1c-7.6-3.6-14.8-7.8-21.7-12.5c-9.4-6.5-21.7-9.5-33.9-6.5l-48.2 12c-1.5 .4-3 .3-4.4-.2c-5.4-7-10.4-14.2-15-21.8l-4.2-7.3c-4.2-7.5-7.9-15.3-11.2-23.4c.3-1.5 1-2.9 2.1-4L85.2 301c8.7-9 12.2-21.1 11.3-32.5c-.3-4.1-.5-8.3-.5-12.5s.2-8.4 .5-12.5c.9-11.4-2.6-23.5-11.3-32.5L50.7 175.2c-1.1-1.1-1.8-2.5-2.1-4c3.3-8 7-15.8 11.2-23.4l4.2-7.3c4.6-7.6 9.6-14.8 15-21.8c1.4-.5 2.9-.5 4.4-.2l48.2 12c12.2 3 24.4 0 33.9-6.5c6.9-4.7 14.1-8.9 21.7-12.5c10.3-4.9 19.1-14 22.5-26.1l13.7-47.7zM256 0c-13 0-25.9 1-38.4 2.9c-1.7 .3-3.4 .8-5 1.6c-9.5 4.9-16.9 13.6-20 24.5L178.9 76.7c-.6 2.2-2.5 4.5-5.6 6c-9.1 4.3-17.8 9.4-26 15c-2.8 1.9-5.8 2.4-8 1.8l-48.2-12C80.2 84.8 69 86.9 60 92.6c-1.5 .9-2.8 2.1-3.9 3.5C49 105 42.4 114.3 36.5 124.1l-.1 .3L32 132l-.1 .3c-5.4 9.8-10.2 19.9-14.3 30.4c-.6 1.6-1 3.3-1.1 5c-.5 10.8 3.3 21.6 11.2 29.8l34.5 35.7c1.6 1.7 2.7 4.4 2.4 7.8c-.4 5-.6 10-.6 15s.2 10.1 .6 15c.3 3.4-.8 6.2-2.4 7.8L27.7 314.6c-7.9 8.2-11.7 19-11.2 29.8c.1 1.7 .5 3.4 1.1 5c4.1 10.5 8.9 20.6 14.3 30.4l.1 .3 4.4 7.6 .1 .3c5.9 9.8 12.4 19.2 19.6 28.1c1.1 1.4 2.4 2.6 3.9 3.5c9 5.7 20.2 7.8 31.1 5.1l48.2-12c2.2-.6 5.2-.1 8 1.8c8.2 5.7 16.9 10.7 26 15c3.1 1.5 4.9 3.8 5.6 6L192.6 483c3.1 10.8 10.5 19.5 20 24.5c1.6 .8 3.2 1.4 5 1.6C230.1 511 243 512 256 512s25.9-1 38.4-2.9c1.7-.3 3.4-.8 5-1.6c9.5-4.9 16.9-13.6 20-24.5l13.7-47.7c.6-2.2 2.5-4.5 5.6-6c9.1-4.3 17.8-9.4 26-15c2.8-1.9 5.8-2.4 8-1.8l48.2 12c10.9 2.7 22.1 .7 31.1-5.1c1.5-.9 2.8-2.1 3.9-3.5c7.1-8.9 13.6-18.2 19.5-28l.2-.3L480 380l.1-.3c5.4-9.7 10.2-19.9 14.3-30.4c.6-1.6 1-3.3 1.1-5c.5-10.8-3.3-21.6-11.2-29.8l-34.5-35.7c-1.6-1.7-2.7-4.4-2.4-7.8c.4-5 .6-10 .6-15s-.2-10.1-.6-15c-.3-3.4 .8-6.2 2.4-7.8l34.5-35.7c7.9-8.2 11.7-19 11.2-29.8c-.1-1.7-.5-3.4-1.1-5c-4.1-10.5-8.9-20.6-14.3-30.4l-.1-.3-4.4-7.6-.2-.3c-5.9-9.8-12.4-19.2-19.5-28c-1.1-1.4-2.4-2.6-3.9-3.5c-9-5.7-20.2-7.8-31.1-5.1l-48.2 12c-2.2 .6-5.2 .1-8-1.8c-8.2-5.7-16.9-10.7-26-15c-3.1-1.5-4.9-3.8-5.6-6L319.4 29c-3.1-10.8-10.5-19.5-20-24.5c-1.6-.8-3.2-1.4-5-1.6C281.9 1 269 0 256 0zM200 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm144 0a88 88 0 1 0 -176 0 88 88 0 1 0 176 0z"/></svg>',
    styleIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path d="M480 258.3c-.1 14.1-13.8 29.7-38.1 29.7L344 288c-44.2 0-80 35.8-80 80c0 5.6 .6 11.2 1.7 16.6c2.9 13.8 8.9 27.3 13.2 37c.8 1.7 1.5 3.3 2.1 4.8c5 11.6 6.9 18.2 6.9 23.5c0 19.2-12.3 29.6-22.7 30c-3.1 .1-6.2 .2-9.3 .2C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224c0 .8 0 1.6 0 2.3zm32 .3c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48l97.9 0c36.5 0 69.7-24.8 70.1-61.3zM152 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm8-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>',
    advancedIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM184 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z"/></svg>',
    fieldIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24"><path d="M582.8 45.5l11.9 11.9c12.5 12.5 12.5 32.8 0 45.2L568 129.4l-57-57 26.4-26.8c12.5-12.6 32.8-12.7 45.4-.1zM346.2 239.2L488.5 95.1 545.4 152 402.3 295.2c-4.4 4.4-10 7.4-16.1 8.7l-61.5 12.9 12.9-61.7c1.3-6 4.2-11.5 8.6-15.9zM514.7 23.1L323.4 216.7c-8.6 8.7-14.6 19.8-17.1 31.8l-18 85.7c-1.1 5.3 .5 10.8 4.3 14.6s9.3 5.5 14.6 4.3l85.5-17.9c12.2-2.6 23.3-8.6 32.1-17.4L617.4 125.3c25-25 25-65.5 0-90.5L605.5 22.8c-25.1-25.1-65.8-25-90.8 .3zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 176c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l240 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 128zm64 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>',
    backgroundIcon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path d="M64 64C46.3 64 32 78.3 32 96l0 233.4 67.7-67.7c15.6-15.6 40.9-15.6 56.6 0L224 329.4 355.7 197.7c15.6-15.6 40.9-15.6 56.6 0L480 265.4 480 96c0-17.7-14.3-32-32-32L64 64zM32 374.6L32 416c0 17.7 14.3 32 32 32l41.4 0 96-96-67.7-67.7c-3.1-3.1-8.2-3.1-11.3 0L32 374.6zM389.7 220.3c-3.1-3.1-8.2-3.1-11.3 0L150.6 448 448 448c17.7 0 32-14.3 32-32l0-105.4-90.3-90.3zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm160 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-64 0a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"/></svg>'
  };
  window.digi.utils.animations = animations_default;
  window.digi.utils.useBlockId = useBlockId;
  window.digi.utils.getDimensionCSS = getDimensionCSS;
  window.digi.utils.animationPreview = animationPreview;
  window.digi.utils.prepareFontForUrl = prepareFontForUrl;
  window.digi.utils.loadGoogleFont = loadGoogleFont;
  window.digi.utils.initializeGoogleFonts = initializeGoogleFonts;
  window.digi.utils.scanForTypographyControls = scanForTypographyControls;
  window.digi.utils.initializeGoogleFontsOnLoad = initializeGoogleFontsOnLoad;
  window.digi.utils.injectFontsIntoPreviewIframe = injectFontsIntoPreviewIframe;
  window.digi.getGoogleFonts = google_fonts_default;
  window.digi.icons.tabIcons = tabIcons;
  window.digi.panelStates = {};
  window.digi.components.TabPanelBody = ({ tab, name, title, children, initialOpen = false }) => {
    const { PanelBody } = window.wp.components;
    const { useState: useState7, useEffect: useEffect7 } = window.wp.element;
    const stateKey = `${tab}-${name}`;
    if (window.digi.panelStates[stateKey] === void 0) {
      window.digi.panelStates[stateKey] = initialOpen;
    }
    const getSavedState = () => {
      const uiState = window.digi.uiState?.getPanelState(tab, name);
      if (uiState !== void 0) {
        return uiState;
      }
      return window.digi.panelStates[stateKey];
    };
    const [isOpen, setIsOpen] = useState7(getSavedState());
    const handleToggle = (open) => {
      setIsOpen(open);
      window.digi.panelStates[stateKey] = open;
      if (window.digi.uiState) {
        window.digi.uiState.setPanelState(tab, name, open);
      }
    };
    useEffect7(() => {
      const savedState = getSavedState();
      if (savedState !== isOpen) {
        setIsOpen(savedState);
      }
    }, [window.digi.panelStates[stateKey]]);
    return /* @__PURE__ */ wp.element.createElement(
      PanelBody,
      {
        title,
        initialOpen: isOpen,
        opened: isOpen,
        onToggle: handleToggle
      },
      children
    );
  };
  window.digi.components.ResponsiveControl = responsive_control_default;
  window.digi.components.DimensionControl = dimension_control_default;
  window.digi.components.TypographyControl = typography_control_default;
  window.digi.components.ResponsiveRangeControl = range_control_default;
  window.digi.components.ResponsiveButtonGroup = button_group_control_default;
  window.digi.components.BoxShadowControl = box_shadow_control_default;
  window.digi.components.CustomTabPanel = tab_panel_default;
  window.digi.components.FontAwesomeControl = font_awesome_control_default;
  window.digi.utils.initializeGoogleFontsOnLoad();
})();
