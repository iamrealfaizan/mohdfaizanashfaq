export interface GitHubContributionDay {
  contributionCount: number;
  date: string;
  weekday: number;
}

export interface GitHubContributionWeek {
  contributionDays: GitHubContributionDay[];
}

export interface GitHubContributionCalendar {
  totalContributions: number;
  weeks: GitHubContributionWeek[];
}

export type GitHubContributionResult =
  | {
      status: "ok";
      calendar: GitHubContributionCalendar;
      from: string;
      to: string;
      username: string;
    }
  | {
      status: "missing-token" | "unavailable";
      username: string;
    };

interface GitHubGraphQLResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              contributionCount: number;
              date: string;
              weekday: number;
            }>;
          }>;
        };
      };
    };
  };
}

export function getGitHubUsername(githubUrl: string) {
  return githubUrl.replace(/\/+$/, "").split("/").pop() ?? githubUrl;
}

export async function getGitHubContributionCalendar(
  username: string
): Promise<GitHubContributionResult> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return { status: "missing-token", username };
  }

  const to = new Date();
  const from = new Date(to);
  from.setUTCDate(from.getUTCDate() - 364);

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GitHubContributionCalendar(
            $login: String!
            $from: DateTime!
            $to: DateTime!
          ) {
            user(login: $login) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                      weekday
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          login: username,
          from: from.toISOString(),
          to: to.toISOString(),
        },
      }),
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return { status: "unavailable", username };
    }

    const payload = (await response.json()) as GitHubGraphQLResponse;
    const calendar =
      payload.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return { status: "unavailable", username };
    }

    return {
      status: "ok",
      calendar,
      from: from.toISOString(),
      to: to.toISOString(),
      username,
    };
  } catch {
    return { status: "unavailable", username };
  }
}
