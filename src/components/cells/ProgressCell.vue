<script>
import ProgressBar from "@/components/ProgressBar.vue";

export default {
    components: {ProgressBar},
    setup(props) {
        let progress = parseInt(props.params.value);
        let color = 'accent-1'

        switch (props.params.column.colId) {
            case 'progress':
                color = 'accent-2'
                break
        }

        return {progress, color}
    }
}
</script>

<template>
    <progress-bar :progress="progress" :color="color"/>
</template>
