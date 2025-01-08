import PaymentProcessLeft from '@/components/paymentProcess/PaymentProcessLeft'
import PaymentProcessRight from '@/components/paymentProcess/PaymentProcessRight'
import React from 'react'

export default function PaymentProcess() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="mb-8">
                <a href="./details.html" className="text-zinc-800 hover:underline">
                    <i className="fas fa-chevron-left mr-2"></i>
                    Request to book
                </a>
            </div>

            {/* <!-- Main Content Grid --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* <!-- Left Column --> */}
                <PaymentProcessLeft />

                {/* <!-- Right Column --> */}
                <PaymentProcessRight />
            </div>
        </div>
    )
}
