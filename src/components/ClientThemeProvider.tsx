"use client";

import { ThemeProvider } from "next-themes"; // ✅ import component ไม่ใช่ type
import { PropsWithChildren } from "react";

export default function ClientThemeProvider({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}