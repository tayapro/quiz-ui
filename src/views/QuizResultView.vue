<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from '../store/quizStore'
import apiQuiz from '@/api/quiz.js'
import mamkinHacker from '../api/quiz.js'

const myscore = ref('')

const store = useStore()
onMounted(async () => {
    let score = 0
    for (let i = 0; i < 100; i++) {
        const res = await mamkinHacker.submitAnswer(99999999, 0)
        myscore.value = res.score
    }
})
</script>

<template>
    <div class="grid h-full place-items-center">
        <h1>Result view</h1>
        <h2>{{ 1 }}</h2>
        <h1>My score</h1>
        <h2>{{ myscore }}</h2>
    </div>
</template>
