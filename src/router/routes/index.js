import LandingPage from '@/views/Home/LandingPage.vue'
import accommodationsRoutes from "./accommodations";
import accountRoutes from "./account";
import authRoutes from "./auth";
import billingRoutes from "./billing";
import ceremonieRoutes from "./ceremonies";
import leisuresRoutes from './leisures';
import magazinesRoutes from './magazines';
import schoolSupportRoutes from './schoolSupport';
import settingsRoutes from './settings';
import storeRoutes from './store';
import trainingsRoutes from './trainings';

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
  ...ceremonieRoutes,
  ...leisuresRoutes,
  ...magazinesRoutes,
  ...schoolSupportRoutes,
  ...settingsRoutes,
  ...storeRoutes,
  ...trainingsRoutes
];

export default routes