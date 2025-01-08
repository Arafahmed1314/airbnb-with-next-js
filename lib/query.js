import { Hotel } from "@/models/hotel-model";
import connectMongo from "./db";
import { Review } from "@/models/review-model";


export async function getAllHotels() {
    await connectMongo();
    const hotels = await Hotel
        .find()
        .select(["name", "location", "images", "price_per_night", "available_rooms", "max_guests", "beds", "bedrooms", "description"])
        .lean();

    return hotels;
}
export async function getAllReviews() {
    await connectMongo();
    const reviews = await Review.find().select(["hotelId", "userId", "review", "createdAt"]).lean();

    return reviews;
}
