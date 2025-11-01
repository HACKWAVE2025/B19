import { query, mutation } from "./_generated/server"
import { v } from "convex/values"

export const saveOnboarding = mutation({
  args: {
    userId: v.optional(v.string()),
    brandName: v.string(),
    logo: v.optional(v.string()),
    tone: v.string(),
    platforms: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("onboardings", {
      ...args,
      createdAt: new Date().toISOString(),
    })
    return id
  },
})

export const getOnboardings = query({
  args: { userId: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (args.userId) {
      return await ctx.db
        .query("onboardings")
        .withIndex("by_userId", (q) => q.eq("userId", args.userId))
        .collect()
    }
    // fallback (if not using auth)
    return await ctx.db.query("onboardings").collect()
  },
})

export const getOnboardingById = query({
  args: { id: v.id("onboardings") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id)
  },
})