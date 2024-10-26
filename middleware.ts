import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/settings(.*)',
  '/api/stripe(.*)',
  '/testimonials(.*)',
  '/forms(.*)',
  '/tags(.*)',
  '/widgets(.*)',
  '/creator(.*)',
  '/share(.*)',
  '/projects(.*)'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
