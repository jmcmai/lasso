import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv"

// Configures .env files
config()

// Notes
let notes = "The mitochondria is the powerhouse of the cell \n My dog likes to eat chocolate \n Pie is sweet";  // # TODO: set up notes retrieval from frontend

// Prompt
const le_prompt = "Below are notes a student took during class.\n\n" + notes + "\nAdapting concepts from these notes, \
                create a question with four multiple choice answers using the following format:\"\nQ: Question\n\
                A) Choice 1\nB) Choice 2\nC) Choice 3\nD) Choice 4\nAns: Answer\n\"";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: le_prompt,
  temperature: 0.7,
  max_tokens: 256,
});

console.log(response.data.choices[0].text); 