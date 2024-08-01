import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    sources: {
        type: [String],
        default: [],
    },
    help: {
        type: [String],
        default: [],
    },
    isDone: [
        {
            username: String,
            done: Boolean,
        },
    ]
}, {
    timestamps: true,
});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
