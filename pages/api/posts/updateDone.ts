import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Project from "@/models/projectSchema";
import Learn from "@/models/learnSchema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PATCH") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const {title, username, isDone} = req.body;

    if (!title || !username || isDone === undefined) {
        return res.status(400).json({ message: "Missing fields" });
    }

    await connectToDB();

    try {
        const project = await Project.findOne({ title });
        const learn = await Learn.findOne({ title });

        const updatedProject = project || learn;

        if (!updatedProject) {
            return res.status(404).json({ message: "Not found" });
        }

        const userIndex = updatedProject.isDone.findIndex((user:any) => user.username === username);
        if (userIndex === -1) {
            return res.status(404).json({ message: "User not found" });
        }

        updatedProject.isDone[userIndex].done = isDone;

        await updatedProject.save();

        return res.status(200).json({ message: "Project updated successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}