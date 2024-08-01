import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Paths from "@/models/pathsSchema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }   

    const { name } = req.query;
    // console.log(name);

    try {
        await connectToDB();

        // Find all documents that match the name query
        const results = await Paths.find({ name }, { skills: 1, _id: 0 });

        if (!results || results.length === 0) {
            return res.status(404).json({ message: "Skills not found" });
        }

        // Aggregate skills from all matching documents
        const skills = results.flatMap(result => result.skills.map((item: any) => ({
            skill: item.skill,
            percentage: item.percentage
        })));

        return res.status(200).json(skills);

    } catch (error) {
        console.error("Internal server error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
