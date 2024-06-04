import axios from "axios";
import router from "@/router/index.js";
import {useUserStore} from '@/stores/user.js'

const axiosApiInstance = axios.create()
export const url = import.meta.env.VITE_API_URL

// add token
axiosApiInstance.interceptors.request.use((config) => {
    const userStore = useUserStore()

    const url = config.url
    const public_requests = ['login', 'register']

    // if not public request
    if (!public_requests.filter((endpoint) => url.includes(endpoint)).length) {
        let token = userStore.userInfo.accessToken
        if (!token) {
            token = JSON.parse(localStorage.getItem('userTokens')).accessToken
        }

        config.headers.Authorization = `Bearer ${token}`
        config.headers["Access-Control-Allow-Origin"] = "*"
    }

    return config
})


axiosApiInstance.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const userStore = useUserStore()

    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const newTokens = await axios
                .post(url + 'api/v1/auth/refresh',
                    JSON.parse(localStorage.getItem('userTokens')).refreshToken)

            console.log('got tokens:', newTokens.data);

            userStore.userInfo.token = newTokens.data.accessToken
            userStore.userInfo.refreshToken = newTokens.data.refreshToken

            localStorage.setItem('userTokens', JSON.stringify({
                accessToken: newTokens.data.accessToken,
                refreshToken: newTokens.data.refreshToken
            }))
        } catch (err) {
            console.log(err);

            localStorage.removeItem('userTokens')
            userStore.logout()
            await router.push('/login')
        }
    }

    if (error.response.status === 400) {
        throw error.response.data.message
    }
})

export default axiosApiInstance
