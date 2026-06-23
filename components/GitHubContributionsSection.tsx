import { ArrowUpRight } from "lucide-react";

import { contactLinks } from "@/lib/portfolio-data";
import { AutoScrollX } from "@/components/AutoScrollX";
import { SectionHeading } from "@/components/SectionHeading";
import {
  getGitHubContributionCalendar,
  getGitHubUsername,
} from "@/lib/github";
import { getLeetCodeHeatmap } from "@/lib/leetcode";

interface HeatmapDay {
  contributionCount: number;
  date: string;
}

function getLeetCodeUsername(leetcodeUrl: string) {
  const match = leetcodeUrl.match(/leetcode\.com\/(?:u\/)?([^/?#]+)/i);
  const username = match?.[1];

  if (!username || username.toLowerCase() === "leetcode.com") {
    return null;
  }

  return username;
}

function getMonthLabels(weeks: HeatmapDay[][]) {
  return weeks
    .map((week, index) => {
      const firstDay = week[0];
      if (!firstDay) {
        return null;
      }

      const date = new Date(firstDay.date);
      if (date.getUTCDate() > 7) {
        return null;
      }

      return {
        index,
        label: date.toLocaleString("en-US", { month: "short" }),
      };
    })
    .filter((entry): entry is { index: number; label: string } => entry !== null);
}

function getGitHubTone(count: number, maxCount: number) {
  if (count === 0) {
    return "#ebedf0";
  }

  const ratio = maxCount === 0 ? 0 : count / maxCount;

  if (ratio >= 0.75) {
    return "#216e39";
  }

  if (ratio >= 0.5) {
    return "#30a14e";
  }

  if (ratio >= 0.25) {
    return "#40c463";
  }

  return "#9be9a8";
}

function getLeetCodeTone(count: number, maxCount: number) {
  if (count === 0) {
    return "#ebedf0";
  }

  const ratio = maxCount === 0 ? 0 : count / maxCount;

  if (ratio >= 0.75) {
    return "#216e39";
  }

  if (ratio >= 0.5) {
    return "#30a14e";
  }

  if (ratio >= 0.25) {
    return "#40c463";
  }

  return "#9be9a8";
}

function HeatmapGrid({
  total,
  weeks,
  monthLabels,
  toneFor,
  textColor,
  autoScroll = false,
}: {
  total: number;
  weeks: HeatmapDay[][];
  monthLabels: { index: number; label: string }[];
  toneFor: (count: number, maxCount: number) => string;
  textColor: string;
  autoScroll?: boolean;
}) {
  const allDays = weeks.flat();
  const maxCount = allDays.reduce(
    (currentMax, day) => Math.max(currentMax, day.contributionCount),
    0
  );

  const body = (
    <div className="min-w-[760px]">
      <p className="text-[1.75rem] leading-none" style={{ color: textColor }}>
        <span className="font-semibold">{total}</span> contributions in the last year
      </p>

      <div className="mt-5 ml-10 h-5">
        <div className="relative h-5">
          {monthLabels.map((month) => (
            <span
              key={`${month.label}-${month.index}`}
              className="absolute top-0 text-xs"
              style={{ left: `${month.index * 13}px`, color: "#57606a" }}
            >
              {month.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-2 flex gap-3">
        <div className="grid shrink-0 grid-rows-7 gap-[3px] pt-[2px] text-xs text-[#57606a]">
          <span className="h-[10px]">Mon</span>
          <span className="h-[10px]" />
          <span className="h-[10px]">Wed</span>
          <span className="h-[10px]" />
          <span className="h-[10px]">Fri</span>
          <span className="h-[10px]" />
          <span className="h-[10px]" />
        </div>

        <div className="grid auto-cols-max grid-flow-col gap-[3px]">
          {weeks.map((week, weekIndex) => (
            <div
              key={`${week[0]?.date ?? weekIndex}`}
              className="grid grid-rows-7 gap-[3px]"
            >
              {week.map((day) => (
                <div
                  key={day.date}
                  className="h-[10px] w-[10px] rounded-[2px] border border-black/0"
                  style={{
                    backgroundColor: toneFor(day.contributionCount, maxCount),
                  }}
                  title={
                    day.date.startsWith("pad-")
                      ? undefined
                      : `${day.contributionCount} contributions on ${day.date}`
                  }
                  aria-label={
                    day.date.startsWith("pad-")
                      ? undefined
                      : `${day.contributionCount} contributions on ${day.date}`
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2 text-xs text-[#57606a]">
        <span>Less</span>
        <span className="h-[10px] w-[10px] rounded-[2px]" style={{ backgroundColor: toneFor(0, maxCount) }} />
        <span className="h-[10px] w-[10px] rounded-[2px]" style={{ backgroundColor: toneFor(Math.max(1, Math.ceil(maxCount * 0.2)), maxCount) }} />
        <span className="h-[10px] w-[10px] rounded-[2px]" style={{ backgroundColor: toneFor(Math.max(1, Math.ceil(maxCount * 0.35)), maxCount) }} />
        <span className="h-[10px] w-[10px] rounded-[2px]" style={{ backgroundColor: toneFor(Math.max(1, Math.ceil(maxCount * 0.6)), maxCount) }} />
        <span className="h-[10px] w-[10px] rounded-[2px]" style={{ backgroundColor: toneFor(Math.max(1, maxCount), maxCount) }} />
        <span>More</span>
      </div>
    </div>
  );

  if (autoScroll) {
    return <AutoScrollX className="overflow-x-auto">{body}</AutoScrollX>;
  }

  return <div className="overflow-x-auto">{body}</div>;
}

export async function GitHubContributionsSection() {
  const githubUsername = getGitHubUsername(contactLinks.github);
  const leetCodeUsername = getLeetCodeUsername(contactLinks.leetcode);
  const github = await getGitHubContributionCalendar(githubUsername);
  const leetCode = leetCodeUsername
    ? await getLeetCodeHeatmap(leetCodeUsername)
    : null;

  const githubWeeks =
    github.status === "ok"
      ? github.calendar.weeks.map((week) => week.contributionDays)
      : [];
  const githubMonthLabels = getMonthLabels(githubWeeks);
  const leetCodeWeeks =
    leetCode?.status === "ok"
      ? leetCode.calendar.weeks.map((week) => week.contributionDays)
      : [];
  const leetCodeMonthLabels = getMonthLabels(leetCodeWeeks);

  return (
    <section className="bg-[#FAFAF8] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="ACTIVITY SIGNAL"
          title="CONSISTENCY YOU CAN SEE."
          description="Recent coding activity across GitHub and LeetCode, shown in one place so the output is visible at a glance."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="border border-[#d0d7de] bg-white p-6 text-[#24292f]">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-heading text-[1.6rem] font-black uppercase leading-none tracking-tight text-[#24292f]">
                  GITHUB CONTRIBUTIONS
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#57606a]">
                  {githubUsername}
                </p>
              </div>
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-heading text-[13px] font-bold uppercase tracking-[0.16em] text-[#24292f] transition-colors hover:text-[#30a14e]"
              >
                Profile
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            {github.status === "ok" ? (
              <HeatmapGrid
                total={github.calendar.totalContributions}
                weeks={githubWeeks}
                monthLabels={githubMonthLabels}
                toneFor={getGitHubTone}
                textColor="#24292f"
                autoScroll
              />
            ) : (
              <div className="text-sm text-[#57606a]">
                {github.status === "missing-token"
                  ? "Add GITHUB_TOKEN to show the GitHub heatmap."
                  : "GitHub heatmap unavailable right now."}
              </div>
            )}
          </div>

          <div className="border border-[#2D1A0E]/10 bg-[#FAFAF8] p-6">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-heading text-[1.6rem] font-black uppercase leading-none tracking-tight text-[#2D1A0E]">
                  LEETCODE SUBMISSIONS
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2D1A0E]/65">
                  {leetCodeUsername ?? "PROFILE NEEDED"}
                </p>
              </div>
              <a
                href={contactLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-heading text-[13px] font-bold uppercase tracking-[0.16em] text-[#2D1A0E] transition-colors hover:text-[#30a14e]"
              >
                Profile
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            {leetCode?.status === "ok" ? (
              <HeatmapGrid
                total={leetCode.calendar.totalContributions}
                weeks={leetCodeWeeks}
                monthLabels={leetCodeMonthLabels}
                toneFor={getLeetCodeTone}
                textColor="#2D1A0E"
                autoScroll
              />
            ) : (
              <div className="text-sm text-[#2D1A0E]/72">
                {leetCodeUsername
                  ? "LeetCode heatmap unavailable right now."
                  : "Add your full LeetCode profile URL to show the heatmap."}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
