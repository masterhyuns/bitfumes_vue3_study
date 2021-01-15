import Calendar from "@/pages/Calendar";
import DcHeroes from "@/pages/DcHeroes";
import Home from "@/pages/Home";
import Markdown from "@/pages/Markdown";
import Slider from "@/pages/Slider";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: Home },
  { path: "/dc-heroes", component: DcHeroes },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
