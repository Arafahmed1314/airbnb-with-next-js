/* eslint-disable react/no-unescaped-entities */

import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";


export default function LoginPage() {
    return (
        <div className="flex h-screen bg-[#1f1147] text-white">
            <LoginLeft />
            <LoginRight />
        </div>
    );
}