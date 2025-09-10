import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";

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
