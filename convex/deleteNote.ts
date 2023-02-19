import { getUser } from "./common";
import { Document, Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

// frontend: use the "useMutation('deleteNote')" function
/*
 *  Params:
 *      noteId (string): the note's unique ID for the note to be deleted
 */
export default mutation(async ({ db, auth }, noteId: Id<"notes">) => {
  const user: Document<"users"> | null = await getUser({ db, auth });

  if (!user) {
    throw new Error("User is not in the database!");
  }

  // Delete associated note
  const note = await db.get(noteId);
  if (note === null) {
    throw new Error("This note does not exist!");
  }

  await db.delete(note._id);
});