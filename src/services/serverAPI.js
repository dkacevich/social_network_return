import axios from "axios";

const API_KEY = 'e254c744-2e53-4cc6-9d1f-15d4ac2623d3'
const API_BASE = 'https://social-network.samuraijs.com/api/1.0'

const instanceAPI = axios.create({
    baseURL: API_BASE,
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY
    }

})


const serverAPI = {
    getUsers: async (currentPage, pageSize) => {
        const res = await instanceAPI.get(`${API_BASE}/users?page=${currentPage}&count=${pageSize}`)
        return res.data
    },
    getProfileAPI: async (id) => {
        const res = await instanceAPI.get(`${API_BASE}/profile/${id}`)
        return res.data
    },
    getStatusAPI: async (id) => {
        const res = await instanceAPI.get(`${API_BASE}/profile/status/${id}`)
        return res.data
    },
    getAuthStatusAPI: async () => {
        const res = await instanceAPI.get(`${API_BASE}/auth/me`)
        return res.data

    }
}


export default serverAPI