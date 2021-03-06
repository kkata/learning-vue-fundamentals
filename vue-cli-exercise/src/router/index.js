import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Locations from "../views/Locations";
import LocationsFromAPI from "../views/LocationsFromAPI";

const routes = [
  {
    path: "/",
    name: "Locations",
    component: Locations,
  },
  {
    path: "/locations-from-api",
    name: "LocationsFromAPI",
    component: LocationsFromAPI,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }), // if page exists parse the string to an integer, otherwise return 1
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
