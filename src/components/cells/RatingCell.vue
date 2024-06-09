<script>

import StarRating from "@/components/StarRating.vue";

export default {
    components: {StarRating},
    setup(props) {
        let rate = parseInt(props.params.value);
        if (!rate) rate = 0

        let color = 'accent-2'

        switch (props.params.column.colId) {
            case 'rating':
                color = 'accent-2'
                break
        }

        return {rate, color}
    }
}
</script>

<template>
    <star-rating :rate="rate" :disabled="true"/>
</template>

<style scoped>
</style>
