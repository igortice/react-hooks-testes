import axios from 'axios';

export const GITHUB = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 5000,
  headers: { 'content-type': 'application/json' }
});
