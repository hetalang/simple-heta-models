const path = require('path');
const fs = require('fs');
const { globSync } = require('glob');

const directoryPath = './cases';
const pattern = '**/index*.heta';

let line = globSync(pattern, { cwd: directoryPath }).map((file) => {
    const filePath = path.join(directoryPath, file);
    const content = fs.readFileSync(filePath, 'utf8');

    let matches = content.match(/\/\*([\s\S]*)\*\/([\s\S]*)/);
    let prompt = matches[1].replace(/\s+/g, ' ');
    let completion = matches[2].replace(/^[\s]+/, '').replace(/\r/g, '');
    return JSON.stringify({ prompt,  completion });
}).join('\n');

fs.writeFileSync('result.jsonl', line);
