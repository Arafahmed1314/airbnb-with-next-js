import LoginForm from "@/components/auth/Login";
import SocialLogin from "@/components/SocialLogin";
import GoogleIcon from "@/components/svgIcon/GoogleIcon";
import Link from "next/link";

export default function LoginRight() {
  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-12 bg-white text-[#1f1147]">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <span>Welcome to</span>
          <span className="text-purple-600">AirBnb</span>
        </h2>
        <h1 className="text-5xl font-bold mb-8">Sign in</h1>
        {/* <button className="w-full flex items-center justify-center border border-gray-300 rounded-full py-3 mb-3 hover:bg-gray-50 transition"> */}
        <SocialLogin />
        {/* </button> */}
        <LoginForm />

        <div className="text-center mt-4">
          <Link href="/forgot-password" className="text-purple-600">
            Forgot Password
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p>
            No Account?{" "}
            <Link href="/register" className="text-purple-600">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
