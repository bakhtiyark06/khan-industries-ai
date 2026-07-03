import type { MetadataRoute } from "next";
import { marketingStaticRoutes, routes } from "@/config/routes";
import { getSiteUrl } from "@/config/site";
import { getAllProductSlugs } from "@/content/products";
import { getAllServiceSlugs } from "@/content/services";
import { getServiceBySlug } from "@/features/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();

  const staticEntries = marketingStaticRoutes.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const productEntries = getAllProductSlugs().map((slug) => ({
    url: `${baseUrl}${routes.product(slug)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const serviceEntries = getAllServiceSlugs()
    .filter((slug) => getServiceBySlug(slug)?.featured)
    .map((slug) => ({
      url: `${baseUrl}${routes.solution(slug)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [...staticEntries, ...productEntries, ...serviceEntries];
}
