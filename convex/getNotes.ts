import { getUser } from "./common";
import { Document } from "./_generated/dataModel";
import { query } from "./_generated/server";

export default query(
  async ({ db, auth }) => {

    const identity = await auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called getNotes without authentication present");
    }

    const user = await getUser({ db, auth });
    if (user === null) {
      throw new Error("User does not exist in DB!");
    }

    const notes: Document<"notes">[] = await db
      .query("notes")
      .withIndex("by_userId", (q) => q.eq("userId", user._id.toString())) // figure out what this line does
      .order("desc")
      .collect();
      
    // Returns key:value pairs for each note from the user
    return Promise.all(
      notes.map(async ({ userId, ...note }) => ({
        ...note,
      }))
    );
  }
);
