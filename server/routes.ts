import type { Express } from "express";
import { storage } from "./storage";
import { insertSignupSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<void> {
  // Workshop signup route
  app.post("/api/signup", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertSignupSchema.parse(req.body);
      
      // Check if email already exists
      const existingSignup = await (await storage).getSignupByEmail(validatedData.email);
      if (existingSignup) {
        return res.status(400).json({ 
          error: "Email already registered. We'll be in touch soon!" 
        });
      }

      // Create the signup
      const signup = await (await storage).createSignup(validatedData);
      
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
}
