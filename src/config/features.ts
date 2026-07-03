export const features = {
  insights: false,
  portfolio: false,
  industries: false,
  careers: false,
  portal: false,
  marketplace: false,
  auth: false,
  admin: false,
  developers: false,
  newsletter: false,
} as const;

export type FeatureFlags = typeof features;
