import axios from "axios"

export const BASE_URL = axios.create({
   baseURL: "https://poetic-cactus-02e4e8.netlify.app",
   headers: {
      "Content-Type": 'application/json'
   }
})
