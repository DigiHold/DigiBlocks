/**
 * WordPress dependencies
 */
const { useBlockProps, RichText } = wp.blockEditor;

/**
 * Save function for the Testimonials block
 */
const TestimonialsSave = ({ attributes }) => {
    const { 
        id, 
        anchor,
        customClasses,
        testimonials,
        showRating,
        showQuoteIcon,
        animation,
        animationDuration,
        animationDelay,
        columns,
        autoplay,
        autoplaySpeed,
        showArrows,
        showDots,
        ratingColor
    } = attributes;

    // Build class names
    const blockClasses = [
        "digiblocks-testimonials-block",
		id,
        "grid",
        animation !== "none" ? `animate-${animation} digi-animate-hidden` : "",
        customClasses || ""
    ]
        .filter(Boolean)
        .join(" ");

    // Build common props
    const blockProps = useBlockProps.save({
        className: blockClasses,
        id: anchor || null,
    });

    // Add animation data attributes only if animation is active
    if (animation && animation !== "none") {
        blockProps["data-animation-duration"] = animationDuration || "normal";
        blockProps["data-animation-delay"] = animationDelay || 0;
    }

    // Generate rating stars
    const generateStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`digiblocks-rating-star ${i <= rating ? 'filled' : ''}`}
                    style={{ color: i <= rating ? ratingColor : '#e0e0e0' }}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                </span>
            );
        }
        return stars;
    };

    // Render testimonials with slides for carousel
    const renderTestimonials = () => {
        if (!testimonials || testimonials.length === 0) {
            return null;
        }
        
        return testimonials.map((testimonial) => (
            <div
                key={testimonial.id}
                className="digiblocks-testimonial-item"
            >
                <div className="digiblocks-testimonial-content">
                    {showQuoteIcon && <div className="digiblocks-testimonial-quote-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor"><path d="m54.75 61.7309799v-2.3699951c0-21.9786606 16.2715454-39.8894348 37.5211639-42.4388428 2.7931672-.3351097 5.2288361 1.917471 5.2288361 4.7306748v.0000095c0 2.4273148-1.8343735 4.4202805-4.2426605 4.7236137-7.4862671.9429264-14.1913986 4.3405972-19.203804 9.2676563-1.7802734 1.7499619-.5009689 4.7270927 1.9953613 4.7170334.0236969-.0000954.0474014-.000145.0710983-.000145 12.2492294 0 21.9682159 10.0996895 21.3522568 22.4834023-.538559 10.8274422-9.4114075 19.7002907-20.2388535 20.2388496-12.3837051.6159593-22.4833984-9.1030272-22.4833984-21.3522567z"/><path d="m2.5000021 61.2574081.000001-1.8964233c0-21.9786606 16.2715454-39.8894348 37.5211601-42.4388428 2.7931755-.3351097 5.2288368 1.917471 5.2288368 4.7306748v.0003147c0 2.4272079-1.8342209 4.4199734-4.2423592 4.7236252-7.481739.9434032-14.1888084 4.3410473-19.1987572 9.2678051-1.779623 1.7500687-.500473 4.7271957 1.9954643 4.7165833.025219-.0001068.0504398-.0001602.0756588-.0001602 11.8699932 0 21.3699932 9.5 21.3699932 21.3699951 0 12.0883865-9.8361855 21.7125397-21.996748 21.3711853-11.6399678-.3267442-20.7532557-10.200203-20.7532498-21.8447572z"/></svg></div>}
                    
                    {showRating && (
                        <div className="digiblocks-testimonial-rating">
                            {generateStars(testimonial.rating)}
                        </div>
                    )}
                    
                    <RichText.Content
                        tagName="p"
                        className="digiblocks-testimonial-text"
                        value={testimonial.content}
                    />
                    
                    <div className="digiblocks-testimonial-author">
                        {testimonial.imageUrl && (
                            <img 
                                src={testimonial.imageUrl} 
                                alt={testimonial.name}
                                className="digiblocks-testimonial-image"
                            />
                        )}
                        
                        <div className="digiblocks-testimonial-info">
                            <RichText.Content
                                tagName="h3"
                                className="digiblocks-testimonial-name"
                                value={testimonial.name}
                            />
                            <RichText.Content
                                tagName="p"
                                className="digiblocks-testimonial-position"
                                value={testimonial.position + (testimonial.company ? `, ${testimonial.company}` : '')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div {...blockProps}>
            <div className="digiblocks-testimonials-grid">
                {renderTestimonials()}
            </div>
        </div>
    );
};

export default TestimonialsSave;