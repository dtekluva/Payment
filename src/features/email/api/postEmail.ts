import { useMutation } from 'react-query'
import type { AxiosResponse } from 'axios'

import { businessAxios } from '@/lib/axios'

// interface PostEmailParameters {
//   emailDto: { email: string };
// }
export type EmailDto = {
  email: string
}

const postEmail = (emailDto: EmailDto): Promise<AxiosResponse> => {
  return businessAxios.post(`/accounts/send-otp/`, emailDto)
}

export const usePostEmail = () => {
  return useMutation('postEmail', postEmail, {})
}