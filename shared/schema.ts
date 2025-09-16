import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const communitySubmissions = pgTable("community_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  idea: text("idea").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const ideaSubmissions = pgTable("idea_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  description: text("description").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCommunitySubmissionSchema = createInsertSchema(communitySubmissions).omit({
  id: true,
  submittedAt: true,
});

export const insertIdeaSubmissionSchema = createInsertSchema(ideaSubmissions).omit({
  id: true,
  submittedAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertCommunitySubmission = z.infer<typeof insertCommunitySubmissionSchema>;
export type CommunitySubmission = typeof communitySubmissions.$inferSelect;
export type InsertIdeaSubmission = z.infer<typeof insertIdeaSubmissionSchema>;
export type IdeaSubmission = typeof ideaSubmissions.$inferSelect;
