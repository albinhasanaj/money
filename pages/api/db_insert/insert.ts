import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Project from "@/models/projectSchema";
import Learn from "@/models/learnSchema";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    // add isDone field to all the projects
    // get all the projects

    await connectToDB();

    const allProjects = await Learn.find({});
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

    
    // all projects add this usersdone
    allProjects.forEach(async (project) => {
        project.isDone = usersDone;
        await project.save();
    });
    
    console.log(allProjects);

    return res.status(201).json({ message: "Project added successfully" }); // 201: Created
}