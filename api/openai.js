// Import the OpenAI library
const { Configuration, OpenAIApi } = require("openai");

// Setup your OpenAI API key
const configuration = new Configuration({
    apiKey: process.env.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,
});

const openai = new OpenAIApi(configuration);

// Example serverless function to generate text with OpenAI
module.exports = async (req, res) => {
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "This is a test prompt.",
            max_tokens: 50,
        });

        res.status(200).json({ response: response.data.choices[0].text });
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        res.status(500).json({ error: "Failed to call OpenAI API" });
    }
};
