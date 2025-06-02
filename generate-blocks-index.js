const fs = require('fs');
const path = require('path');

/**
 * Auto-generate the main blocks index.js file
 * Scans digiblocks/blocks/ directory and creates imports in digiblocks/resources/js/blocks/index.js
 */
function generateBlocksIndex() {
    // Paths (script is running from plugin root)
    const blocksDir = path.join(__dirname, 'blocks'); // digiblocks/blocks/
    const outputFile = path.join(__dirname, 'resources', 'js', 'blocks', 'index.js'); // digiblocks/resources/js/blocks/index.js
    
    console.log('🔍 Scanning blocks directory:', blocksDir);
    console.log('📝 Output file:', outputFile);
    
    // Read all directories in the blocks folder
    const blockDirs = fs.readdirSync(blocksDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .filter(name => name !== 'node_modules' && !name.startsWith('.') && name !== 'dist');
    
    console.log('📁 Found directories:', blockDirs);
    
    // Check which directories have an index.js file
    let validBlocks = blockDirs.filter(blockName => {
        const indexPath = path.join(blocksDir, blockName, 'index.js');
        const exists = fs.existsSync(indexPath);
        console.log(`  ${blockName}: ${exists ? '✅' : '❌'} ${indexPath}`);
        return exists;
    });
    
    // 🎯 Ensure Container block is loaded first (if it exists)
    if (validBlocks.includes('container')) {
        // Remove container from current position
        validBlocks = validBlocks.filter(block => block !== 'container');
        // Add container at the beginning
        validBlocks = ['container', ...validBlocks];
        console.log('📦 Container block moved to first position');
    }
    
    console.log('📋 Final block order:', validBlocks);
    
    if (validBlocks.length === 0) {
        console.warn('⚠️  No valid blocks found with index.js files');
    }
    
    // Generate the main index.js content
    const indexContent = `/**
 * Auto-generated imports for all blocks
 * Total blocks: ${validBlocks.length}
 */
${validBlocks.map(blockName => `import '../../../blocks/${blockName}/index.js';`).join('\n')}
`;
    
    // Ensure the output directory exists
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        console.log('📁 Created output directory:', outputDir);
    }
    
    // Write the index.js file
    fs.writeFileSync(outputFile, indexContent);
    
    console.log(`\n✅ Generated ${outputFile}`);
    
    if (validBlocks.length > 0) {
        console.log(`\n🚀 Ready to build! Run: npm run build:js-blocks`);
    } else {
        console.log(`\n⚠️  No blocks to build. Create some blocks first!`);
    }
}

// Handle errors gracefully
process.on('uncaughtException', (error) => {
    console.error('❌ Script failed:', error.message);
    console.log('💡 Make sure you have the correct directory structure');
    process.exit(1);
});

// Run the generator
generateBlocksIndex();