import axios from "axios"

export const BASE_URL = axios.create({
   baseURL: "https://vegan-shop-db.vercel.app/",
   headers: {
      "Content-Type": 'application/json'
   }
})
