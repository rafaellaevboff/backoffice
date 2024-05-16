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
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router