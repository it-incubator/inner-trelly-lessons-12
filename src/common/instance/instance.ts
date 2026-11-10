import axios from "axios"

const token = 'XXX'
const apiKey = 'XXX'

export const instance = axios.create({
  baseURL: "https://trelly.it-incubator.app/api/1.0",
  headers: {
    Authorization: `Bearer ${token}`,
    "api-key": apiKey,
  },
})
