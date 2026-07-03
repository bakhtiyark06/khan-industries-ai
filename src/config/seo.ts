export const seoConfig = {
  titleTemplate: "%s | Khan Industries",
  defaultDescription:
    "Khan Industries builds intelligent technology — AI agents, automation, premium websites, and software that helps businesses operate better.",
  ogImagePath: "/images/og-default.png",
  twitterCard: "summary_large_image" as const,
  robots: {
    index: true,
    follow: true,
  },
} as const;
