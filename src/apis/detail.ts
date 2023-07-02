import api from './index';

export const getMentorDetail = async (id: string | undefined) => {
  try {
    const res = await api.get(`/mentor/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
