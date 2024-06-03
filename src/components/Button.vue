<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: 'primary'
    },
    disabled: {
        type: Boolean,
        required: false
    },
    transparent: {
        type: Boolean,
        required: false
    },
    outlined: {
        type: Boolean,
        required: false
    },
    withIcon: {
        type: Boolean,
        required: false
    },
    size: {
        type: String,
        default: 'normal'
    },
    block: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['click'])

const clickOnButton = () => {
    emit('click')
}
</script>

<template>
    <button
        :class="['btn', `btn-${color}`, {'btn-outlined': outlined}, {'btn-icon': withIcon}, {'btn-large': size === 'large'}, {'btn-block': block}]"
        :disabled="disabled" @click="clickOnButton" :label="label">
        <span v-if="withIcon"><slot></slot></span>
        <span v-else>{{ label }}</span>
    </button>
</template>

<style scoped lang="scss">
.btn {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0 20px;
    height: 40px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    transition: .2s;

    &-primary {
        background: var(--primary-color);
        color: var(--primary-color-text);
        border: 1px solid var(--primary-color);

        &:enabled:hover {
            background: var(--primary-color-hover);
        }
    }

    &-secondary {
        background: var(--secondary-color);
        color: var(--secondary-color-text);
        border: 1px solid var(--secondary-color);

        &:enabled:hover {
            background: var(--secondary-color-hover);
        }
    }

    &-danger {
        background: var(--error);
        border: 1px solid var(--error);
        color: var(--error-text);

        &:enabled:hover {
            background: var(--error-hover);
        }
    }

    &:disabled {
        opacity: .6;
        cursor: default;
    }

    &-outlined {
        background: transparent;
        color: var(--color-text);

        &:hover {
            color: rgba(255, 255, 255, 0.5);
        }
    }

    &-icon {
        padding: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    &-large {
        height: 48px;
        padding: 0 30px;
    }

    &-block {
        width: 100%;
    }
}
</style>