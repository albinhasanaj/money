import mongoose from "mongoose";

const pathsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    skills: [
        {
            skill: {
                type: String,
                required: true,
            },
            percentage: {
                type: Number,
                required: true,
            },
        },
    ],
});

const Paths = mongoose.models.Paths || mongoose.model('Paths', pathsSchema);
export default Paths;