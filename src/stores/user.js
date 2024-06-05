import {defineStore} from "pinia";

import {ref} from "vue";

import {url} from '@/api.js'
import axiosApiInstance from "@/api.js";
import EventBus from "@/event-bus.js";

export const useUserStore = defineStore('userStore', () => {
    const userInfo = ref({
        id: undefined,
        username: undefined,
        accessToken: undefined,
        refreshToken: undefined
    })
    const isAuthorised = ref(false)

    const loading = ref(false)
    const error = ref('')


    /**
     * @param {object} payload - username, password
     */
    const auth = async (payload) => {
        loading.value = true
        try {
            let response = await axiosApiInstance
                .post(url + 'auth/login', payload)

            userInfo.value = {
                id: response.data.id,
                username: response.data.username,
                accessToken: response.data.accessToken,
                refreshToken: response.data.refreshToken,
            }

            EventBus.emit('got-user-info')

            localStorage.setItem('userId', response.data.id)
            localStorage.setItem('userTokens', JSON.stringify({
                accessToken: userInfo.value.accessToken,
                refreshToken: userInfo.value.refreshToken
            }))

            isAuthorised.value = true
        } catch (err) {
            error.value = err
            throw err
        } finally {
            loading.value = false
        }
    }

    const loadUserInfo = async () => {
        try {
            let id = localStorage.getItem('userId')
            let response = await axiosApiInstance
                .get(url + 'users/' + id)

            let tokens = JSON.parse(localStorage.getItem('userTokens'))

            userInfo.value = {
                id: response.data.id,
                username: response.data.username,
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
            }
            EventBus.emit('got-user-info')
        } catch (err) {
            error.value = err
            throw err
        }
    }

    const logout = () => {
        localStorage.removeItem('userTokens')
        localStorage.removeItem('userId')

        userInfo.value = {
            id: undefined,
            username: undefined,
            accessToken: undefined,
            refreshToken: undefined
        }

        isAuthorised.value = false
    }

    return {loading, error, isAuthorised, userInfo, auth, logout, loadUserInfo}
})
