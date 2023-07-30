import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file's directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsPath = path.join(__dirname, "../components/ui");
const indexFilePath = path.join(componentsPath, "../../index.tsx");

// Generate the index.tsx file by looping through all the files in the components folder
const componentFiles = fs.readdirSync(componentsPath);
const exportStatements = componentFiles.map((file) => {
    const componentName = path.basename(file, ".tsx");
    return `export * from './components/ui/${componentName}';`;
});
const indexFileContent = exportStatements.join("\n") + "\n";

fs.writeFileSync(indexFilePath, indexFileContent, "utf8");

console.log("\x1b[32m%s\x1b[0m", "index.tsx file generated successfully.");
