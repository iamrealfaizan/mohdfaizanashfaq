import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  FolderOpen,
  Link2,
  Sparkles,
} from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  allProjects,
  contactLinks,
  projectsNavLinks,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  return (
    <div className="bg-grid min-h-screen bg-[#F2EDE4] text-[#2D1A0E]">
      <SiteHeader links={projectsNavLinks} />

      <main>
        <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-18">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
            <div>
              <Badge className="w-fit rounded-none border border-[#2D1A0E] bg-transparent px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2D1A0E]">
                PROJECT ARCHIVE
              </Badge>
              <h1 className="mt-5 max-w-[8ch] text-[4rem] font-black leading-[0.84] tracking-tight md:text-[5.3rem] lg:text-[6rem]">
                THE FULL SET OF BUILDS.
              </h1>
              <p className="mt-5 max-w-[36rem] text-base text-[#2D1A0E]/80 md:text-lg">
                This page collects the broader project archive. The homepage
                keeps only the strongest flagship work, while this page gives a
                fuller view of what I have built across AI, analytics,
                accessibility, and web engineering.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href="/#work"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-auto rounded-none border-[#2D1A0E] bg-transparent px-8 py-4 font-heading text-[13px] font-bold uppercase tracking-[0.18em] text-[#2D1A0E] hover:bg-[#2D1A0E] hover:text-[#FAFAF8]"
                )}
              >
                <ArrowLeft className="size-4" />
                BACK TO HOME
              </a>
              <p className="max-w-[24rem] text-sm text-[#2D1A0E]/72 lg:text-right">
                GitHub and live demo links appear where they are available.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAF8] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeading
              eyebrow="ALL PROJECTS"
              title="A GROWING SYSTEM OF WORK."
              description="Each card follows the same visual language as the landing page, but with a little more detail so the archive is useful for deeper browsing."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {allProjects.map((project) => (
                <Card
                  key={project.title}
                  className={cn(
                    "rounded-none border-0 bg-[#E8DCC8] py-0 shadow-none ring-0",
                    project.featured && "bg-[#FAFAF8] ring-1 ring-[#2D1A0E]/10"
                  )}
                >
                  <CardHeader className="gap-4 rounded-none border-b border-[#2D1A0E]/10 px-6 py-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2D1A0E]/65">
                          {project.roleOrType}
                        </p>
                        <CardTitle className="mt-3 max-w-[10ch] font-heading text-[2rem] font-black uppercase leading-none tracking-tight text-[#2D1A0E]">
                          {project.title}
                        </CardTitle>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F06A2A] text-[#FAFAF8]">
                        {project.featured ? (
                          <Sparkles className="size-5" />
                        ) : (
                          <FolderOpen className="size-5" />
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-[#2D1A0E]/80">
                      {project.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 px-6 py-6">
                    <div className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3 text-sm text-[#2D1A0E]/82">
                          <div className="mt-2 h-2 w-2 shrink-0 bg-[#F06A2A]" />
                          <p>{highlight}</p>
                        </div>
                      ))}
                    </div>

                    <Separator className="bg-[#2D1A0E]/10" />

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge
                          key={item}
                          className="rounded-none border border-[#2D1A0E]/12 bg-[#FAFAF8] px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2D1A0E]"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>

                    {project.githubHref || project.demoHref ? (
                      <div className="flex flex-wrap gap-3">
                        {project.githubHref ? (
                          <a
                            href={project.githubHref}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 font-heading text-[13px] font-bold uppercase tracking-[0.16em] text-[#2D1A0E] hover:text-[#F06A2A]"
                          >
                            <ExternalLink className="size-4" />
                            GITHUB
                          </a>
                        ) : null}
                        {project.demoHref ? (
                          <a
                            href={project.demoHref}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 font-heading text-[13px] font-bold uppercase tracking-[0.16em] text-[#2D1A0E] hover:text-[#F06A2A]"
                          >
                            <Link2 className="size-4" />
                            LIVE DEMO
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2D1A0E] text-[#FAFAF8]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FAFAF8]/68">
                NEXT STEP
              </p>
              <h2 className="mt-4 max-w-[10ch] text-[3rem] font-black leading-[0.9] tracking-tight md:text-[4.5rem]">
                WANT TO TALK THROUGH THE WORK?
              </h2>
              <p className="mt-5 max-w-[34rem] text-base text-[#FAFAF8]/78">
                If you want the project archive plus the delivery context behind
                it, reach out directly and I can walk you through the work,
                choices, and results.
              </p>
            </div>
            <a
              href={`mailto:${contactLinks.email}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-auto rounded-none bg-[#F5C800] px-8 py-4 font-heading text-[13px] font-bold uppercase tracking-[0.18em] text-[#2D1A0E] hover:bg-[#F5C800]/90"
              )}
            >
              CONTACT ME
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
