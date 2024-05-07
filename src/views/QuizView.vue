<script setup>
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
</script>

<template>
    <div class="grid justify-center items-center gap-5 mt-5">
        <div>
            <p class="text-5xl">What city is a capital in Ireland?</p>
        </div>
        <div>
            <RadioGroup default-value="option-one">
                <div class="flex items-center space-x-2">
                    <RadioGroupItem id="option-one" value="option-one" />
                    <Label for="option-one">Option One</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem id="option-two" value="option-two" />
                    <Label for="option-two">Option Two</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem id="option-three" value="option-three" />
                    <Label for="option-three">Option Three</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroupItem id="option-four" value="option-four" />
                    <Label for="option-four">Option Four</Label>
                </div>
            </RadioGroup>
            <Button class="mt-4">Submit</Button>
        </div>
    </div>
</template>
