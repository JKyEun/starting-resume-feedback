import { LoginInfo } from '../types/user';
import api from './index';

export const kakaoLogin = async (info: LoginInfo) => {
  try {
    const res = await api.post('/auth/login', info);
    return res;
  } catch (err) {
    console.error(err);
  }
};
