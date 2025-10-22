import { drizzle } from 'drizzle-orm/neon-http';
import { NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { IStorage } from './storage';
import { users, signups } from '@shared/schema';
import { eq, ilike } from 'drizzle-orm';
import { randomUUID } from 'crypto';
import { User, InsertUser, Signup, InsertSignup } from '@shared/schema';

let db: NeonHttpDatabase;

// Initialize database connection
if (process.env.DATABASE_URL) {
  db = drizzle(process.env.DATABASE_URL);
} else {
  // Fallback to Neon serverless driver or throw error
  throw new Error('DATABASE_URL environment variable is required for persistent storage');
}

export class DBStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0] || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0] || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [newUser] = await db.insert(users).values({
      ...insertUser,
      id: randomUUID(),
    }).returning();
    return newUser;
  }

  async createSignup(insertSignup: InsertSignup): Promise<Signup> {
    const [newSignup] = await db.insert(signups).values({
      ...insertSignup,
      id: randomUUID(),
      createdAt: new Date(),
    }).returning();
    return newSignup;
  }

  async getAllSignups(): Promise<Signup[]> {
    const results = await db.select().from(signups);
    return results.sort((a, b) => 
      (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async getSignupByEmail(email: string): Promise<Signup | undefined> {
    const result = await db.select().from(signups).where(ilike(signups.email, email)).limit(1);
    return result[0] || undefined;
  }
}