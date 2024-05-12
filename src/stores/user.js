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
        error: '',
        isAuthorised: false
    }),
    actions: {
        /**
         * @param {object} payload - username, password
         * */
        async auth(payload) {
            this.loading = true
            try {
                let response = await axiosApiInstance
                    .post(url + 'api/v1/auth/login', payload)

                this.userInfo = {
                    id: response.data.id,
                    username: response.data.username,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                }

                localStorage.setItem('userTokens', JSON.stringify({
                    accessToken: this.userInfo.accessToken,
                    refreshToken: this.userInfo.refreshToken}))

                this.isAuthorised = true
            } catch (err) {
                this.error = err
                throw err
            } finally {
                this.loading = false
            }
        },
        logout() {
            localStorage.removeItem('userTokens')

            this.userInfo = {
                id: undefined,
                username: undefined,
                accessToken: undefined,
                refreshToken: undefined
            }

            this.isAuthorised = false
        }
    }
})

export default useUserStore
