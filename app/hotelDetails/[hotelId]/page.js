import DetailsContainer from '@/components/hotelDetails/DetailsContainer'
import Reviews from '@/components/hotelDetails/Reviews'
import { getAllReviews } from '@/utils/getAllReview'


export default async function HotelDetails({ params }) {
    const reviews = await getAllReviews();
    return (
        <>
            <DetailsContainer hotelId={params.hotelId} />
            <Reviews hotelId={params.hotelId} reviews={reviews} />
        </>
    )
}
