const fs = require('fs');
const path = require('path');

const rootDir = __dirname; // Use the current directory
const outputFilePath = path.join(rootDir, 'all_code.txt');
const directories = ['src'];

// Function to get all files recursively from a directory
function getFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) {
        console.log(`Directory does not exist: ${dir}`);
        return fileList;
    }

    const files = fs.readdirSync(dir);

    files.forEach(file => {
        if (file === '.' || file === '..') return;

        const filePath = path.join(dir, file);

        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, fileList);
        } else if (/\.(js|jsx|tsx|ts|css)$/.test(file)) {
            fileList.push(filePath); // Append to the file list
        }
    });

    return fileList;
}

// Function to copy code from files into the output file
function copyCodeToFile(files, outputFile) {
    const output = fs.createWriteStream(outputFile);
    if (!output) { // Check if the file was opened successfully
        console.error(`Could not open output file: ${outputFile}`);
        process.exit(1);
    }

    files.forEach(file => {
        try {
            const fileContent = fs.readFileSync(file, 'utf8');
            output.write(`\n// --- ${file} ---\n`);
            output.write(fileContent + '\n\n');
        } catch (err) {
            console.error(`Error reading file: ${file}`);
        }
    });

    output.end();
    console.log(`All code has been copied to ${outputFile}`);
}

// Main execution
const allFiles = [];
directories.forEach(dir => {
    const dirPath = path.join(rootDir, dir);
    console.log(`Checking directory: ${dirPath}`);
    if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
        getFiles(dirPath, allFiles);
    } else {
        console.log(`Directory "${dirPath}" does not exist.`);
    }
});

if (allFiles.length > 0) {
    copyCodeToFile(allFiles, outputFilePath);
} else {
    console.log('No files found in specified directories.');
}