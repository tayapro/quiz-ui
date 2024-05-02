<script setup>
import { Authenticator } from '@aws-amplify/ui-vue'
import { Amplify } from 'aws-amplify'
import { fetchAuthSession } from 'aws-amplify/auth'

import '@aws-amplify/ui-vue/styles.css'
import amplifyConfig from '../amplifyconfiguration.json'
import { onMounted, ref } from 'vue'

Amplify.configure(amplifyConfig)

const userEmail = ref('')

onMounted(async () => {
    const result = await fetchAuthSession()
    console.log(result)
    userEmail.value = result.tokens.idToken.payload.email
})
</script>

<template>
    <Authenticator>
        <template v-slot="{ user, signOut }">
            <h1>Hello {{ user.username }}!</h1>
            <button @click="signOut">Sign Out</button>
            <!-- Other content from before-->
            <h1>Protected</h1>
            <h2>{{ userEmail }}</h2>
        </template>
    </Authenticator>
</template>
