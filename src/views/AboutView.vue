<script setup>
import { Button } from '@/components/ui/button'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
</script>

<template>
    <div class="h-dvh">
        <div class="h-[50%] flex justify-center bg-red-300 m-8">
            <p class="bg-slate-300 p-8">This is About page</p>
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
        </div>
    </div>
</template>
