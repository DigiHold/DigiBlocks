<?php
/**
 * DigiBlocks Fonts
 * 
 * Handles loading Google Fonts locally or via CDN for DigiBlocks.
 */
class DigiBlocks_Fonts {
    /**
     * Instance of the fonts class.
     *
     * @var DigiBlocks_Fonts
     */
    private static $instance;

    /**
     * Fonts directory path.
     *
     * @var string
     */
    private $fonts_dir;

    /**
     * Fonts directory URL.
     *
     * @var string
     */
    private $fonts_url;

    /**
     * Option name for storing font usage.
     *
     * @var string
     */
    private $font_usage_option = 'digiblocks_font_usage';

    /**
     * User agent for Google Fonts API requests.
     *
     * @var string
     */
    private $user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36';

    /**
     * Get instance of the fonts class.
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor.
     */
    private function __construct() {
        // Set up fonts directory
        $upload_dir = wp_upload_dir();
        $this->fonts_dir = trailingslashit($upload_dir['basedir']) . 'digiblocks/fonts';
        $this->fonts_url = trailingslashit($upload_dir['baseurl']) . 'digiblocks/fonts';

        // Create fonts directory if it doesn't exist
        if (!file_exists($this->fonts_dir)) {
            wp_mkdir_p($this->fonts_dir);
        }

        // Add hook to enqueue fonts on the frontend
        add_action('wp_enqueue_scripts', array($this, 'enqueue_fonts'), 15);
    }

    /**
     * Initialize the fonts handler.
     * This should be called from the main DigiBlocks class.
     */
    public function init() {
        // Add hook to process fonts when saving posts
        add_action('save_post', array($this, 'process_post_fonts'), 10, 3);
        
        // Add hook to clean up fonts when a post is deleted
        add_action('before_delete_post', array($this, 'cleanup_post_fonts'));
    }

