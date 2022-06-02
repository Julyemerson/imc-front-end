import axios from 'axios';

const baseURL = '';

process.env.NODE_ENV === 'development'
  ? (baseURL = 'https://localhost:3000')
  : (baseURL = 'https://imc-api-nest.herokuapp.com/');

const api = axios.create({
  baseURL,
});

export default api;
