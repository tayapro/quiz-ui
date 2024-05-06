<script setup>
import { Authenticator } from '@aws-amplify/ui-vue'
import { Amplify } from 'aws-amplify'
import { fetchAuthSession } from 'aws-amplify/auth'

import '@aws-amplify/ui-vue/styles.css'
import amplifyConfig from '../amplifyconfiguration.json'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { Button } from '@/components/ui/button'

Amplify.configure(amplifyConfig)

const userEmail = ref('')

onMounted(async () => {
    const result = await fetchAuthSession()
    console.log(result)
    userEmail.value = result.tokens.idToken.payload.email
    console.log(result.tokens.idToken.toString())
})

async function onSendHello() {
    const result = await fetchAuthSession()
    const token = result.tokens.idToken.toString()
    const res = await axios.get(
        'https://96ns4dz4a5.execute-api.eu-west-1.amazonaws.com/dev/hello',
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )
    console.log('Res from Hello', res)
}
</script>

<template>
    <Authenticator>
        <template v-slot="{ user, signOut }">
            <h1>Hello {{ user.username }}!</h1>
            <button @click="signOut">Sign Out</button>
            <!-- Other content from before-->
            <h1>Protected</h1>
            <h2>{{ userEmail }}</h2>
            <Button @click="onSendHello()">Send Hello</Button>
        </template>
    </Authenticator>
</template>
