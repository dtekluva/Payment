import { useMutation } from 'react-query';
import type { AxiosResponse } from 'axios';

import { businessAxios } from '@/lib/axios';

interface PostGuarantorsOtpParameters {
  otpDto: { otp: string };
  phoneNumber: string;
}

const postGuarantorOtp = ({
  otpDto,
  phoneNumber,
}: PostGuarantorsOtpParameters): Promise<AxiosResponse> => {
  return businessAxios.post(
    `/salesrep/verify_guarantor/${phoneNumber}/verify/`,
    otpDto,
  );
};

export const usePostGuarantorOtp = () => {
  return useMutation('postGuarantorOtp', postGuarantorOtp, {});
};
