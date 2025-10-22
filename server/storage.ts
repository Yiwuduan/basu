import { type User, type InsertUser, type Signup, type InsertSignup } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createSignup(signup: InsertSignup): Promise<Signup>;
  getAllSignups(): Promise<Signup[]>;
  getSignupByEmail(email: string): Promise<Signup | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private signups: Map<string, Signup>;

  constructor() {
    this.users = new Map();
    this.signups = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createSignup(insertSignup: InsertSignup): Promise<Signup> {
    const id = randomUUID();
    const signup: Signup = { 
      ...insertSignup,
      childAge: insertSignup.childAge || null,
      learningApproach: insertSignup.learningApproach || null,
      participationReason: insertSignup.participationReason || null,
      visionMessage: insertSignup.visionMessage || null,
      newsletter: insertSignup.newsletter || false,
      id, 
      createdAt: new Date() 
    };
    this.signups.set(id, signup);
    return signup;
  }

  async getAllSignups(): Promise<Signup[]> {
    return Array.from(this.signups.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getSignupByEmail(email: string): Promise<Signup | undefined> {
    return Array.from(this.signups.values()).find(
      (signup) => signup.email.toLowerCase() === email.toLowerCase()
    );
  }
}

// Conditionally use DB storage in production, memory storage in development
const isProduction = process.env.NODE_ENV === 'production';
const hasDatabaseUrl = !!process.env.DATABASE_URL;

async function createStorage(): Promise<IStorage> {
    if (hasDatabaseUrl && isProduction) {
        const { DBStorage } = await import('./db-storage.js');
        return new DBStorage();
    } else {
        return new MemStorage();
    }
}

export const storage = createStorage();