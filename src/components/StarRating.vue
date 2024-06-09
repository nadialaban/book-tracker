<script setup>
import {ref} from "vue";

const props = defineProps({
    rate: {
        type: Number,
        required: true
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const starsRate = ref(props.rate)
</script>

<template>
        <vue3-star-ratings v-model="starsRate"
                           star-color="#fab245" inactive-color="#252d27aa"
                           :disable-click="disabled"/>

</template>

<style scoped>
.vue3-star-ratings {
    position: absolute;
    top: 50%;

    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
</style>