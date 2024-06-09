<script setup>

const props = defineProps({
    progress: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        default: 'accent-4'
    }
})
</script>

<template>
    <div style="display: flex">
        <div class="shell center-vertically">
            <div class="bar" :style="{ width: progress + '%' }"/>
        </div>
        <span>{{ progress }} %</span>
    </div>
</template>

<style lang="scss">
.shell {
    margin-right: 5px;
    height: 20px;
    width: 70%;
    border: 1px solid var(--color-text);
    border-radius: 10px;
    padding: 1px;
}

.bar {
    height: 16px;
    border-radius: 10px;

    &-primary {
        background: var(--primary-color);
    }

    &-secondary {
        background: var(--secondary-color);
    }

    &-danger {
        background: var(--error);
    }

    &-accent-1 {
        background: var(--color-accent-1);
    }

    &-accent-2 {
        background: var(--color-accent-2);
    }

    &-accent-3 {
        background: var(--color-accent-3);
    }

    &-accent-4 {
        background: var(--color-accent-4);
    }

}

</style>