import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./lib/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
