/** Route path constants — single source for URLs across the platform. */
export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  solutions: "/solutions",
  solution: (slug: string) => `/solutions/${slug}` as const,
  products: "/products",
  product: (slug: string) => `/products/${slug}` as const,
  // Future — not implemented Phase 1
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
  portal: "/portal",
  marketplace: "/marketplace",
  developers: "/developers",
  admin: "/admin",
  insights: "/insights",
  portfolio: "/portfolio",
  careers: "/careers",
} as const;

export const marketingStaticRoutes = [
  routes.home,
  routes.about,
  routes.contact,
  routes.solutions,
  routes.products,
] as const;
