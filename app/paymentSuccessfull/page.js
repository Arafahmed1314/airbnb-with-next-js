/* eslint-disable react/no-unescaped-entities */
import BookingDetailsCard from '@/components/PaymentSuccessFull/BookingDetailsCard'
import TripNextSteps from '@/components/PaymentSuccessFull/TripNextSteps'
import Image from 'next/image'
import React from 'react'

export default function PaymentSuccessFull() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-3xl mx-auto p-6">
                {/* <!-- Success Message Section --> */}
                <div className="text-center my-12">
                    <div className="inline-block p-4 bg-green-100 rounded-full mb-6">
                        <i className="fas fa-check-circle text-4xl text-primary"></i>
                    </div>
                    <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
                    <p className="text-zinc-600 mb-8">
                        Your booking has been confirmed. Check your email for details.
                    </p>
                </div>

                {/* <!-- Booking Details Card --> */}
                <BookingDetailsCard />

                {/* <!-- Next Steps --> */}
                <TripNextSteps />

                {/* <!-- Action Buttons --> */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        className="px-6 py-3 bg-primary text-white rounded-lg hover:brightness-90"
                    >
                        <i className="fas fa-download mr-2"></i>
                        Download Receipt
                    </button>
                </div>

                {/* <!-- Need Help Section --> */}
                <div className="mt-12 text-center">
                    <p className="text-zinc-600">Need help with your booking?</p>
                    <a href="#" className="text-primary hover:underline"
                    >Visit our Help Center</a
                    >
                </div>
            </div>
        </div>
    )
}
