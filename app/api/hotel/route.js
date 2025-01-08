import connectMongo from "@/lib/db";
import { Hotel } from "@/models/hotel-model";

export async function GET(req) {
    try {
        // Connect to the database
        await connectMongo();

        // Fetch all properties without pagination
        const properties = await Hotel.find({});

        return new Response(
            JSON.stringify({
                properties,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error in GET API route:", error);
        return new Response(
            JSON.stringify({
                error: "Something went wrong while fetching properties.",
            }),
            { status: 500 }
        );
    }
}
