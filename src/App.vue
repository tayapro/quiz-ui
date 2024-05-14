<script setup>
import ThemeToggler from '@/components/ThemeToggler.vue'
import LinkWithTooltip from '@/components/LinkWithTooltip.vue'
</script>

<template>
    <div class="h-dvh grid grid-rows-[auto,1fr]">
        <div class="grid justify-items-stretch grid-flow-col p-5">
            <div class="grid justify-start grid-flow-col gap-5">
                <LinkWithTooltip to="/" tooltip="home">Home</LinkWithTooltip>
                <LinkWithTooltip to="/about" tooltip="about">
                    About
                </LinkWithTooltip>
                <LinkWithTooltip to="/auth" tooltip="auth">
                    Auth
                </LinkWithTooltip>
                <LinkWithTooltip to="/quiz-start" tooltip="quiz-start">
                    Quiz start
                </LinkWithTooltip>
                <LinkWithTooltip to="/quiz" tooltip="quiz">
                    Quiz
                </LinkWithTooltip>
            </div>
            <div class="grid justify-end">
                <ThemeToggler />
            </div>
        </div>
        <div>
            <RouterView />
        </div>
    </div>
</template>
