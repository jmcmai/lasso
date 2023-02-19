import { mutation } from './_generated/server'
import { getUser } from "./common";

// frontend: use the "useMutation('storePastQuestions')" function
/*
 *  Params:
 *      question (string): the question
 *      answers (array[string]):  an array of potential answers
 *      correctAnswer (string): the correct answer
 */
export default mutation(
    async (
        { db, auth }, question: string, answers: [string], correctAnswer: string
    ) => {
      const identity = await auth.getUserIdentity()
      if (!identity) {
        throw new Error('Called storePastQuestion without authentication present!')
      }

      const user = await getUser({ db, auth });
      if (user === null) {
        throw new Error("User does not exist in DB!");
      }
      await db.insert("pastQuestions", {
        userId: user._id.toString(), question, answers, correctAnswer
      })
    }
)