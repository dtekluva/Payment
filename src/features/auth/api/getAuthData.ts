import { useQuery } from 'react-query';

import { businessAxios } from '@/lib/axios';
import type { AuthData } from '@/features/auth';

export const getAuthData = async (): Promise<AuthData> => {
  const { data } = await businessAxios.get('http://localhost:3008/authData/');
  return data;
};

export const useAuthData = () => useQuery('auth-data', getAuthData);
