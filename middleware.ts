import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/",
  "dashboard", // Add any additional routes here
]);
// Update clerkMiddleware to manually protect routes
export default clerkMiddleware((auth, req) => {
  console.log(req, "ayush@123------>");
  console.log("ayush---->required-event");
  if (isProtectedRoute(req)) {
    auth().protect(); // Protect the route if it matches the defined criteria
  }
});
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "dashboard", "/(api|trpc)(.*)"],
};
