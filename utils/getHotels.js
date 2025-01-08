export const getHotels = async () => {
    try {
        // Construct the API URL with pagination parameters
        const url = new URL("http://localhost:3000/api/hotel");

        // Send GET request with pagination parameters
        const response = await fetch(url.toString(), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorMessage = `Error fetching properties: ${response.status} - ${response.statusText}`;
            console.error(errorMessage);
            return { error: errorMessage };
        }

        const data = await response.json();
        return data; // Returns the data with properties, currentPage, totalPages, totalProperties
    } catch (error) {
        console.error("Unexpected error in getHotels utility:", error.message);
        return { error: "Failed to fetch properties. Please try again later." };
    }
};
