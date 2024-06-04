<script setup>
import LayoutHeader from './components/layout/Header.vue'

import {ref, onMounted} from "vue";
import {RouterView} from 'vue-router'

import {useUserStore} from '@/stores/user'

const userStore = useUserStore()
const isOpenMenu = ref(false);

onMounted(() => {
    if (localStorage.getItem('userTokens')) {
        userStore.isAuthorised = true
        userStore.loadUserInfo()
    }
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
    max-width: 1400px;
    margin-left: 250px;
    padding: 30px;
    transition: 0.2s;

    &-full {
        margin-left: 0;
    }
}

@media screen and (max-width: 1023px) {
    .content {
        margin-left: 0;
    }
}
</style>
