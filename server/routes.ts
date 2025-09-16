import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCommunitySubmissionSchema, insertIdeaSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Community submission endpoint
  app.post("/api/community-submissions", async (req, res) => {
    try {
      const validatedData = insertCommunitySubmissionSchema.parse(req.body);
      const submission = await storage.createCommunitySubmission(validatedData);
      res.json({ success: true, submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid submission data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit community idea" });
      }
    }
  });

  // Idea submission endpoint
  app.post("/api/idea-submissions", async (req, res) => {
    try {
      const validatedData = insertIdeaSubmissionSchema.parse(req.body);
      const submission = await storage.createIdeaSubmission(validatedData);
      res.json({ success: true, submission });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid submission data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit idea" });
      }
    }
  });

  // Get community submissions (for admin/monitoring)
  app.get("/api/community-submissions", async (req, res) => {
    try {
      const submissions = await storage.getCommunitySubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch community submissions" });
    }
  });

  // Get idea submissions (for admin/monitoring)
  app.get("/api/idea-submissions", async (req, res) => {
    try {
      const submissions = await storage.getIdeaSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch idea submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
