import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/LoginUsuario.vue'
import Sobre from './views/SobrePagina.vue'

const routes = [
    { path: '/', name: 'login', component: Login},
    { path: '/sobre', name: 'sobre', component: Sobre},
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router