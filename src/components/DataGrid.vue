<script setup>
import {AgGridVue} from "ag-grid-vue3"
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

import {useBookStore} from "@/stores/book.js";
import {ref} from "vue";

import TagsCell from "@/components/cells/TagsCell.vue";
import StatusCell from "@/components/cells/StatusCell.vue";
import ProgressCell from "@/components/cells/ProgressCell.vue";
import RatingCell from "@/components/cells/RatingCell.vue";

const bookStore = useBookStore()


const agColumnDefs = ref([
    {field: 'title', flex: 2, pinned: 'left', lockPinned: true},
    {field: 'authors', flex: 1, cellRenderer: TagsCell, cellDataType: false},
    {field: 'genres', flex: 1, cellRenderer: TagsCell, cellDataType: false},
    {field: 'status', filter: true, minWidth: 120, width: 120, cellRenderer: StatusCell, cellDataType: false},
    {field: 'progress', flex: 1, minWidth: 190, cellRenderer: ProgressCell},
    {field: 'rating', filter: true, width: 150, valueGetter: (book) => book.data.rating / 2, cellRenderer: RatingCell}
]);

const defaultColumnDef = ref({
    sortable: true,
    minWidth: 130
})

const gridApi = ref(null);

const onGridReady = (params) => {
    gridApi.value = params.api;
};
</script>

<template>
    <ag-grid-vue
        class="ag-theme-quartz"
        domLayout="autoHeight"
        animateRows="true"
        :defaultColDef="defaultColumnDef"
        :columnDefs="agColumnDefs"
        :rowData="bookStore.books"
        @grid-ready="onGridReady"
    />
</template>

<style scoped lang="scss">
.grid-row {
    background-color: rgb(255, 255, 255, 0.05);
}

.ag-theme-quartz {
    --ag-active-color: var(--color-accent-1);
    --ag-background-color: var(--color-background-soft);
    --ag-data-color: var(--color-text);

    --ag-header-foreground-color: var(--secondary-color-text);
    --ag-header-background-color: var(--secondary-color);

    --ag-font-family: "Ubuntu", sans-serif;
}
</style>