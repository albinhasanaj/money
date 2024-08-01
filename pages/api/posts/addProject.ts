import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Project from "@/models/projectSchema";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { user, title, description, sources, help } = req.body;

    if (!user || !title || !description) {
        return res.status(400).json({ message: "Missing fields" });
    }

    await connectToDB();

    const usersDone = [
        {
            username: "albin",
            done: false,
        }, {
            username: "rafey",
            done: false,
        },
        {
            username: "oliver",
            done: false,
        }
    ]

    try {
        
        const newProject = new Project({
            name: user,
            title,
            description,
            sources,
            help,
            isDone: usersDone

        });

        await newProject.save();

        console.log("Project added successfully");
        console.log(newProject);

        return res.status(201).json({ message: "Project added successfully" }); // 201: Created

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}