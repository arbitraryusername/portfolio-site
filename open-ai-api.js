import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables 
dotenv.config();

// Initialize the OpenAI client with API key
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Load the API key from environment variables
});

// NOTES: 
// 1 token is approximately 4 characters
// a cached prompt response automatically costs 50% less for the text input, which must be at least 1024
// get token count with this handy tool: https://platform.openai.com/tokenizer
const models = [
  'gpt-4o-mini', // $0.150/1M input tokens, $0.60/1M output tokens
];

async function generateCode(prompt) {
  try {
    const chatCompletion = await client.chat.completions.create({
      model: models[0],
      messages: [{ role: 'user', content: prompt }],
    });

    const generatedText = chatCompletion.choices[0].message.content;
    console.log("AI Response:", generatedText);
    return generatedText;
  } catch (error) {
    console.error("Error calling OpenAI API:", error.response?.data || error.message);
    return null;
  }
}

// Self-executing function to run the script
(async () => {
  const prompt = "write a basic for-loop in TypeScript";
  const responseMessage = await generateCode(prompt);
  console.log("Generated Code:", responseMessage);
})();
