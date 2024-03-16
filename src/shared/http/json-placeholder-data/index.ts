import axios from "axios"

export const userData = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users"
})

