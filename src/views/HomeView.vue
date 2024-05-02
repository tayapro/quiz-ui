<script setup>
import { Button } from '@/components/ui/button'
import ThemeToggler from '@/components/ThemeToggler.vue'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
</script>

<template>
    <div class="h-dvh">
        <div class="h-[10%] flex justify-center items-center">
            <h2 class="text-muted-foreground">Home page</h2>
        </div>

        <div class="grid gap-2 justify-center grid-flow-col">
            <RouterLink to="/">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="outline"> Home </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Go to Home page</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </RouterLink>
            <RouterLink to="/about">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="outline"> About </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Go to About page</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </RouterLink>
            <RouterLink to="/protected">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="outline"> Protected </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Go to Protected page</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </RouterLink>
            <ThemeToggler />
        </div>
    </div>
</template>
