import connectMongo from "@/lib/db";
import { Hotel } from "@/models/hotel-model";

export async function GET(req, { params }) {
    try {
        // Connect to the database
        await connectMongo();

        // Extract hotelId from the route params
        const { hotelId } = params;

        // Validate hotelId (check if it's a valid MongoDB ObjectId)
        if (!hotelId || hotelId.length !== 24) {
            return new Response(
                JSON.stringify({ error: "Invalid hotel ID provided." }),
                { status: 400 }
            );
        }

        // Find the hotel by ID
        const hotel = await Hotel.findById(hotelId);

        // Check if the hotel exists
        if (!hotel) {
            return new Response(
                JSON.stringify({ error: "Hotel not found." }),
                { status: 404 }
            );
        }

        // Return the hotel data
        return new Response(JSON.stringify(hotel), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching hotel by ID:", error);
        return new Response(
            JSON.stringify({ error: "Something went wrong while fetching the hotel." }),
            { status: 500 }
        );
    }
}
