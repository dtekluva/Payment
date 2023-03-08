import { useMutation } from 'react-query';
import type { AxiosResponse } from 'axios';

import { businessAxios, setAxiosDefaultToken } from '@/lib/axios';
import type { LoginDto } from '@/features/auth';
import { getAuthenticatedUser, tokenStorage } from '@/features/auth';
import { useAuth } from '@/contexts/authentication';

interface TokenResponse {
  access: string;
  refresh: string;
}

const login = (loginDto: LoginDto): Promise<AxiosResponse<TokenResponse>> => {
  return businessAxios.post('/auth_token/jwt/create/', loginDto);
};

export const useLogin = () => {
  const { authDispatch } = useAuth();

  return useMutation('login', login, {
    onSuccess: async ({ data }) => {
      console.log(data);
      const { access: token } = data;

      tokenStorage.setToken(token);
      setAxiosDefaultToken(token, businessAxios);

      const user = await getAuthenticatedUser();

      if (authDispatch) {
        authDispatch({ type: 'LOGIN', payload: user });

        authDispatch({ type: 'STOP_LOADING' });
      }
    },
  });
};
