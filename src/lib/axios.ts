import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://26.67.33.184:3333'
})