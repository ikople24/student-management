// src/pages/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-semibold">กำลังโหลด...</h1>
    </div>
  );
}