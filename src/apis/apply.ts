import { TOKEN } from '../util/constant';
import api from './index';

export const applyMentoring = async (id: string | undefined, requestForm: object) => {
  try {
    const res = await api.post(`/mentoring/${id}`, requestForm, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return res;
  } catch (err) {
    console.error(err);
  }
};
