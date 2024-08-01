import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Project from "@/models/projectSchema";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    await connectToDB();

    // get name from query
    try {
        //sort by time latest
        const projects = await Project.find({}).sort({ createdAt: -1 });
        // find if the name is in the isDone array is true
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}