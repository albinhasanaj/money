import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Learn from "@/models/learnSchema";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { user, title, description, sources } = req.body;

    if (!user || !title || !description) {
        return res.status(400).json({ message: "Missing fields" });
    }

    await connectToDB();
    try {

        const newLearn = new Learn({
            name: user,
            title,
            description,
            sources,
        });

        await newLearn.save();

        return res.status(201).json({ message: "Project added successfully" }); // 201: Created

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}