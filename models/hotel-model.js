import mongoose, { Schema } from "mongoose";
// Define the Hotel schema
const HotelSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    images: { type: [String], required: true }, // Array of image URLs
    price_per_night: { type: Number, required: true },
    available_rooms: { type: Number, required: true },
    max_guests: { type: Number, required: true },
    beds: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

export const Hotel = mongoose.models.hotels ?? mongoose.model("hotels", HotelSchema);
