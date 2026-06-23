import { ArrowRight, Code2, Cpu, ExternalLink, Link2, Mail, Medal } from "lucide-react";

import { contactLinks } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#2D1A0E] text-[#FAFAF8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FAFAF8]/68">
            CONTACT
          </p>
          <h2 className="mt-4 max-w-[9ch] font-heading text-[2.95rem] font-black leading-[0.9] tracking-tight text-[#FAFAF8] sm:text-[3.6rem] md:text-[5.4rem]">
            LET&apos;S BUILD THE NEXT AI SYSTEM RIGHT.
          </h2>
          <p className="mt-5 max-w-[34rem] text-[15px] leading-relaxed text-[#FAFAF8]/78 md:mt-6 md:text-base">
            If you are hiring for AI engineering, looking for product-minded
            LLM execution, or building a workflow that needs to move from
            promise to production, reach out directly.
          </p>
        </div>

        <div className="grid gap-4 self-end">
          <a
            href={`mailto:${contactLinks.email}`}
            className="flex min-h-12 items-center justify-between gap-4 border border-[#FAFAF8]/15 bg-[#1C1C1C] px-4 py-4 text-[#FAFAF8] transition-colors hover:border-[#F5C800] hover:text-[#F5C800] sm:px-5"
          >
            <span className="flex min-w-0 items-center gap-3 font-heading text-[1rem] font-bold uppercase tracking-tight sm:text-[1.2rem]">
              <Mail className="size-5 shrink-0" />
              {contactLinks.email}
            </span>
            <ArrowRight className="size-4 shrink-0" />
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-between gap-4 border border-[#FAFAF8]/15 px-4 py-4 text-[#FAFAF8] transition-colors hover:border-[#F5C800] hover:text-[#F5C800] sm:px-5"
          >
            <span className="flex min-w-0 items-center gap-3 font-heading text-[1rem] font-bold uppercase tracking-tight sm:text-[1.2rem]">
              <Link2 className="size-5 shrink-0" />
              LINKEDIN
            </span>
            <ExternalLink className="size-4 shrink-0" />
          </a>
          <a
            href={contactLinks.leetcode}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-between gap-4 border border-[#FAFAF8]/15 px-4 py-4 text-[#FAFAF8] transition-colors hover:border-[#F5C800] hover:text-[#F5C800] sm:px-5"
          >
            <span className="flex min-w-0 items-center gap-3 font-heading text-[1rem] font-bold uppercase tracking-tight sm:text-[1.2rem]">
              <Code2 className="size-5 shrink-0" />
              LEETCODE
            </span>
            <ExternalLink className="size-4 shrink-0" />
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-between gap-4 border border-[#FAFAF8]/15 px-4 py-4 text-[#FAFAF8] transition-colors hover:border-[#F5C800] hover:text-[#F5C800] sm:px-5"
          >
            <span className="flex min-w-0 items-center gap-3 font-heading text-[1rem] font-bold uppercase tracking-tight sm:text-[1.2rem]">
              <Cpu className="size-5 shrink-0" />
              GITHUB
            </span>
            <ExternalLink className="size-4 shrink-0" />
          </a>
          <a
            href={contactLinks.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 items-center justify-between gap-4 border border-[#FAFAF8]/15 px-4 py-4 text-[#FAFAF8] transition-colors hover:border-[#F5C800] hover:text-[#F5C800] sm:px-5"
          >
            <span className="flex min-w-0 items-center gap-3 font-heading text-[1rem] font-bold uppercase tracking-tight sm:text-[1.2rem]">
              <Medal className="size-5 shrink-0" />
              RESUME
            </span>
            <ExternalLink className="size-4 shrink-0" />
          </a>
        </div>
      </div>
    </footer>
  );
}
