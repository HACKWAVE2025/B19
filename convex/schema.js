import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    name: v.string(),
    username: v.optional(v.string()),
  }).index("by_clerk_id", ["clerkId"]),

  onboardings: defineTable({
    userId: v.optional(v.string()), // Clerk ID (optional)
    brandName: v.string(),
    logo: v.optional(v.string()),
    tone: v.string(),
    platforms: v.array(v.string()),
    createdAt: v.string(),
  }).index("by_userId", ["userId"]),

  
  chatSessions: defineTable({
    campaignId: v.string(),
    title: v.string(),
    createdAt: v.string(),
  }),
  
  messages: defineTable({
    sessionId: v.string(),
    role: v.string(),
    content: v.string(),
    createdAt: v.string(),
  }),

  chats: defineTable({
    sessionId: v.id("chatsessions"),
    role: v.string(),
    content: v.string(),
    image: v.optional(v.object({
      base64: v.string(),
      filename: v.string(),
      mimeType: v.string(),
    })),
    createdAt: v.string(),
  }).index("by_sessionId", ["sessionId"]),
})