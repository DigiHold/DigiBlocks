/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
    useBlockProps,
    RichText,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
    MediaUploadCheck
} = wp.blockEditor;
const {
    SelectControl,
    RangeControl,
    TabPanel,
    ToggleControl,
    Button,
    TextControl,
    Tooltip,
    __experimentalToggleGroupControl: ToggleGroupControl,
    __experimentalToggleGroupControlOption: ToggleGroupControlOption,
    Placeholder,
    Spinner,
    Dashicon
} = wp.components;
const { useState, useEffect, useRef } = wp.element;

/**
 * Internal dependencies
 */
const { animations } = digi.utils;
const { tabIcons } = digi.icons;
const { ResponsiveControl, DimensionControl, TypographyControl, BoxShadowControl, CustomTabPanel, TabPanelBody, FontAwesomeControl } = digi.components;

/**
 * Team member component for edit mode
 */
const TeamMember = ({ member, index, updateMember, removeMember, moveUp, moveDown, duplicateMember, 
    socialIconsColor, socialIconsSize, imageShape, showPosition, showDescription, showSocialIcons, isLast }) => {
    
    // Function to update social links
    const updateSocialLink = (platform, url) => {
        const newSocialLinks = [...(member.socialLinks || [])];
        const linkIndex = newSocialLinks.findIndex(link => link.platform === platform);
        
        if (linkIndex !== -1) {
            newSocialLinks[linkIndex].url = url;
        } else {
            newSocialLinks.push({ platform, url });
        }
        
        updateMember(index, { ...member, socialLinks: newSocialLinks });
    };
    
    // Function to get social icon SVG
    const getSocialIcon = (platform) => {
        switch (platform) {
            case 'facebook':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                );
            case 'twitter':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                    </svg>
                );
            case 'linkedin':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                    </svg>
                );
            case 'instagram':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                );
            case 'github':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                );
            case 'youtube':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                    </svg>
                );
            case 'pinterest':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/>
                    </svg>
                );
            case 'dribbble':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"/>
                    </svg>
                );
            default:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                    </svg>
                );
        }
    };
    
	const socialLink = member.socialLinks && member.socialLinks.find(link => link.platform === 'facebook');
	const socialLinkUrl = socialLink ? socialLink.url : '';
    
    return (
        <div className="digiblocks-team-member-editor">
            {/* Member Controls */}
            <div className="digiblocks-team-member-controls">
                <Tooltip text={__('Move Up', 'digiblocks')}>
                    <Button
                        className="digiblocks-team-member-move-up"
                        onClick={moveUp}
                        icon="arrow-up-alt2"
                        isSmall
                    />
                </Tooltip>
                <Tooltip text={__('Move Down', 'digiblocks')}>
                    <Button
                        className="digiblocks-team-member-move-down"
                        onClick={moveDown}
                        icon="arrow-down-alt2"
                        isSmall
                    />
                </Tooltip>
                <Tooltip text={__('Duplicate', 'digiblocks')}>
                    <Button
                        className="digiblocks-team-member-duplicate"
                        onClick={duplicateMember}
                        icon="admin-page"
                        isSmall
                    />
                </Tooltip>
                <Tooltip text={__('Remove', 'digiblocks')}>
                    <Button
                        className="digiblocks-team-member-remove"
                        onClick={removeMember}
                        icon="trash"
                        isSmall
                    />
                </Tooltip>
            </div>
        
            <div className="digiblocks-team-member-inner">
                {/* Member Image */}
                <div className={`digiblocks-team-member-image-container ${imageShape ? `shape-${imageShape}` : 'shape-circle'}`}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => {
                                updateMember(index, {
                                    ...member,
                                    imageUrl: media.url,
                                    imageId: media.id
                                });
                            }}
                            allowedTypes={['image']}
                            value={member.imageId}
                            render={({ open }) => (
                                <div className="digiblocks-team-member-image">
                                    {member.imageUrl ? (
                                        <div className="digiblocks-team-member-image-wrapper">
                                            <img src={member.imageUrl} alt={member.name} />
                                            <Button
                                                className="digiblocks-team-member-change-image"
                                                onClick={open}
                                            >
                                                {__('Change Image', 'digiblocks')}
                                            </Button>
                                        </div>
                                    ) : (
                                        <Button
                                            className="digiblocks-team-member-upload-button"
                                            onClick={open}
                                        >
                                            <Dashicon icon="format-image" />
                                            <span>{__('Upload Image', 'digiblocks')}</span>
                                        </Button>
                                    )}
                                </div>
                            )}
                        />
                    </MediaUploadCheck>
                </div>
                
                {/* Member Content */}
                <div className="digiblocks-team-member-content">
                    <RichText
                        tagName="h3"
                        className="digiblocks-team-member-name"
                        value={member.name}
                        onChange={(name) => updateMember(index, { ...member, name })}
                        placeholder={__('Member Name', 'digiblocks')}
                    />
                    
                    {showPosition && (
                        <RichText
                            tagName="p"
                            className="digiblocks-team-member-position"
                            value={member.position}
                            onChange={(position) => updateMember(index, { ...member, position })}
                            placeholder={__('Member Position', 'digiblocks')}
                        />
                    )}
                    
                    {showDescription && (
                        <RichText
                            tagName="div"
                            className="digiblocks-team-member-description"
                            value={member.description}
                            onChange={(description) => updateMember(index, { ...member, description })}
                            placeholder={__('Member Description', 'digiblocks')}
                        />
                    )}
                    
                    {showSocialIcons && (
                        <div className="digiblocks-team-member-social-links">
                            {(member.socialLinks || []).map((link, i) => (
                                <div key={i} className="digiblocks-team-member-social-link-item">
                                    <div className="digiblocks-team-member-social-link-icon" style={{ color: socialIconsColor }}>
                                        {getSocialIcon(link.platform)}
                                    </div>
                                    <TextControl
                                        className="digiblocks-team-member-social-link-input"
                                        value={link.url}
                                        onChange={(url) => updateSocialLink(link.platform, url)}
                                        placeholder={`${link.platform.charAt(0).toUpperCase() + link.platform.slice(1)} URL`}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

/**
 * Edit function for the Team block
 */
const TeamEdit = ({ attributes, setAttributes, clientId }) => {
    const {
        id,
        anchor,
        customClasses,
        layout,
        columns,
        gap,
        alignment,
        showDescription,
        showPosition,
        showSocialIcons,
        imageSize,
        imageShape,
        imageBorderWidth,
        imageBorderColor,
        imageBorderHoverColor,
        imageMargin,
        nameColor,
        nameHoverColor,
        positionColor,
        positionHoverColor,
        descriptionColor,
        descriptionHoverColor,
        cardBackgroundColor,
        cardBackgroundHoverColor,
        socialIconsColor,
        socialIconsHoverColor,
        socialIconsBackgroundColor,
        socialIconsBackgroundHoverColor,
        socialIconsSize,
        socialIconsSpacing,
        headingTypography,
        textTypography,
        contentTypography,
        padding,
        margin,
        animation,
        borderStyle,
        borderRadius,
        borderWidth,
        borderColor,
        borderHoverColor,
        boxShadow,
        boxShadowHover,
        members
    } = attributes;
    
    // State for active tab
    const [activeTab, setActiveTab] = useState("options");
    
    // Use global responsive state for local rendering instead of local state
    const [localActiveDevice, setLocalActiveDevice] = useState(window.digi.responsiveState.activeDevice);
    
    // State for animation preview
    const [isAnimating, setIsAnimating] = useState(false);
    const previewTimeoutRef = useRef(null);
    
    // Subscribe to global device state changes
    useEffect(() => {
        const unsubscribe = window.digi.responsiveState.subscribe((device) => {
            setLocalActiveDevice(device);
        });
        
        // Cleanup subscription on unmount
        return unsubscribe;
    }, []);
    
    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (previewTimeoutRef.current) {
                clearTimeout(previewTimeoutRef.current);
            }
        };
    }, []);
    
    // Use useEffect to set the ID only once when component mounts
    useEffect(() => {
        // Check if the ID needs to be regenerated using clientId
        if (!id || !id.includes(clientId.substr(0, 8))) {
            setAttributes({ id: `digi-${clientId.substr(0, 8)}` });
        }
        
        // Initialize team members with IDs if needed
        if (members && members.length > 0) {
            const updatedMembers = members.map((member, index) => {
                if (!member.id) {
                    return { 
                        ...member, 
                        id: `member-${clientId.substr(0, 8)}-${index}` 
                    };
                }
                return member;
            });
            
            if (JSON.stringify(updatedMembers) !== JSON.stringify(members)) {
                setAttributes({ members: updatedMembers });
            }
        }
    }, [clientId, id, members, setAttributes]);
    
    // Animation preview function
    const triggerAnimationPreview = () => {
        // Only proceed if we have a valid animation
        if (!animation || animation === 'none') {
            return;
        }
        
        // Clear any existing timeout
        if (previewTimeoutRef.current) {
            clearTimeout(previewTimeoutRef.current);
        }
        
        // Find the block element
        const blockElement = document.querySelector(`[data-custom-id="${id}"]`);
        if (!blockElement) {
            return;
        }
        
        // Generate a timestamp to ensure unique animation names on each click
        const timestamp = Date.now();
        
        // Apply animation directly
        if (animations[animation]) {
            // Extract the original animation name from the keyframes
            const originalKeyframes = animations[animation].keyframes;
            const originalAnimNameMatch = originalKeyframes.match(/@keyframes\s+([a-zA-Z0-9]+)/);
            
            if (!originalAnimNameMatch || !originalAnimNameMatch[1]) {
                console.error('Could not extract animation name from keyframes');
                return;
            }
            
            const originalAnimName = originalAnimNameMatch[1];
            const uniqueAnimName = `digianim_${id}_${originalAnimName}_${timestamp}`;
            
            // Create a style element with a unique animation name to avoid conflicts
            const styleElement = document.createElement('style');
            styleElement.id = `animation-style-${id}_${timestamp}`;
            
            // Replace the original animation name with our unique name
            const updatedKeyframes = originalKeyframes.replace(
                new RegExp(originalAnimName, 'g'),
                uniqueAnimName
            );
            
            styleElement.textContent = `
                ${updatedKeyframes}
                
                [data-custom-id="${id}"] {
                    animation: none; /* Reset first */
                }
            `;
            
            // Remove any existing animation style for this block
            document.querySelectorAll(`[id^="animation-style-${id}"]`).forEach(el => {
                el.remove();
            });
            
            // Add the style to the document
            document.head.appendChild(styleElement);
            
            // Force reflow to ensure animation reset
            blockElement.offsetHeight;
            
            // Now apply the animation
            const animationStyleElement = document.createElement('style');
            animationStyleElement.id = `animation-style-${id}_active_${timestamp}`;
            animationStyleElement.textContent = `
                [data-custom-id="${id}"] {
                    animation: ${uniqueAnimName} 1.5s forwards !important;
                }
            `;
            document.head.appendChild(animationStyleElement);
            
            // Clean up after animation
            previewTimeoutRef.current = setTimeout(() => {
                styleElement.remove();
                animationStyleElement.remove();
                blockElement.style.animation = '';
            }, 1500);
        }
    };
    
    // Effect to trigger animation preview when animation attribute changes
    useEffect(() => {
        if (animation && animation !== 'none') {
            const timeoutId = setTimeout(() => {
                triggerAnimationPreview();
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    }, [animation]);
    
    // Border style options
    const borderStyleOptions = [
        { label: __("Default", "digiblocks"), value: "default" },
        { label: __("None", "digiblocks"), value: "none" },
        { label: __("Solid", "digiblocks"), value: "solid" },
        { label: __("Dotted", "digiblocks"), value: "dotted" },
        { label: __("Dashed", "digiblocks"), value: "dashed" },
        { label: __("Double", "digiblocks"), value: "double" },
        { label: __("Groove", "digiblocks"), value: "groove" },
        { label: __("Inset", "digiblocks"), value: "inset" },
        { label: __("Outset", "digiblocks"), value: "outset" },
        { label: __("Ridge", "digiblocks"), value: "ridge" },
    ];
    
    // Animation options
    const animationOptions = [
        { label: __("None", "digiblocks"), value: "none" },
        ...Object.keys(animations).map((animation) => ({
            label: animation
                .replace(/-/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase()),
            value: animation,
        })),
    ];
    
    // Layout options
    const layoutOptions = [
        { label: __("Grid", "digiblocks"), value: "grid" },
        { label: __("List", "digiblocks"), value: "list" },
        { label: __("Carousel", "digiblocks"), value: "carousel" },
    ];
    
    // Image shape options
    const imageShapeOptions = [
        { label: __("Circle", "digiblocks"), value: "circle" },
        { label: __("Square", "digiblocks"), value: "square" },
        { label: __("Rounded", "digiblocks"), value: "rounded" },
        { label: __("Hexagon", "digiblocks"), value: "hexagon" }
    ];
    
    // Alignment options
    const alignmentOptions = [
        { label: __("Center", "digiblocks"), value: "center" },
        { label: __("Left", "digiblocks"), value: "left" },
        { label: __("Right", "digiblocks"), value: "right" }
    ];
    
    // Define the tabs for our custom tab panel
    const tabList = [
        { 
            name: 'options', 
            title: __('Options', 'digiblocks'),
            icon: tabIcons.optionsIcon
        },
        { 
            name: 'style', 
            title: __('Style', 'digiblocks'),
            icon: tabIcons.styleIcon
        },
        { 
            name: 'advanced', 
            title: __('Advanced', 'digiblocks'),
            icon: tabIcons.advancedIcon
        }
    ];
    
    // Tabs for normal/hover states
    const stateTabList = [
        {
            name: 'normal',
            title: __('Normal', 'digiblocks'),
            className: 'digiblocks-tab-1 normal'
        },
        {
            name: 'hover',
            title: __('Hover', 'digiblocks'),
            className: 'digiblocks-tab-2 hover'
        }
    ];
    
    // Add member function
    const addNewMember = () => {
        const newMemberIndex = members.length;
        const newMember = {
            id: `member-${clientId.substr(0, 8)}-${Date.now()}`,
            name: __('New Team Member', 'digiblocks'),
            position: __('Position', 'digiblocks'),
            description: __('Add a short description about this team member.', 'digiblocks'),
            imageUrl: '',
            imageId: 0,
            socialLinks: [
                { platform: 'facebook', url: '' },
                { platform: 'twitter', url: '' },
                { platform: 'linkedin', url: '' },
                { platform: 'instagram', url: '' }
            ]
        };
        
        setAttributes({
            members: [...members, newMember]
        });
    };
    
    // Remove member function
    const removeMember = (index) => {
        const newMembers = [...members];
        newMembers.splice(index, 1);
        setAttributes({
            members: newMembers
        });
    };
    
    // Duplicate member function
    const duplicateMember = (index) => {
        const memberToDuplicate = members[index];
        const newMember = {
            ...memberToDuplicate,
            id: `member-${clientId.substr(0, 8)}-${Date.now()}`
        };
        
        const newMembers = [...members];
        newMembers.splice(index + 1, 0, newMember);
        setAttributes({
            members: newMembers
        });
    };
    
    // Move member up function
    const moveMemberUp = (index) => {
        if (index === 0) return;
        
        const newMembers = [...members];
        const member = newMembers[index];
        newMembers.splice(index, 1);
        newMembers.splice(index - 1, 0, member);
        
        setAttributes({
            members: newMembers
        });
    };
    
    // Move member down function
    const moveMemberDown = (index) => {
        if (index === members.length - 1) return;
        
        const newMembers = [...members];
        const member = newMembers[index];
        newMembers.splice(index, 1);
        newMembers.splice(index + 1, 0, member);
        
        setAttributes({
            members: newMembers
        });
    };
    
    // Update member function
    const updateMember = (index, updatedMember) => {
        const newMembers = [...members];
        newMembers[index] = updatedMember;
        setAttributes({
            members: newMembers
        });
    };
    
    // Generate CSS for block styling
    const generateCSS = () => {
        const activeDevice = localActiveDevice;
        const blockId = id;
        
        // Border styles
        let borderCSS = '';
        if (borderStyle && borderStyle !== 'default' && borderStyle !== 'none') {
            const currentBorderWidth = borderWidth && borderWidth[activeDevice] ? borderWidth[activeDevice] : { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' };
            const currentBorderRadius = borderRadius && borderRadius[activeDevice] ? borderRadius[activeDevice] : { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' };
            
            borderCSS = `
                border-style: ${borderStyle};
                border-color: ${borderColor || '#e0e0e0'};
                border-width: ${currentBorderWidth.top}${currentBorderWidth.unit} ${currentBorderWidth.right}${currentBorderWidth.unit} ${currentBorderWidth.bottom}${currentBorderWidth.unit} ${currentBorderWidth.left}${currentBorderWidth.unit};
                border-radius: ${currentBorderRadius.top}${currentBorderRadius.unit} ${currentBorderRadius.right}${currentBorderRadius.unit} ${currentBorderRadius.bottom}${currentBorderRadius.unit} ${currentBorderRadius.left}${currentBorderRadius.unit};
            `;
        } else {
            borderCSS = 'border-style: none;';
        }
        
        // Box shadow
        let boxShadowCSS = 'box-shadow: none;';
        if (boxShadow && boxShadow.enable) {
            const inset = boxShadow.position === 'inset' ? 'inset ' : '';
            boxShadowCSS = `box-shadow: ${inset}${boxShadow.horizontal}px ${boxShadow.vertical}px ${boxShadow.blur}px ${boxShadow.spread}px ${boxShadow.color};`;
        }
        
        // Padding and margin
        const paddingCSS = `padding: ${padding[activeDevice].top}${padding[activeDevice].unit} ${padding[activeDevice].right}${padding[activeDevice].unit} ${padding[activeDevice].bottom}${padding[activeDevice].unit} ${padding[activeDevice].left}${padding[activeDevice].unit};`;
        const marginCSS = `margin: ${margin[activeDevice].top}${margin[activeDevice].unit} ${margin[activeDevice].right}${margin[activeDevice].unit} ${margin[activeDevice].bottom}${margin[activeDevice].unit} ${margin[activeDevice].left}${margin[activeDevice].unit};`;
        
        // Image styling
        let imageShapeCSS = '';
        switch (imageShape) {
            case 'circle':
                imageShapeCSS = 'border-radius: 50%;';
                break;
            case 'square':
                imageShapeCSS = 'border-radius: 0;';
                break;
            case 'rounded':
                imageShapeCSS = 'border-radius: 10px;';
                break;
            case 'hexagon':
                imageShapeCSS = `
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                    border-radius: 0;
                `;
                break;
            default:
                imageShapeCSS = 'border-radius: 50%;';
        }
        
        // Name typography CSS
        let headingTypographyCSS = '';
        if (headingTypography) {
            if (headingTypography.fontFamily) {
                headingTypographyCSS += `font-family: ${headingTypography.fontFamily};`;
            }
            
            if (headingTypography.fontSize && headingTypography.fontSize[activeDevice]) {
                headingTypographyCSS += `font-size: ${headingTypography.fontSize[activeDevice]}${headingTypography.fontSizeUnit || 'px'};`;
            }
            
            if (headingTypography.fontWeight) {
                headingTypographyCSS += `font-weight: ${headingTypography.fontWeight};`;
            }
            
            if (headingTypography.fontStyle) {
                headingTypographyCSS += `font-style: ${headingTypography.fontStyle};`;
            }
            
            if (headingTypography.textTransform) {
                headingTypographyCSS += `text-transform: ${headingTypography.textTransform};`;
            }
            
            if (headingTypography.textDecoration) {
                headingTypographyCSS += `text-decoration: ${headingTypography.textDecoration};`;
            }
            
            if (headingTypography.lineHeight && headingTypography.lineHeight[activeDevice]) {
                headingTypographyCSS += `line-height: ${headingTypography.lineHeight[activeDevice]}${headingTypography.lineHeightUnit || 'em'};`;
            }
            
            if (headingTypography.letterSpacing && headingTypography.letterSpacing[activeDevice]) {
                headingTypographyCSS += `letter-spacing: ${headingTypography.letterSpacing[activeDevice]}${headingTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Position typography CSS
        let textTypographyCSS = '';
        if (textTypography) {
            if (textTypography.fontFamily) {
                textTypographyCSS += `font-family: ${textTypography.fontFamily};`;
            }
            
            if (textTypography.fontSize && textTypography.fontSize[activeDevice]) {
                textTypographyCSS += `font-size: ${textTypography.fontSize[activeDevice]}${textTypography.fontSizeUnit || 'px'};`;
            }
            
            if (textTypography.fontWeight) {
                textTypographyCSS += `font-weight: ${textTypography.fontWeight};`;
            }
            
            if (textTypography.fontStyle) {
                textTypographyCSS += `font-style: ${textTypography.fontStyle};`;
            }
            
            if (textTypography.textTransform) {
                textTypographyCSS += `text-transform: ${textTypography.textTransform};`;
            }
            
            if (textTypography.textDecoration) {
                textTypographyCSS += `text-decoration: ${textTypography.textDecoration};`;
            }
            
            if (textTypography.lineHeight && textTypography.lineHeight[activeDevice]) {
                textTypographyCSS += `line-height: ${textTypography.lineHeight[activeDevice]}${textTypography.lineHeightUnit || 'em'};`;
            }
            
            if (textTypography.letterSpacing && textTypography.letterSpacing[activeDevice]) {
                textTypographyCSS += `letter-spacing: ${textTypography.letterSpacing[activeDevice]}${textTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Description typography CSS
        let contentTypographyCSS = '';
        if (contentTypography) {
            if (contentTypography.fontFamily) {
                contentTypographyCSS += `font-family: ${contentTypography.fontFamily};`;
            }
            
            if (contentTypography.fontSize && contentTypography.fontSize[activeDevice]) {
                contentTypographyCSS += `font-size: ${contentTypography.fontSize[activeDevice]}${contentTypography.fontSizeUnit || 'px'};`;
            }
            
            if (contentTypography.fontWeight) {
                contentTypographyCSS += `font-weight: ${contentTypography.fontWeight};`;
            }
            
            if (contentTypography.fontStyle) {
                contentTypographyCSS += `font-style: ${contentTypography.fontStyle};`;
            }
            
            if (contentTypography.textTransform) {
                contentTypographyCSS += `text-transform: ${contentTypography.textTransform};`;
            }
            
            if (contentTypography.textDecoration) {
                contentTypographyCSS += `text-decoration: ${contentTypography.textDecoration};`;
            }
            
            if (contentTypography.lineHeight && contentTypography.lineHeight[activeDevice]) {
                contentTypographyCSS += `line-height: ${contentTypography.lineHeight[activeDevice]}${contentTypography.lineHeightUnit || 'em'};`;
            }
            
            if (contentTypography.letterSpacing && contentTypography.letterSpacing[activeDevice]) {
                contentTypographyCSS += `letter-spacing: ${contentTypography.letterSpacing[activeDevice]}${contentTypography.letterSpacingUnit || 'px'};`;
            }
        }
        
        // Hover box shadow
        let boxShadowHoverCSS = '';
        if (boxShadowHover && boxShadowHover.enable) {
            const insetHover = boxShadowHover.position === 'inset' ? 'inset ' : '';
            boxShadowHoverCSS = `box-shadow: ${insetHover}${boxShadowHover.horizontal}px ${boxShadowHover.vertical}px ${boxShadowHover.blur}px ${boxShadowHover.spread}px ${boxShadowHover.color};`;
        }
        
        // Layout-specific styles
        let layoutCSS = '';
        if (layout === 'grid') {
            layoutCSS = `
                display: grid;
                grid-template-columns: repeat(${columns[activeDevice]}, 1fr);
                grid-gap: ${gap[activeDevice].vertical}${gap[activeDevice].unit} ${gap[activeDevice].horizontal}${gap[activeDevice].unit};
            `;
        } else if (layout === 'list') {
            layoutCSS = `
                display: flex;
                flex-direction: column;
                gap: ${gap[activeDevice].vertical}${gap[activeDevice].unit};
            `;
        } else if (layout === 'carousel') {
            // For edit mode, we'll just display as a grid
            layoutCSS = `
                display: grid;
                grid-template-columns: repeat(${columns[activeDevice]}, 1fr);
                grid-gap: ${gap[activeDevice].vertical}${gap[activeDevice].unit} ${gap[activeDevice].horizontal}${gap[activeDevice].unit};
            `;
        }
        
        // Animation CSS if provided
        let animationCSS = '';
        if (animation && animation !== 'none' && animations[animation]) {
            animationCSS = animations[animation].keyframes;
        }
        
        return `
            /* Team Block Styles - ${blockId} */
            [data-custom-id="${blockId}"] {
                ${marginCSS}
                text-align: ${alignment};
            }
            
            /* Team Container */
            [data-custom-id="${blockId}"] .digiblocks-team-container {
                ${layoutCSS}
            }
            
            /* Team Member */
            [data-custom-id="${blockId}"] .digiblocks-team-member {
                ${borderCSS}
                ${boxShadowCSS}
                ${paddingCSS}
                background-color: ${cardBackgroundColor || 'transparent'};
                transition: all 0.3s ease;
                overflow: hidden;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member:hover {
                ${boxShadowHoverCSS}
                ${cardBackgroundHoverColor ? `background-color: ${cardBackgroundHoverColor};` : ''}
                ${borderHoverColor ? `border-color: ${borderHoverColor};` : ''}
            }
            
            /* Member Image */
            [data-custom-id="${blockId}"] .digiblocks-team-member-image {
                width: ${imageSize[activeDevice]}px;
                height: ${imageSize[activeDevice]}px;
                margin: ${imageMargin[activeDevice].top}${imageMargin[activeDevice].unit} ${imageMargin[activeDevice].right}${imageMargin[activeDevice].unit} ${imageMargin[activeDevice].bottom}${imageMargin[activeDevice].unit} ${imageMargin[activeDevice].left}${imageMargin[activeDevice].unit};
                margin-left: auto;
                margin-right: auto;
                position: relative;
                overflow: hidden;
                ${imageShapeCSS}
                border: ${imageBorderWidth[activeDevice]}px solid ${imageBorderColor || 'transparent'};
                transition: all 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member:hover .digiblocks-team-member-image {
                ${imageBorderHoverColor ? `border-color: ${imageBorderHoverColor};` : ''}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
            
            /* Member Name */
            [data-custom-id="${blockId}"] .digiblocks-team-member-name {
                color: ${nameColor || '#333333'};
                margin-top: 15px;
                margin-bottom: 5px;
                ${headingTypographyCSS}
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member:hover .digiblocks-team-member-name {
                ${nameHoverColor ? `color: ${nameHoverColor};` : ''}
            }
            
            /* Member Position */
            [data-custom-id="${blockId}"] .digiblocks-team-member-position {
                color: ${positionColor || '#666666'};
                margin-top: 0;
                margin-bottom: 10px;
                ${textTypographyCSS}
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member:hover .digiblocks-team-member-position {
                ${positionHoverColor ? `color: ${positionHoverColor};` : ''}
            }
            
            /* Member Description */
            [data-custom-id="${blockId}"] .digiblocks-team-member-description {
                color: ${descriptionColor || '#666666'};
                margin-bottom: 15px;
                ${contentTypographyCSS}
                transition: color 0.3s ease;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member:hover .digiblocks-team-member-description {
                ${descriptionHoverColor ? `color: ${descriptionHoverColor};` : ''}
            }
            
            /* Social Links */
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-links {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: ${socialIconsSpacing[activeDevice]}px;
                margin-top: 15px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link {
                display: flex;
                align-items: center;
                justify-content: center;
                width: ${socialIconsSize[activeDevice] * 2}px;
                height: ${socialIconsSize[activeDevice] * 2}px;
                ${socialIconsBackgroundColor ? `background-color: ${socialIconsBackgroundColor};` : ''}
                border-radius: 50%;
                transition: all 0.3s ease;
                color: ${socialIconsColor || '#1e73be'};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link:hover {
                ${socialIconsHoverColor ? `color: ${socialIconsHoverColor};` : ''}
                ${socialIconsBackgroundHoverColor ? `background-color: ${socialIconsBackgroundHoverColor};` : ''}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link svg {
                width: ${socialIconsSize[activeDevice]}px;
                height: ${socialIconsSize[activeDevice]}px;
                fill: currentColor;
            }
            
            /* Editor Specific Styles */
            [data-custom-id="${blockId}"] .digiblocks-team-member-editor {
                position: relative;
                ${borderCSS}
                ${boxShadowCSS}
                ${paddingCSS}
                background-color: ${cardBackgroundColor || 'transparent'};
                margin-bottom: 20px;
                overflow: hidden;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-controls {
                display: flex;
                gap: 5px;
                position: absolute;
                right: 10px;
                top: 10px;
                background-color: #fff;
                padding: 2px;
                border-radius: 3px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12);
                z-index: 10;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-inner {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-upload-button {
                width: ${imageSize[activeDevice]}px;
                height: ${imageSize[activeDevice]}px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border: 2px dashed #ddd;
                background-color: #f5f5f5;
                ${imageShapeCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-image-container {
                position: relative;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-image-wrapper {
                position: relative;
                width: ${imageSize[activeDevice]}px;
                height: ${imageSize[activeDevice]}px;
                ${imageShapeCSS}
                border: ${imageBorderWidth[activeDevice]}px solid ${imageBorderColor || 'transparent'};
                overflow: hidden;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-change-image {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0,0,0,0.7);
                color: white;
                text-align: center;
                padding: 5px;
                opacity: 0;
                transition: opacity 0.3s;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-image-wrapper:hover .digiblocks-team-member-change-image {
                opacity: 1;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-content {
                width: 100%;
                text-align: ${alignment};
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-name {
                color: ${nameColor || '#333333'};
                margin-top: 15px;
                margin-bottom: 5px;
                ${headingTypographyCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-position {
                color: ${positionColor || '#666666'};
                margin-top: 0;
                margin-bottom: 10px;
                ${textTypographyCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-description {
                color: ${descriptionColor || '#666666'};
                margin-bottom: 15px;
                ${contentTypographyCSS}
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-links {
                display: flex;
                flex-wrap: wrap;
                justify-content: ${alignment === 'center' ? 'center' : alignment === 'left' ? 'flex-start' : 'flex-end'};
                gap: 10px;
                margin-top: 15px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link-item {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                width: 100%;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link-icon {
                width: 30px;
                min-width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 10px;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link-icon svg {
                width: 16px;
                height: 16px;
                fill: currentColor;
            }
            
            [data-custom-id="${blockId}"] .digiblocks-team-member-social-link-input {
                flex: 1;
            }
            
            /* List Layout Adjustments */
            ${layout === 'list' ? `
                [data-custom-id="${blockId}"] .digiblocks-team-member-inner {
                    flex-direction: row;
                    align-items: flex-start;
                    text-align: left;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-team-member-image-container {
                    margin-right: 20px;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-team-member-content {
                    text-align: left;
                }
                
                [data-custom-id="${blockId}"] .digiblocks-team-member-social-links {
                    justify-content: flex-start;
                }
            ` : ''}
            
            ${animationCSS}
        `;
    };
    
    // Render member tab content based on active tab
    const renderMemberTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Member Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: nameColor,
                                onChange: (value) =>
                                    setAttributes({
                                        nameColor: value,
                                    }),
                                label: __(
                                    "Name Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: positionColor,
                                onChange: (value) =>
                                    setAttributes({
                                        positionColor: value,
                                    }),
                                label: __(
                                    "Position Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: descriptionColor,
                                onChange: (value) =>
                                    setAttributes({
                                        descriptionColor: value,
                                    }),
                                label: __(
                                    "Description Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: cardBackgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        cardBackgroundColor: value,
                                    }),
                                label: __(
                                    "Card Background",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Member Hover Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: nameHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        nameHoverColor: value,
                                    }),
                                label: __(
                                    "Name Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: positionHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        positionHoverColor: value,
                                    }),
                                label: __(
                                    "Position Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: descriptionHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        descriptionHoverColor: value,
                                    }),
                                label: __(
                                    "Description Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: cardBackgroundHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        cardBackgroundHoverColor: value,
                                    }),
                                label: __(
                                    "Card Background",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        }
        
        return null;
    };
    
    // Render image tab content based on active tab
    const renderImageTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Border Color",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: imageBorderColor,
                                onChange: (value) =>
                                    setAttributes({
                                        imageBorderColor: value,
                                    }),
                                label: __(
                                    "Border Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Border Hover Color",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: imageBorderHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        imageBorderHoverColor: value,
                                    }),
                                label: __(
                                    "Border Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        }
        
        return null;
    };
    
    // Render social tab content based on active tab
    const renderSocialTabContent = (tabName) => {
        if (tabName === 'normal') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Social Icon Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: socialIconsColor,
                                onChange: (value) =>
                                    setAttributes({
                                        socialIconsColor: value,
                                    }),
                                label: __(
                                    "Icon Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: socialIconsBackgroundColor,
                                onChange: (value) =>
                                    setAttributes({
                                        socialIconsBackgroundColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        } else if (tabName === 'hover') {
            return (
                <>
                    <PanelColorSettings
                        title={__(
                            "Social Icon Hover Colors",
                            "digiblocks"
                        )}
                        initialOpen={true}
                        enableAlpha={true}
                        colorSettings={[
                            {
                                value: socialIconsHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        socialIconsHoverColor: value,
                                    }),
                                label: __(
                                    "Icon Color",
                                    "digiblocks"
                                ),
                            },
                            {
                                value: socialIconsBackgroundHoverColor,
                                onChange: (value) =>
                                    setAttributes({
                                        socialIconsBackgroundHoverColor: value,
                                    }),
                                label: __(
                                    "Background Color",
                                    "digiblocks"
                                ),
                            },
                        ]}
                    />
                </>
            );
        }
        
        return null;
    };
    
    // Render tab content based on the active tab
    const renderTabContent = () => {
        switch (activeTab) {
            case 'options':
                return (
                    <>
                        <TabPanelBody
                            tab="options"
                            name="layout-settings"
                            title={__("Layout", "digiblocks")}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__("Layout Type", "digiblocks")}
                                value={layout}
                                options={layoutOptions}
                                onChange={(value) => setAttributes({ layout: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {layout !== 'list' && (
                                <ResponsiveControl
                                    label={__("Columns", "digiblocks")}
                                >
                                    <RangeControl
                                        value={columns[localActiveDevice]}
                                        onChange={(value) =>
                                            setAttributes({
                                                columns: {
                                                    ...columns,
                                                    [localActiveDevice]: value,
                                                },
                                            })
                                        }
                                        min={1}
                                        max={localActiveDevice === 'mobile' ? 2 : localActiveDevice === 'tablet' ? 3 : 6}
                                        step={1}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </ResponsiveControl>
                            )}
                            
                            <SelectControl
                                label={__("Alignment", "digiblocks")}
                                value={alignment}
                                options={alignmentOptions}
                                onChange={(value) => setAttributes({ alignment: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <ResponsiveControl
                                    label={__("Horizontal Gap", "digiblocks")}
                                >
                                    <RangeControl
                                        value={gap[localActiveDevice].horizontal}
                                        onChange={(value) =>
                                            setAttributes({
                                                gap: {
                                                    ...gap,
                                                    [localActiveDevice]: {
                                                        ...gap[localActiveDevice],
                                                        horizontal: value
                                                    },
                                                },
                                            })
                                        }
                                        min={0}
                                        max={100}
                                        step={1}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </ResponsiveControl>
                                
                                <ResponsiveControl
                                    label={__("Vertical Gap", "digiblocks")}
                                >
                                    <RangeControl
                                        value={gap[localActiveDevice].vertical}
                                        onChange={(value) =>
                                            setAttributes({
                                                gap: {
                                                    ...gap,
                                                    [localActiveDevice]: {
                                                        ...gap[localActiveDevice],
                                                        vertical: value
                                                    },
                                                },
                                            })
                                        }
                                        min={0}
                                        max={100}
                                        step={1}
                                        __next40pxDefaultSize={true}
                                        __nextHasNoMarginBottom={true}
                                    />
                                </ResponsiveControl>
                            </div>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="options"
                            name="content-settings"
                            title={__("Content", "digiblocks")}
                            initialOpen={false}
                        >
                            <ToggleControl
                                label={__("Show Position", "digiblocks")}
                                checked={showPosition}
                                onChange={() => setAttributes({ showPosition: !showPosition })}
                            />
                            
                            <ToggleControl
                                label={__("Show Description", "digiblocks")}
                                checked={showDescription}
                                onChange={() => setAttributes({ showDescription: !showDescription })}
                            />
                            
                            <ToggleControl
                                label={__("Show Social Icons", "digiblocks")}
                                checked={showSocialIcons}
                                onChange={() => setAttributes({ showSocialIcons: !showSocialIcons })}
                            />
                        </TabPanelBody>
                    </>
                );
            case 'style':
                return (
                    <>
                        <TabPanelBody
                            tab="style"
                            name="member-styles"
                            title={__("Member", "digiblocks")}
                            initialOpen={true}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => renderMemberTabContent(tab.name)}
                            </TabPanel>
                            
                            <TypographyControl
                                label={__(
                                    "Name Typography",
                                    "digiblocks"
                                )}
                                value={headingTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        headingTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 22, tablet: 20, mobile: 18 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Position Typography",
                                    "digiblocks"
                                )}
                                value={textTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        textTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                            
                            <TypographyControl
                                label={__(
                                    "Description Typography",
                                    "digiblocks"
                                )}
                                value={contentTypography}
                                onChange={(value) =>
                                    setAttributes({
                                        contentTypography: value,
                                    })
                                }
                                defaults={{
                                    fontSize: { desktop: 16, tablet: 15, mobile: 14 },
                                    fontSizeUnit: 'px',
                                    lineHeight: { desktop: 1.5, tablet: 1.4, mobile: 1.3 },
                                    lineHeightUnit: 'em',
                                }}
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="image-styles"
                            title={__("Image", "digiblocks")}
                            initialOpen={false}
                        >
                            <SelectControl
                                label={__("Image Shape", "digiblocks")}
                                value={imageShape}
                                options={imageShapeOptions}
                                onChange={(value) => setAttributes({ imageShape: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            <ResponsiveControl
                                label={__("Image Size", "digiblocks")}
                            >
                                <RangeControl
                                    value={imageSize[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            imageSize: {
                                                ...imageSize,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={40}
                                    max={300}
                                    step={5}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__("Border Width", "digiblocks")}
                            >
                                <RangeControl
                                    value={imageBorderWidth[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            imageBorderWidth: {
                                                ...imageBorderWidth,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={20}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => renderImageTabContent(tab.name)}
                            </TabPanel>
                            
                            <ResponsiveControl
                                label={__("Image Margin", "digiblocks")}
                            >
                                <DimensionControl
                                    values={imageMargin[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            imageMargin: {
                                                ...imageMargin,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="social-styles"
                            title={__("Social Icons", "digiblocks")}
                            initialOpen={false}
                        >
                            <TabPanel
                                className="digiblocks-control-tabs"
                                activeClass="active-tab"
                                tabs={stateTabList}
                            >
                                {(tab) => renderSocialTabContent(tab.name)}
                            </TabPanel>
                            
                            <ResponsiveControl
                                label={__("Icon Size", "digiblocks")}
                            >
                                <RangeControl
                                    value={socialIconsSize[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            socialIconsSize: {
                                                ...socialIconsSize,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={10}
                                    max={50}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                            
                            <ResponsiveControl
                                label={__("Icons Spacing", "digiblocks")}
                            >
                                <RangeControl
                                    value={socialIconsSpacing[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            socialIconsSpacing: {
                                                ...socialIconsSpacing,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                    min={0}
                                    max={50}
                                    step={1}
                                    __next40pxDefaultSize={true}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="card-styles"
                            title={__("Card Style", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* Border Style Dropdown */}
                            <SelectControl
                                label={__("Border Style", "digiblocks")}
                                value={borderStyle || 'default'}
                                options={borderStyleOptions}
                                onChange={(value) => {
                                    // Initialize border width and radius with defaults when a style is first selected
                                    if ((value !== 'default' && value !== 'none') && 
                                        (borderStyle === 'default' || borderStyle === 'none' || !borderStyle)) {
                                        // Set initial border width if not already set
                                        if (!borderWidth || Object.keys(borderWidth).length === 0) {
                                            setAttributes({
                                                borderWidth: {
                                                    desktop: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    tablet: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' },
                                                    mobile: { top: 1, right: 1, bottom: 1, left: 1, unit: 'px' }
                                                }
                                            });
                                        }
                                        
                                        // Set initial border radius if not already set
                                        if (!borderRadius || Object.keys(borderRadius).length === 0) {
                                            setAttributes({
                                                borderRadius: {
                                                    desktop: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                                                    tablet: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' },
                                                    mobile: { top: 8, right: 8, bottom: 8, left: 8, unit: 'px' }
                                                }
                                            });
                                        }
                                    }
                                    
                                    setAttributes({
                                        borderStyle: value,
                                    });
                                }}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Show border width and border radius controls only if a border style is selected */}
                            {borderStyle && borderStyle !== 'default' && borderStyle !== 'none' && (
                                <>
                                    {/* Border Color */}
                                    <PanelColorSettings
                                        title={__(
                                            "Border Colors",
                                            "digiblocks"
                                        )}
                                        enableAlpha={true}
                                        colorSettings={[
                                            {
                                                value: borderColor,
                                                onChange: (value) =>
                                                    setAttributes({
                                                        borderColor: value,
                                                    }),
                                                label: __(
                                                    "Border Color",
                                                    "digiblocks"
                                                ),
                                            },
                                            {
                                                value: borderHoverColor,
                                                onChange: (value) =>
                                                    setAttributes({
                                                        borderHoverColor: value,
                                                    }),
                                                label: __(
                                                    "Border Hover Color",
                                                    "digiblocks"
                                                ),
                                            },
                                        ]}
                                    />
                                    
                                    {/* Border Width */}
                                    <ResponsiveControl
                                        label={__("Border Width", "digiblocks")}
                                    >
                                        <DimensionControl
                                            values={borderWidth && borderWidth[localActiveDevice] ? borderWidth[localActiveDevice] : {
                                                top: 1,
                                                right: 1,
                                                bottom: 1,
                                                left: 1,
                                                unit: 'px'
                                            }}
                                            onChange={(value) =>
                                                setAttributes({
                                                    borderWidth: {
                                                        ...borderWidth,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                        />
                                    </ResponsiveControl>
                                    
                                    {/* Border Radius */}
                                    <ResponsiveControl
                                        label={__("Border Radius", "digiblocks")}
                                    >
                                        <DimensionControl
                                            values={borderRadius && borderRadius[localActiveDevice] ? borderRadius[localActiveDevice] : {
                                                top: 8,
                                                right: 8,
                                                bottom: 8,
                                                left: 8,
                                                unit: 'px'
                                            }}
                                            onChange={(value) =>
                                                setAttributes({
                                                    borderRadius: {
                                                        ...borderRadius,
                                                        [localActiveDevice]: value,
                                                    },
                                                })
                                            }
                                            units={[
                                                { label: 'px', value: 'px' },
                                                { label: '%', value: '%' }
                                            ]}
                                        />
                                    </ResponsiveControl>
                                </>
                            )}
                            
                            {/* Box Shadow Control */}
                            <BoxShadowControl
                                normalValue={boxShadow}
                                hoverValue={boxShadowHover}
                                onNormalChange={(value) =>
                                    setAttributes({
                                        boxShadow: value,
                                    })
                                }
                                onHoverChange={(value) =>
                                    setAttributes({
                                        boxShadowHover: value,
                                    })
                                }
                            />
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="style"
                            name="spacing"
                            title={__("Spacing", "digiblocks")}
                            initialOpen={false}
                        >
                            <ResponsiveControl
                                label={__("Padding", "digiblocks")}
                            >
                                <DimensionControl
                                    values={padding[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            padding: {
                                                ...padding,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                            <ResponsiveControl
                                label={__("Margin", "digiblocks")}
                            >
                                <DimensionControl
                                    values={margin[localActiveDevice]}
                                    onChange={(value) =>
                                        setAttributes({
                                            margin: {
                                                ...margin,
                                                [localActiveDevice]: value,
                                            },
                                        })
                                    }
                                />
                            </ResponsiveControl>
                        </TabPanelBody>
                    </>
                );
            case 'advanced':
                return (
                    <>
                        <TabPanelBody
                            tab="advanced"
                            name="animation"
                            title={__("Animation", "digiblocks")}
                            initialOpen={true}
                        >
                            <SelectControl
                                label={__("Animation Effect", "digiblocks")}
                                value={animation}
                                options={animationOptions}
                                onChange={(value) => setAttributes({ animation: value })}
                                __next40pxDefaultSize={true}
                                __nextHasNoMarginBottom={true}
                            />
                            
                            {/* Animation Preview Button */}
                            {animation && animation !== 'none' && (
                                <div style={{ marginTop: '10px' }}>
                                    <Button
                                        variant="secondary"
                                        isSecondary
                                        onClick={triggerAnimationPreview}
                                        style={{ width: '100%' }}
                                    >
                                        {__("Preview Animation", "digiblocks")}
                                    </Button>
                                </div>
                            )}
                        </TabPanelBody>
                        
                        <TabPanelBody
                            tab="advanced"
                            name="additional"
                            title={__("Additional", "digiblocks")}
                            initialOpen={false}
                        >
                            {/* HTML Anchor field */}
                            <div className="components-base-control html-anchor-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="html-anchor">
                                        {__("HTML anchor", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="html-anchor"
                                        value={anchor || ""}
                                        onChange={(e) =>
                                            setAttributes({ anchor: e.target.value })
                                        }
                                        aria-describedby="html-anchor-help"
                                        autoCapitalize="none"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="html-anchor-help" className="components-base-control__help">
                                    {__("Enter a word or two — without spaces — to make a unique web address just for this block, called an \"anchor\". Then, you'll be able to link directly to this section of your page.", "digiblocks")}
                                    {' '}
                                    <a 
                                        className="components-external-link" 
                                        href="https://wordpress.org/documentation/article/page-jumps/" 
                                        target="_blank" 
                                        rel="external noreferrer noopener"
                                    >
                                        <span className="components-external-link__contents">
                                            {__("Learn more about anchors", "digiblocks")}
                                        </span>
                                        <span className="components-external-link__icon" aria-label="(opens in a new tab)">↗</span>
                                    </a>
                                </p>
                            </div>

                            {/* Additional CSS classes field */}
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label" htmlFor="additional-css-classes">
                                        {__("Additional CSS class(es)", "digiblocks")}
                                    </label>
                                    <input
                                        className="components-text-control__input"
                                        type="text"
                                        id="additional-css-classes"
                                        value={customClasses || ""}
                                        onChange={(e) =>
                                            setAttributes({ customClasses: e.target.value })
                                        }
                                        aria-describedby="additional-css-classes-help"
                                        autoComplete="off"
                                    />
                                </div>
                                <p id="additional-css-classes-help" className="components-base-control__help">
                                    {__("Separate multiple classes with spaces.", "digiblocks")}
                                </p>
                            </div>
                        </TabPanelBody>
                    </>
                );
            default:
                return null;
        }
    };
    
    // Render team members
    const renderTeamMembers = () => {
        if (!members || members.length === 0) {
            return (
                <div className="digiblocks-no-members">
                    <p>{__('No team members found. Please add some members.', 'digiblocks')}</p>
                </div>
            );
        }
        
        return members.map((member, index) => {
            const isLast = index === members.length - 1;
            
            return (
                <TeamMember
                    key={member.id}
                    member={member}
                    index={index}
                    updateMember={updateMember}
                    removeMember={() => removeMember(index)}
                    moveUp={() => moveMemberUp(index)}
                    moveDown={() => moveMemberDown(index)}
                    duplicateMember={() => duplicateMember(index)}
                    socialIconsColor={socialIconsColor}
                    socialIconsSize={socialIconsSize[localActiveDevice]}
                    imageShape={imageShape}
                    showPosition={showPosition}
                    showDescription={showDescription}
                    showSocialIcons={showSocialIcons}
                    isLast={isLast}
                />
            );
        });
    };
    
    // Block props without any inline styles - we'll use the style tag for everything
    const blockProps = useBlockProps({
        className: `digiblocks-team-block layout-${layout} ${customClasses || ''}`,
        id: anchor || null, // Set the anchor as ID if provided
        "data-custom-id": id, // Always set the block ID as data attribute for CSS targeting
    });
    
    return (
        <>
            <InspectorControls>
                <CustomTabPanel
                    tabs={tabList}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                >
                    {renderTabContent()}
                </CustomTabPanel>
            </InspectorControls>
            
            {/* Use dangerouslySetInnerHTML for the style tag */}
            <style dangerouslySetInnerHTML={{ __html: generateCSS() }} />
            
            <div {...blockProps}>
                <div className="digiblocks-team-container">
                    {renderTeamMembers()}
                </div>
                
                <Button
                    variant="primary"
                    icon="plus"
                    onClick={addNewMember}
                    style={{ width: '100%', marginTop: '20px', justifyContent: 'center' }}
                >
                    {__("Add Team Member", "digiblocks")}
                </Button>
            </div>
        </>
    );
};

export default TeamEdit;