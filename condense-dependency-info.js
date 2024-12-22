// README: this file reduces tokens in some config files (ex: reduce 802 tokens to 533 tokens)
import fs from 'fs';

// Helper function to strip comments from JSON-like files
function stripComments(jsonString) {
  return jsonString.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
}

// Helper function to safely read and parse JSON files with comments
function readJSONFile(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');
    const strippedContent = stripComments(fileContent);
    return JSON.parse(strippedContent);
  } catch (error) {
    console.error(`Error reading file at ${path}:`, error.message);
    return null;
  }
}

function getCondensedDependencyInfo () {
  // File paths
  const packagePath = './package.json';
  const tsconfigAppPath = './tsconfig.app.json';
  const tsconfigNodePath = './tsconfig.node.json';

  // Read and parse files
  const packageJson = readJSONFile(packagePath);
  const tsconfigApp = readJSONFile(tsconfigAppPath);
  const tsconfigNode = readJSONFile(tsconfigNodePath);

  if (!packageJson || !tsconfigApp || !tsconfigNode) {
    console.error('Failed to load necessary files.');
    process.exit(1);
  }

  // Extract relevant data
  const dependencies = Object.entries(packageJson.dependencies || {})
    .map(([name, version]) => `- ${name}: ${version}`)
    .join('\n');
  const devDependencies = Object.entries(packageJson.devDependencies || {})
    .map(([name, version]) => `- ${name}: ${version}`)
    .join('\n');

  const tsconfigAppDetails = `
-Target: ${tsconfigApp.compilerOptions.target}
-JSX: ${tsconfigApp.compilerOptions.jsx}
-Libraries: ${tsconfigApp.compilerOptions.lib.join(', ')}
-Strict mode: ${tsconfigApp.compilerOptions.strict}
-Linting rules:
  -No unused locals: ${tsconfigApp.compilerOptions.noUnusedLocals}
  -No unused parameters: ${tsconfigApp.compilerOptions.noUnusedParameters}
  -No fallthrough in switch: ${tsconfigApp.compilerOptions.noFallthroughCasesInSwitch}
  -No unchecked side-effect imports: ${tsconfigApp.compilerOptions.noUncheckedSideEffectImports}`;

  const tsconfigNodeDetails = `
-Target: ${tsconfigNode.compilerOptions.target}
-Libraries: ${tsconfigNode.compilerOptions.lib.join(', ')}
-Strict mode: ${tsconfigNode.compilerOptions.strict}
-Linting rules: Same as app configuration.`;

  // Generate the condensed summary
  const summary = `This file contains important info to guide code generation.
*Project Configuration:
-Framework: React
-Build Tool: Vite
-Plugin: @vitejs/plugin-react-swc
*Dependencies:
${dependencies}
*Dev Dependencies:
${devDependencies}
*TypeScript Configuration (app):
${tsconfigAppDetails}
*TypeScript Configuration (Node):
${tsconfigNodeDetails}
*More Notes:
-Ensure compatibility with ES2020+ (app) and ES2022+ (node).
-Use React JSX (react-jsx).
-Adhere to strict TypeScript rules and avoid unused variables or parameters.
`;
  return summary;
}

export { getCondensedDependencyInfo };
