// serverless.js - Vercel-compatible server entry point
import express from 'express';
import cors from 'cors';
import { storage } from './server/storage';
import { insertSignupSchema } from '@shared/schema';
import { z } from 'zod';
import path from 'path';
import fs from 'fs';

// Create the express app
const app = express();

// CORS for API requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API route for signup
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

// Serve static files
const distPath = path.join(process.cwd(), 'dist', 'public');

// Check if we're in Vercel environment
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, {
    maxAge: '1y',
    etag: false
  }));
}

// Fallback for client-side routing - this handles all non-API routes
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Page not found');
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;