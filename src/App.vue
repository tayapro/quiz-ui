<script setup>
import { Button } from '@/components/ui/button'
import ThemeToggler from './components/ThemeToggler.vue'
</script>

<template>
    <div class="h-dvh">
        <div class="h-[50%] flex gap-4 justify-center items-center">
            <div class="h-12 w-12 bg-red-600"></div>
            <div class="h-12 w-12 bg-green-500"></div>
            <Button @click="console.log('Button')" variant="secondary"
                >Button</Button
            >
            <ThemeToggler />
        </div>
        <p class="mt-6 px-6 text-xs text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            distinctio ea nisi, in perferendis aut, mollitia cupiditate eos
            molestiae nihil voluptate quasi tenetur amet dolorum delectus rem
            consectetur. Quisquam, quis?
        </p>
    </div>
</template>
