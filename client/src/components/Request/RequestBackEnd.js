import axios from 'axios';


export const instanceBackEnd = axios.create({
  baseURL: 'http://localhost:5000',
});

export default instanceBackEnd;
