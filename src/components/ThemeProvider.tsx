"use client"; // ✅ ใส่ถ้าใช้ app router (แต่ pages router ก็ใส่ได้ไม่มีปัญหา)

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}