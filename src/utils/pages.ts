export const pages = {
  home: {
    label: "Home",
    path: "/",
  },
  signIn: {
    label: "Sign In",
    path: "/sign-in",
  },
  docs: {
    label: "Documentation",
    path: "/documentation",
  },
  pricing: {
    label: "Pricing",
    path: "/pricing",
  },
  account: {
    label: "Account",
    path: "/account",
  },
  manageSubscription: {
    label: "Manage Subscription",
    path: "/account/manage-subscription",
  },
};

export const priceOfPlans = {
  free: {
    monthly: 0,
    requestLimit: 200,
  },
  pro: {
    monthly: 49,
    requestLimit: "50k",
  },
};

export const pricingPlans = [
  {
    title: "Free",
    price: priceOfPlans.free.monthly,
    per: "mo",
    badge: "Free",
    button: "Sign Up for Free",
    target: "",
    buttonAction: "/sign-in",
    color: "light-blue",
    features: [
      `${priceOfPlans.free.requestLimit} requests / day`,
      "No Credit Card Required",
      "General Metadata available",
    ],
  },
  {
    title: "Standard",
    price: priceOfPlans.pro.monthly,
    per: "mo",
    badge: "Most Popular",
    button: "Contact Us",
    target: "_blank",
    buttonAction: "https://www.abhidadhaniya.com/contact",
    color: "indigo",
    features: [
      `${priceOfPlans.pro.requestLimit} requests / day`,
      "No monthly fee - only pay when you need it",
      "Credit Card Required",
      "Advance Metadata available",
    ],
  },
];
