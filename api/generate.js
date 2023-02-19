import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv"

// Configures .env files
config()

// Notes
// # TODO: set up notes retrieval from frontend
let notes = "The mitochondria is the powerhouse of the cell \n My dog likes to eat chocolate \n Pie is sweet"; 

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

// let output = response.data.choices[0];
// let split_output = output.text.split("\n")
// console.log(split_output[0]); 


// let dict = { "question": output[0],
//             "answers": [output[1], output[2], output[3], output[4]],
//             "correctAnswer": output[5]
//             };
const output = response.data.choices[0];
const split_output = output.text?.split("\n");


let dict = { "question": split_output[0],
  "answers": [split_output[1], split_output[2], split_output[3], split_output[4]],
  "correctAnswer": split_output[5]
};

console.log(dict["question"])
console.log(dict["answers"][0])
console.log(dict["correctAnswer"])
