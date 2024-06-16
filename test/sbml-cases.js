// project level KEYS 
// my-service-account openai-test
// setx OPENAI_API_KEY "sk-my-service-account-I1zZPhGR2Byyk4fYHeS8T3BlbkFJ1ccT1hCLQqLBnX1xKb51"

const { OpenAI } = require('openai');

const openai = new OpenAI({
    organization: "org-V73x0GwuiyLqNseJ9DOyGMjy",
    project: "proj_tSNHinT8kJJl8LMqqG8X7HQp",
    apiKey: "sk-my-service-account-I1zZPhGR2Byyk4fYHeS8T3BlbkFJ1ccT1hCLQqLBnX1xKb51"
});

async function main() {
    const completion = await openai.completions.create({
        model: 'ft:davinci-002:personal:siple-heta:9alRfxFv', // davinci-002, gpt-3.5-turbo-instruct, babbage-002, ft:davinci-002:personal:sbml-heta:9ZOUT9dV
        //prompt: "What is the capital of the United Kingdom?",
        prompt: `Create Heta model with stoichiometry 1A + 2D <=> 3C + 4F. No export.`,
        max_tokens: 1024,
        temperature: 0.1,
    });
    console.log(completion.choices[0].text);
}
main();

//console.log(openai);