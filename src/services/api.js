import axios from 'axios';

const baseURL = 'https://imc-api-nest.herokuapp.com';

const api = axios.create({
  baseURL,
});

export default api;
