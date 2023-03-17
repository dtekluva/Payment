import { useMutation } from 'react-query'
import type { AxiosResponse } from 'axios'

import { businessAxios } from '@/lib/axios'

export type PasswordDto = {
  email: string
  transaction_pin: string
  token: string
}

const postPassword = (passwordDto: PasswordDto): Promise<AxiosResponse> => {
  return businessAxios.post(`/accounts/set-web-transaction-pin/`, passwordDto)
}

export const usePostPassword = () => {
  return useMutation('postPassword', postPassword, {})
}
