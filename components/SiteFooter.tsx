import { ArrowRight, Cpu, ExternalLink, Link2, Mail, Medal } from "lucide-react";

import { contactLinks } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#2D1A0E] text-[#FAFAF8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div>
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FAFAF8]/68">
            CONTACT
          </p>
          <h2 className="mt-4 max-w-[9ch] font-heading text-[3.6rem] font-black leading-[0.9] tracking-tight text-[#FAFAF8] md:text-[5.4rem]">
            LET&apos;S BUILD THE NEXT AI SYSTEM RIGHT.
          </h2>
          <p className="mt-6 max-w-[34rem] text-base text-[#FAFAF8]/78">
            If you are hiring for AI engineering, looking for product-minded
            LLM execution, or building a workflow that needs to move from
            promise to production, reach out directly.
          </p>
        </div>

        <div className="grid gap-4 self-end">
          <a
            href={`mailto:${contactLinks.email}`}
            className="flex items-center justify-between border border-[#FAFAF8]/15 bg-[#1C1C1C] px-5 py-4 text-[#FAFAF8] transition-colors hover:border-[#F5C800] hover:text-[#F5C800]"
          >
            <span className="flex items-center gap-3 font-heading text-[1.2rem] font-bold uppercase tracking-tight">
              <Mail className="size-5" />
              {contactLinks.email}
            </span>
            <ArrowRight className="size-4" />
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border border-[#FAFAF8]/15 px-5 py-4 text-[#FAFAF8] transition-colors hover:border-[#F5C800] hover:text-[#F5C800]"
          >
            <span className="flex items-center gap-3 font-heading text-[1.2rem] font-bold uppercase tracking-tight">
              <Link2 className="size-5" />
              LINKEDIN
            </span>
            <ExternalLink className="size-4" />
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border border-[#FAFAF8]/15 px-5 py-4 text-[#FAFAF8] transition-colors hover:border-[#F5C800] hover:text-[#F5C800]"
          >
            <span className="flex items-center gap-3 font-heading text-[1.2rem] font-bold uppercase tracking-tight">
              <Cpu className="size-5" />
              GITHUB
            </span>
            <ExternalLink className="size-4" />
          </a>
          <a
            href={contactLinks.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border border-[#FAFAF8]/15 px-5 py-4 text-[#FAFAF8] transition-colors hover:border-[#F5C800] hover:text-[#F5C800]"
          >
            <span className="flex items-center gap-3 font-heading text-[1.2rem] font-bold uppercase tracking-tight">
              <Medal className="size-5" />
              RESUME
            </span>
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
