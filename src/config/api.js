import axios from "axios";


const api = axios.create({
  baseURL: "http://avaliacao.conecti.com.br/front/api",
});

export default api;