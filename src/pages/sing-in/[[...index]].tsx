import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - image */}
      <div className="hidden md:flex flex-col justify-between w-1/2 bg-neutral-900 text-white">
        <div className="p-4 flex justify-between">
          <h1 className="text-lg font-bold">AMU</h1>
          <a href="/" className="text-sm hover:underline">Back to website</a>
        </div>
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <Image
            src="/login-image.jpg" // 🔥 ใช้ public/login-image.jpg
            width={400}
            height={300}
            alt="Background"
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-lg">Capturing Moments,<br />Creating Memories</p>
        </div>
        <div className="p-4 text-center text-sm text-gray-400">&copy; 2025</div>
      </div>

      {/* Right side - Clerk SignIn */}
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="w-full max-w-md p-4">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
              },
            }}
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
            afterSignInUrl="/"
          />
        </div>
      </div>
    </div>
  );
}