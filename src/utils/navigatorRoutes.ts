import { pages } from "./pages";

export const navigatorRoutes = {
  account: [
    {
      label: pages.home.label,
      path: pages.home.path,
    },
    {
      label: pages.account.label,
      path: pages.account.path,
      active: true,
    },
  ],
  docs: [
    {
      label: pages.home.label,
      path: pages.home.path,
    },
    {
      label: pages.docs.label,
      path: pages.docs.path,
      active: true,
    },
  ],
  pricing: [
    {
      label: pages.home.label,
      path: pages.home.path,
    },
    {
      label: pages.pricing.label,
      path: pages.pricing.path,
      active: true,
    },
  ],
  signIn: [
    {
      label: pages.home.label,
      path: pages.home.path,
    },
    {
      label: pages.signIn.label,
      path: pages.signIn.path,
      active: true,
    },
  ],
  manageSubscription: [
    {
      label: pages.home.label,
      path: pages.home.path,
    },
    {
      label: pages.account.label,
      path: pages.account.path,
    },
    {
      label: pages.manageSubscription.label,
      path: pages.manageSubscription.path,
      active: true,
    },
  ],
};
