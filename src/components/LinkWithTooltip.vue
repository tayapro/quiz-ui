<script setup>
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

const props = defineProps(['tooltip', 'to'])
</script>

<template>
    <!-- <RouterLink :to="{ path: `${props.to}` }"> -->
    <RouterLink :to="props.to">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger as-child>
                    <Button variant="outline"> <slot></slot> </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Go to {{ props.tooltip }} page</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </RouterLink>
</template>
