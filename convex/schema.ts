import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  costs: defineTable({ projectId: v.string(), provider: v.string(), model: v.string(), tokens: v.number(), costUsd: v.number(), timestamp: v.string() }),
  budgets: defineTable({ name: v.string(), limitUsd: v.number(), currentUsd: v.number(), alertThresholdPct: v.number(), alertEmail: v.string() }),
  providers: defineTable({ name: v.string(), apiKey: v.string(), configStr: v.string() }),
});
