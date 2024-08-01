import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Quiz from "@/models/quizSchema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { title, questions } = req.body;

    if (!title || !questions || !Array.isArray(questions)) {
        return res.status(400).json({ message: "Missing or invalid fields" });
    }

    await connectToDB();

    try {
        const newQuiz = new Quiz({
            title,
            questions,
        });

        await newQuiz.save();

        return res.status(201).json({ message: "Quiz added successfully" });
    } catch (error) {
        console.error("Error saving quiz:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
