import mongoose from "mongoose";
const Schema = mongoose.Schema;


const Job = new Schema(
    {
        company: { type: String, required: true },
        jobTitle: { type: String, required: true },
        description: { type: String },
        hours: { type: Number, required: true },
        rate: { type: Number, required: true },
        // imgUrl: { type: String, required: true, default: "http://placehold.it/200x200" },
        // levels: { type: Number, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;