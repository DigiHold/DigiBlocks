(() => {
  // blocks/team/edit.js
  var { __ } = window.wp.i18n;
  var {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck,
    URLPopover
  } = window.wp.blockEditor;
  var {
    SelectControl,
    RangeControl,
    Button,
    ToggleControl,
    Tooltip,
    TextControl,
    Popover,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    BaseControl,
    Icon
  } = window.wp.components;
  var { useState, useEffect, useRef, Fragment } = window.wp.element;
  var { useBlockId, getDimensionCSS, animations, animationPreview } = digi.utils;
  var { tabIcons } = digi.icons;
  var { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody } = digi.components;
  var socialIconsSVG = {
    facebook: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" })),
    twitter: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" })),
    linkedin: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" })),
    instagram: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" })),
    pinterest: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" })),
    youtube: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" })),
    dribbble: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z" })),
    github: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" })),
    behance: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" })),
    vimeo: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" })),
    tiktok: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" })),
    email: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" })),
    website: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", width: "1em", height: "1em" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" }))
  };
  var plusIcon = /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" }));
  var TeamEdit = ({ attributes, setAttributes, clientId }) => {
    const {
      id,
      anchor,
      visibility,
      customClasses,
      members,
      columns,
      gutter,
      layout,
      alignment,
      imageStyle,
      imageSize,
      imageBorderRadius,
      imageBorderWidth,
      imageBorderColor,
      imageBorderStyle,
      typography,
      textTypography,
      contentTypography,
      nameColor,
      positionColor,
      bioColor,
      iconColor,
      iconHoverColor,
      iconSize,
      iconSpacing,
      iconBackgroundColor,
      iconBackgroundHoverColor,
      iconBorderRadius,
      iconPadding,
      boxBackgroundColor,
      boxBorderColor,
      boxBorderRadius,
      boxBorderWidth,
      boxBorderStyle,
      boxPadding,
      boxMargin,
      boxShadow,
      boxShadowHover,
      animation,
      showName,
      showPosition,
      showBio,
      showSocial
    } = attributes;
    useBlockId(id, clientId, setAttributes);
    const getVal = (obj, device) => {
      if (!obj || typeof obj !== "object")
        return null;
      if (device === "mobile") {
        return obj.mobile !== "" && obj.mobile !== void 0 && obj.mobile !== null ? obj.mobile : obj.tablet !== "" && obj.tablet !== void 0 && obj.tablet !== null ? obj.tablet : obj.desktop;
      }
      if (device === "tablet") {
        return obj.tablet !== "" && obj.tablet !== void 0 && obj.tablet !== null ? obj.tablet : obj.desktop;
      }
      return obj.desktop;
    };
    const [activeTab, setActiveTab] = useState(() => {
      if (window.digi.uiState) {
        const savedTab = window.digi.uiState.getActiveTab(clientId);
        if (savedTab)
          return savedTab;
      }
      return "options";
    });
    const [socialSelectPopover, setSocialSelectPopover] = useState(null);
    const [urlPopover, setUrlPopover] = useState(null);
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    const [animating, setAnimating] = useState(false);
    useEffect(() => {
      const unsubscribe = window.digi.responsiveState.subscribe((device) => {
        setLocalActiveDevice(device);
      });
      return unsubscribe;
    }, []);
    useEffect(() => {
      if (members && members.length > 0) {
        const updatedMembers = members.map((member, index) => {
          if (!member.id) {
            return { ...member, id: `team-member-${clientId.substr(0, 8)}-${index}` };
          }
          if (member.socials && member.socials.length > 0) {
            const updatedSocials = member.socials.map((social, sIndex) => {
              if (!social.id) {
                return { ...social, id: `social-${index}-${sIndex}` };
              }
              return social;
            });
            return { ...member, socials: updatedSocials };
          }
          return member;
        });
        if (JSON.stringify(updatedMembers) !== JSON.stringify(members)) {
          setAttributes({ members: updatedMembers });
        }
      }
    }, [clientId, members, setAttributes]);
    const previewTimeoutRef = useRef(null);
    useEffect(() => {
      if (animation && animation !== "none") {
        const timeoutId = setTimeout(() => {
          animationPreview(id, animation, animations, previewTimeoutRef);
        }, 100);
        return () => clearTimeout(timeoutId);
      }
    }, [animation]);
    const handlePreviewClick = () => {
      animationPreview(id, animation, animations, previewTimeoutRef);
    };
    const imageStyleOptions = [
      { label: __("Default", "digiblocks"), value: "default" },
      { label: __("Circle", "digiblocks"), value: "circle" },
      { label: __("Square", "digiblocks"), value: "square" },
      { label: __("Rounded", "digiblocks"), value: "rounded" }
    ];
    const borderStyleOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      { label: __("Solid", "digiblocks"), value: "solid" },
      { label: __("Dotted", "digiblocks"), value: "dotted" },
      { label: __("Dashed", "digiblocks"), value: "dashed" },
      { label: __("Double", "digiblocks"), value: "double" },
      { label: __("Groove", "digiblocks"), value: "groove" },
      { label: __("Ridge", "digiblocks"), value: "ridge" },
      { label: __("Inset", "digiblocks"), value: "inset" },
      { label: __("Outset", "digiblocks"), value: "outset" }
    ];
    const socialNetworks = [
      { label: __("Facebook", "digiblocks"), value: "facebook" },
      { label: __("Twitter", "digiblocks"), value: "twitter" },
      { label: __("LinkedIn", "digiblocks"), value: "linkedin" },
      { label: __("Instagram", "digiblocks"), value: "instagram" },
      { label: __("Pinterest", "digiblocks"), value: "pinterest" },
      { label: __("YouTube", "digiblocks"), value: "youtube" },
      { label: __("Dribbble", "digiblocks"), value: "dribbble" },
      { label: __("GitHub", "digiblocks"), value: "github" },
      { label: __("Behance", "digiblocks"), value: "behance" },
      { label: __("Vimeo", "digiblocks"), value: "vimeo" },
      { label: __("TikTok", "digiblocks"), value: "tiktok" },
      { label: __("Email", "digiblocks"), value: "email" },
      { label: __("Website", "digiblocks"), value: "website" }
    ];
    const animationOptions = [
      { label: __("None", "digiblocks"), value: "none" },
      ...Object.keys(animations).map((animation2) => ({
        label: animation2.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        value: animation2
      }))
    ];
    const tabList = [
      {
        name: "options",
        title: __("Options", "digiblocks"),
        icon: tabIcons.optionsIcon
      },
      {
        name: "style",
        title: __("Style", "digiblocks"),
        icon: tabIcons.styleIcon
      },
      {
        name: "advanced",
        title: __("Advanced", "digiblocks"),
        icon: tabIcons.advancedIcon
      }
    ];
    const addTeamMember = () => {
      const newMemberId = `team-member-${clientId.substr(0, 8)}-${Date.now()}`;
      const newMember = {
        id: newMemberId,
        name: __("New Team Member", "digiblocks"),
        position: __("Position", "digiblocks"),
        bio: __("Add a short bio about this team member.", "digiblocks"),
        image: {
          url: "",
          id: "",
          alt: ""
        },
        socials: [
          {
            id: `social-${newMemberId}-1`,
            network: "facebook",
            url: "https://facebook.com"
          },
          {
            id: `social-${newMemberId}-2`,
            network: "twitter",
            url: "https://twitter.com"
          }
        ]
      };
      setAttributes({
        members: [...members, newMember]
      });
    };
    const removeTeamMember = (index) => {
      const newMembers = [...members];
      newMembers.splice(index, 1);
      setAttributes({
        members: newMembers
      });
    };
    const duplicateTeamMember = (index) => {
      const memberToDuplicate = members[index];
      const timestamp = Date.now();
      const newMemberId = `team-member-${clientId.substr(0, 8)}-${timestamp}`;
      const newMember = {
        ...memberToDuplicate,
        id: newMemberId,
        socials: memberToDuplicate.socials ? memberToDuplicate.socials.map((social, sIndex) => ({
          ...social,
          id: `social-${newMemberId}-${sIndex}`
        })) : []
      };
      const newMembers = [...members];
      newMembers.splice(index + 1, 0, newMember);
      setAttributes({
        members: newMembers
      });
    };
    const moveTeamMemberUp = (index) => {
      if (index === 0)
        return;
      const newMembers = [...members];
      const member = newMembers[index];
      newMembers.splice(index, 1);
      newMembers.splice(index - 1, 0, member);
      setAttributes({
        members: newMembers
      });
    };
    const moveTeamMemberDown = (index) => {
      if (index === members.length - 1)
        return;
      const newMembers = [...members];
      const member = newMembers[index];
      newMembers.splice(index, 1);
      newMembers.splice(index + 1, 0, member);
      setAttributes({
        members: newMembers
      });
    };
    const updateTeamMember = (index, key, value) => {
      const newMembers = [...members];
      newMembers[index] = {
        ...newMembers[index],
        [key]: value
      };
      setAttributes({
        members: newMembers
      });
    };
    const updateTeamMemberImage = (index, media) => {
      const newMembers = [...members];
      if (!newMembers[index].image) {
        newMembers[index].image = {};
      }
      newMembers[index].image = {
        url: media.url || "",
        id: media.id || "",
        alt: media.alt || ""
      };
      setAttributes({
        members: newMembers
      });
    };
    const openSocialSelectPopover = (memberIndex) => {
      setSocialSelectPopover({
        memberIndex,
        target: document.getElementById(`add-social-${memberIndex}`)
      });
    };
    const closeSocialSelectPopover = () => {
      setSocialSelectPopover(null);
    };
    const addSpecificSocialLink = (memberIndex, network) => {
      const newMembers = [...members];
      const member = newMembers[memberIndex];
      const socials = member.socials || [];
      socials.push({
        id: `social-${member.id}-${Date.now()}`,
        network,
        url: ""
      });
      newMembers[memberIndex] = {
        ...member,
        socials
      };
      setAttributes({
        members: newMembers
      });
      closeSocialSelectPopover();
      setTimeout(() => {
        const socialIndex = socials.length - 1;
        openUrlPopover(memberIndex, socialIndex);
      }, 100);
    };
    const renderSocialSelectPopover = () => {
      if (!socialSelectPopover)
        return null;
      const { memberIndex, target } = socialSelectPopover;
      const usedNetworks = members[memberIndex].socials ? members[memberIndex].socials.map((social) => social.network) : [];
      const availableNetworks = socialNetworks.filter((network) => !usedNetworks.includes(network.value));
      return /* @__PURE__ */ wp.element.createElement(
        Popover,
        {
          anchor: target,
          onClose: closeSocialSelectPopover,
          position: "bottom center",
          expandOnMobile: true,
          className: "digiblocks-team-social-select-popover"
        },
        /* @__PURE__ */ wp.element.createElement("div", { style: { padding: "12px", width: "280px", maxHeight: "400px", overflowY: "auto" } }, /* @__PURE__ */ wp.element.createElement("div", { style: { marginBottom: "10px", fontWeight: "bold" } }, __("Select Social Network", "digiblocks")), /* @__PURE__ */ wp.element.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" } }, availableNetworks.map((network) => /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            key: network.value,
            variant: "secondary",
            onClick: () => addSpecificSocialLink(memberIndex, network.value),
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "8px",
              gap: "8px"
            }
          },
          /* @__PURE__ */ wp.element.createElement("span", { style: { display: "inline-flex", alignItems: "center" } }, socialIconsSVG[network.value]),
          /* @__PURE__ */ wp.element.createElement("span", null, network.label)
        ))))
      );
    };
    const removeSocialLink = (memberIndex, socialIndex) => {
      const newMembers = [...members];
      const member = newMembers[memberIndex];
      const socials = [...member.socials];
      socials.splice(socialIndex, 1);
      newMembers[memberIndex] = {
        ...member,
        socials
      };
      setAttributes({
        members: newMembers
      });
    };
    const updateSocialLink = (memberIndex, socialIndex, key, value) => {
      const newMembers = [...members];
      const member = newMembers[memberIndex];
      const socials = [...member.socials];
      socials[socialIndex] = {
        ...socials[socialIndex],
        [key]: value
      };
      newMembers[memberIndex] = {
        ...member,
        socials
      };
      setAttributes({
        members: newMembers
      });
    };
    const openUrlPopover = (memberIndex, socialIndex) => {
      setUrlPopover({
        memberIndex,
        socialIndex,
        target: document.getElementById(`social-link-${memberIndex}-${socialIndex}`)
      });
    };
    const closeUrlPopover = () => {
      setUrlPopover(null);
    };
    const generateCSS = () => {
      const activeDevice = localActiveDevice;
      const columnWidth = {
        desktop: `calc((100% - ${(columns.desktop - 1) * getVal(gutter, "desktop")}px) / ${columns.desktop})`,
        tablet: `calc((100% - ${(columns.tablet - 1) * getVal(gutter, "tablet")}px) / ${columns.tablet})`,
        mobile: `calc((100% - ${(columns.mobile - 1) * getVal(gutter, "mobile")}px) / ${columns.mobile})`
      };
      let boxShadowCSS = "box-shadow: none;";
      if (boxShadow && boxShadow.enable) {
        const inset = boxShadow.position === "inset" ? "inset " : "";
        boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
      }
      let boxShadowHoverCSS = "";
      if (boxShadowHover && boxShadowHover.enable) {
        const insetHover = boxShadowHover.position === "inset" ? "inset " : "";
        boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
      }
      let nameTypographyCSS = "";
      if (typography) {
        if (typography.fontFamily) {
          nameTypographyCSS += `font-family: ${typography.fontFamily};`;
        }
        const nameFontSize = getVal(typography.fontSize, activeDevice);
        if (nameFontSize) {
          nameTypographyCSS += `font-size: ${nameFontSize}${typography.fontSizeUnit || "px"};`;
        }
        if (typography.fontWeight) {
          nameTypographyCSS += `font-weight: ${typography.fontWeight};`;
        }
        if (typography.fontStyle) {
          nameTypographyCSS += `font-style: ${typography.fontStyle};`;
        }
        if (typography.textTransform) {
          nameTypographyCSS += `text-transform: ${typography.textTransform};`;
        }
        if (typography.textDecoration) {
          nameTypographyCSS += `text-decoration: ${typography.textDecoration};`;
        }
        const nameLineHeight = getVal(typography.lineHeight, activeDevice);
        if (nameLineHeight) {
          nameTypographyCSS += `line-height: ${nameLineHeight}${typography.lineHeightUnit || "em"};`;
        }
        const nameLetterSpacing = getVal(typography.letterSpacing, activeDevice);
        if (nameLetterSpacing || nameLetterSpacing === 0) {
          nameTypographyCSS += `letter-spacing: ${nameLetterSpacing}${typography.letterSpacingUnit || "px"};`;
        }
      }
      let positionTypographyCSS = "";
      if (textTypography) {
        if (textTypography.fontFamily) {
          positionTypographyCSS += `font-family: ${textTypography.fontFamily};`;
        }
        const positionFontSize = getVal(textTypography.fontSize, activeDevice);
        if (positionFontSize) {
          positionTypographyCSS += `font-size: ${positionFontSize}${textTypography.fontSizeUnit || "px"};`;
        }
        if (textTypography.fontWeight) {
          positionTypographyCSS += `font-weight: ${textTypography.fontWeight};`;
        }
        if (textTypography.fontStyle) {
          positionTypographyCSS += `font-style: ${textTypography.fontStyle};`;
        }
        if (textTypography.textTransform) {
          positionTypographyCSS += `text-transform: ${textTypography.textTransform};`;
        }
        if (textTypography.textDecoration) {
          positionTypographyCSS += `text-decoration: ${textTypography.textDecoration};`;
        }
        const positionLineHeight = getVal(textTypography.lineHeight, activeDevice);
        if (positionLineHeight) {
          positionTypographyCSS += `line-height: ${positionLineHeight}${textTypography.lineHeightUnit || "em"};`;
        }
        const positionLetterSpacing = getVal(textTypography.letterSpacing, activeDevice);
        if (positionLetterSpacing || positionLetterSpacing === 0) {
          positionTypographyCSS += `letter-spacing: ${positionLetterSpacing}${textTypography.letterSpacingUnit || "px"};`;
        }
      }
      let bioTypographyCSS = "";
      if (contentTypography) {
        if (contentTypography.fontFamily) {
          bioTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
        }
        const bioFontSize = getVal(contentTypography.fontSize, activeDevice);
        if (bioFontSize) {
          bioTypographyCSS += `font-size: ${bioFontSize}${contentTypography.fontSizeUnit || "px"};`;
        }
        if (contentTypography.fontWeight) {
          bioTypographyCSS += `font-weight: ${contentTypography.fontWeight};`;
        }
        if (contentTypography.fontStyle) {
          bioTypographyCSS += `font-style: ${contentTypography.fontStyle};`;
        }
        if (contentTypography.textTransform) {
          bioTypographyCSS += `text-transform: ${contentTypography.textTransform};`;
        }
        if (contentTypography.textDecoration) {
          bioTypographyCSS += `text-decoration: ${contentTypography.textDecoration};`;
        }
        const bioLineHeight = getVal(contentTypography.lineHeight, activeDevice);
        if (bioLineHeight) {
          bioTypographyCSS += `line-height: ${bioLineHeight}${contentTypography.lineHeightUnit || "em"};`;
        }
        const bioLetterSpacing = getVal(contentTypography.letterSpacing, activeDevice);
        if (bioLetterSpacing || bioLetterSpacing === 0) {
          bioTypographyCSS += `letter-spacing: ${bioLetterSpacing}${contentTypography.letterSpacingUnit || "px"};`;
        }
      }
      let imageBorderRadiusValue;
      if (imageStyle === "circle") {
        imageBorderRadiusValue = "border-radius: 50%;";
      } else if (imageStyle === "square") {
        imageBorderRadiusValue = "border-radius: 0;";
      } else if (imageStyle === "rounded") {
        imageBorderRadiusValue = "border-radius: 8px;";
      } else {
        imageBorderRadiusValue = `${getDimensionCSS(imageBorderRadius, "border-radius", activeDevice)}`;
      }
      const boxBorderRadiusValue = `${getDimensionCSS(boxBorderRadius, "border-radius", activeDevice)}`;
      const boxBorderWidthValue = `${getDimensionCSS(boxBorderWidth, "border-width", activeDevice)}`;
      const boxPaddingValue = `${getDimensionCSS(boxPadding, "padding", activeDevice)}`;
      const boxMarginValue = `${getDimensionCSS(boxMargin, "margin", activeDevice)}`;
      const imageBorderWidthValue = `${getDimensionCSS(imageBorderWidth, "border-width", activeDevice)}`;
      const iconBorderRadiusValue = `${getDimensionCSS(iconBorderRadius, "border-radius", activeDevice)}`;
      const iconPaddingValue = `${getDimensionCSS(iconPadding, "border-width", activeDevice)}`;
      return `
            /* Team Block - ${id} */
            .${id} {
                ${boxMarginValue}
            }
            
            /* Grid Layout */
            .${id} .digiblocks-team-container {
                display: flex;
                flex-wrap: wrap;
                gap: ${getVal(gutter, activeDevice)}px;
                justify-content: ${alignment === "center" ? "center" : alignment === "right" ? "flex-end" : "flex-start"};
            }
            
            /* List Layout */
            .${id}.layout-list .digiblocks-team-container {
                display: flex;
				flex-direction: column;
				gap: ${getVal(gutter, activeDevice)}px;
            }
            
            .${id}.layout-list .digiblocks-team-member {
                display: flex;
                align-items: center;
                width: 100%;
				gap: ${getVal(gutter, activeDevice)}px;
            }
            
            .${id}.layout-list .digiblocks-team-member-image {
                margin: 0;
            }
            
            .${id}.layout-list .digiblocks-team-member-content {
				flex: 1;
                text-align: left !important;
            }

			.${id}.layout-list .digiblocks-team-member-social {
				justify-content: flex-start;
			}
            
            /* Team Member */
            .${id} .digiblocks-team-member {
				display: flex;
				align-items: ${alignment === "center" ? "center" : alignment === "right" ? "flex-end" : "flex-start"};
				gap: 15px;
                ${layout === "grid" ? `width: ${columnWidth[activeDevice]}; flex-direction: column;` : ""}
                text-align: ${alignment};
                position: relative;
				background-color: ${boxBackgroundColor || "transparent"};
				${boxBorderStyle !== "none" ? `
					border-style: ${boxBorderStyle};
					border-color: ${boxBorderColor || "#e0e0e0"};
					${boxBorderWidthValue}
				` : ""}
				${boxBorderRadiusValue}
				${boxShadowCSS}
				${boxPaddingValue}
				transition: all 0.3s ease;
            }
            
            /* Hover effects */
            ${boxShadowHover && boxShadowHover.enable ? `
                .${id} .digiblocks-team-member:hover {
                    ${boxShadowHoverCSS}
                }
            ` : ""}
            
            /* Team Member Image */
            .${id} .digiblocks-team-member-image {
                width: ${getVal(imageSize, activeDevice)}px;
				height: ${getVal(imageSize, activeDevice)}px;
				max-width: 100%;
                ${imageBorderRadiusValue}
                overflow: hidden;
                display: flex;
                ${imageBorderStyle !== "none" ? `
					${imageBorderWidthValue}
					border-style: ${imageBorderStyle};
					border-color: ${imageBorderColor};
                ` : ""}
            }
            
            .${id} .digiblocks-team-member-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            
            /* Team Member Name */
            .${id} .digiblocks-team-member-name {
                color: ${nameColor};
                margin-top: 0;
                margin-bottom: 5px;
                ${nameTypographyCSS}
            }
            
            /* Team Member Position */
            .${id} .digiblocks-team-member-position {
                color: ${positionColor};
                margin-bottom: 10px;
                ${positionTypographyCSS}
            }
            
            /* Team Member Bio */
            .${id} .digiblocks-team-member-bio {
                color: ${bioColor};
                margin-bottom: ${showSocial ? "15px" : "0"};
                ${bioTypographyCSS}
            }
            
            /* Team Member Social */
            .${id} .digiblocks-team-member-social {
				display: flex;
				align-items: center;
				justify-content: ${alignment === "center" ? "center" : alignment === "right" ? "flex-end" : "flex-start"};
				gap: ${getVal(iconSpacing, activeDevice)}px;
				flex-wrap: wrap;
			}
			
			.${id} .digiblocks-team-member-social-icon {
				color: ${iconColor};
				display: flex;
				align-items: center;
				justify-content: center;
				${iconBorderRadiusValue}
				background-color: ${iconBackgroundColor};
				${iconPaddingValue}
				transition: all 0.3s ease;
				cursor: pointer;
				position: relative;
				z-index: 1;
			}
			
			.${id} .digiblocks-team-member-social-icon:hover {
				color: ${iconHoverColor};
				${iconBackgroundHoverColor ? `background-color: ${iconBackgroundHoverColor};` : ""}
			}
			
			.${id} .digiblocks-team-member-social-icon svg {
				width: ${getVal(iconSize, activeDevice) ? `${getVal(iconSize, activeDevice)}px` : "1.2rem"};
				height: ${getVal(iconSize, activeDevice) ? `${getVal(iconSize, activeDevice)}px` : "1.2rem"};
				fill: currentColor;
			}
			
			.${id} .digiblocks-team-member-social-icon-wrapper {
				position: relative;
			}
			
			.${id} .digiblocks-team-member-social-icon.add-social {
				background-color: #f0f0f0;
				color: #333;
				width: 30px;
				height: 30px;
			}
			
			.${id} .digiblocks-team-member-social-icon.add-social svg {
				width: .6rem;
				height: .6rem;
			}
            
            /* Editor Styles */
            .${id} .digiblocks-team-member-controls {
                display: flex;
                gap: 5px;
                position: absolute;
                right: 5px;
                top: 5px;
                background-color: rgba(255, 255, 255, 0.8);
                padding: 5px;
                border-radius: 5px;
                z-index: 10;
            }
            
            .${id} .digiblocks-team-member-placeholder {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #f0f0f0;
                color: #888;
                font-size: 14px;
                cursor: pointer;
            }
            
            .${id} .digiblocks-team-member-social-icon.add-social {
                background-color: #f0f0f0;
                color: #333;
            }
            
            .${id} .digiblocks-team-member-social-icon-controls {
                position: absolute;
                top: -5px;
                right: -5px;
                display: none;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 50%;
                padding: 2px;
                z-index: 2;
            }
            
            .${id} .digiblocks-team-member-social-icon-wrapper {
                position: relative;
            }
            
            .${id} .digiblocks-team-member-social-icon-wrapper:hover .digiblocks-team-member-social-icon-controls {
                display: block;
            }

			.${id} .digiblocks-image-upload-container {
				position: relative;
				width: 100%;
				height: 100%;
				overflow: hidden;
			}
			
			.${id} .digiblocks-image-upload-container img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: block;
				cursor: pointer;
				transition: transform 0.3s ease;
			}
			
			.${id} .digiblocks-image-upload-container:hover img {
				transform: scale(1.05);
			}
			
			.${id} .digiblocks-change-image-button {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				background-color: rgba(0, 0, 0, 0.5);
				color: white;
				padding: 8px 0;
				text-align: center;
				font-size: 12px;
				cursor: pointer;
				opacity: 0;
				transition: opacity 0.3s ease;
				border: none;
				width: 100%;
			}
			
			.${id} .digiblocks-image-upload-container:hover .digiblocks-change-image-button {
				opacity: 1;
			}

			/* Visibility Controls */
			${visibility.desktop ? `
				@media (min-width: 992px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}

			${visibility.tablet ? `
				@media (min-width: 768px) and (max-width: 991px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}

			${visibility.mobile ? `
				@media (max-width: 767px) {
					.${id} {
						opacity: 0.5 !important;
					}
				}
			` : ""}
        `;
    };
    const renderTeamMembers = () => {
      return members.map((member, index) => {
        return /* @__PURE__ */ wp.element.createElement("div", { key: member.id, className: "digiblocks-team-member" }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-controls" }, /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Up", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            className: "digiblocks-team-member-move-up",
            onClick: () => moveTeamMemberUp(index),
            icon: "arrow-up-alt2",
            disabled: index === 0,
            isSmall: true
          }
        )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Move Down", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            className: "digiblocks-team-member-move-down",
            onClick: () => moveTeamMemberDown(index),
            icon: "arrow-down-alt2",
            disabled: index === members.length - 1,
            isSmall: true
          }
        )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Duplicate", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            className: "digiblocks-team-member-duplicate",
            onClick: () => duplicateTeamMember(index),
            icon: "admin-page",
            isSmall: true
          }
        )), /* @__PURE__ */ wp.element.createElement(Tooltip, { text: __("Remove", "digiblocks") }, /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            className: "digiblocks-team-member-remove",
            onClick: () => removeTeamMember(index),
            icon: "trash",
            isSmall: true,
            disabled: members.length <= 1
          }
        ))), showName && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-image" }, /* @__PURE__ */ wp.element.createElement(MediaUploadCheck, null, /* @__PURE__ */ wp.element.createElement(
          MediaUpload,
          {
            onSelect: (media) => updateTeamMemberImage(index, media),
            allowedTypes: ["image"],
            value: member.image && member.image.id ? member.image.id : "",
            render: ({ open }) => /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-image-upload-container" }, member.image && member.image.url ? /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              "img",
              {
                src: member.image.url,
                alt: member.image.alt || member.name,
                onClick: open
              }
            ), /* @__PURE__ */ wp.element.createElement(
              "button",
              {
                className: "digiblocks-change-image-button",
                onClick: open
              },
              __("Change Image", "digiblocks")
            )) : /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-placeholder", onClick: open }, __("Choose Image", "digiblocks")))
          }
        ))), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-content" }, showName && /* @__PURE__ */ wp.element.createElement(
          RichText,
          {
            tagName: "h3",
            className: "digiblocks-team-member-name",
            value: member.name,
            onChange: (value) => updateTeamMember(index, "name", value),
            placeholder: __("Team Member Name", "digiblocks"),
            allowedFormats: ["core/bold", "core/italic"]
          }
        ), showPosition && /* @__PURE__ */ wp.element.createElement(
          RichText,
          {
            tagName: "div",
            className: "digiblocks-team-member-position",
            value: member.position,
            onChange: (value) => updateTeamMember(index, "position", value),
            placeholder: __("Position or Role", "digiblocks"),
            allowedFormats: ["core/bold", "core/italic"]
          }
        ), showBio && /* @__PURE__ */ wp.element.createElement(
          RichText,
          {
            tagName: "div",
            className: "digiblocks-team-member-bio",
            value: member.bio,
            onChange: (value) => updateTeamMember(index, "bio", value),
            placeholder: __("Add a short bio about this team member.", "digiblocks"),
            allowedFormats: ["core/bold", "core/italic", "core/link"]
          }
        ), showSocial && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-social" }, member.socials && member.socials.map((social, socialIndex) => /* @__PURE__ */ wp.element.createElement("div", { key: social.id, className: "digiblocks-team-member-social-icon-wrapper" }, /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            id: `social-link-${index}-${socialIndex}`,
            className: "digiblocks-team-member-social-icon",
            onClick: () => openUrlPopover(index, socialIndex)
          },
          socialIconsSVG[social.network]
        ), /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            className: "digiblocks-team-member-social-icon-remove",
            onClick: () => removeSocialLink(index, socialIndex),
            icon: "no-alt",
            isSmall: true,
            label: __("Remove", "digiblocks"),
            style: {
              position: "absolute",
              top: "-12px",
              right: "-10px",
              background: "#fff",
              borderRadius: "50%",
              padding: "2px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              zIndex: 2
            }
          }
        ))), /* @__PURE__ */ wp.element.createElement(
          "div",
          {
            id: `add-social-${index}`,
            className: "digiblocks-team-member-social-icon add-social",
            onClick: () => openSocialSelectPopover(index),
            title: __("Add Social Link", "digiblocks")
          },
          plusIcon
        ))));
      });
    };
    const renderUrlPopover = () => {
      if (!urlPopover)
        return null;
      const { memberIndex, socialIndex, target } = urlPopover;
      const social = members[memberIndex].socials[socialIndex];
      return /* @__PURE__ */ wp.element.createElement(
        Popover,
        {
          anchor: target,
          onClose: closeUrlPopover,
          position: "bottom center",
          expandOnMobile: true,
          className: "digiblocks-team-social-url-popover"
        },
        /* @__PURE__ */ wp.element.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "1rem", padding: "12px", minWidth: "280px" } }, /* @__PURE__ */ wp.element.createElement(
          SelectControl,
          {
            label: __("Social Network", "digiblocks"),
            value: social.network,
            options: socialNetworks,
            onChange: (value) => updateSocialLink(memberIndex, socialIndex, "network", value),
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(
          TextControl,
          {
            label: __("URL", "digiblocks"),
            value: social.url,
            onChange: (value) => updateSocialLink(memberIndex, socialIndex, "url", value),
            placeholder: social.network === "email" ? "mailto:example@domain.com" : social.network === "website" ? "https://example.com" : `https://${social.network}.com/username`,
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          }
        ), /* @__PURE__ */ wp.element.createElement(
          Button,
          {
            variant: "primary",
            onClick: closeUrlPopover,
            style: { justifyContent: "center", width: "100%" }
          },
          __("Done", "digiblocks")
        ))
      );
    };
    const renderTabContent = () => {
      switch (activeTab) {
        case "options":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "layout-settings",
              title: __("Layout Settings", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                id: "team-alignment-control",
                label: __("Layout Type", "digiblocks"),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControl,
                {
                  value: layout,
                  onChange: (value) => setAttributes({ layout: value }),
                  isBlock: true,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                },
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "grid",
                    label: __("Grid", "digiblocks"),
                    "aria-label": __("Grid Layout", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "list",
                    label: __("List", "digiblocks"),
                    "aria-label": __("List Layout", "digiblocks")
                  }
                )
              )
            ),
            layout === "grid" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              BaseControl,
              {
                id: "team-alignment-control",
                label: __("Alignment", "digiblocks"),
                __nextHasNoMarginBottom: true
              },
              /* @__PURE__ */ wp.element.createElement(
                ToggleGroupControl,
                {
                  value: alignment,
                  onChange: (value) => setAttributes({ alignment: value }),
                  isBlock: true,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                },
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "left",
                    label: __("Left", "digiblocks"),
                    "aria-label": __("Left alignment", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "center",
                    label: __("Center", "digiblocks"),
                    "aria-label": __("Center alignment", "digiblocks")
                  }
                ),
                /* @__PURE__ */ wp.element.createElement(
                  ToggleGroupControlOption,
                  {
                    value: "right",
                    label: __("Right", "digiblocks"),
                    "aria-label": __("Right alignment", "digiblocks")
                  }
                )
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Columns", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: columns[localActiveDevice],
                  onChange: (value) => setAttributes({
                    columns: {
                      ...columns,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 1,
                  max: 6,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: gutter[localActiveDevice],
                  onChange: (value) => setAttributes({
                    gutter: {
                      ...gutter,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 100,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "content-settings",
              title: __("Content Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Name", "digiblocks"),
                checked: showName,
                onChange: () => setAttributes({ showName: !showName }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Position", "digiblocks"),
                checked: showPosition,
                onChange: () => setAttributes({ showPosition: !showPosition }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Bio", "digiblocks"),
                checked: showBio,
                onChange: () => setAttributes({ showBio: !showBio }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Show Social Icons", "digiblocks"),
                checked: showSocial,
                onChange: () => setAttributes({ showSocial: !showSocial }),
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "options",
              name: "image-settings",
              title: __("Image Settings", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Image Style", "digiblocks"),
                value: imageStyle,
                options: imageStyleOptions,
                onChange: (value) => setAttributes({ imageStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Image Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: imageSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    imageSize: {
                      ...imageSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 50,
                  max: 300,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: imageBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ imageBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            imageBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Border Color", "digiblocks"),
                initialOpen: false,
                enableAlpha: true,
                colorSettings: [
                  {
                    value: imageBorderColor,
                    onChange: (value) => setAttributes({ imageBorderColor: value }),
                    label: __("Border Color", "digiblocks")
                  }
                ]
              }
            ), /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: imageBorderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    imageBorderWidth: {
                      ...imageBorderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )),
            imageStyle === "default" && /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: imageBorderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    imageBorderRadius: {
                      ...imageBorderRadius,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ));
        case "style":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "colors",
              title: __("Colors", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Text Colors", "digiblocks"),
                initialOpen: true,
                colorSettings: [
                  {
                    value: nameColor,
                    onChange: (value) => setAttributes({ nameColor: value }),
                    label: __("Name Color", "digiblocks")
                  },
                  {
                    value: positionColor,
                    onChange: (value) => setAttributes({ positionColor: value }),
                    label: __("Position Color", "digiblocks")
                  },
                  {
                    value: bioColor,
                    onChange: (value) => setAttributes({ bioColor: value }),
                    label: __("Bio Color", "digiblocks")
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Social Icon Colors", "digiblocks"),
                initialOpen: false,
                colorSettings: [
                  {
                    value: iconColor,
                    onChange: (value) => setAttributes({ iconColor: value }),
                    label: __("Icon Color", "digiblocks")
                  },
                  {
                    value: iconHoverColor,
                    onChange: (value) => setAttributes({ iconHoverColor: value }),
                    label: __("Icon Hover Color", "digiblocks")
                  },
                  {
                    value: iconBackgroundColor,
                    onChange: (value) => setAttributes({ iconBackgroundColor: value }),
                    label: __("Icon Background", "digiblocks")
                  },
                  {
                    value: iconBackgroundHoverColor,
                    onChange: (value) => setAttributes({ iconBackgroundHoverColor: value }),
                    label: __("Icon Background Hover", "digiblocks")
                  }
                ]
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              PanelColorSettings,
              {
                title: __("Box Colors", "digiblocks"),
                initialOpen: false,
                colorSettings: [
                  {
                    value: boxBackgroundColor,
                    onChange: (value) => setAttributes({ boxBackgroundColor: value }),
                    label: __("Background Color", "digiblocks")
                  },
                  {
                    value: boxBorderColor,
                    onChange: (value) => setAttributes({ boxBorderColor: value }),
                    label: __("Border Color", "digiblocks")
                  }
                ]
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "typography",
              title: __("Typography", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Name Typography", "digiblocks"),
                value: typography,
                onChange: (value) => setAttributes({ typography: value }),
                defaults: {
                  fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Position Typography", "digiblocks"),
                value: textTypography,
                onChange: (value) => setAttributes({ textTypography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              TypographyControl,
              {
                label: __("Bio Typography", "digiblocks"),
                value: contentTypography,
                onChange: (value) => setAttributes({ contentTypography: value }),
                defaults: {
                  fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                  fontSizeUnit: "px",
                  lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                  lineHeightUnit: "em"
                }
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "social-icons",
              title: __("Social Icons", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Icon Size", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: iconSize[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconSize: {
                      ...iconSize,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 10,
                  max: 50,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Icon Spacing", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                RangeControl,
                {
                  value: iconSpacing[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconSpacing: {
                      ...iconSpacing,
                      [localActiveDevice]: value
                    }
                  }),
                  min: 0,
                  max: 30,
                  step: 1,
                  __next40pxDefaultSize: true,
                  __nextHasNoMarginBottom: true
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Icon Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: iconPadding[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconPadding: {
                      ...iconPadding,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: iconBorderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    iconBorderRadius: {
                      ...iconBorderRadius,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "style",
              name: "box-style",
              title: __("Box Style", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Border Style", "digiblocks"),
                value: boxBorderStyle,
                options: borderStyleOptions,
                onChange: (value) => setAttributes({ boxBorderStyle: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            boxBorderStyle !== "none" && /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Width", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: boxBorderWidth[localActiveDevice],
                  onChange: (value) => setAttributes({
                    boxBorderWidth: {
                      ...boxBorderWidth,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Border Radius", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: boxBorderRadius[localActiveDevice],
                  onChange: (value) => setAttributes({
                    boxBorderRadius: {
                      ...boxBorderRadius,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              BoxShadowControl,
              {
                label: __("Box Shadow", "digiblocks"),
                normalValue: boxShadow,
                hoverValue: boxShadowHover,
                onNormalChange: (value) => setAttributes({ boxShadow: value }),
                onHoverChange: (value) => setAttributes({ boxShadowHover: value })
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Padding", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: boxPadding[localActiveDevice],
                  onChange: (value) => setAttributes({
                    boxPadding: {
                      ...boxPadding,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            ),
            /* @__PURE__ */ wp.element.createElement(
              ResponsiveControl,
              {
                label: __("Margin", "digiblocks")
              },
              /* @__PURE__ */ wp.element.createElement(
                DimensionControl,
                {
                  values: boxMargin[localActiveDevice],
                  onChange: (value) => setAttributes({
                    boxMargin: {
                      ...boxMargin,
                      [localActiveDevice]: value
                    }
                  })
                }
              )
            )
          ));
        case "advanced":
          return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "animation",
              title: __("Animation", "digiblocks"),
              initialOpen: true
            },
            /* @__PURE__ */ wp.element.createElement(
              SelectControl,
              {
                label: __("Animation Effect", "digiblocks"),
                value: animation,
                options: animationOptions,
                onChange: (value) => setAttributes({ animation: value }),
                __next40pxDefaultSize: true,
                __nextHasNoMarginBottom: true
              }
            ),
            animation && animation !== "none" && /* @__PURE__ */ wp.element.createElement("div", { style: { marginTop: "10px" } }, /* @__PURE__ */ wp.element.createElement(
              Button,
              {
                variant: "secondary",
                onClick: handlePreviewClick,
                style: { width: "100%" },
                disabled: animating
              },
              animating ? __("Previewing...", "digiblocks") : __("Preview Animation", "digiblocks")
            ))
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "visibility",
              title: __("Visibility", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__help", style: {
              padding: "12px",
              backgroundColor: "#f0f6fc",
              border: "1px solid #c3ddfd",
              borderRadius: "4px",
              marginBottom: "16px"
            } }, /* @__PURE__ */ wp.element.createElement("strong", null, __("Editor Note:", "digiblocks")), /* @__PURE__ */ wp.element.createElement("br", null), __("Hidden elements appear with reduced opacity in the editor for easy editing. Visibility changes only take effect on the frontend.", "digiblocks")),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Desktop", "digiblocks"),
                checked: visibility.desktop,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    desktop: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Tablet", "digiblocks"),
                checked: visibility.tablet,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    tablet: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            ),
            /* @__PURE__ */ wp.element.createElement(
              ToggleControl,
              {
                label: __("Hide on Mobile", "digiblocks"),
                checked: visibility.mobile,
                onChange: (value) => setAttributes({
                  visibility: {
                    ...visibility,
                    mobile: value
                  }
                }),
                __nextHasNoMarginBottom: true
              }
            )
          ), /* @__PURE__ */ wp.element.createElement(
            TabPanelBody,
            {
              tab: "advanced",
              name: "additional",
              title: __("Additional", "digiblocks"),
              initialOpen: false
            },
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control html-anchor-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "html-anchor" }, __("HTML anchor", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "html-anchor",
                value: anchor || "",
                onChange: (e) => setAttributes({ anchor: e.target.value }),
                "aria-describedby": "html-anchor-help",
                autoCapitalize: "none",
                autoComplete: "off"
              }
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "html-anchor-help", className: "components-base-control__help" }, __(`Enter a word or two \u2014 without spaces \u2014 to make a unique web address just for this block, called an "anchor". Then, you'll be able to link directly to this section of your page.`, "digiblocks"), " ", /* @__PURE__ */ wp.element.createElement(
              "a",
              {
                className: "components-external-link",
                href: "https://wordpress.org/documentation/article/page-jumps/",
                target: "_blank",
                rel: "external noreferrer noopener"
              },
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__contents" }, __("Learn more about anchors", "digiblocks")),
              /* @__PURE__ */ wp.element.createElement("span", { className: "components-external-link__icon", "aria-label": "(opens in a new tab)" }, "\u2197")
            ))),
            /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control" }, /* @__PURE__ */ wp.element.createElement("div", { className: "components-base-control__field" }, /* @__PURE__ */ wp.element.createElement("label", { className: "components-base-control__label", htmlFor: "additional-css-classes" }, __("Additional CSS class(es)", "digiblocks")), /* @__PURE__ */ wp.element.createElement(
              "input",
              {
                className: "components-text-control__input",
                type: "text",
                id: "additional-css-classes",
                value: customClasses || "",
                onChange: (e) => setAttributes({ customClasses: e.target.value }),
                "aria-describedby": "additional-css-classes-help",
                autoComplete: "off"
              }
            )), /* @__PURE__ */ wp.element.createElement("p", { id: "additional-css-classes-help", className: "components-base-control__help" }, __("Separate multiple classes with spaces.", "digiblocks")))
          ));
        default:
          return null;
      }
    };
    const blockProps = useBlockProps({
      className: `digiblocks-team-block ${id} layout-${layout} align-${alignment} ${customClasses || ""}`,
      id: anchor || null
      // Set the anchor as ID if provided
    });
    return /* @__PURE__ */ wp.element.createElement(wp.element.Fragment, null, /* @__PURE__ */ wp.element.createElement(InspectorControls, null, /* @__PURE__ */ wp.element.createElement(
      CustomTabPanel,
      {
        tabs: tabList,
        activeTab,
        onSelect: setActiveTab
      },
      renderTabContent()
    )), /* @__PURE__ */ wp.element.createElement("style", { dangerouslySetInnerHTML: { __html: generateCSS() } }), /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-container" }, renderTeamMembers()), /* @__PURE__ */ wp.element.createElement(
      Button,
      {
        variant: "primary",
        icon: "plus",
        onClick: addTeamMember,
        style: { width: "100%", marginTop: "20px", justifyContent: "center" }
      },
      __("Add Team Member", "digiblocks")
    ), renderUrlPopover(), renderSocialSelectPopover()));
  };
  var edit_default = TeamEdit;

  // blocks/team/save.js
  var { useBlockProps: useBlockProps2, RichText: RichText2 } = window.wp.blockEditor;
  var socialIconsSVG2 = {
    facebook: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" })),
    twitter: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" })),
    linkedin: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" })),
    instagram: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" })),
    pinterest: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" })),
    youtube: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" })),
    dribbble: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z" })),
    github: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 496 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" })),
    behance: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" })),
    vimeo: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" })),
    tiktok: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" })),
    email: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" })),
    website: /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" }, /* @__PURE__ */ wp.element.createElement("path", { d: "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" }))
  };
  var TeamSave = ({ attributes }) => {
    const {
      id,
      members,
      layout,
      alignment,
      animation,
      anchor,
      customClasses,
      showName,
      showPosition,
      showBio,
      showSocial
    } = attributes;
    const blockClass = `digiblocks-team-block ${id} layout-${layout} align-${alignment} ${animation !== "none" ? `animate-${animation}` : ""} ${customClasses || ""}`;
    const blockProps = useBlockProps2.save({
      className: blockClass,
      id: anchor || null
    });
    const renderTeamMembers = () => {
      return members.map((member) => {
        return /* @__PURE__ */ wp.element.createElement("div", { key: member.id, className: "digiblocks-team-member" }, showName && member.image && member.image.url && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-image" }, /* @__PURE__ */ wp.element.createElement(
          "img",
          {
            src: member.image.url,
            alt: member.image.alt || member.name
          }
        )), /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-content" }, showName && /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "h3",
            className: "digiblocks-team-member-name",
            value: member.name
          }
        ), showPosition && /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "div",
            className: "digiblocks-team-member-position",
            value: member.position
          }
        ), showBio && /* @__PURE__ */ wp.element.createElement(
          RichText2.Content,
          {
            tagName: "div",
            className: "digiblocks-team-member-bio",
            value: member.bio
          }
        ), showSocial && member.socials && member.socials.length > 0 && /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-member-social" }, member.socials.map((social) => {
          const SocialIcon = socialIconsSVG2[social.network];
          return /* @__PURE__ */ wp.element.createElement(
            "a",
            {
              key: social.id,
              href: social.url,
              className: "digiblocks-team-member-social-icon",
              rel: "noopener noreferrer",
              target: "_blank",
              "aria-label": social.network
            },
            SocialIcon
          );
        }))));
      });
    };
    return /* @__PURE__ */ wp.element.createElement("div", { ...blockProps }, /* @__PURE__ */ wp.element.createElement("div", { className: "digiblocks-team-container" }, renderTeamMembers()));
  };
  var save_default = TeamSave;

  // blocks/team/index.js
  var { __: __2 } = window.wp.i18n;
  var { registerBlockType } = window.wp.blocks;
  registerBlockType("digiblocks/team", {
    apiVersion: 2,
    title: digiBlocksData.blocks["team"].title,
    category: "digiblocks",
    icon: {
      src: () => {
        const { viewbox, path } = digiBlocksData.blocks["team"].icon;
        return /* @__PURE__ */ wp.element.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${viewbox}`, className: "digiblocks-editor-icons" }, /* @__PURE__ */ wp.element.createElement("path", { d: path }));
      }
    },
    description: digiBlocksData.blocks["team"].description,
    keywords: [__2("team", "digiblocks"), __2("members", "digiblocks"), __2("staff", "digiblocks"), __2("people", "digiblocks")],
    supports: {
      html: false,
      className: false,
      customClassName: false,
      anchor: false
    },
    attributes: {
      id: {
        type: "string",
        default: ""
      },
      anchor: {
        type: "string",
        default: ""
      },
      visibility: {
        type: "object",
        default: {
          desktop: false,
          tablet: false,
          mobile: false
        }
      },
      customClasses: {
        type: "string",
        default: ""
      },
      members: {
        type: "array",
        default: [
          {
            id: "team-member-1",
            name: __2("John Doe", "digiblocks"),
            position: __2("CEO & Founder", "digiblocks"),
            bio: __2("John has over 15 years of experience in the industry and leads our team with vision and expertise.", "digiblocks"),
            image: {
              url: "",
              id: "",
              alt: ""
            },
            socials: [
              {
                id: "social-1",
                network: "facebook",
                url: "https://facebook.com"
              },
              {
                id: "social-2",
                network: "twitter",
                url: "https://twitter.com"
              }
            ]
          },
          {
            id: "team-member-2",
            name: __2("Jane Smith", "digiblocks"),
            position: __2("Creative Director", "digiblocks"),
            bio: __2("Jane brings creativity and innovation to every project with her background in design and marketing.", "digiblocks"),
            image: {
              url: "",
              id: "",
              alt: ""
            },
            socials: [
              {
                id: "social-3",
                network: "linkedin",
                url: "https://linkedin.com"
              },
              {
                id: "social-4",
                network: "instagram",
                url: "https://instagram.com"
              }
            ]
          },
          {
            id: "team-member-3",
            name: __2("Mike Johnson", "digiblocks"),
            position: __2("Lead Developer", "digiblocks"),
            bio: __2("Mike is our technical expert, specializing in cutting-edge technologies and solving complex problems.", "digiblocks"),
            image: {
              url: "",
              id: "",
              alt: ""
            },
            socials: [
              {
                id: "social-5",
                network: "github",
                url: "https://github.com"
              },
              {
                id: "social-6",
                network: "dribbble",
                url: "https://dribbble.com"
              }
            ]
          }
        ]
      },
      columns: {
        type: "object",
        default: {
          desktop: 3,
          tablet: 2,
          mobile: 1
        }
      },
      gutter: {
        type: "object",
        default: {
          desktop: 30,
          tablet: "",
          mobile: ""
        }
      },
      layout: {
        type: "string",
        default: "grid"
      },
      alignment: {
        type: "string",
        default: "center"
      },
      imageStyle: {
        type: "string",
        default: "circle"
      },
      imageSize: {
        type: "object",
        default: {
          desktop: 150,
          tablet: "",
          mobile: ""
        }
      },
      imageBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      imageBorderWidth: {
        type: "object",
        default: {
          desktop: { top: "", right: "", bottom: "", left: "", unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      imageBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      imageBorderStyle: {
        type: "string",
        default: "none"
      },
      typography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 22, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "600",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.5, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      textTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "400",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.5, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      contentTypography: {
        type: "object",
        default: {
          fontFamily: "",
          fontSize: { desktop: 16, tablet: "", mobile: "" },
          fontSizeUnit: "px",
          fontWeight: "400",
          fontStyle: "normal",
          textTransform: "none",
          textDecoration: "none",
          lineHeight: { desktop: 1.5, tablet: "", mobile: "" },
          lineHeightUnit: "em",
          letterSpacing: { desktop: 0, tablet: "", mobile: "" },
          letterSpacingUnit: "px"
        }
      },
      nameColor: {
        type: "string",
        default: "#333333"
      },
      positionColor: {
        type: "string",
        default: "#666666"
      },
      bioColor: {
        type: "string",
        default: "#666666"
      },
      iconColor: {
        type: "string",
        default: "#1e73be"
      },
      iconHoverColor: {
        type: "string",
        default: "#135e9e"
      },
      iconSize: {
        type: "object",
        default: {
          desktop: 20,
          tablet: "",
          mobile: ""
        }
      },
      iconSpacing: {
        type: "object",
        default: {
          desktop: 10,
          tablet: "",
          mobile: ""
        }
      },
      iconBackgroundColor: {
        type: "string",
        default: "transparent"
      },
      iconBackgroundHoverColor: {
        type: "string",
        default: ""
      },
      iconBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 50, right: 50, bottom: 50, left: 50, unit: "%" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "%" },
          mobile: { top: "", right: "", bottom: "", left: 50, unit: "%" }
        }
      },
      iconPadding: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      boxBackgroundColor: {
        type: "string",
        default: "#ffffff"
      },
      boxBorderColor: {
        type: "string",
        default: "#e0e0e0"
      },
      boxBorderRadius: {
        type: "object",
        default: {
          desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      boxBorderWidth: {
        type: "object",
        default: {
          desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      boxBorderStyle: {
        type: "string",
        default: "solid"
      },
      boxPadding: {
        type: "object",
        default: {
          desktop: { top: 30, right: 30, bottom: 30, left: 30, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      boxMargin: {
        type: "object",
        default: {
          desktop: { top: 0, right: 0, bottom: 30, left: 0, unit: "px" },
          tablet: { top: "", right: "", bottom: "", left: "", unit: "px" },
          mobile: { top: "", right: "", bottom: "", left: "", unit: "px" }
        }
      },
      boxShadow: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.1)",
          horizontal: 0,
          vertical: 5,
          blur: 15,
          spread: 0,
          position: "outset"
        }
      },
      boxShadowHover: {
        type: "object",
        default: {
          enable: false,
          color: "rgba(0, 0, 0, 0.2)",
          horizontal: 0,
          vertical: 10,
          blur: 25,
          spread: 0,
          position: "outset"
        }
      },
      animation: {
        type: "string",
        default: "none"
      },
      showName: {
        type: "boolean",
        default: true
      },
      showPosition: {
        type: "boolean",
        default: true
      },
      showBio: {
        type: "boolean",
        default: true
      },
      showSocial: {
        type: "boolean",
        default: true
      }
    },
    example: {
      attributes: {
        members: [
          {
            id: "team-member-1",
            name: __2("John Doe", "digiblocks"),
            position: __2("CEO & Founder", "digiblocks"),
            bio: __2("John has over 15 years of experience in the industry.", "digiblocks"),
            socials: [
              {
                id: "social-1",
                network: "facebook",
                url: "https://facebook.com"
              },
              {
                id: "social-2",
                network: "twitter",
                url: "https://twitter.com"
              }
            ]
          },
          {
            id: "team-member-2",
            name: __2("Jane Smith", "digiblocks"),
            position: __2("Creative Director", "digiblocks"),
            bio: __2("Jane brings creativity to every project.", "digiblocks"),
            socials: [
              {
                id: "social-3",
                network: "linkedin",
                url: "https://linkedin.com"
              }
            ]
          }
        ],
        columns: {
          desktop: 2,
          tablet: 2,
          mobile: 1
        }
      }
    },
    edit: edit_default,
    save: save_default
  });
})();
