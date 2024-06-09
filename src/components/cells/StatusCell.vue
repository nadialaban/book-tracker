<script>
import Tag from "@/components/Tag.vue";
import {ref} from "vue";

export default {
    components: {Tag},
    setup(props) {
        let status = props.params.value.toString();
        let color = ref('secondary')

        switch (status) {
            case "COMPLETED":
                color = 'primary'
                break;
            case "READING":
                color = 'secondary'
                break;
            case "PLANNED":
                color = 'accent-3'
                break;
            case "DROPPED":
                color = 'danger'
                break;
            default:
                break;
        }

        return {status, color}
    }
}
</script>

<template>
    <tag :text="status" :color="color"/>
</template>
