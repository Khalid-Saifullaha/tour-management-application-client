import AddTour from "@/pages/Admin/AddTour";
import { lazy } from "react";
// import Analytics from "@/pages/Admin/Analytics";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

const adminSidebarItems = [
  {
    title: "Dashboard",

    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Tour Management",

    items: [
      {
        title: "Add Tour",
        url: "/admin/add-tour",
        component: AddTour,
      },
      {
        title: "Ha Ha",
        url: "/admin/ha-ha",
        component: AddTour,
      },
    ],
  },
];

export default adminSidebarItems;
