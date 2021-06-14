import axios from "axios";
export const instance = axios.create({
  baseURL: 'http://84.201.168.52/api/v1',
  headers: {'Content-Type': 'application/json'}
});