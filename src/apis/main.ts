import api from './index';

export const getMentors = async () => {
  try {
    const res = await api.get('/main');
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
