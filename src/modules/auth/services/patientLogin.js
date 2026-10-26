import { instance } from '../../shared/api/axiosInstance';

export const loginPatient = async (username, password) => {
  const response = await instance.post('api/auth/patient/login', {
    email: username,
    password: password,
  });

  return { data: response.data.token, error: null };
};
