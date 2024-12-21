// README: Usage in Git Bash terminal (or any terminal with node.js environment available):
// node combine-files.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Reconstruct __filename and __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ALLOWED_EXTENSIONS = [
    '.ts',   // TypeScript files
    '.tsx',  // React components in TypeScript
    '.js',   // JavaScript files
    '.jsx',  // React components in JavaScript
    '.html', // HTML files (e.g., index.html)
    '.css',  // Stylesheets
    '.scss', // Sass/SCSS stylesheets
    '.json', // JSON files (configurations)
    '.md',   // Markdown files (documentation, READMEs)
    '.env',  // Environment variable files
    '.yml',  // YAML files (e.g., CI/CD configs)
    '.yaml', // Alternative YAML extension
];

const EXCLUDED_DIRS = [
    'node_modules', // Dependency cache
    '.git',         // Git metadata
    'dist',         // Vite build output
    'build',        // Alternative build folder
    '.cache',       // Framework-specific caches
    '.vscode',      // VSCode project-specific settings
    'public',       // Static assets (optional, if not editing them)
];

const EXCLUDED_FILES = [
    'combine-files.js',    // This script
    'combined-output.txt', // Output of this script
    'package-lock.json',   // NPM lock file
    'eslint.config.js'     // ESLint configuration
];

function getAllAllowedFiles(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  let filePaths = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    // Exclude directories
    if (entry.isDirectory() && EXCLUDED_DIRS.includes(entry.name)) {
      continue;
    }

    // Recursively process subdirectories
    if (entry.isDirectory()) {
      filePaths = filePaths.concat(getAllAllowedFiles(fullPath));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      const isExcludedFile = EXCLUDED_FILES.includes(entry.name);

      // Include files only if they match allowed extensions and are not excluded
      if (ALLOWED_EXTENSIONS.includes(ext) && !isExcludedFile) {
        filePaths.push(fullPath);
      }
    }
  }

  return filePaths;
}

function combineFilesIntoTxt(startDir, outputFilePath) {
  const allFiles = getAllAllowedFiles(startDir);
  const writeStream = fs.createWriteStream(outputFilePath, { flags: 'w' });

  for (const filePath of allFiles) {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      // Write delimiter
      writeStream.write(`@@ ${filePath} @@\n`);
      // Write file content
      writeStream.write(fileContents + '\n');
    } catch (error) {
      console.error(`Error reading file: ${filePath}\n`, error);
    }
  }

  writeStream.end();
}

// Example usage:
const startDirectory = __dirname;               // Start from the current directory
const outputFile = path.join(__dirname, 'combined-output.txt'); // Output file path
combineFilesIntoTxt(startDirectory, outputFile);
