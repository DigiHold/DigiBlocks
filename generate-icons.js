const fs = require('fs');
const path = require('path');
const https = require('https');

/**
 * Font Awesome Icons Generator for DigiBlocks - Single File Version
 * Generates one optimized JSON file with all icons
 */
class FontAwesomeIconsGenerator {
    constructor() {
        this.faMetadataUrl = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/metadata/icons.json';
        this.outputDir = path.join(__dirname, 'includes', 'icons');
        this.fileName = 'all-icons.json';
    }

    /**
     * Main function to generate the single icon file
     */
    async generateIcons() {
        console.log('🎨 Font Awesome Icons Generator - Single File');
        console.log('📁 Output directory:', this.outputDir);
        console.log('📄 Output file:', this.fileName);
        console.log();

        try {
            this.ensureOutputDir();

            console.log('⬇️  Downloading Font Awesome metadata...');
            const metadata = await this.downloadMetadata();
            console.log(`✅ Downloaded metadata for ${Object.keys(metadata).length} icons`);

            console.log('🔄 Converting icons to DigiBlocks format...');
            const convertedIcons = this.convertMetadata(metadata);
            console.log(`✅ Converted ${Object.keys(convertedIcons).length - 1} icons`); // -1 for category list

            console.log('📝 Writing single JSON file...');
            this.writeSingleFile(convertedIcons);

            console.log();
            console.log(`🎉 Successfully generated ${this.fileName}!`);
            console.log(`📂 File created in: ${this.outputDir}`);
            console.log(`🚀 Total icons: ${Object.keys(convertedIcons).length - 1}`);
            console.log();

        } catch (error) {
            console.error('❌ Error generating icons:', error.message);
            process.exit(1);
        }
    }

    /**
     * Ensure output directory exists
     */
    ensureOutputDir() {
        if (!fs.existsSync(this.outputDir)) {
            fs.mkdirSync(this.outputDir, { recursive: true });
            console.log('📁 Created output directory:', this.outputDir);
        }
    }

