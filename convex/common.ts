import { Auth } from "convex/server";

import { Document, Id } from "./_generated/dataModel";
import { DatabaseReader } from "./_generated/server";

export const getUser = async ({
  db,
  auth,
}: {
  db: DatabaseReader;
  auth: Auth;
}): Promise<Document<"users"> | null> => {
  const identity = await auth.getUserIdentity();
  if (!identity) {
    throw new Error("Called getUser without authentication present");
  }

  return await db
    .query("users")
    .withIndex("by_token", (q) =>
      q.eq("tokenIdentifier", identity.tokenIdentifier)
    )
    .first();
};