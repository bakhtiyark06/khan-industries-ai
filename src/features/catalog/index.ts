export { getProductBySlug, getAllProductSlugs, products } from "@/content/products";
export { getServiceBySlug, getAllServiceSlugs } from "@/content/services";

import { products } from "@/content/products";
import type { Product } from "@/types";

export function getRelatedProducts(
  currentSlug: string,
  limit = 3,
): Product[] {
  const current = products.find((p) => p.slug === currentSlug);
  if (!current) return products.filter((p) => p.slug !== currentSlug).slice(0, limit);

  const sameCategory = products.filter(
    (p) => p.slug !== currentSlug && p.category === current.category,
  );
  const rest = products.filter(
    (p) =>
      p.slug !== currentSlug &&
      p.category !== current.category &&
      !sameCategory.some((s) => s.slug === p.slug),
  );

  return [...sameCategory, ...rest].slice(0, limit);
}
