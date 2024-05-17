<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useStore } from '../store/quizStore'
import apiQuiz from '@/api/quiz.js'

const store = useStore()
const router = useRouter()

const question = ref('')
const options = ref([])
const quest_counter = ref(0)
const quiz_id = ref(0)
let answer_index = -1

async function getQuiz() {
    const res = await axios.get(
        'https://96ns4dz4a5.execute-api.eu-west-1.amazonaws.com/dev/api/quiz_question'
    )
    question.value = res.data.question
    options.value = res.data.options
}

async function onSubmit() {
    if (answer_index === -1) {
        console.log('Choice answer')
        return
    }

    // get next quest
    const next_quest = await apiQuiz.submitAnswer(store.quiz_id, answer_index)
    if (next_quest.score !== undefined) {
        console.log('BLA', next_quest.score)
        router.push({ path: '/quiz-result' })
        return
    }
    // console.log(next_quest)
    question.value = next_quest.question
    options.value = next_quest.options

    // const res = await axios.post(
    //     'https://96ns4dz4a5.execute-api.eu-west-1.amazonaws.com/dev/api/quiz_answer',
    //     {
    //         question: question.value,
    //         answer_index,
    //     }
    // )
    // console.log('From handler: ', res.data.correct)
    // if (res.data.correct === true) {
    //     store.answer_counter++
    //     console.log('Store.answer_counter.value = ', store.answer_counter.value)
    // }
    // await getQuiz()

    // quest_counter.value++
    // if (quest_counter.value === 10) {
    //     router.push({ path: '/quiz-result' })
    // }
}

function onOpt(index) {
    answer_index = index
}

onMounted(async () => {
    const quest = await apiQuiz.getNextQuestion(store.quiz_id)
    console.log(quest)
    question.value = quest.question
    options.value = quest.options
})
</script>

<template>
    <div class="grid justify-center items-center gap-5 mt-5">
        <div>
            <p class="text-5xl">{{ question }}</p>
        </div>
        <div>
            <RadioGroup>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem
                        id="option-one"
                        value="option-one"
                        @click="onOpt(0)"
                    />
                    <Label for="option-one">{{ options[0] }}</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem
                        id="option-two"
                        value="option-two"
                        @click="onOpt(1)"
                    />
                    <Label for="option-two">{{ options[1] }}</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem
                        id="option-three"
                        value="option-three"
                        @click="onOpt(2)"
                    />
                    <Label for="option-three">{{ options[2] }}</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem
                        id="option-four"
                        value="option-four"
                        @click="onOpt(3)"
                    />
                    <Label for="option-four">{{ options[3] }}</Label>
                </div>
            </RadioGroup>
            <Button class="mt-4" @click="onSubmit()">Submit</Button>
        </div>
    </div>
</template>
