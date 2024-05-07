import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import QuizView from '@/views/QuizView.vue'
import ProtectedView from '@/views/ProtectedView.vue'
import AuthView from '@/views/AuthView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/quiz', component: QuizView },
    { path: '/auth', component: AuthView },
    { path: '/protected', component: ProtectedView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
