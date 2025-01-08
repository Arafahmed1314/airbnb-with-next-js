import Image from "next/image";
import React from "react";
import StarIcon from "../svgIcon/StarIcon";
import Link from "next/link";
export default function Reviews({ hotelId, reviews }) {
  const hotelReview = reviews.reviews?.filter(
    (review) => review.hotelId === hotelId || []
  );
  console.log(hotelId);
  console.log(hotelReview, "done");
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 border-t">
      {/* <!-- Reviews Header with Average Rating --> */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold">Reviews</h2>
          <div className="flex items-center">
            {/* <i className="fas fa-star text-yellow-500 mr-2"></i> */}
            <StarIcon />
            <span className="text-xl font-semibold">4.9</span>
            <span className="mx-2">·</span>
            <span className="text-gray-600">2 reviews</span>
          </div>
        </div>

        <Link
          href="/hotelDetails/review_modal"
          className="px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-100"
        >
          Write a Review
        </Link>
      </div>

      {/* <!-- Reviews Grid --> */}
      <div className="grid grid-cols-2 gap-8">
        {/* <!-- Review Card 1 --> */}
        {hotelReview.map((review) => (
          <div key={review._id} className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  src="/api/placeholder/48/48"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <h4 className="font-medium">John Smith</h4>
                <p className="text-gray-500 text-sm">{review.createdAt}</p>
              </div>
            </div>
            <div className="flex items-center">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-gray-600 leading-relaxed">{review.review}</p>
          </div>
        ))}
      </div>

      {/* <!-- Show More Button --> */}
    </div>
  );
}
