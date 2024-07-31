// pages/api/handler.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Paths from "@/models/pathsSchema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PATCH") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    await connectToDB();

    const { name, skill, percentage } = req.body;
    
    try {
        
        // find the skill to change for the name
        const path = await Paths.findOneAndUpdate(
            { name, "skills.skill": skill },
            { $set: { "skills.$.percentage": percentage } },
            { new: true }
        );
        if (!path) {
            return res.status(404).json({ message: "Path not found" });
        }

        // find the skill to update
        res.status(200).json({ message: "Skill updated" });

    } catch (error) {
        
    }
}
