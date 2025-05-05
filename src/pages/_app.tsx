import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import dynamic from "next/dynamic";
const ClientThemeProvider = dynamic(() => import("@/components/ClientThemeProvider"), { ssr: false });

import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <ClientThemeProvider>
        <ThemeProvider attribute="class" defaultTheme="system">
          <SignedIn>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </ThemeProvider>
      </ClientThemeProvider>
    </ClerkProvider>
  );
}
