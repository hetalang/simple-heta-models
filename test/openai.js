require('dotenv').config();

const { OPENAI_ORGANIZATION, OPENAI_PROJECT, OPENAI_API_KEY} = process.env;

const { OpenAI } = require('openai');

const openai = new OpenAI({
    organization: OPENAI_ORGANIZATION,
    project: OPENAI_PROJECT,
    apiKey: OPENAI_API_KEY
});

async function main() {
    const completion = await openai.chat.completions.create({
        model: 'ft:gpt-4o-mini-2024-07-18:insysbio-cy-limited:simple-heta:A978G89m', // gpt-4o-mini
        messages: [
            {role: 'system', content: 'You write modeling code in Heta format. Write only code not comments.'},
            {role: 'user', content: 'Create complete Heta model with stoichiometry 1A + 2D <=> 3C + 4F.'}
        ],
        //max_tokens: 1024,
        //temperature: 0.1,
    });
    console.log(completion.choices[0].message.content);
}

main();
