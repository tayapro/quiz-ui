import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('quests', () => {
    const category = ref('')

    return {
        category,
    }
})
