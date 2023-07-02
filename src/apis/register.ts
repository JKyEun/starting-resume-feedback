import { TOKEN } from '../util/constant';
import api from './index';

export const changeMentorFile = async (formData: FormData) => {
  try {
    await api.post('/mentor/resume', formData, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
  } catch (err) {
    console.error(err);
  }
};

export const changeMentorImg = async (formData: FormData) => {
  try {
    const res = await api.post('/mentor/profile-image', formData, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    return res.data;
  } catch (err) {
    console.error(err);
  }
};
