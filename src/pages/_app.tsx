import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app"; // ✅ เพิ่ม import type

function MyApp({ Component, pageProps }: AppProps) { // ✅ ใส่ type ตรงนี้
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;