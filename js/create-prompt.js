const path = require('path');
const fs = require('fs');
const { globSync } = require('glob');
const systemPrompt = `
    You will be provided with description of dynamic model, and your task is to create model in Heta format.
    Try not to create supplementary text, only model and comments.
`;

const directoryPath = './cases';
const validationPath = './validation';
const pattern = 'index*.heta';

const directories = fs.readdirSync(directoryPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

let lines = directories.map((directory) => {
    const files = globSync(pattern, { cwd: path.join(directoryPath, directory) }).sort();
    let messages = [{role: 'system', content: systemPrompt}];

    files.forEach((file) => {
        const filePath = path.join(directoryPath, directory, file);
        const content = fs.readFileSync(filePath, 'utf8');
        let matches = content.match(/\/\*([\s\S]*)\*\/([\s\S]*)/);
        let prompt = matches[1].replace(/\s+/g, ' ');
        let completion = matches[2].replace(/^[\s]+/, '').replace(/\r/g, '');
        messages.push({role: 'user', content: prompt});
        messages.push({role: 'assistant', content: completion});
    });

    return JSON.stringify({messages});
}).join('\n');;

fs.writeFileSync('training.jsonl', lines);