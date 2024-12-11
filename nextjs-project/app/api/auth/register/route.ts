import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/features/auth/data-access/users";
import { signUpSchema } from "@/features/auth/registerSchemas";
import { z } from "zod";
import { ConsoleLogWriter } from "drizzle-orm";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const parsedData = signUpSchema.parse(req.body);
    const { name, email, password } = parsedData;

    console.log("Creating user with email:", email);
    console.log("Creating user with password:", password);
    console.log("Creating user with name:", name);

    const newUser = await createUser(name, email, password);
    return res.status(201).json(newUser);
  } catch (error) {
    if(error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
}