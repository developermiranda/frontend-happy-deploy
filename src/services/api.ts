import axios  from "axios";

const api = axios.create({
  baseURL: 'https://happy-api-prod.herokuapp.com',
})

export default api;