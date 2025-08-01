const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Auto-generate individual block builds
 * Scans digiblocks/blocks/ directory and creates individual builds for each block
 */
function generateBlockBuilds() {
    // Paths (script is running from plugin root)
    const blocksDir = path.join(__dirname, 'blocks');
    const outputDir = path.join(__dirname, 'assets', 'js', 'blocks');
    
    console.log('🔍 Scanning blocks directory:', blocksDir);
    console.log('📝 Output directory:', outputDir);
    
    // Read all directories in the blocks folder
    const blockDirs = fs.readdirSync(blocksDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .filter(name => name !== 'node_modules' && !name.startsWith('.') && name !== 'dist');
    
    console.log('📁 Found directories:', blockDirs);
    
    // Check which directories have an index.js file
    const validBlocks = blockDirs.filter(blockName => {
        const indexPath = path.join(blocksDir, blockName, 'index.js');
        const exists = fs.existsSync(indexPath);
        console.log(`  ${blockName}: ${exists ? '✅' : '❌'} ${indexPath}`);
        return exists;
    });
    
    console.log('📋 Valid blocks:', validBlocks);
    
    if (validBlocks.length === 0) {
        console.warn('⚠️  No valid blocks found with index.js files');
        return [];
    }
    
    // Ensure the main output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Create individual block directories and build info
    const buildInfo = validBlocks.map(blockName => {
        const blockOutputDir = path.join(outputDir, blockName);
        
        // Ensure the block output directory exists
        if (!fs.existsSync(blockOutputDir)) {
            fs.mkdirSync(blockOutputDir, { recursive: true });
            console.log('📁 Created output directory:', blockOutputDir);
        }
        
        return {
            name: blockName,
            input: path.join('blocks', blockName, 'index.js'),
            output: path.join('assets', 'js', 'blocks', blockName, 'index.js')
        };
    });
    
    console.log(`\n✅ Prepared ${buildInfo.length} block builds`);
    return buildInfo;
}

/**
 * Build all blocks using esbuild
 */
function buildBlocks(isProduction = false) {
    const blocks = generateBlockBuilds();
    
    if (blocks.length === 0) {
        console.log('⚠️  No blocks to build');
        return;
    }
    
    console.log(`\n🏗️  Building ${blocks.length} blocks...`);
    
    const buildPromises = blocks.map(block => {
        const esbuildArgs = [
            `./node_modules/.bin/esbuild`,
            block.input,
            '--bundle',
            '--loader:.js=jsx',
            '--define:wp=window.wp',
            '--jsx-factory=wp.element.createElement',
            '--jsx-fragment=wp.element.Fragment',
            `--outfile=${block.output}`
        ];
        
        if (isProduction) {
            esbuildArgs.push('--minify');
        }
        
        try {
            execSync(esbuildArgs.join(' '), { stdio: 'inherit' });
            console.log(`✅ Built ${block.name}`);
            return Promise.resolve();
        } catch (error) {
            console.error(`❌ Failed to build ${block.name}:`, error.message);
            return Promise.reject(error);
        }
    });
    
    return Promise.all(buildPromises);
}

/**
 * Watch mode for development
 */
function watchBlocks() {
    const blocks = generateBlockBuilds();
    
    if (blocks.length === 0) {
        console.log('⚠️  No blocks to watch');
        return;
    }
    
    console.log(`\n👀 Watching ${blocks.length} blocks for changes...`);
    
    // Start watch process for each block
    blocks.forEach(block => {
        const esbuildArgs = [
            `./node_modules/.bin/esbuild`,
            block.input,
            '--bundle',
            '--loader:.js=jsx',
            '--define:wp=window.wp',
            '--jsx-factory=wp.element.createElement',
            '--jsx-fragment=wp.element.Fragment',
            `--outfile=${block.output}`,
            '--watch'
        ];
        
        try {
            const { spawn } = require('child_process');
            const child = spawn('npx', ['esbuild', ...esbuildArgs.slice(1)], {
                stdio: 'inherit',
                shell: true
            });
            
            console.log(`👀 Watching ${block.name}...`);
            
            child.on('error', (error) => {
                console.error(`❌ Watch failed for ${block.name}:`, error.message);
            });
            
        } catch (error) {
            console.error(`❌ Failed to start watch for ${block.name}:`, error.message);
        }
    });
}

// Handle command line arguments
const args = process.argv.slice(2);
const command = args[0];

// Handle errors gracefully
process.on('uncaughtException', (error) => {
    console.error('❌ Script failed:', error.message);
    console.log('💡 Make sure you have the correct directory structure');
    process.exit(1);
});

// Execute based on command
switch (command) {
    case 'build':
        buildBlocks(true)
            .then(() => console.log('\n🎉 All blocks built successfully!'))
            .catch(() => process.exit(1));
        break;
        
    case 'dev':
        buildBlocks(false)
            .then(() => {
                console.log('\n🎉 Initial build complete!');
                watchBlocks();
            })
            .catch(() => process.exit(1));
        break;
        
    case 'watch':
        watchBlocks();
        break;
        
    default:
        // Just generate the structure
        const blocks = generateBlockBuilds();
        if (blocks.length > 0) {
            console.log(`\n🚀 Ready to build! Run:`);
            console.log(`  Development: npm run dev:js-blocks`);
            console.log(`  Production: npm run build:js-blocks`);
        } else {
            console.log(`\n⚠️  No blocks to build. Create some blocks first!`);
        }
}