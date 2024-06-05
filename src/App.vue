<script setup>
import LayoutHeader from './components/layout/Header.vue'

import {ref, onMounted} from "vue";
import {RouterView} from 'vue-router'

import EventBus from "@/event-bus.js";
import {useUserStore} from '@/stores/user'
import {useBookStore} from "@/stores/book.js";

const userStore = useUserStore()
const bookStore = useBookStore()
const isOpenMenu = ref(false);

onMounted(() => {
    if (localStorage.getItem('userTokens')) {
        userStore.isAuthorised = true
        userStore.loadUserInfo()
    }

    EventBus.on('got-user-info', () => {
        bookStore.loadUserBooks(userStore.userInfo.id)
    })
})

const toggleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
};
</script>

<template>
    <div class="container">
        <layout-header v-if="userStore.isAuthorised"/>
        <div :class="['content', { 'content-full': !isOpenMenu }]">
            <RouterView/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    margin-left: 250px;
    padding: 30px;
    transition: 0.2s;

    &-full {
        margin-left: 0;
    }
}

@media screen {
    .content {
        margin-left: 0;
    }
}
</style>
