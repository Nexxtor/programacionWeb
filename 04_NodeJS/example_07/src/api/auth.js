
import axios from 'axios';
import { API_URL } from '../config';

export const loginUser = async credentials => {
  const response = await axios.post(`${API_URL}/users/login`, credentials);
  return response.data;
};

export const registerUser = async userData => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};
