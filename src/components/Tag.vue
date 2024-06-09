<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: 'accent-1'
    },
    outlined: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <span :class="['tag', `tag-${color}`, {'tag-outlined': outlined}]">
        {{text}}
    </span>
</template>

<style scoped lang="scss">
.tag {
    margin: 2px 3px 2px 0;
    padding: 2px 4px;
    border-radius: 7px;
    border: none;
    font-size: 14px;
    width: fit-content;

    &-primary {
        background: rgb(from var(--primary-color) r g b / .85);
        color: var(--primary-color-text);
        border: 2px solid var(--primary-color);
    }

    &-secondary {
        background: rgb(from var(--secondary-color) r g b / .85);
        color: var(--secondary-color-text);
        border: 2px solid var(--secondary-color);
    }

    &-danger {
        background: rgb(from var(--error) r g b / .85);
        color: var(--error-text);
        border: 2px solid var(--error);
    }

    &-accent-1 {
        background: rgb(from var(--color-accent-1) r g b / .85);
        color: var(--color-accent-1-text);
        border: 2px solid var(--color-accent-1);
    }

    &-accent-2 {
        background: rgb(from var(--color-accent-2) r g b / .85);
        color: var(--second-color-accent-text);
        border: 2px solid var(--color-accent-2);
    }

    &-accent-3 {
        background: rgb(from var(--color-accent-3) r g b / .85);
        color: var(--color-accent-3-text);
        border: 2px solid var(--color-accent-3);
    }

    &-accent-4 {
        background: rgb(from var(--color-accent-4) r g b / .85);
        color: var(--color-accent-4-text);
        border: 2px solid var(--color-accent-4);
    }

    &-outlined {
        background: transparent;
        color: var(--color-text);
    }
}
</style>