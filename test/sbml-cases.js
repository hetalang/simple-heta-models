// project level KEYS 
// my-service-account openai-test
// setx OPENAI_API_KEY "sk-my-service-account-"

const { OpenAI } = require('openai');

const openai = new OpenAI({
    organization: "org-V73x0GwuiyLqNseJ9DOyGMjy",
    project: "proj_tSNHinT8kJJl8LMqqG8X7HQp",
    apiKey: "sk-my-service-account-"
});

async function main() {
    const completion = await openai.completions.create({
        // davinci-002, gpt-3.5-turbo-instruct, babbage-002 - default models
        model: 'ft:babbage-002:personal:simple-heta:9am9znES', // ft:babbage-002:personal:simple-heta:9am9znES
        //prompt: "What is the capital of the United Kingdom?",
        prompt: `Create complete Heta model with stoichiometry 1A + 2D <=> 3C + 4F.`,
        max_tokens: 1024,
        temperature: 0.0,
    });
    console.log(completion.choices[0].text);
}
main();
