import { defineSchema, defineTable, s } from 'convex/schema'

export default defineSchema({
  notes: defineTable({
    userId: s.string(),
    title: s.string(),
    noteContent: s.string(),
  }).index("by_time", ["_creationTime"])
    .index("by_userId", ["userId"]),
  users: defineTable({
    name: s.string(),
    profilePic: s.string(), // url
    tokenIdentifier: s.string(),
  }).index("by_token", ["tokenIdentifier"]),
})
