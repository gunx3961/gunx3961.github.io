import axios from 'axios';

const xhr = axios.create({
  baseURL: 'http://api.gunx.info/',
  headers: { 'Content-Type': 'application/json' },
});

export default xhr;
