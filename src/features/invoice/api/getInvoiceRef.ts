import { useQuery } from 'react-query';

import { businessAxios } from '@/lib/axios';

/**
 * A Query functions with parameters:
 * https://stackoverflow.com/a/68111112/15063835
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getInvoiceRef = async (invoiceRef: string): Promise<any> => {
  const { data } = await businessAxios.get(
    `business/merchant-transaction-details/${invoiceRef}`,
  );
  return data;
};

export const useInvoiceRef = (invoiceRef = '') =>
  useQuery(
    ['invoice-reference', invoiceRef],
    () => getInvoiceRef(invoiceRef),
    {
      // The query  will not execute until the selected App ID exists
      enabled: !!invoiceRef,
    },
  );
