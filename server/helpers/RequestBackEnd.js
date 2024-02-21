import axios from 'axios';

export const instanceBackEnd = axios.create({
  baseURL: '',
});

export default instanceBackEnd;
