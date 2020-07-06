import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5efa88c780d8170016f75620.mockapi.io/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;