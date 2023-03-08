import { useQuery } from 'react-query';

import { businessAxios } from '@/lib/axios';

interface VerificationStatus {
  user_verified: boolean;
}

export const getVerificationStatus = async (
  phoneNumber: string,
): Promise<VerificationStatus> => {
  const { data } = await businessAxios.get(
    `/salesrep/applicant_verified/${phoneNumber}`,
  );
  return data;
};

export const useVerificationStatus = (phoneNumber: string) =>
  useQuery(
    ['auth-data', phoneNumber],
    () => getVerificationStatus(phoneNumber),
    {
      enabled: !!phoneNumber,
      cacheTime: 0,
      refetchOnWindowFocus: 'always',
    },
  );
