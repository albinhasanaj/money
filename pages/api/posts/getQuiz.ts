// pages/api/getQuiz.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Quiz from "@/models/quizSchema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    await connectToDB();

    try {
        // Sort by creation time in descending order
        const quizzes = await Quiz.find({}).sort({ createdAt: -1 });
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}
