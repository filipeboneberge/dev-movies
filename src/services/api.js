import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "30fdc640a4ce037eef3a321dedc78e49",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
