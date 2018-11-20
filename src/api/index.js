import axios from 'axios';

const baseURL = 'http://hnbex.eu/api/v1/';

const apiClient = axios.create({
  baseURL: baseURL,
  async: true,
  crossDomain: true,
  headers: {
    'Content-Type': 'application/json'
  },
});

export default apiClient;