import axios from 'axios';

//const baseURL = 'https://imc-api-nest.herokuapp.com';
const baseURL = 'http://localhost:3010';

export const api = axios.create({
  baseURL,
});
