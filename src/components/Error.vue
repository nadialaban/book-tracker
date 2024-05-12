<script setup>
const props = defineProps({
    msg: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    color: {
        type: String,
        default: 'danger'
    }
})
</script>

<template>
    <div :class="['alert', `alert-${color}`]">
        <h3 v-if="title">{{title}}</h3>
        <span>{{msg}}</span>
    </div>
</template>

<style scoped lang="scss">
.alert {
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 7px;
    border: none;
    font-size: 14px;
    transition: .2s;

    &-danger {
        background-color: var(--error-bg);
        color: var(--error-text);
    }
}
</style>