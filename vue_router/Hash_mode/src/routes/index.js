import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Docs from "./Docs";
import DocsId from "./DocsId";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/documents",
      component: Docs,
    },
    {
      path: "/documents/:id",
      name: "docsId",
      component: DocsId,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
