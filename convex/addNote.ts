// convex/addNote.ts
import { mutation } from './_generated/server'
import { Id } from "./_generated/dataModel";
import { getUser } from "./common";

// frontend: use the "useMutation('addNote')" function
/*
 *  Params:
 *      noteId (string): the note's unique ID
 *      title (string):  the note's title
 *      noteContent (string): the content of the note
 */

// TODO: Change noteId into ID variable, figure out how to assign noteID's
export default mutation(
    async (
        { db, auth }, title: string, noteContent: string
    ) => {
      const identity = await auth.getUserIdentity()
      if (!identity) {
        throw new Error('Called addNote without authentication present!')
      }

    const user = await getUser({ db, auth });
    if (user === null) {
      throw new Error("User does not exist in DB!");
    }


    await db.insert("notes", {
        userId: user._id.toString(),
        title, 
        noteContent,
    })
}
)