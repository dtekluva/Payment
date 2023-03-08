import { useMutation } from 'react-query';
import type { AxiosResponse } from 'axios';

import { businessAxios } from '@/lib/axios';

interface PostOtpParameters {
  otpDto: { otp: string };
  phoneNumber: string;
}

const postOtp = ({
  otpDto,
  phoneNumber,
}: PostOtpParameters): Promise<AxiosResponse> => {
  return businessAxios.post(
    `/salesrep/verify/${phoneNumber}/verify/`,
    otpDto,
  );
};

export const usePostOtp = () => {
  return useMutation('postOtp', postOtp, {});
};
