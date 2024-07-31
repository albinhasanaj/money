import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema({
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
    sources: [],

}, {
    timestamps: true,
});

const Projects = mongoose.models.Projects || mongoose.model('Projects', projectsSchema);
export default Projects;