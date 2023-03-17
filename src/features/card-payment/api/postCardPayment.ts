import { useMutation } from 'react-query'
import type { AxiosResponse } from 'axios'

import { businessAxios } from '@/lib/axios'

export type CardPaymentDto = {
  transaction_ref: string
  card_id: string
  transaction_pin: string
}

const postCardPayment = (cardPaymentDto: CardPaymentDto): Promise<AxiosResponse> => {
  return businessAxios.post(`business/client-non-auth-complete-payment/`, cardPaymentDto)
}

export const usePostCardPayment = () => {
  return useMutation('postCardPayment', postCardPayment, {})
}
