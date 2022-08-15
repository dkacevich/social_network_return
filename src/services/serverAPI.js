import axios from "axios";

// const API_KEY = 'e254c744-2e53-4cc6-9d1f-15d4ac2623d3'
const API_BASE = 'https://social-network.samuraijs.com/api/1.0'

const instanceAPI = axios.create({
    baseURL: API_BASE,
})


export const getUsers = async (currentPage, pageSize) => {
    const res = await instanceAPI.get(`${API_BASE}/users?page=${currentPage}&count=${pageSize}`)
    return res.data
}