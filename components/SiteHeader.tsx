"use client";

import { Menu, Send } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  links: NavLink[];
}

export function SiteHeader({ links }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#2D1A0E]/10 bg-[#FAFAF8]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <a
          href="/"
          className="font-heading text-[1.7rem] font-black uppercase leading-none tracking-tight text-[#2D1A0E]"
        >
          Faizan<span className="text-[#F06A2A]">.</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-[#2D1A0E] transition-colors hover:text-[#F06A2A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "icon-lg" }),
              "rounded-full bg-[#F5C800] text-[#2D1A0E] hover:bg-[#F5C800]/90"
            )}
            aria-label="Jump to contact section"
          >
            <Send className="size-4" />
          </a>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="rounded-full border border-[#2D1A0E]/10 bg-[#F5C800] text-[#2D1A0E] hover:bg-[#F5C800]/90"
                />
              }
            >
              <Menu className="size-5" />
              <span className="sr-only">Open navigation</span>
            </SheetTrigger>
            <SheetContent className="border-l border-[#2D1A0E]/10 bg-[#FAFAF8] p-0 text-[#2D1A0E]">
              <SheetHeader className="border-b border-[#2D1A0E]/10 px-6 py-5">
                <SheetTitle className="font-heading text-[1.5rem] font-black uppercase tracking-tight text-[#2D1A0E]">
                  Navigate
                </SheetTitle>
                <SheetDescription className="font-body text-sm text-[#2D1A0E]/70">
                  Move through the portfolio landing page.
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col px-6 py-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="border-b border-[#2D1A0E]/10 py-4 font-heading text-[1.7rem] font-bold uppercase leading-none tracking-tight text-[#2D1A0E]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
