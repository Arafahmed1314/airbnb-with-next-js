/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function LoginLeft() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-[#1f1147] flex-col justify-center relative h-full">
      <div className="flex flex-col items-center text-white">
        <Image
          src="/assets/Saly-1.png"
          alt="Illustration"
          height={200}
          width={300}
        />
        <h2 className="text-4xl font-bold mb-4">Sign in Now</h2>
        <p className="text-lg mb-6">Boost Your Learning Capabilities</p>
        <p className="text-center max-w-lg leading-relaxed">
          Logging in unlocks your personal progress tracker, letting you
          evaluate your performance and see how you stack up against others.
          Whether you're preparing for exams, improving your knowledge, or
          simply having fun, there's no better way to sharpen your mind.
        </p>
      </div>
    </div>
  );
}
