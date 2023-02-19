import { defineSchema, defineTable, s } from 'convex/schema'

export default defineSchema({
  pastQuestions: defineTable({
    userId: s.string(),
    question: s.string(),
    answers: s.array(s.string()),
    correctAnswer: s.string(),
  }).index("by_userId", ["userId"]),
  notes: defineTable({
    userId: s.string(),
    title: s.string(),
    noteContent: s.string(),
  }).index("by_userId", ["userId"]),
  users: defineTable({
    name: s.string(),
    tokenIdentifier: s.string(),
  }).index("by_token", ["tokenIdentifier"]),
})
