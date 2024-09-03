// import PaginaAristoteles from "@/PaginaAristoteles.vue";
// import PaginaPlatao from "@/PaginaPlatao.vue";
// import PaginaSocrates from "@/PaginaSocrates.vue";
// import HelloWorld from "@/components/HelloWorld.vue";

import { createRouter, createWebHistory } from 'vue-router';

const Inicio = () => import('./src/components/HelloWorld.vue');
const Aristoteles = () => import('./src/PaginaAristoteles.vue');
const Platao = () => import('./src/PaginaPlatao.vue');
const Socrates = () => import('./src/PaginaSocrates.vue');
const Imagens = () => import('./src/PaginaImagens.vue')

  const routes = [
    {
      path: '/inicio',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/aristoteles',
      name: 'Aristoteles',
      component: Aristoteles
    },
    {
      path: '/platao',
      name: 'Platao',
      component: Platao
    },
    {
      path: '/socrates',
      name: 'Socrates',
      component: Socrates
    },
    {
      path: '/imagens',
      name: 'Imagens',
      component: Imagens
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
