
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-start min-h-[calc(100vh-80px)] p-4 bg-muted">
        {children}
      </main>
    </>
  );
}