import { getUser } from "./common";
import { Document } from "./_generated/dataModel";
import { query } from "./_generated/server";

// frontend: use the "useQuery('getNotes')" function

/*
 *  Params: none
 */
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
      .withIndex("by_userId", (q) => q.eq("userId", user._id.toString()))
      .order("desc")
      .collect();
      
    return notes;
  }
);
