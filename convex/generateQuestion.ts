// convex/addNote.ts
import { mutation } from './_generated/server'
import { getUser } from "./common"

import { Configuration, OpenAIApi } from 'openai'
import { config } from 'dotenv'

// frontend: use the "useMutation('addNote')" function
/*
 *  Params:
 *      noteId (string): the note to be passed into the OpenAI API
 * 
 *  Returns:
 *      map: keys = ['] 
 */

// TODO: Change noteId into ID variable, figure out how to assign noteID's
export default mutation(
    async (
        { db, auth }, notes
    ) => {
      const identity = await auth.getUserIdentity()
      if (!identity) {
        throw new Error('Called addNote without authentication present!')
      }

    const user = await getUser({ db, auth });
    if (user === null) {
      throw new Error("User does not exist in DB!");
    }

    // Configures .env files
    config()

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

    const output = response.data.choices[0];
    const split_output = output.text?.split("\n");
    if (split_output == null) {
      throw new Error("Response is null!")
    }
    
    return { "question": split_output[0],
             "answers": [split_output[1], split_output[2], split_output[3], split_output[4]],
             "correctAnswer": split_output[5]
            };
});