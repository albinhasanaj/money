import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "@/lib/connectToDB";
import Project from "@/models/projectSchema";
import Learn from "@/models/learnSchema";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "PATCH") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const {title} = req.body;

    await connectToDB();

    const find = await Learn.find({title});
    console.log(find);
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

    
    // // all projects add this usersdone
    find.forEach(async (project) => {
        project.isDone = usersDone;
        await project.save();
    });
    
    // console.log(allProjects);

    return res.status(201).json({ message: "Project added successfully" }); // 201: Created
}