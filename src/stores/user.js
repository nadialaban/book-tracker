import {defineStore} from "pinia";

import {url} from '@/api.js'
import axiosApiInstance from "@/api.js";

const useUserStore = defineStore('userStore', {
    state: () => ({
        userInfo: {
            id: undefined,
            username: undefined,
            accessToken: undefined,
            refreshToken: undefined
        },
        loading: false,
        error: ''
    }),
    getters: {
        isAuthorised() {
            return this.userInfo.id !== undefined
        }
    },
    actions: {
        /**
         * @param {object} payload - username, password
         * */
        async auth(payload) {
            this.loading = true

            try {
               let response = await axiosApiInstance
                   .post(url + 'login', payload)

                console.log(response.data)
            } catch (e) {
                console.log(e)
            }
        },
        logout() {
            this.userInfo = {
                id: undefined,
                username: undefined,
                accessToken: undefined,
                refreshToken: undefined
            }
        }
    }
})

export default useUserStore
