import axios from "axios"

export const BASE_URL = axios.create({
   baseURL: "http://localhost:3000",
   headers: {
      "Content-Type": 'application/json'
   }
})
