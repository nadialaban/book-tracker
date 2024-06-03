<script setup>
import {ref} from 'vue'
import useUserStore from '@/stores/user.js'

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import Error from '@/components/Error.vue'
import router from "@/router/index.js";

const usernameField = ref('')
const passwordField = ref('')

const errorName = ref('')
const errorMsg = ref('')

const userStore = useUserStore()

async function login() {
    try {
        await userStore.auth({
            username: usernameField.value,
            password: passwordField.value
        })

        await router.push('/')
    } catch (e)  {
        errorMsg.value = e
    }
}

</script>

<template>
    <div class="container">
        <div class="content">
            <img alt="logo" class="logo" src="@/assets/logo.svg" width="100" height="100"/>
            <h2 class="tenor-sans-regular">буктрекер</h2>
            <Input name="username" placeholder="Введите логин" label="Логин"
                   width="100%"
                   v-model:value="usernameField"/>

            <Input name="password" placeholder="Введите пароль" label="Пароль"
                   type="password" width="100%"
                   v-model:value="passwordField"/>

            <Button label="Войти" :block="true" @click="login"/>

            <error :msg="errorMsg" :title="errorName" v-if="errorMsg"/>
        </div>
    </div>
</template>

<style scoped>
.content {
    justify-content: center;
    width: 90%;
    min-width: 120px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}

h2 {
    margin-bottom: 2rem;
    text-align: center;
}
</style>