// pages/api/handler.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Paths from "@/models/pathsSchema";

type Data = {
    message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        await connectToDB();

        const { skill } = req.body;

        // Check if skill already exists
        const skillExists = await Paths.findOne({ "skills.skill": skill });

        if (skillExists) {
            return res.status(400).json({ message: "Skill already exists" });
        }

        // Create three new skills for name albin, oliver, and rafey
        const names = ["albin", "oliver", "rafey"];
        const newSkills = names.map((name) => ({
            name,
            skills: [{ skill, percentage: 0 }],
        }));

        // Create the skills
        await Paths.insertMany(newSkills);

        return res.status(200).json({ message: "Skills added" });
    } catch (error) {
        console.error("Internal server error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
