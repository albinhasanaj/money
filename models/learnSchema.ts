import mongoose from "mongoose";

const learnSchema = new mongoose.Schema({
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

const Learn = mongoose.models.Learn || mongoose.model("Learn", learnSchema);
export default Learn;