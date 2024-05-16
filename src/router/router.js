import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import QuizView from '@/views/QuizView.vue'
import ProtectedView from '@/views/ProtectedView.vue'
import AuthView from '@/views/AuthView.vue'
import QuizStartView from '@/views/QuizStartView.vue'
import QuizResultView from '@/views/QuizResultView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/quiz-start', component: QuizStartView },
    { path: '/quiz', component: QuizView },
    { path: '/auth', component: AuthView },
    { path: '/quiz-result', component: QuizResultView },
    { path: '/protected', component: ProtectedView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
