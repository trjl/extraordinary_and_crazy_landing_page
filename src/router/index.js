import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutPage from "../views/AboutPage";
import ServiceContract from "../views/ServiceContract";
import PrivacyPolicy from "../views/PrivacyPolicy";

const routes = [
  {
    path: "/",
    name: "ANA SAYFA",
    component: Home,
  },
  {
    path: "/",
    name: "HİZMETLER",
    component: Home,
    hash: '#services',
  },
  {
    path: "/",
    name: "PORTFOLYO",
    component: Home,
    hash: '#portfolio',
  },

  {
    path: "/about",
    name: "HAKKIMIZDA & İLETİŞİM",
    component: AboutPage,
  },
  {
    path: "/privacy-policy",
    name: "GİZLİLİK POLİTİKASI",
    component: PrivacyPolicy,
    hideOnMenu: true,
  },
  {
    path: "/service-contract",
    name: "HİZMET SÖZLEŞMESİ",
    component: ServiceContract,
    hideOnMenu: true,
  },
  // {
  //   path: "/.*",
  //   name: '404 Page',
  //   component: Home,
  // }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // scrollBehavior() {
  //   return { top: 0 }
  // },
  scrollBehavior: function(to) {
      if (to.hash) {
        return {
          el: to.hash,
          top: 40,
        };
      } else {
          return { top: 0 }
      }
  },
});

export default router;
