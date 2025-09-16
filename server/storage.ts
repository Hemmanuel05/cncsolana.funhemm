import { 
  type User, 
  type InsertUser, 
  type CommunitySubmission, 
  type InsertCommunitySubmission,
  type IdeaSubmission,
  type InsertIdeaSubmission 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createCommunitySubmission(submission: InsertCommunitySubmission): Promise<CommunitySubmission>;
  createIdeaSubmission(submission: InsertIdeaSubmission): Promise<IdeaSubmission>;
  getCommunitySubmissions(): Promise<CommunitySubmission[]>;
  getIdeaSubmissions(): Promise<IdeaSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private communitySubmissions: Map<string, CommunitySubmission>;
  private ideaSubmissions: Map<string, IdeaSubmission>;

  constructor() {
    this.users = new Map();
    this.communitySubmissions = new Map();
    this.ideaSubmissions = new Map();
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

  async createCommunitySubmission(insertSubmission: InsertCommunitySubmission): Promise<CommunitySubmission> {
    const id = randomUUID();
    const submission: CommunitySubmission = { 
      ...insertSubmission, 
      id, 
      submittedAt: new Date() 
    };
    this.communitySubmissions.set(id, submission);
    return submission;
  }

  async createIdeaSubmission(insertSubmission: InsertIdeaSubmission): Promise<IdeaSubmission> {
    const id = randomUUID();
    const submission: IdeaSubmission = { 
      ...insertSubmission, 
      id, 
      submittedAt: new Date() 
    };
    this.ideaSubmissions.set(id, submission);
    return submission;
  }

  async getCommunitySubmissions(): Promise<CommunitySubmission[]> {
    return Array.from(this.communitySubmissions.values());
  }

  async getIdeaSubmissions(): Promise<IdeaSubmission[]> {
    return Array.from(this.ideaSubmissions.values());
  }
}

export const storage = new MemStorage();
