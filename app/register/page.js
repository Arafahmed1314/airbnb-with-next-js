/* eslint-disable react/no-unescaped-entities */
import RegistrationForm from '@/components/auth/Register'
import SocialLogin from '@/components/SocialLogin'
import GoogleIcon from '@/components/svgIcon/GoogleIcon'
import Link from 'next/link'
import React from 'react'


export default function Register() {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        >
            {/* <!-- Modal Container --> */}
            <div
                className="bg-white rounded-xl shadow-2xl w-96 p-6 relative shadow-black/50"
            >
                {/* <!-- Close Button --> */}
                <button
                    id="closeModalBtn"
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <i className="ph-x text-2xl"></i>
                </button>

                {/* <!-- Modal Header --> */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Register to Hotel Booking
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">
                        Welcome back! Let's get you signed in.
                    </p>
                </div>

                {/* <!-- Social Login --> */}
                <div className="space-y-4 mb-4">
                    {/* <!-- Google Login Button --> */}
                    <SocialLogin mode={'register'} />

                    {/* <!-- Divider --> */}
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500 text-sm">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* <!-- Email Login Form --> */}
                    <RegistrationForm />
                </div>

                {/* <!-- Footer --> */}
                <div className="text-center text-sm text-gray-600">
                    <p>
                        Already have an account?
                        <Link href="/login" className="text-primary hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
