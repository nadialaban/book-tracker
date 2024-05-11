<script setup>
import {ref} from 'vue'
import useUserStore from '@/stores/user.js'

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

const usernameField = ref('')
const passwordField = ref('')

const userStore = useUserStore()

function login() {
    console.log('login!')
    userStore.auth({
        username: usernameField,
        password: passwordField
    })
}

</script>

<template>
    <div class="container">
        <div class="content">
            <img alt="logo" class="logo" src="@/assets/logo.svg" width="100" height="100"/>
            <h2 class="tenor-sans-regular">буктрекер</h2>
            <Input name="username" placeholder="Введите логин" label="Логин"
                   v-model:value="usernameField"/>

            <Input name="password" placeholder="Введите пароль" label="Пароль" type="password"
                   v-model:value="passwordField"/>

            <Button label="Войти" @click="login"/>
        </div>
    </div>
</template>

<style scoped>
.content {
    justify-content: center;
    display: grid;
}

h2 {
    margin-bottom: 2rem;
    text-align: center;
}
</style>