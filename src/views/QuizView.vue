<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const question = ref('')
const answers = ref([])

async function getQuiz() {
    const res = await axios.get(
        'https://96ns4dz4a5.execute-api.eu-west-1.amazonaws.com/dev/api/quiz_question'
    )
    console.log('Res from quizQuestion', res)
    question.value = res.data.question
    answers.value = res.data.options
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
            <RadioGroup default-value="option-one">
                <div class="flex items-center space-x-2">
                    <RadioGroupItem id="option-one" value="option-one" />
                    <Label for="option-one">{{ answers[0] }}</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem id="option-two" value="option-two" />
                    <Label for="option-two">{{ answers[1] }}</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem id="option-three" value="option-three" />
                    <Label for="option-three">{{ answers[2] }}</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem id="option-four" value="option-four" />
                    <Label for="option-four">{{ answers[3] }}</Label>
                </div>
            </RadioGroup>
            <Button class="mt-4">Submit</Button>
        </div>
    </div>
</template>
