import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSignupSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Workshop signup route
  app.post("/api/signup", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertSignupSchema.parse(req.body);
      
      // Check if email already exists
      const existingSignup = await storage.getSignupByEmail(validatedData.email);
      if (existingSignup) {
        return res.status(400).json({ 
          error: "Email already registered. We'll be in touch soon!" 
        });
      }

      // Create the signup
      const signup = await storage.createSignup(validatedData);
      
      console.log("New workshop signup:", {
        parentName: signup.parentName,
        email: signup.email,
        childName: signup.childName,
        timestamp: signup.createdAt
      });

      res.status(201).json({ 
        message: "Thank you for your interest! We'll be in touch soon.",
        success: true 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Please fill in all required fields correctly.",
          details: error.errors 
        });
      }
      
      console.error("Signup error:", error);
      res.status(500).json({ 
        error: "Something went wrong. Please try again." 
      });
    }
  });

  // Get all signups (for Amanda to view)
  app.get("/api/signups", async (req, res) => {
    try {
      const signups = await storage.getAllSignups();
      res.json(signups);
    } catch (error) {
      console.error("Error fetching signups:", error);
      res.status(500).json({ 
        error: "Failed to fetch signups" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
