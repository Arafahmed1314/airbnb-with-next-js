import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
    hotelId: { type: String, required: true },
    userId: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true },
    userImage: { type: String, required: true }, // Path or URL for user image
    username: { type: String, required: true },  // User's name
    createdAt: { type: Date, default: Date.now },
});

export const Review = mongoose.models.review || mongoose.model("review", reviewSchema);
