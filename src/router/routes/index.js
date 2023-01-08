import LandingPage from '@/views/Home/LandingPage.vue'
import accommodationsRoutes from "./accommodations";
import accountRoutes from "./account";
import authRoutes from "./auth";
import billingRoutes from "./billing";
import ceremonieRoutes from "./ceremonies";

const homeRoute = {
  path: "/",
  name: "lanldingPage",
  component: LandingPage
}

const routes = [
  homeRoute,
  ...accommodationsRoutes,
  ...accountRoutes,
  ...authRoutes,
  ...billingRoutes,
  ...ceremonieRoutes
];

export default routes