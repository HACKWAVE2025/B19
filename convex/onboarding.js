import { mutation, query } from "./_generated/server"
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
    return await ctx.db.query("onboardings").collect()
  },
})

export const getOnboardingById = query({
  args: { id: v.id("onboardings") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id)
  },
})

export const updateOnboarding = mutation({
  args: {
    id: v.id("onboardings"),
    brandName: v.optional(v.string()),
    logo: v.optional(v.string()),
    tone: v.optional(v.string()),
    platforms: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args
    await ctx.db.patch(id, fields)
    return id
  },
})

export const deleteOnboarding = mutation({
  args: { id: v.id("onboardings") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id)
  },
})