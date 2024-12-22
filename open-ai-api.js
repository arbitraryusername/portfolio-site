import OpenAI from 'openai';
import dotenv from 'dotenv';

// Load environment variables 
dotenv.config();

// Initialize the OpenAI client with API key
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Load the API key from environment variables
});

async function generateCode(prompt) {
  try {
    const chatCompletion = await client.chat.completions.create({
      model: 'text-embedding-3-large', // or 'gpt-4' if you have access
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
