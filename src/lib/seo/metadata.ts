import type { Metadata } from "next";
import { seoConfig } from "@/config/seo";
import { getSiteUrl, siteConfig } from "@/config/site";

export interface PageMetadataInput {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description = seoConfig.defaultDescription,
  path = "",
  image = seoConfig.ogImagePath,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const baseUrl = getSiteUrl();
  const canonical = path ? `${baseUrl}${path}` : baseUrl;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: imageUrl, alt: siteConfig.name }],
    },
    twitter: {
      card: seoConfig.twitterCard,
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: seoConfig.robots.index, follow: seoConfig.robots.follow },
  };
}

export function buildDefaultMetadata(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: siteConfig.defaultTitle,
      template: siteConfig.titleTemplate,
    },
    description: seoConfig.defaultDescription,
    openGraph: {
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
  };
}
