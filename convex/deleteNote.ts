import { getUser } from "./common";
import { Document, Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

// frontend: use the "useMutation('deleteNote')" function
/*
 *  Params:
 *      noteId (string): the note's unique ID for the note to be deleted
 */
export default mutation(async ({ db, auth }, noteId: string) => {
  const user: Document<"users"> | null = await getUser({ db, auth });

  if (!user) {
    throw new Error("User is not in the database!");
  }

  // Delete associated notes
  const notes = await db
    .query("notes")
    .withIndex("by_noteId", (q) => q.eq("noteId", noteId))
    .collect();

  await Promise.all(notes.map((note) => db.delete(note._id)));
});