    /**
     * Process fonts for a post.
     *
     * @param int $post_id Post ID.
     * @param WP_Post $post Post object.
     * @param bool $update Whether this is an existing post being updated.
     */
    public function process_post_fonts($post_id, $post, $update = false) {
        // Ensure post_id is an integer
        $post_id = (int) $post_id;
        
        // Skip if this is an autosave, a revision, or a restore
        if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id) || (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)) {
            return;
        }
        
        // Skip if post status is 'auto-draft'
        if ('auto-draft' === $post->post_status) {
            return;
        }
        
        // Skip if post type doesn't support the block editor
        if (!use_block_editor_for_post_type($post->post_type)) {
            return;
        }
        
        $content = $post->post_content;
        
        // Check if content has any DigiBlocks blocks
        if (false === strpos($content, '<!-- wp:digiblocks/')) {
            // No DigiBlocks found, clean up font files and data
            $this->cleanup_post_fonts($post_id);
            return;
        }
        
        // Get old font information for this post
        $old_font_files = $this->get_post_font_files($post_id);
        
        // Parse blocks and scan for fonts
        $blocks = parse_blocks($content);
        $detected_fonts = $this->scan_blocks_for_fonts($blocks);
        
        // Get the font loading preference
        $settings = get_option('digiblocks_settings', array());
        $use_local_fonts = isset($settings['google_fonts_local']) ? $settings['google_fonts_local'] : false;
        
        // Store the detected fonts information for this post
        $this->update_post_fonts_data($post_id, $detected_fonts);
        
        // Process detected fonts based on loading preference
        if (!empty($detected_fonts)) {
            if ($use_local_fonts) {
                // Local fonts - Download and process fonts locally
                $new_font_files = array();
                $css_content = $this->process_fonts($detected_fonts, $new_font_files);
                
                if (!empty($css_content)) {
                    $this->save_fonts_css($post_id, $css_content);
                    
                    // Update font usage tracking efficiently
                    $this->update_font_usage($post_id, $new_font_files, $old_font_files);
                }
            } else {
                // When using Google CDN, we just need to clean up any local font files
                // The actual font loading will happen in enqueue_fonts()
                $this->remove_fonts_css($post_id);
                $this->update_font_usage($post_id, array(), $old_font_files);
            }
        } else {
            // No fonts found, clean up fonts data
            $this->cleanup_post_fonts($post_id);
        }
    }

    /**
     * Store the detected fonts information for a post.
     *
     * @param int $post_id Post ID.
     * @param array $detected_fonts Detected fonts information.
     */
    private function update_post_fonts_data($post_id, $detected_fonts) {
        // Get the current fonts data
        $fonts_data = get_option('digiblocks_fonts_data', array());
        
        // Ensure fonts_data is an array
        if (!is_array($fonts_data)) {
            $fonts_data = array();
        }
        
        if (empty($detected_fonts)) {
            // No fonts detected, remove entry if exists
            if (isset($fonts_data[$post_id])) {
                unset($fonts_data[$post_id]);
                update_option('digiblocks_fonts_data', $fonts_data);
            }
        } else {
            // Store fonts information
            $fonts_data[$post_id] = $detected_fonts;
            update_option('digiblocks_fonts_data', $fonts_data);
        }
    }

    /**
     * Get the font files used by a post.
     *
     * @param int $post_id Post ID.
     * @return array Font files used by the post.
     */
    private function get_post_font_files($post_id) {
        // Ensure post_id is an integer
        $post_id = (int) $post_id;
        
        $font_usage = get_option($this->font_usage_option, array());
        
        // Ensure font_usage is an array
        if (!is_array($font_usage)) {
            $font_usage = array();
        }
        
        return isset($font_usage[$post_id]) ? $font_usage[$post_id] : array();
    }

    /**
     * Update the font usage tracking and clean up unused fonts.
     *
     * @param int $post_id Post ID.
     * @param array $new_files New font files used by the post.
     * @param array $old_files Old font files used by the post.
     */
    private function update_font_usage($post_id, $new_files, $old_files) {
        // Ensure post_id is an integer
        $post_id = (int) $post_id;
        
        // Skip if nothing changed
        if ($new_files === $old_files) {
            return;
        }
        
        // Get the current font usage
        $font_usage = get_option($this->font_usage_option, array());
        
        // Ensure font_usage is an array
        if (!is_array($font_usage)) {
            $font_usage = array();
        }
        
        // Remove old files association
        if (isset($font_usage[$post_id])) {
            unset($font_usage[$post_id]);
        }
        
        // Add new files association if any
        if (!empty($new_files)) {
            $font_usage[$post_id] = $new_files;
        }
        
        // Update the option
        update_option($this->font_usage_option, $font_usage);
        
        // Clean up unused font files (only when needed)
        $this->cleanup_unused_font_files($font_usage);
    }
    
    /**
     * Clean up unused font files.
     *
     * @param array $font_usage Font usage data.
     */
    private function cleanup_unused_font_files($font_usage) {
        // Ensure font_usage is an array
        if (!is_array($font_usage)) {
            return;
        }
        
        // Build a list of all used font files
        $used_font_files = array();
        foreach ($font_usage as $post_files) {
            if (is_array($post_files)) {
                foreach ($post_files as $file) {
                    if (is_string($file)) {  // Make sure $file is a string
                        $used_font_files[$file] = true;
                    }
                }
            }
        }
        
        // Check all font files in the directory
        if (file_exists($this->fonts_dir) && is_dir($this->fonts_dir)) {
            $files = glob($this->fonts_dir . '/*');
            if ($files) {
                foreach ($files as $file) {
                    if (is_file($file)) {
                        $filename = basename($file);
                        
                        // Delete if not used
                        if (!isset($used_font_files[$filename])) {
                            wp_delete_file($file);
                        }
                    }
                }
            }
        }
    }

    /**
     * Scan blocks for font usage.
     *
     * @param array $blocks Array of parsed blocks.
     * @return array Array of detected fonts.
     */
    private function scan_blocks_for_fonts($blocks) {
        $detected_fonts = array();
        
        // Process blocks recursively to extract fonts
        foreach ($blocks as $block) {
            // Skip if block name is not set
            if (!isset($block['blockName'])) {
                continue;
            }

            // Check if this is a DigiBlocks block
            if (0 === strpos($block['blockName'], 'digiblocks/')) {
                // Look for typography attributes in the block
                if (isset($block['attrs'])) {
                    $this->extract_fonts_from_attributes($block['attrs'], $detected_fonts);
                }
            }

            // Process inner blocks
            if (!empty($block['innerBlocks'])) {
                $inner_fonts = $this->scan_blocks_for_fonts($block['innerBlocks']);
                // Merge inner block fonts with detected fonts
                foreach ($inner_fonts as $font_family => $weights) {
                    if (!isset($detected_fonts[$font_family])) {
                        $detected_fonts[$font_family] = $weights;
                    } else {
                        $detected_fonts[$font_family] = array_unique(array_merge($detected_fonts[$font_family], $weights));
                    }
                }
            }
        }
        
        return $detected_fonts;
    }

    /**
     * Extract fonts from block attributes.
     *
     * @param array $attrs Block attributes.
     * @param array &$detected_fonts Reference to detected fonts array.
     */
    private function extract_fonts_from_attributes($attrs, &$detected_fonts) {
        // Common attribute names that might contain typography settings
        $typography_attrs = array(
            'typography',
            'titleTypography',
            'contentTypography',
            'headingTypography',
            'textTypography',
            'buttonTypography',
        );

        // Check each potential typography attribute
        foreach ($typography_attrs as $attr_name) {
            if (isset($attrs[$attr_name])) {
                $typography = $attrs[$attr_name];
                if (!empty($typography['fontFamily'])) {
                    $font_family = $typography['fontFamily'];

                    // Skip system fonts
                    if ($this->is_system_font($font_family)) {
                        continue;
                    }

                    // Get font weight
                    $font_weight = isset($typography['fontWeight']) ? $typography['fontWeight'] : '400';
                    
                    // Normalize font weight
                    $font_weight = $this->normalize_font_weight($font_weight);
                    
                    // Add to detected fonts
                    if (!isset($detected_fonts[$font_family])) {
                        $detected_fonts[$font_family] = array();
                    }
                    
                    if (!in_array($font_weight, $detected_fonts[$font_family])) {
                        $detected_fonts[$font_family][] = $font_weight;
                    }
                }
            }
        }

        // Check for fonts in style object
        if (isset($attrs['style']) && isset($attrs['style']['typography'])) {
            $typography = $attrs['style']['typography'];
            if (!empty($typography['fontFamily'])) {
                $font_family = $typography['fontFamily'];

                // Skip system fonts
                if ($this->is_system_font($font_family)) {
                    return;
                }

                // Get font weight
                $font_weight = isset($typography['fontWeight']) ? $typography['fontWeight'] : '400';
                
                // Normalize font weight
                $font_weight = $this->normalize_font_weight($font_weight);
                
                // Add to detected fonts
                if (!isset($detected_fonts[$font_family])) {
                    $detected_fonts[$font_family] = array();
                }
                
                if (!in_array($font_weight, $detected_fonts[$font_family])) {
                    $detected_fonts[$font_family][] = $font_weight;
                }
            }
        }
    }

    /**
     * Check if a font family is a system font.
     *
     * @param string $font_family Font family.
     * @return bool True if system font, false otherwise.
     */
    private function is_system_font($font_family) {
        // Check if the font family contains commas (indicating a font stack)
        if (strpos($font_family, ',') !== false) {
            return true;
        }
        
        // Common system fonts
        $system_fonts = array(
            'serif',
            'sans-serif',
            'monospace',
            'cursive',
            'fantasy',
            'system-ui',
            'Arial',
            'Helvetica',
            'Times New Roman',
            'Times',
            'Courier New',
            'Courier',
            'Verdana',
            'Georgia',
            'Palatino',
            'Garamond',
            'Bookman',
            'Tahoma',
            'Trebuchet MS',
            'Impact',
            'Comic Sans MS',
        );
        
        return in_array($font_family, $system_fonts);
    }

    /**
     * Normalize font weight.
     *
     * @param string|int $weight Font weight.
     * @return string Normalized font weight.
     */
    private function normalize_font_weight($weight) {
        // Convert text weights to numeric
        if ($weight === 'normal') {
            return '400';
        } elseif ($weight === 'bold') {
            return '700';
        }
        
        // Handle numeric and string font weights
        if (!is_numeric($weight)) {
            // Map text weights to numeric values
            $weight_map = array(
                'thin' => '100',
                'extra-light' => '200',
                'light' => '300',
                'regular' => '400',
                'medium' => '500',
                'semi-bold' => '600',
                'bold' => '700',
                'extra-bold' => '800',
                'black' => '900',
            );
            
            if (isset($weight_map[strtolower($weight)])) {
                return $weight_map[strtolower($weight)];
            } else {
                return '400'; // Default to regular if unknown
            }
        }
        
        return (string) $weight;
    }

    /**
     * Process detected fonts - download and store locally.
     *
     * @param array $detected_fonts Array of detected fonts.
     * @param array &$font_files Reference to an array to store font files used.
     * @return string Generated CSS.
     */
    private function process_fonts($detected_fonts, &$font_files) {
        if (empty($detected_fonts)) {
            return '';
        }
        
        $css_content = '';
        $font_files = array();
        
        foreach ($detected_fonts as $font_family => $weights) {
            // Sort weights for consistency
            sort($weights);
            
            // Download and process font
            $font_css = $this->process_font_family($font_family, $weights, $font_files);
            
            if ($font_css) {
                $css_content .= $font_css . "\n";
            }
        }
        
        return $css_content;
    }

    /**
     * Process a single font family and its weights.
     *
     * @param string $font_family Font family.
     * @param array $weights Array of font weights.
     * @param array &$font_files Reference to an array to store font files used.
     * @return string|false Generated CSS or false on failure.
     */
    private function process_font_family($font_family, $weights, &$font_files) {
        // Prepare font family for URL
        $url_font_family = str_replace(' ', '+', $font_family);
        
        // Prepare weights for the URL
        $weights_str = implode(',', $weights);
        
        // Create the Google Fonts API URL
        $fonts_url = "https://fonts.googleapis.com/css2?family={$url_font_family}:wght@{$weights_str}&display=swap";
        
        // Get the CSS from Google Fonts
        $response = wp_remote_get($fonts_url, array(
            'user-agent' => $this->user_agent,
        ));
        
        if (is_wp_error($response) || wp_remote_retrieve_response_code($response) !== 200) {
            return false;
        }
        
        $css = wp_remote_retrieve_body($response);
        
        // Process the CSS and download font files
        return $this->process_google_fonts_css($css, $font_family, $font_files);
    }

    /**
     * Process Google Fonts CSS - download files and generate local CSS.
     *
     * @param string $css Google Fonts CSS.
     * @param string $font_family Font family.
     * @param array &$font_files Reference to an array to store font files used.
     * @return string|false Generated CSS or false on failure.
     */
    private function process_google_fonts_css($css, $font_family, &$font_files) {
        // Group font-face rules by weight and style
        $font_variants = array();
        
        // Extract font-face blocks
        preg_match_all('/@font-face\s*{([^}]*)}/i', $css, $font_face_matches);
        
        if (empty($font_face_matches[1])) {
            return false;
        }
        
        // First pass: gather all variants and formats
        foreach ($font_face_matches[1] as $font_face) {
            // Extract font-weight
            preg_match('/font-weight:\s*([^;]*);/i', $font_face, $weight_match);
            $weight = !empty($weight_match[1]) ? trim($weight_match[1]) : '400';
            
            // Extract font-style
            preg_match('/font-style:\s*([^;]*);/i', $font_face, $style_match);
            $style = !empty($style_match[1]) ? trim($style_match[1]) : 'normal';
            
            // Extract unicode-range if available
            preg_match('/unicode-range:\s*([^;]*);/i', $font_face, $range_match);
            $unicode_range = !empty($range_match[1]) ? trim($range_match[1]) : '';
            
            // Create a key for this variant
            $variant_key = $weight . '-' . $style;
            
            // Initialize variant if not exists
            if (!isset($font_variants[$variant_key])) {
                $font_variants[$variant_key] = array(
                    'weight' => $weight,
                    'style' => $style,
                    'formats' => array()
                );
            }
            
            // Extract src URLs
            preg_match('/src:\s*([^;]*);/i', $font_face, $src_match);
            
            if (empty($src_match[1])) {
                continue;
            }
            
            preg_match_all('/url\([\'"]?([^\'"*)]+)[\'"]?\)\s*format\([\'"]([^\'"]+)[\'"]\)/i', $src_match[1], $url_format_matches, PREG_SET_ORDER);
            
            if (empty($url_format_matches)) {
                continue;
            }
            
            // Process each URL and format pair
            foreach ($url_format_matches as $match) {
                $url = $match[1];
                $format = $match[2];
                
                // Add to formats if it doesn't exist
                if (!isset($font_variants[$variant_key]['formats'][$format])) {
                    $font_variants[$variant_key]['formats'][$format] = array(
                        'url' => $url,
                        'unicode_range' => $unicode_range
                    );
                }
                // If we already have this format but the current one is for Latin (smaller unicode range),
                // prefer that one as it's typically smaller and sufficient for most Western websites
                elseif (stripos($unicode_range, 'U+0') === 0) {
                    $font_variants[$variant_key]['formats'][$format] = array(
                        'url' => $url,
                        'unicode_range' => $unicode_range
                    );
                }
            }
        }
        
        // Second pass: download fonts and generate CSS
        $local_css = '';
        
        foreach ($font_variants as $variant_key => $variant) {
            $sources = array();
            
            // Process each format - prioritize woff2 format for modern browsers
            if (isset($variant['formats']['woff2'])) {
                $format = 'woff2';
                $format_data = $variant['formats'][$format];
                $url = $format_data['url'];
                
                // Generate a filename
                $file_name = $this->generate_font_filename($font_family, $variant['weight'], $variant['style'], $format);
                $file_path = $this->fonts_dir . '/' . $file_name;
                
                // Only download if the file doesn't exist
                if (!file_exists($file_path)) {
                    $this->download_font_file($url, $file_path);
                }
                
                // Add to sources if file exists
                if (file_exists($file_path)) {
                    $sources[] = array(
                        'url' => $this->fonts_url . '/' . $file_name,
                        'format' => $format
                    );
                    
                    // Add to font files list for tracking
                    $font_files[] = $file_name;
                }
            }
            
            // Fallback to woff if woff2 is not available
            if (empty($sources) && isset($variant['formats']['woff'])) {
                $format = 'woff';
                $format_data = $variant['formats'][$format];
                $url = $format_data['url'];
                
                // Generate a filename
                $file_name = $this->generate_font_filename($font_family, $variant['weight'], $variant['style'], $format);
                $file_path = $this->fonts_dir . '/' . $file_name;
                
                // Only download if the file doesn't exist
                if (!file_exists($file_path)) {
                    $this->download_font_file($url, $file_path);
                }
                
                // Add to sources if file exists
                if (file_exists($file_path)) {
                    $sources[] = array(
                        'url' => $this->fonts_url . '/' . $file_name,
                        'format' => $format
                    );
                    
                    // Add to font files list for tracking
                    $font_files[] = $file_name;
                }
            }
            
            // Only create @font-face if we have sources
            if (!empty($sources)) {
                $local_css .= "@font-face {\n";
                $local_css .= "    font-family: '" . esc_attr($font_family) . "';\n";
                $local_css .= "    font-weight: " . esc_attr($variant['weight']) . ";\n";
                $local_css .= "    font-style: " . esc_attr($variant['style']) . ";\n";
                $local_css .= "    font-display: swap;\n";
                $local_css .= "    src: ";
                
                $src_parts = array();
                foreach ($sources as $source) {
                    $src_parts[] = "url('" . esc_url($source['url']) . "') format('" . esc_attr($source['format']) . "')";
                }
                
                $local_css .= implode(",\n         ", $src_parts) . ";\n";
                $local_css .= "}\n\n";
            }
        }
        
        return $local_css;
    }

    /**
     * Generate a file name for a font file.
     *
     * @param string $font_family Font family.
     * @param string $weight Font weight.
     * @param string $style Font style.
     * @param string $format Font format.
     * @return string File name.
     */
    private function generate_font_filename($font_family, $weight, $style, $format) {
        // Determine file extension from format
        $extension = $this->format_to_extension($format);
        
        // Generate a safe file name
        return sanitize_file_name(
            str_replace(' ', '-', strtolower($font_family)) . '-' . 
            $weight . '-' . 
            $style . '-' . 
            substr(md5($font_family . $weight . $style . $format), 0, 8) . '.' . 
            $extension
        );
    }

    /**
     * Convert font format to file extension.
     *
     * @param string $format Font format.
     * @return string File extension.
     */
    private function format_to_extension($format) {
        switch ($format) {
            case 'truetype':
                return 'ttf';
            case 'opentype':
                return 'otf';
            case 'embedded-opentype':
                return 'eot';
            case 'svg':
                return 'svg';
            case 'woff':
                return 'woff';
            case 'woff2':
                return 'woff2';
            default:
                return 'woff2';
        }
    }

    /**
     * Download a font file.
     *
     * @param string $url Font file URL.
     * @param string $file_path Destination file path.
     * @return bool True on success, false on failure.
     */
    private function download_font_file($url, $file_path) {
        // Download the file
        $response = wp_remote_get($url, array(
            'user-agent' => $this->user_agent,
        ));
        
        if (is_wp_error($response) || wp_remote_retrieve_response_code($response) !== 200) {
            return false;
        }
        
        $font_data = wp_remote_retrieve_body($response);
        
        // Save the file directly for speed
        $result = file_put_contents($file_path, $font_data);
        if ($result !== false) {
            global $wp_filesystem;
            if (!function_exists('WP_Filesystem')) {
                require_once ABSPATH . 'wp-admin/includes/file.php';
            }
            WP_Filesystem();
            $wp_filesystem->chmod($file_path, FS_CHMOD_FILE);
            return true;
        }
        
        return false;
    }

    /**
     * Save fonts CSS file for a post.
     *
     * @param int $post_id Post ID.
     * @param string $css CSS content.
     * @return bool True on success, false on failure.
     */
    private function save_fonts_css($post_id, $css) {
        // Ensure post_id is an integer
        $post_id = (int) $post_id;
        
        $css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-fonts-' . $post_id . '.css';
        
        // Ensure digiblocks directory exists in uploads folder
        if (!file_exists(DIGIBLOCKS_ASSETS_DIR)) {
            wp_mkdir_p(DIGIBLOCKS_ASSETS_DIR);
        }
        
        // Save the CSS file directly for speed
        $result = file_put_contents($css_file, $css);
        if ($result !== false) {
            global $wp_filesystem;
            if (!function_exists('WP_Filesystem')) {
                require_once ABSPATH . 'wp-admin/includes/file.php';
            }
            WP_Filesystem();
            $wp_filesystem->chmod($css_file, FS_CHMOD_FILE);
            return true;
        }
        
        return false;
    }

    /**
     * Remove the fonts CSS file for a post.
     *
     * @param int $post_id Post ID.
     */
    private function remove_fonts_css($post_id) {
        $css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-fonts-' . $post_id . '.css';
        
        if (file_exists($css_file)) {
            wp_delete_file($css_file);
        }
    }

    /**
     * Enqueue fonts for the current page.
     */
    public function enqueue_fonts() {
        global $post;
        
        if (!is_singular() || empty($post)) {
            return;
        }
        
        $post_id = $post->ID;
        
        // Get the font loading preference
        $settings = get_option('digiblocks_settings', array());
        $use_local_fonts = isset($settings['google_fonts_local']) ? $settings['google_fonts_local'] : false;
        
        if ($use_local_fonts) {
            // Local fonts - Load the CSS file if it exists
            $css_file = DIGIBLOCKS_ASSETS_DIR . '/digiblocks-fonts-' . $post_id . '.css';
            
            if (file_exists($css_file)) {
                wp_enqueue_style(
                    'digiblocks-fonts-' . $post_id,
                    DIGIBLOCKS_ASSETS_URL . '/digiblocks-fonts-' . $post_id . '.css',
                    array(),
                    filemtime($css_file)
                );
            }
        } else {
            // Google CDN fonts
			$fonts_data = get_option('digiblocks_fonts_data', array());
			
			if (isset($fonts_data[$post_id]) && !empty($fonts_data[$post_id])) {
				// Collect font families and their weights
				$font_families = array();
				
				foreach ($fonts_data[$post_id] as $font_family => $weights) {
					// Skip system fonts
					if ($this->is_system_font($font_family)) {
						continue;
					}
					
					// Skip empty font families
					if (empty($font_family)) {
						continue;
					}
					
					// Encode font family name
					$encoded_family = str_replace(' ', '+', $font_family);
					
					// Format weights for API v1
					if (!empty($weights)) {
						// Sort weights for consistency
						sort($weights);
						$font_families[] = $encoded_family . ':' . implode(',', $weights);
					} else {
						$font_families[] = $encoded_family;
					}
				}
				
				// Only proceed if we have font families
				if (!empty($font_families)) {
					// Construct the Google Fonts URL using API v1 format
					$google_fonts_url = 'https://fonts.googleapis.com/css?family=';
					$google_fonts_url .= implode('|', $font_families);
					$google_fonts_url .= '&display=swap';
					
					// Enqueue the stylesheet
					wp_enqueue_style(
						'digiblocks-google-fonts-' . $post_id,
						$google_fonts_url,
						array(),
						DIGIBLOCKS_VERSION
					);
				}
			}
        }
    }

    /**
     * Cleanup fonts for a post when it's deleted or no longer uses DigiBlocks.
     *
     * @param int $post_id Post ID.
     */
    public function cleanup_post_fonts($post_id) {
        // Ensure post_id is an integer
        $post_id = (int) $post_id;
        
        // Clean up font files
        $this->remove_fonts_css($post_id);
        
        // Get the current font usage
        $font_usage = get_option($this->font_usage_option, array());
        
        // Ensure font_usage is an array
        if (!is_array($font_usage)) {
            $font_usage = array();
        }
        
        // Update font usage tracking - remove this post's entries
        if (isset($font_usage[$post_id])) {
            unset($font_usage[$post_id]);
            update_option($this->font_usage_option, $font_usage);
            
            // Clean up unused font files
            $this->cleanup_unused_font_files($font_usage);
        }
        
        // Remove fonts data for this post
        $fonts_data = get_option('digiblocks_fonts_data', array());
        if (isset($fonts_data[$post_id])) {
            unset($fonts_data[$post_id]);
            update_option('digiblocks_fonts_data', $fonts_data);
        }
    }

	/**
	 * Process all fonts when setting changes.
	 * 
	 * @param bool $use_local_fonts Whether to use local fonts or CDN.
	 */
	public function process_all_fonts_on_setting_change($use_local_fonts) {
		// Get the data of fonts used in all posts
		$fonts_data = get_option('digiblocks_fonts_data', array());
		
		if (empty($fonts_data)) {
			return; // No fonts to process
		}
		
		if ($use_local_fonts) {
			// Switching to local fonts: Download all fonts
			$all_font_files = array();
			
			foreach ($fonts_data as $post_id => $detected_fonts) {
				if (!empty($detected_fonts)) {
					$post_font_files = array();
					$css_content = $this->process_fonts($detected_fonts, $post_font_files);
					
					if (!empty($css_content)) {
						$this->save_fonts_css($post_id, $css_content);
						$all_font_files = array_merge($all_font_files, $post_font_files);
					}
				}
			}
			
			// Update font usage option with all font files
			$font_usage = array();
			foreach ($fonts_data as $post_id => $detected_fonts) {
				if (!empty($detected_fonts)) {
					// Find which font files belong to this post
					$post_font_files = array();
					foreach ($all_font_files as $font_file) {
						// Check if font file belongs to any font used in this post
						foreach ($detected_fonts as $font_family => $weights) {
							$font_family_slug = str_replace(' ', '-', strtolower($font_family));
							if (strpos($font_file, $font_family_slug) === 0) {
								$post_font_files[] = $font_file;
								break;
							}
						}
					}
					
					if (!empty($post_font_files)) {
						$font_usage[$post_id] = $post_font_files;
					}
				}
			}
			
			update_option($this->font_usage_option, $font_usage);
		} else {
			// Switching to CDN: Remove all local font files and CSS
			// First, get all posts with font data
			$posts_with_fonts = array_keys($fonts_data);
			
			// Remove all font CSS files
			foreach ($posts_with_fonts as $post_id) {
				$this->remove_fonts_css($post_id);
			}
			
			// Clear font usage tracking
			update_option($this->font_usage_option, array());
			
			// Clean up all font files in the directory
			if (file_exists($this->fonts_dir) && is_dir($this->fonts_dir)) {
				$files = glob($this->fonts_dir . '/*');
				if ($files) {
					foreach ($files as $file) {
						if (is_file($file)) {
							wp_delete_file($file);
						}
					}
				}
			}
		}
	}
}