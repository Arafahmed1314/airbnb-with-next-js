
import connectMongo from "@/lib/db";
import { Review } from "@/models/review-model";

export async function GET(req) {
    try {
        // Connect to the database
        await connectMongo();

        // Fetch all reviews
        const reviews = await Review.find({})
        console.log(reviews, "Reviews");

        return new Response(
            JSON.stringify({
                success: true,
                reviews,
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*", // Adjust based on your CORS policy
                },
            }
        );
    } catch (error) {
        console.error("Error in GET API route:", error);
        return new Response(
            JSON.stringify({
                success: false,
                error: "Something went wrong while fetching reviews.",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
