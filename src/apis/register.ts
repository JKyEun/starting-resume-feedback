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

export const changeRole = async () => {
  try {
    await api.post('/role', null, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
  } catch (err) {
    console.error(err);
    alert('멘토 등록 오류');
  }
};

export const setMentorInfo = async (info: object) => {
  try {
    const res = await api.post('/mentor/info', info, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return res;
  } catch (err) {
    console.error(err);
    alert('필수 값을 모두 입력하세요');
  }
};
