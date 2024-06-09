<script setup>
import {onMounted} from "vue";

import BookLoader from "@/components/icons/BookLoader.vue";

import {useBookStore} from '@/stores/book'
import {useUserStore} from "@/stores/user.js";
import EventBus from "@/event-bus.js";
import DataGrid from "@/components/DataGrid.vue";

const bookStore = useBookStore()
const userStore = useUserStore()

onMounted(() => {
    EventBus.on('got-user-info', () => {
        bookStore.loadUserBooks(userStore.userInfo.id)
    })
})
</script>

<template>
    <main>
        <book-loader v-if="bookStore.loading"/>
        <div v-else>
            <data-grid/>
        </div>
    </main>
</template>

<style scoped>
</style>