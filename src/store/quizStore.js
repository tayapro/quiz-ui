import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('quests', () => {
    const category = ref('')
    const quiz_id = ref(0)

    return {
        category,
        quiz_id,
    }
})
