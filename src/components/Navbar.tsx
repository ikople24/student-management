import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserButton } from "@clerk/nextjs";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";

export default function Navbar() {
  const NavigationMenuViewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
  >(({ className, ...props }, ref) => (
    <div className={cn("absolute left-1/2 top-full flex justify-center transform -translate-x-1/2")}>
      <NavigationMenuPrimitive.NavigationMenuViewport
        className={cn(
          "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  ))


  return (
    <nav className="rounded-b-xl backdrop-blur-lg bg-neutral-100/60 dark:bg-neutral-900/60 border-b border-neutral-200 dark:border-neutral-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg font-semibold">Student Management</h1>

        {/* Center Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="space-x-4">
            {/* Getting Started */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[250px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/dashboard">
                        <div className="p-3 hover:bg-accent rounded">
                          <div className="font-medium">Dashboard</div>
                          <p className="text-sm text-muted-foreground">สรุปภาพรวมทั้งหมด</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="p-3 hover:bg-accent rounded">
                          <div className="font-medium">Students</div>
                          <p className="text-sm text-muted-foreground">จัดการนักเรียน</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Components */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-2 gap-2 p-4 w-[500px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="p-3 hover:bg-accent rounded">
                          <div className="font-medium">Teachers</div>
                          <p className="text-sm text-muted-foreground">จัดการครูและสิทธิ์</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="p-3 hover:bg-accent rounded">
                          <div className="font-medium">Reports</div>
                          <p className="text-sm text-muted-foreground">ดูรายงานการมาเรียน</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="p-3 hover:bg-accent rounded">
                          <div className="font-medium">User Guide</div>
                          <p className="text-sm text-muted-foreground">คู่มือการใช้งานระบบ</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="p-3 hover:bg-accent rounded">
                          <div className="font-medium">API Docs</div>
                          <p className="text-sm text-muted-foreground">API สำหรับนักพัฒนา</p>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Documentation */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
              <NavigationMenuContent>

              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <UserButton />
        </div>
      </div>
    </nav>
  );
}