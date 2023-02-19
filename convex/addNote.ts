// convex/addNote.ts
import { mutation } from './_generated/server'
import { getUser } from "./common";

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
        userId: user._id.toString(), title, noteContent
      })
    }
)