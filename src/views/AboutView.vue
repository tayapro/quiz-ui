<script setup>
import { Button } from '@/components/ui/button'
import LinkWithTooltip from '@/components/LinkWithTooltip.vue'
</script>

<template>
    <div class="h-dvh">
        <div class="h-[50%] flex justify-center bg-red-300 m-8">
            <p class="bg-slate-300 p-8">This is About page</p>
        </div>
        <div class="grid gap-2 justify-center grid-flow-col">
            <LinkWithTooltip to="/" tooltip="home">Home</LinkWithTooltip>
            <LinkWithTooltip to="/about" tooltip="about">About</LinkWithTooltip>
        </div>
    </div>
</template>
