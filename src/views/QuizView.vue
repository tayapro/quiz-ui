<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const question = ref('')
const answers = ref([])
let answer_index = -1

async function getQuiz() {
    const res = await axios.get(
        'https://96ns4dz4a5.execute-api.eu-west-1.amazonaws.com/dev/api/quiz_question'
    )
    question.value = res.data.question
    answers.value = res.data.options
}

async function onSubmit() {
    if (answer_index === -1) {
        console.log('Choice answer')
        return
    }
    const res = await axios.post(
        'https://96ns4dz4a5.execute-api.eu-west-1.amazonaws.com/dev/api/quiz_answer',
        {
            question: question.value,
            answer_index,
        }
    )
    console.log('From handler: ', res)
}

function onOpt(index) {
    answer_index = index
}

onMounted(async () => {
    await getQuiz()
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
                    <Label for="option-one">{{ answers[0] }}</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem
                        id="option-two"
                        value="option-two"
                        @click="onOpt(1)"
                    />
                    <Label for="option-two">{{ answers[1] }}</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem
                        id="option-three"
                        value="option-three"
                        @click="onOpt(2)"
                    />
                    <Label for="option-three">{{ answers[2] }}</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem
                        id="option-four"
                        value="option-four"
                        @click="onOpt(3)"
                    />
                    <Label for="option-four">{{ answers[3] }}</Label>
                </div>
            </RadioGroup>
            <Button class="mt-4" @click="onSubmit()">Submit</Button>
        </div>
    </div>
</template>
