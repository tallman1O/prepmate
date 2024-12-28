import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const prepmate = pgTable("prepmate", {
  id: serial("id").primaryKey(),
  jsonRes: text("jsonRes").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDescription: varchar("jobDescription").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt"),
  mockId: varchar("mockId").notNull(),
});
