<?php
/**
 * Schema Markup Helper for DigiBlocks
 *
 * @package DigiBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Class DigiBlocks_Schema_Markup
 * 
 * Handles schema markup generation for DigiBlocks with filters to disable
 */
class DigiBlocks_Schema_Markup {
    
    /**
     * Get schema markup attributes for different content types
     *
     * @param string $type Schema type
     * @param array  $args Additional arguments
     * @return string Schema markup attributes or empty string if disabled
     */
    public static function get_schema_markup( $type, $args = array() ) {
        // Check global plugin setting first
        $digiblocks_settings = get_option( 'digiblocks_settings', array() );
        $schema_enabled = isset( $digiblocks_settings['enable_schema_markup'] ) ? $digiblocks_settings['enable_schema_markup'] : true;
        
        if ( ! $schema_enabled ) {
            return '';
        }
        
        // Global filter to disable all schema markup
        if ( ! apply_filters( 'digiblocks_enable_schema_markup', true ) ) {
            return '';
        }
        
        // Specific filter for this schema type
        if ( ! apply_filters( "digiblocks_enable_schema_markup_{$type}", true, $args ) ) {
            return '';
        }
        
        $schema_markup = '';
        
        switch ( $type ) {
            case 'organization':
            case 'logo':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Organization"';
                break;
                
            case 'website':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/WebSite"';
                break;
                
            case 'navigation':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/SiteNavigationElement"';
                break;
                
			case 'list-item':
				$schema_markup = 'itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"';
				break;
                
            case 'breadcrumb':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/BreadcrumbList"';
                break;
                
            case 'article':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Article"';
                break;
                
            case 'blog-post':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/BlogPosting"';
                break;
                
            case 'person':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Person"';
                break;
                
            case 'faq':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/FAQPage"';
                break;
                
            case 'question':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Question"';
                break;
                
            case 'answer':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Answer"';
                break;
                
            case 'team':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Person"';
                break;
                
            case 'testimonial':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Review"';
                break;
                
            case 'product':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Product"';
                break;
                
            case 'review':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Review"';
                break;
                
            case 'rating':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Rating"';
                break;
                
            case 'price':
                $schema_markup = 'itemscope="itemscope" itemtype="https://schema.org/Offer"';
                break;
                
            default:
                // Allow custom schema types via filter
                $schema_markup = apply_filters( "digiblocks_custom_schema_markup_{$type}", '', $args );
                break;
        }
        
        // Final filter to modify the markup
        return apply_filters( 'digiblocks_schema_markup_output', $schema_markup, $type, $args );
    }
    
    /**
     * Get schema property attribute
     *
     * @param string $property Schema property name
     * @param string $type     Parent schema type
     * @param array  $args     Additional arguments
     * @return string Schema property attribute or empty string if disabled
     */
    public static function get_schema_property( $property, $type = '', $args = array() ) {
        // Check global plugin setting first
        $digiblocks_settings = get_option( 'digiblocks_settings', array() );
        $schema_enabled = isset( $digiblocks_settings['enable_schema_markup'] ) ? $digiblocks_settings['enable_schema_markup'] : true;
        
        if ( ! $schema_enabled ) {
            return '';
        }
        
        // Global filter to disable all schema markup
        if ( ! apply_filters( 'digiblocks_enable_schema_markup', true ) ) {
            return '';
        }
        
        // Specific filter for this property
        if ( ! apply_filters( "digiblocks_enable_schema_property_{$property}", true, $type, $args ) ) {
            return '';
        }
        
        return 'itemprop="' . esc_attr( $property ) . '"';
    }
    
    /**
     * Check if schema markup is enabled
     *
     * @return bool
     */
    public static function is_schema_enabled() {
        $digiblocks_settings = get_option( 'digiblocks_settings', array() );
        $schema_enabled = isset( $digiblocks_settings['enable_schema_markup'] ) ? $digiblocks_settings['enable_schema_markup'] : true;
        
        return $schema_enabled && apply_filters( 'digiblocks_enable_schema_markup', true );
    }
}

/**
 * Helper functions for easy access
 */

/**
 * Get schema markup attributes
 *
 * @param string $type Schema type
 * @param array  $args Additional arguments
 * @return string Schema markup attributes
 */
function digiblocks_get_schema_markup( $type, $args = array() ) {
    $result = DigiBlocks_Schema_Markup::get_schema_markup( $type, $args );
    
    // Guarantee we never return null - always return a string
    return is_string( $result ) ? $result : '';
}

/**
 * Get schema property attribute
 *
 * @param string $property Schema property name
 * @param string $type     Parent schema type
 * @param array  $args     Additional arguments
 * @return string Schema property attribute
 */
function digiblocks_get_schema_property( $property, $type = '', $args = array() ) {
    $result = DigiBlocks_Schema_Markup::get_schema_property( $property, $type, $args );
    
    // Guarantee we never return null - always return a string
    return is_string( $result ) ? $result : '';
}

/**
 * Check if schema markup is enabled
 *
 * @return bool
 */
function digiblocks_is_schema_enabled() {
    return DigiBlocks_Schema_Markup::is_schema_enabled();
}