    /**
     * Download Font Awesome metadata
     */
    downloadMetadata() {
        return new Promise((resolve, reject) => {
            const request = https.get(this.faMetadataUrl, (response) => {
                let data = '';

                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    try {
                        const parsed = JSON.parse(data);
                        resolve(parsed);
                    } catch (error) {
                        reject(new Error('Failed to parse metadata JSON'));
                    }
                });
            });

            request.on('error', (error) => {
                reject(new Error(`Failed to download metadata: ${error.message}`));
            });

            request.setTimeout(30000, () => {
                request.destroy();
                reject(new Error('Download timeout'));
            });
        });
    }

    /**
     * Convert FA metadata to DigiBlocks format
     */
    convertMetadata(metadata) {
        const converted = {};
        const allCategories = new Set();

        Object.entries(metadata).forEach(([iconName, iconData]) => {
            const convertedIcon = this.convertIcon(iconName, iconData);
            converted[iconName] = convertedIcon;
            
            // Collect all categories
            convertedIcon.custom_categories.forEach(cat => allCategories.add(cat));
        });

        // Add organized category list - only categories that are actually used
        converted.digiblocks_category_list = this.generateCategoryList(Array.from(allCategories));

        return converted;
    }

    /**
     * Convert single icon to DigiBlocks format
     */
    convertIcon(iconName, iconData) {
        const svg = {};

        // Process each style (solid, regular, brands)
        if (iconData.svg) {
            Object.entries(iconData.svg).forEach(([style, svgInfo]) => {
                svg[style] = {
                    width: svgInfo.viewBox ? svgInfo.viewBox[2] : 512,
                    height: svgInfo.viewBox ? svgInfo.viewBox[3] : 512,
                    path: svgInfo.path || '',
                };
            });
        }

        return {
            svg,
            label: this.generateLabel(iconName, iconData),
            custom_categories: this.generateCategories(iconName, iconData),
        };
    }

    /**
     * Generate categories for the icon
     */
    generateCategories(iconName, iconData) {
        const categories = [];

        // Add styles as categories (solid, regular, brands)
        if (iconData.styles) {
            categories.push(...iconData.styles);
        }

        // Add ONLY main FA categories (not search terms!)
        if (iconData.categories) {
            categories.push(...iconData.categories);
        }

        // Add semantic categories based on icon usage (be more selective)
        const iconLabel = iconData.label ? iconData.label.toLowerCase() : iconName.toLowerCase();
        
        // Social media icons
        if (this.isSocialIcon(iconName, iconLabel)) {
            categories.push('social');
        }
        
        // Navigation icons
        if (this.isNavigationIcon(iconName, iconLabel)) {
            categories.push('navigation');
        }
        
        // File icons
        if (this.isFileIcon(iconName, iconLabel)) {
            categories.push('files');
        }
        
        // User icons
        if (this.isUserIcon(iconName, iconLabel)) {
            categories.push('users');
        }
        
        // Chart icons
        if (this.isChartIcon(iconName, iconLabel)) {
            categories.push('charts');
        }

        // E-commerce icons
        if (this.isEcommerceIcon(iconName, iconLabel)) {
            categories.push('ecommerce');
        }

        // Business icons
        if (this.isBusinessIcon(iconName, iconLabel)) {
            categories.push('business');
        }

        // Remove duplicates and return
        return [...new Set(categories)];
    }

    /**
     * Helper methods to determine icon categories
     */
    isSocialIcon(iconName, iconLabel) {
        const socialKeywords = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'tiktok', 'snapchat', 'whatsapp', 'telegram', 'discord', 'reddit', 'pinterest', 'tumblr'];
        return socialKeywords.some(keyword => iconName.includes(keyword) || iconLabel.includes(keyword));
    }

    isNavigationIcon(iconName, iconLabel) {
        const navKeywords = ['arrow', 'chevron', 'angle', 'caret', 'navigation', 'menu', 'bars', 'home', 'back', 'forward'];
        return navKeywords.some(keyword => iconName.includes(keyword) || iconLabel.includes(keyword));
    }

    isFileIcon(iconName, iconLabel) {
        const fileKeywords = ['file', 'document', 'pdf', 'doc', 'folder', 'archive', 'download', 'upload'];
        return fileKeywords.some(keyword => iconName.includes(keyword) || iconLabel.includes(keyword));
    }

    isUserIcon(iconName, iconLabel) {
        const userKeywords = ['user', 'person', 'profile', 'account', 'people', 'group', 'team'];
        return userKeywords.some(keyword => iconName.includes(keyword) || iconLabel.includes(keyword));
    }

    isChartIcon(iconName, iconLabel) {
        const chartKeywords = ['chart', 'graph', 'analytics', 'data', 'statistics', 'report', 'dashboard'];
        return chartKeywords.some(keyword => iconName.includes(keyword) || iconLabel.includes(keyword));
    }

    isEcommerceIcon(iconName, iconLabel) {
        const ecommerceKeywords = ['shopping', 'cart', 'store', 'shop', 'basket', 'bag', 'purchase', 'credit-card', 'payment'];
        return ecommerceKeywords.some(keyword => iconName.includes(keyword) || iconLabel.includes(keyword));
    }

    isBusinessIcon(iconName, iconLabel) {
        const businessKeywords = ['business', 'office', 'briefcase', 'building', 'company', 'corporate', 'meeting'];
        return businessKeywords.some(keyword => iconName.includes(keyword) || iconLabel.includes(keyword));
    }

    /**
     * Generate human-readable label
     */
    generateLabel(iconName, iconData) {
        // Use FA label if available
        if (iconData.label) {
            return iconData.label;
        }

        // Convert icon name to readable format
        return iconName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    /**
     * Generate organized category list
     */
    generateCategoryList(usedCategories) {
        // Define priority order and titles
        const categoryMap = {
            // Style categories
            'solid': 'Solid',
            'regular': 'Regular',
            'brands': 'Brands',
            
            // Custom semantic categories
            'navigation': 'Navigation',
            'social': 'Social',
            'ecommerce': 'E-commerce',
            'business': 'Business',
            'users': 'Users',
            'files': 'Files',
            'charts': 'Charts',
            
            // Main FA categories (only most useful ones)
            'accessibility': 'Accessibility',
            'animals': 'Animals',
            'automotive': 'Automotive',
            'buildings': 'Buildings',
            'clothing': 'Clothing',
            'communication': 'Communication',
            'computers': 'Computers',
            'design': 'Design',
            'editors': 'Editors',
            'energy': 'Energy',
            'food': 'Food',
            'games': 'Games',
            'hands': 'Hands',
            'health': 'Health',
            'household': 'Household',
            'maps': 'Maps',
            'mathematical': 'Mathematical',
            'media': 'Media',
            'money': 'Money',
            'music': 'Music',
            'nature': 'Nature',
            'objects': 'Objects',
            'religion': 'Religion',
            'science': 'Science',
            'security': 'Security',
            'shapes': 'Shapes',
            'shopping': 'Shopping',
            'sports': 'Sports',
            'technology': 'Technology',
            'time': 'Time',
            'toggle': 'Toggle',
            'transportation': 'Transportation',
            'travel': 'Travel',
            'weather': 'Weather',
            'writing': 'Writing'
        };

        // Filter to only include categories that are actually used and mapped
        const filteredCategories = usedCategories.filter(cat => 
            categoryMap.hasOwnProperty(cat.toLowerCase())
        );

        // Sort categories: priority first, then alphabetical
        const priorityCategories = [
            'solid', 'regular', 'brands',
            'navigation', 'social', 'ecommerce', 'business', 'users',
            'files', 'charts'
        ];

        const sortedCategories = filteredCategories.sort((a, b) => {
            const aIndex = priorityCategories.indexOf(a);
            const bIndex = priorityCategories.indexOf(b);
            
            if (aIndex !== -1 && bIndex !== -1) {
                return aIndex - bIndex;
            } else if (aIndex !== -1) {
                return -1;
            } else if (bIndex !== -1) {
                return 1;
            } else {
                return a.localeCompare(b);
            }
        });

        return sortedCategories.map(category => ({
            slug: category,
            title: categoryMap[category] || this.formatCategoryTitle(category)
        }));
    }

    /**
     * Format category title as fallback
     */
    formatCategoryTitle(category) {
        return category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    /**
     * Write the single optimized JSON file
     */
    writeSingleFile(icons) {
        const filename = path.join(this.outputDir, this.fileName);
        
        const content = {
            _metadata: {
                generated: new Date().toISOString(),
                totalIcons: Object.keys(icons).length - 1, // Exclude category list
                generator: 'DigiBlocks Icons Generator (Single File)',
                version: '1.0'
            },
            ...icons // Spread all icons and category list directly
        };

        fs.writeFileSync(filename, JSON.stringify(content, null, 2));
        console.log(`  ✅ Created: ${this.fileName} (${Object.keys(icons).length - 1} icons)`);
    }
}

// Handle errors gracefully
process.on('uncaughtException', (error) => {
    console.error('❌ Script failed:', error.message);
    console.log('💡 Make sure you have internet connection to download Font Awesome metadata');
    process.exit(1);
});

// Run the generator
async function main() {
    const generator = new FontAwesomeIconsGenerator();
    await generator.generateIcons();
}

main().catch(console.error);