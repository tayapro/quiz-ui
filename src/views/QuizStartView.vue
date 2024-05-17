<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
} from '@/components/ui/select'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { useStore } from '../store/quizStore'
import { useRouter } from 'vue-router'
import apiQuiz from '@/api/quiz.js'

const store = useStore()
const quiz_categories = ['Apples', 'Fruits', 'Sausage', 'Products']
const router = useRouter()

const formSchema = toTypedSchema(
    z.object({
        category: z.string({
            required_error: 'Please select a category to display.',
        }),
    })
)

const { handleSubmit } = useForm({
    validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
    // console.log(
    //     'You submitted the following value:',
    //     JSON.stringify(values, null, 2)
    // )

    store.category = values.category
    // console.log('QuizStart: store category - ', store.category)
    const res = await apiQuiz.startQuiz()
    store.quiz_id = res.quiz_id

    router.push({ path: '/quiz' })
})
</script>

<template>
    <div class="grid h-full place-items-center">
        <div class="grid gap-5 w-1/3">
            <form class="grid space-y-5" @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="category">
                    <FormItem>
                        <FormLabel>Quiz topics</FormLabel>

                        <Select
                            class="grid space-x-5 space-y-5"
                            v-bind="componentField"
                        >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue
                                        placeholder="Select a quiz's topic"
                                    />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem
                                        :value="category"
                                        v-for="(
                                            category, index
                                        ) in quiz_categories"
                                        :key="index"
                                    >
                                        <span>{{ category }}</span>
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <Button type="submit">Submit</Button>
            </form>
        </div>
    </div>
</template>
