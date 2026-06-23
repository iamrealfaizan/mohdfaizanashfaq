export interface LeetCodeHeatmapDay {
  contributionCount: number;
  date: string;
}

export interface LeetCodeHeatmapWeek {
  contributionDays: LeetCodeHeatmapDay[];
}

export interface LeetCodeHeatmapCalendar {
  totalContributions: number;
  weeks: LeetCodeHeatmapWeek[];
}

export type LeetCodeHeatmapResult =
  | {
      status: "ok";
      calendar: LeetCodeHeatmapCalendar;
      username: string;
    }
  | {
      status: "unavailable";
      username: string;
    };

interface LeetCodeGraphQLResponse {
  data?: {
    matchedUser?: {
      userCalendar?: {
        submissionCalendar?: string;
      };
    };
  };
}

function formatUtcDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export async function getLeetCodeHeatmap(
  username: string
): Promise<LeetCodeHeatmapResult> {
  try {
    const response = await fetch("https://leetcode.com/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query userProfileCalendar($username: String!) {
            matchedUser(username: $username) {
              userCalendar {
                submissionCalendar
              }
            }
          }
        `,
        variables: {
          username,
        },
      }),
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return { status: "unavailable", username };
    }

    const payload = (await response.json()) as LeetCodeGraphQLResponse;
    const submissionCalendar =
      payload.data?.matchedUser?.userCalendar?.submissionCalendar;

    if (!submissionCalendar) {
      return { status: "unavailable", username };
    }

    const parsed = JSON.parse(submissionCalendar) as Record<string, number>;
    const byDate = new Map<string, number>();

    for (const [timestamp, count] of Object.entries(parsed)) {
      const isoDate = new Date(Number(timestamp) * 1000).toISOString().slice(0, 10);
      byDate.set(isoDate, Number(count));
    }

    const today = new Date();
    const start = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    start.setUTCDate(start.getUTCDate() - 364);

    const calendarDays: LeetCodeHeatmapDay[] = [];

    for (let offset = 0; offset < 365; offset += 1) {
      const current = new Date(start);
      current.setUTCDate(start.getUTCDate() + offset);
      const isoDate = formatUtcDate(current);

      calendarDays.push({
        date: isoDate,
        contributionCount: byDate.get(isoDate) ?? 0,
      });
    }

    const firstWeekday = new Date(`${calendarDays[0].date}T00:00:00Z`).getUTCDay();
    const paddedDays = [...calendarDays];

    for (let index = 0; index < firstWeekday; index += 1) {
      paddedDays.unshift({
        date: `pad-start-${index}`,
        contributionCount: 0,
      });
    }

    while (paddedDays.length % 7 !== 0) {
      paddedDays.push({
        date: `pad-end-${paddedDays.length}`,
        contributionCount: 0,
      });
    }

    const weeks: LeetCodeHeatmapWeek[] = [];

    for (let index = 0; index < paddedDays.length; index += 7) {
      weeks.push({
        contributionDays: paddedDays.slice(index, index + 7),
      });
    }

    return {
      status: "ok",
      username,
      calendar: {
        totalContributions: calendarDays.reduce(
          (sum, day) => sum + day.contributionCount,
          0
        ),
        weeks,
      },
    };
  } catch {
    return { status: "unavailable", username };
  }
}
