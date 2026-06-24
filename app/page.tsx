import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Cpu,
  ExternalLink,
  HeartHandshake,
  Link2,
  Medal,
  Sparkles,
} from "lucide-react";

import { GitHubContributionsSection } from "@/components/GitHubContributionsSection";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
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
  certifications,
  communityImpact,
  contactLinks,
  education,
  experienceTimeline,
  featuredProjects,
  metrics,
  siteNavLinks,
  services,
} from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div id="top" className="bg-grid bg-[#F2EDE4] text-[#2D1A0E]">
      <SiteHeader links={siteNavLinks} />

      <main>
        <section className="overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:py-10 md:px-8 md:py-12 lg:min-h-[calc(100dvh-81px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-4 lg:py-8">
            <div className="relative z-10 flex flex-col justify-center">
              {/* <Badge className="max-w-full rounded-none border border-[#2D1A0E] bg-transparent px-3 py-1.5 font-body text-[10px] font-semibold uppercase leading-[1.35] tracking-[0.18em] text-[#2D1A0E] whitespace-normal animate-in fade-in duration-500 motion-reduce:animate-none sm:w-fit sm:px-3 sm:py-1 sm:text-[11px] sm:leading-snug sm:tracking-[0.28em]">
                AVAILABLE FOR AI PRODUCT, RAG, AND LLM DELIVERY
              </Badge> */}

              <div className="mt-5 grid grid-cols-[minmax(0,1fr)_132px] items-end gap-4 sm:grid-cols-[minmax(0,1fr)_165px] lg:block animate-in fade-in slide-in-from-bottom-6 duration-700 [animation-delay:120ms] [animation-fill-mode:both] motion-reduce:animate-none">
                <h1 className="max-w-[7ch] text-[3.15rem] font-black leading-[0.86] tracking-tight sm:text-[3.8rem] md:text-[5rem] lg:text-[6.1rem] xl:text-[6.7rem]">
                  FROM IDEAS TO SCALABLE AI SYSTEMS
                </h1>

                <div className="relative h-[180px] w-full self-center sm:h-[220px] lg:hidden">
                  <Image
                    src="/images/noBG.png"
                    alt="Mohammed Faizan Ashfaq in a suit, facing left."
                    fill
                    priority
                    className="object-contain object-bottom object-center"
                    sizes="165px"
                  />
                </div>
              </div>

              <p className="mt-5 max-w-[33rem] text-[15px] leading-relaxed text-[#2D1A0E]/80 md:text-lg animate-in fade-in slide-in-from-bottom-6 duration-700 [animation-delay:220ms] [animation-fill-mode:both] motion-reduce:animate-none">
                I help teams turn ideas into scalable AI and Web Solutions that
                save time, cut costs, and create measurable impact.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row animate-in fade-in slide-in-from-bottom-6 duration-700 [animation-delay:320ms] [animation-fill-mode:both] motion-reduce:animate-none">
                <a
                  href={`mailto:${contactLinks.email}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-auto min-h-12 w-full rounded-none bg-[#F5C800] px-8 py-4 font-heading text-[13px] font-bold uppercase tracking-[0.18em] text-[#2D1A0E] hover:bg-[#F5C800]/90 active:scale-[0.98] sm:w-auto"
                  )}
                >
                  CONTACT ME
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={contactLinks.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-auto min-h-12 w-full rounded-none border-[#2D1A0E] bg-[#2D1A0E] px-8 py-4 font-heading text-[13px] font-bold uppercase tracking-[0.18em] text-[#FAFAF8] hover:bg-[#2D1A0E]/92 hover:text-[#FAFAF8] active:scale-[0.98] sm:w-auto"
                  )}
                >
                  DOWNLOAD RESUME
                  <ArrowRight className="size-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 animate-in fade-in slide-in-from-bottom-6 duration-700 [animation-delay:420ms] [animation-fill-mode:both] motion-reduce:animate-none">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border border-[#2D1A0E]/12 bg-[#FAFAF8]/70 p-4"
                  >
                    <p className="font-heading text-[1.75rem] font-black leading-none text-[#2D1A0E] md:text-[2rem]">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#2D1A0E]/68">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden min-h-[280px] items-end justify-center lg:flex lg:min-h-[560px] lg:justify-end">
              <div className="absolute right-4 top-6 h-12 w-12 rounded-full bg-[#F5C800] animate-in zoom-in-75 duration-700 [animation-delay:540ms] [animation-fill-mode:both] motion-reduce:animate-none sm:h-16 sm:w-16 lg:right-10 lg:top-10" />
              <div className="absolute bottom-24 left-8 hidden h-3 w-3 bg-[#F06A2A] xl:block" />
              <div className="absolute right-2 top-16 hidden max-w-[12rem] lg:block xl:right-6">
                <p className="font-heading text-[1.55rem] font-bold uppercase leading-[0.92]">
                  PRODUCT BUILDER.<br />TEAM LEAD.<br />AI ENGINEER.
                </p>
              </div>
              <div className="absolute bottom-6 right-2 hidden max-w-[12rem] xl:block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2D1A0E]/72">
                  REMOTE, HYBRID, OR ON-SITE DELIVERY FOR AI AND WEB SYSTEMS
                </p>
              </div>
              <div className="relative h-[320px] w-full max-w-[320px] animate-in fade-in slide-in-from-right-8 duration-700 [animation-delay:220ms] [animation-fill-mode:both] motion-reduce:animate-none sm:h-[360px] sm:max-w-[360px] md:h-[460px] md:max-w-[520px] lg:h-[620px] lg:max-w-[600px] xl:h-[680px] xl:max-w-[660px]">
                <Image
                  src="/images/noBG.png"
                  alt="Mohammed Faizan Ashfaq in a suit, facing left."
                  fill
                  priority
                  className="object-contain object-bottom object-center lg:object-right"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#2D1A0E]/10 bg-[#2D1A0E] text-[#FAFAF8]">
          <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:px-8">
            <p className="font-heading text-[13px] font-bold uppercase tracking-[0.22em]">
              CURRENTLY LEADING AI DELIVERY AT ADAPTIVE AI VENTURES
            </p>
            <p className="font-heading text-[13px] font-bold uppercase tracking-[0.22em]">
              DIGITIZED 1,000+ RECORDS WITH AI, OCR, AND COMPUTER VISION
            </p>
            <p className="font-heading text-[13px] font-bold uppercase tracking-[0.22em]">
              95% FASTER PROCESSING AND 80% STRONGER DATA ACCESSIBILITY
            </p>
            <p className="font-heading text-[13px] font-bold uppercase tracking-[0.22em]">
              RECRUITER-READY, CLIENT-READY, EXECUTION-FIRST
            </p>
          </div>
        </section>

        <section id="experience" className="bg-[#FAFAF8] py-16 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeading
              eyebrow="EXPERIENCE"
              title="A TIMELINE BUILT AROUND DELIVERY."
              description="The timeline shows progression from building systems to leading them. It is meant to show depth, measurable outcomes, and the ability to deliver across roles."
            />

            <div className="mt-10 space-y-5 md:mt-12 md:space-y-6">
              {experienceTimeline.map((item, index) => (
                <Card
                  key={`${item.company}-${item.role}`}
                  className={cn(
                    "rounded-none border border-[#2D1A0E]/10 bg-[#FAFAF8] py-0 shadow-none ring-0 animate-in fade-in slide-in-from-bottom-6 duration-700 motion-reduce:animate-none",
                    index > 0 &&
                      "[animation-delay:120ms] [animation-fill-mode:both]"
                  )}
                >
                  <CardContent className="grid gap-5 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[220px_minmax(0,1fr)]">
                    <div>
                      <p className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2D1A0E]/60">
                        {item.dateRange}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5C800] text-[#2D1A0E]">
                          {item.role.includes("Lead") ? (
                            <BriefcaseBusiness className="size-4" />
                          ) : item.role.includes("Intern") ? (
                            <Building2 className="size-4" />
                          ) : (
                            <Cpu className="size-4" />
                          )}
                        </div>
                        <p className="font-heading text-[1.3rem] font-black uppercase leading-none tracking-tight sm:text-[1.5rem]">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-[1.65rem] font-black uppercase leading-none tracking-tight text-[#2D1A0E] sm:text-[2rem]">
                        {item.role}
                      </h3>
                      <div className="mt-5 space-y-3">
                        {item.highlights.map((highlight) => (
                          <div key={highlight} className="flex gap-3 text-[#2D1A0E]/80">
                            <div className="mt-2 h-2 w-2 shrink-0 bg-[#F06A2A]" />
                            <p>{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-28">
          <SectionHeading
            eyebrow="POSITIONING"
            title="I TURN COMPLEX AI CAPABILITY INTO SCALABLE IMPACT."
            description="I build AI and web systems that help businesses move faster, reduce wasted effort, and translate technical potential into measurable outcomes. The work is not just about models, it is about clarity, execution, and results."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <Card className="rounded-none border-0 bg-[#E8DCC8] py-0 shadow-none ring-0">
              <CardHeader className="rounded-none px-4 pt-5 sm:px-6 sm:pt-6">
                <CardTitle className="font-heading text-[1.65rem] font-black uppercase leading-none tracking-tight text-[#2D1A0E] sm:text-[2rem]">
                  HOW I HELP
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 pb-5 pt-4 text-[#2D1A0E]/82 sm:px-6 sm:pb-6">
                <p>
                  I work across AI engineering, full-stack delivery, and
                  automation design to build systems that save time, cut costs,
                  and scale cleanly.
                </p>
                <p>
                  That can mean fine-tuning LLM workflows, standing up RAG
                  pipelines, or shipping the application layer that makes the
                  system useful to real teams.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "LLM SYSTEMS",
                "RAG PIPELINES",
                "FULL-STACK APPS",
                "OCR + VISION",
                "AUTOMATION",
                "SCALABLE DELIVERY",
                "NEXT.JS",
                "PYTHON",
              ].map((skill) => (
                <div
                  key={skill}
                  className="border border-[#2D1A0E]/12 bg-[#FAFAF8] px-4 py-4 font-heading text-[1.2rem] font-bold uppercase leading-none tracking-tight sm:px-5 sm:text-[1.45rem]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#FAFAF8] py-16 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeading
              eyebrow="FLAGSHIP WORK"
              title="THREE BUILDS THAT SHOW THE WAY I THINK."
              description="These are the most representative proofs on the homepage. The full archive lives on a separate projects page so the landing page stays focused."
            />

            <div className="mt-10 grid gap-5 xl:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className={cn(
                    "flex h-full flex-col rounded-none border-0 bg-[#E8DCC8] py-0 shadow-none ring-0 animate-in fade-in slide-in-from-bottom-6 duration-700 motion-reduce:animate-none",
                    index === 1 && "[animation-delay:120ms] [animation-fill-mode:both]",
                    index === 2 && "[animation-delay:220ms] [animation-fill-mode:both]"
                  )}
                >
                  <div className="flex items-end justify-between gap-4 border-b border-[#2D1A0E]/10 px-4 py-5 sm:min-h-[150px] sm:px-6 sm:py-6">
                    <div>
                      <p className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2D1A0E]/65">
                        {project.roleOrType}
                      </p>
                      <h3 className="mt-3 max-w-[8ch] text-[1.9rem] font-black leading-none tracking-tight sm:min-h-[4.6rem] sm:text-[2.3rem]">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F06A2A] text-[#FAFAF8]">
                      <Sparkles className="size-5" />
                    </div>
                  </div>
                  <CardContent className="flex flex-1 flex-col space-y-5 px-4 py-5 sm:px-6 sm:py-6">
                    <CardDescription className="text-base leading-relaxed text-[#2D1A0E]/80">
                      {project.summary}
                    </CardDescription>
                    <div className="flex-1 space-y-3">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3 text-sm text-[#2D1A0E]/82">
                          <ChevronRight className="mt-0.5 size-4 shrink-0 text-[#F06A2A]" />
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
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 flex justify-start">
              <a
                href="/projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-auto rounded-none border-[#2D1A0E] bg-transparent px-8 py-4 font-heading text-[13px] font-bold uppercase tracking-[0.18em] text-[#2D1A0E] hover:bg-[#2D1A0E] hover:text-[#FAFAF8]"
                )}
              >
                SEE ALL PROJECTS
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-28">
          <SectionHeading
            eyebrow="CLIENT VALUE"
            title="WHAT YOU CAN HIRE ME TO BUILD."
            description="I work best where AI has to stop being a concept deck and start becoming a useful operating system for a product or team."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.serviceName}
                  className={cn(
                    "flex h-full flex-col rounded-none border border-[#2D1A0E]/10 bg-[#FAFAF8] py-0 shadow-none ring-0 animate-in fade-in slide-in-from-bottom-6 duration-700 motion-reduce:animate-none",
                    index === 1 && "[animation-delay:120ms] [animation-fill-mode:both]",
                    index === 2 && "[animation-delay:220ms] [animation-fill-mode:both]"
                  )}
                >
                  <CardHeader className="gap-4 rounded-none border-b border-[#2D1A0E]/10 px-4 py-5 sm:px-6 sm:py-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5C800] text-[#2D1A0E]">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="font-heading text-[1.65rem] font-black uppercase leading-none tracking-tight text-[#2D1A0E] sm:min-h-[4rem] sm:text-[2rem]">
                      {service.serviceName}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-[#2D1A0E]/78">
                      {service.oneLiner}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4 px-4 py-5 sm:px-6 sm:py-6">
                    {service.supportingPoints.map((point) => (
                      <div key={point} className="flex gap-3 text-sm text-[#2D1A0E]/82">
                        <Link2 className="mt-0.5 size-4 shrink-0 text-[#F06A2A]" />
                        <p>{point}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <GitHubContributionsSection />

        <section id="credentials" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-28">
          <SectionHeading
            eyebrow="CREDENTIALS"
            title="CREDENTIALS THAT SUPPORT THE WORK."
            description="The strongest trust still comes from shipped systems, but these credentials strengthen leadership, discipline, and range across AI, prompting, and automation."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <Card className="rounded-none border-0 bg-[#E8DCC8] py-0 shadow-none ring-0">
              <CardHeader className="rounded-none border-b border-[#2D1A0E]/10 px-4 py-5 sm:px-6 sm:py-6">
                <CardTitle className="font-heading text-[1.65rem] font-black uppercase leading-none tracking-tight text-[#2D1A0E] sm:text-[2rem]">
                  CERTIFICATIONS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
                {certifications.map((certification) => (
                  <div
                    key={certification.title}
                    className="flex flex-col gap-3 border border-[#2D1A0E]/10 bg-[#FAFAF8] p-4 sm:p-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F06A2A] text-[#FAFAF8]">
                        <Medal className="size-4" />
                      </div>
                      <div>
                        <p className="font-heading text-[1.2rem] font-bold uppercase leading-none tracking-tight text-[#2D1A0E] sm:text-[1.45rem]">
                          {certification.title}
                        </p>
                        <p className="mt-2 text-sm text-[#2D1A0E]/75">
                          {certification.issuer}
                        </p>
                        {certification.credentialHref ? (
                          <a
                            href={certification.credentialHref}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex items-center gap-2 font-heading text-[13px] font-bold uppercase tracking-[0.16em] text-[#2D1A0E] transition-colors hover:text-[#F06A2A]"
                          >
                            Show Credential
                            <ExternalLink className="size-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <p className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2D1A0E]/60">
                      {certification.date}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-none border-0 bg-[#FAFAF8] py-0 shadow-none ring-1 ring-[#2D1A0E]/10">
              <CardHeader className="rounded-none border-b border-[#2D1A0E]/10 px-4 py-5 sm:px-6 sm:py-6">
                <CardTitle className="font-heading text-[1.65rem] font-black uppercase leading-none tracking-tight text-[#2D1A0E] sm:text-[2rem]">
                  EDUCATION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 px-4 py-5 text-[#2D1A0E]/80 sm:px-6 sm:py-6">
                {education.map((entry, index) => (
                  <div key={entry.degree}>
                    {index > 0 ? (
                      <Separator className="mb-6 bg-[#2D1A0E]/10" />
                    ) : null}
                    <p className="font-heading text-[1.3rem] font-bold uppercase leading-none tracking-tight text-[#2D1A0E] sm:text-[1.55rem]">
                      {entry.degree}
                    </p>
                    <p className="mt-2 text-[#2D1A0E]/78">{entry.institution}</p>
                    <p className="mt-2 font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2D1A0E]/60">
                      {entry.dateRange} | {entry.detailLine}
                    </p>
                    <div className="mt-4 space-y-3">
                      {entry.achievements.map((achievement) => (
                        <div key={achievement} className="flex gap-3 text-sm">
                          <div className="mt-2 h-2 w-2 shrink-0 bg-[#F06A2A]" />
                          <p>{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-[#FAFAF8] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SectionHeading
              eyebrow="COMMUNITY IMPACT"
              title="I WANT MY WORK TO HELP BEYOND DELIVERY."
              description="Outside direct project work, I am interested in contributing where guidance, technical effort, and organized support can create meaningful social value."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {communityImpact.map((entry) => (
                <Card
                  key={entry.title}
                  className="flex h-full flex-col rounded-none border border-[#2D1A0E]/10 bg-[#FAFAF8] py-0 shadow-none ring-0"
                >
                  <CardHeader className="gap-4 rounded-none border-b border-[#2D1A0E]/10 px-4 py-5 sm:px-6 sm:py-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5C800] text-[#2D1A0E]">
                      <HeartHandshake className="size-6" />
                    </div>
                    <CardTitle className="font-heading text-[1.55rem] font-black uppercase leading-none tracking-tight text-[#2D1A0E] sm:min-h-[4.25rem] sm:text-[1.9rem]">
                      {entry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 px-4 py-5 text-[#2D1A0E]/80 sm:px-6 sm:py-6">
                    <p>{entry.summary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
