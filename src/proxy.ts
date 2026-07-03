/**
 * Future auth proxy — NOT active in Phase 1.
 * When (app) and (admin) ship, enable session checks for:
 * matcher: ['/dashboard/:path*', '/portal/:path*', '/marketplace/:path*', '/admin/:path*']
 */
export function proxy() {
  // Phase 1: marketing routes are fully public — no proxy logic.
}

export const config = {
  matcher: [],
};
