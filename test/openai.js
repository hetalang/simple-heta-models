require('dotenv').config();

const { OPENAI_ORGANIZATION, OPENAI_PROJECT, OPENAI_API_KEY} = process.env;

const { OpenAI } = require('openai');

const openai = new OpenAI({
    organization: OPENAI_ORGANIZATION,
    project: OPENAI_PROJECT,
    apiKey: OPENAI_API_KEY
});

async function main() {
    const completion = await openai.completions.create({
        // davinci-002, gpt-3.5-turbo-instruct, babbage-002 - default models
        model: 'ft:babbage-002:personal:simple-heta:9am9znES', // ft:babbage-002:personal:simple-heta:9am9znES
        //prompt: "What is the capital of the United Kingdom?",
        prompt: `Create complete Heta model with stoichiometry 1A + 2D <=> 3C + 4F.`,
        max_tokens: 1024,
        temperature: 0.1,
    });
    console.log(completion.choices[0].text);
}

main();
