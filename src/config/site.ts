export const siteConfig = {
  name: "Khan Industries",
  legalName: "Khan Industries",
  titleTemplate: "%s | Khan Industries",
  defaultTitle: "Khan Industries",
  description:
    "Khan Industries builds intelligent technology — AI agents, automation, premium websites, and software that helps businesses operate better.",
  locale: "en-US",
  founder: "Bakhtiyar Khan",
} as const;

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (url) return url.replace(/\/$/, "");
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
