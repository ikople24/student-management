// src/components/Navbar.tsx
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  return (
      <nav className="bg-neutral-900 text-white px-4 py-3 flex justify-between items-center">
      <div className="text-lg font-bold">
        Student Management
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Link href="/" className="hover:underline">Dashboard</Link>
        <Link href="/students" className="hover:underline">Students</Link>
        <Link href="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}