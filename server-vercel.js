// server-vercel.js
import express from 'express';
import { storage } from './storage';
import { insertSignupSchema } from '@shared/schema';
import { z } from 'zod';
import path from 'path';
import fs from 'fs';

// Create express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define API routes
app.post('/api/signup', async (req, res) => {
  try {
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

// Serve static files - check multiple possible locations in Vercel
const staticPaths = [
  path.join(process.cwd(), 'dist', 'public'),
  path.join(process.cwd(), '..', 'dist', 'public'),
  path.resolve('dist', 'public')
];

let staticPath = null;
for (const p of staticPaths) {
  if (fs.existsSync(p)) {
    staticPath = p;
    break;
  }
}

if (staticPath) {
  app.use(express.static(staticPath));
} else {
  console.error('Static files directory not found in any expected location');
  console.error('Looking for:', staticPaths);
}

// Catch-all handler for client-side routing
app.get('*', (req, res) => {
  if (staticPath) {
    const indexPath = path.join(staticPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('Index file not found');
    }
  } else {
    res.status(404).send('Static files directory not available');
  }
});

export default app;