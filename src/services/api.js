import axios from 'axios';

const baseURL = 'https://imc-api-nest.herokuapp.com';

export const api = axios.create({
  baseURL,
});
