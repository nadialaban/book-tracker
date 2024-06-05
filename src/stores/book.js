import {defineStore} from "pinia";
import {ref} from "vue";

import {url} from '@/api.js'
import axiosApiInstance from "@/api.js";

export const useBookStore = defineStore('bookStore', () => {
    const books = ref([])

    const loading = ref(false)
    const error = ref('')

    /**
     * @param user_id {int}
     * @return {Promise<void>}
     */
    const loadUserBooks = async (user_id) => {
        loading.value = true
        try {
            let response = await axiosApiInstance
                .get(`${url}users/${user_id}/books`)

            books.value = response.data
        } catch (err) {
            error.value = err
            throw err
        } finally {
            setTimeout(() => {
                loading.value = false
            }, 500)

        }
    }

    return {
        books, loading, error,
        loadUserBooks
    }
})
