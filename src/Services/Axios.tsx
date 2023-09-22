import axios from "axios"

export const BASE_URL = axios.create({
   baseURL: "https://charming-florentine-18c793.netlify.app/db.json/",
   headers: {
      "Content-Type": 'application/json'
   }
})
