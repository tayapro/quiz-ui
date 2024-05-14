<script setup>
import { ref } from 'vue'
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

const quiz_categories = ['Apples', 'Fruits', 'Sausage', 'Products']

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

const onSubmit = handleSubmit((values) => {
    console.log(values.category)
    console.log(values.index)
    console.log(
        'You submitted the following values:',
        JSON.stringify(values, null, 2)
    )
})
</script>

<template>
    <div class="grid h-full place-items-center">
        <div class="grid gap-5">
            <form class="w-2/3 space-y-6" @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="category">
                    <FormItem>
                        <FormLabel>Quiz topics</FormLabel>

                        <Select v-bind="componentField">
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
                                        <span @click="apiApi(index)">
                                            {{ category }}</span
                                        >
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <Button type="submit"> Submit </Button>
            </form>
        </div>
    </div>
</template>
