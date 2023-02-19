import { getUser } from "./common";
import { Document } from "./_generated/dataModel";
import { query } from "./_generated/server";

// frontend: use the "useQuery('getPastQuestions')" function
export default query(
  async ({ db, auth }) => {

    const identity = await auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called getPastQuestions without authentication present");
    }

    const user = await getUser({ db, auth });
    if (user === null) {
      throw new Error("User does not exist in DB!");
    }

    
    // an array of pastQuestion documents of the specfiied user
    const pastQuestions: Document<"pastQuestions">[] = await db
      .query("pastQuestions")
      .withIndex("by_userId", (q) => q.eq("userId", user._id.toString()))
      .order("desc")
      .collect();

    return pastQuestions;
  }
);
