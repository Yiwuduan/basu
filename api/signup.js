import { storage } from '../../server/storage';
import { insertSignupSchema } from '@shared/schema';
import { z } from 'zod';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse and validate the request body using the schema
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
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};