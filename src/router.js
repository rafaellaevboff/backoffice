import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/LoginUsuario.vue'
import PaginaInicial from './views/TelaInicial.vue'

const routes = [
    {   
        path: '/',
        name: 'login',
        component: Login
    },
    {   
        path: '/paginaInicial',
        name: 'paginaInicial',
        component: PaginaInicial,
        meta: { requiresAuth: true }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Middleware de autenticação
router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('login'));
    if (to.matched.some(record => record.meta.requiresAuth) && !user) {
      next('/');
    } else {
      next();
    }
  });

export default router