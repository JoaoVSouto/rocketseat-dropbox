import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-backend60.herokuapp.com'
});

export default api;
