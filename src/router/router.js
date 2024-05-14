import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import QuizView from '@/views/QuizView.vue'
import ProtectedView from '@/views/ProtectedView.vue'
import AuthView from '@/views/AuthView.vue'
import QuizStart from '@/views/QuizStart.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/quiz', component: QuizView },
    { path: '/auth', component: AuthView },
    { path: '/protected', component: ProtectedView },
    { path: '/quiz-start', component: QuizStart },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
