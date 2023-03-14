import { useQuery } from 'react-query'

import { businessAxios } from '@/lib/axios'

/**
 * A Query functions with parameters:
 * https://stackoverflow.com/a/68111112/15063835
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getOtpPin = async (invoiceRef: string, otpPin: string): Promise<any> => {
  const { data } = await businessAxios.get(`business/has_cards_web/${invoiceRef}/${otpPin}`)
  return data
}

export const useOtpPin = (invoiceRef = '', otpPin = '') =>
  useQuery(['invoice-reference', otpPin], () => getOtpPin(invoiceRef, otpPin), {
    // The query  will not execute until the selected App ID exists
    enabled: !!invoiceRef,
  })
