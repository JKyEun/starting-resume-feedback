import api from './index';

export const getMentors = async () => {
  try {
    const res = await api.get('/main');
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const searchMentors: any = async (text: string) => {
  try {
    const res = await api.get(`/search?condition=${text}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
