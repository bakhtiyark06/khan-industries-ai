import { getSiteUrl, siteConfig } from "@/config/site";

export function buildOrganizationJsonLd() {
  const baseUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: baseUrl,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
  };
}
