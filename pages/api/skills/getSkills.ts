import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Paths from "@/models/pathsSchema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }   

    const {name} = req.query;
    console.log(name);

    try {
        await connectToDB();

        // get all the skills that contains the name but exclude the _id and __v
        const skills = await Paths.find({name})

        if (!skills) {
            return res.status(404).json({ message: "Skills not found" });
        }


        const ownSkills = skills;
        console.log(ownSkills);

        return res.status(200).json(skills);

    } catch (error) {
        console.error("Internal server error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}