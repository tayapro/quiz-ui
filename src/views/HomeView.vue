<script setup>
import { Button } from '@/components/ui/button'
import ThemeToggler from '@/components/ThemeToggler.vue'
import LinkWithTooltip from '@/components/LinkWithTooltip.vue'
</script>

<template>
    <div class="h-dvh bg-cyan-800">
        <div class="h-[20%] flex justify-center items-center">
            <h1 class="text-5xl">Welcome to Quizward!</h1>
        </div>

        <div class="grid gap-2 justify-center grid-flow-col">
            <LinkWithTooltip to="/" tooltip="home">Home</LinkWithTooltip>
            <LinkWithTooltip to="/about" tooltip="about">About</LinkWithTooltip>
            <LinkWithTooltip to="/protected" tooltip="protected"
                >Protected</LinkWithTooltip
            >
            <ThemeToggler />
        </div>
    </div>
</template>
