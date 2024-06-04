<script setup>
import useUserStore from '@/stores/user.js'

const userStore = useUserStore()

function logout() {
    userStore.logout()
}
</script>

<template>
    <header class="header">
        <div class="logo-container">
            <img alt="logo" class="logo" src="@/assets/logo.svg" width="35" height="35"/>
            <h2 class="tenor-sans-regular">буктрекер</h2>
        </div>
        <nav>
            <router-link to="/login" @click="logout">Выход</router-link>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background: rgb(255,255,255,0.03);
    padding: 0 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
    height: 50px;
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
}

.logo {
    margin: 0 2rem 0 0;
}

nav {
    font-size: 15px;
    text-align: center;
}

nav a.router-link-exact-active {
    font-weight: bold;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-accent);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 300px) {
    header {
        display: flex;
        place-items: center;
    }

    .logo-container {
        padding: 0 1rem;
        width: 20%;
        display: inline-flex;
        vertical-align: middle;
    }

    .logo {
        margin-right: 10px;
    }

    nav {
        width: 80%;
        text-align: right;
        padding: 1rem 0;
    }
}

</style>