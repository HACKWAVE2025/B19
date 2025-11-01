import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    name: v.string(),
    username: v.optional(v.string()),
  }).index("by_clerk_id", ["clerkId"]),  
  onboardings: defineTable({
    userId: v.optional(v.string()), // Clerk ID if you’re using Clerk
    brandName: v.string(),
    logo: v.optional(v.string()),
    tone: v.string(),
    platforms: v.array(v.string()),
    createdAt: v.string(),
  }).index("by_userId", ["userId"]),
});