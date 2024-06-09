<script>
import Tag from "@/components/Tag.vue";

export default {
    components: {Tag},
    setup(props) {
        let objects = props.params.value;
        let tags = []
        let color = 'accent-1'

        switch (props.params.column.colId){
            case 'authors':
                tags = objects.map((a) => a.author)
                break
            case 'genres':
                tags = objects.map((g) => g.genre)
                break
        }

        return {tags, color}
    }
}
</script>

<template>
    <tag :text="tag" :color="color" v-for="tag in tags"/>
</template>