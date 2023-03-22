import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import moment from 'moment'

import { EmploymentFormsHeader } from '@/components/layout'
import { useInvoiceRef } from '@/features/invoice'
// import { InputRadio, InputError } from '@/components/elements'

const TransactionSuccess: NextPage = () => {
  const router = useRouter()
  const { transactionref } = router.query

  const { data: viewInvoiceData } = useInvoiceRef(transactionref as string)
  console.log(viewInvoiceData, 'ksmjladkj')

  return (
    <>
      <div className="h-full w-full bg-[#4d00ac]">
        <div className="mx-auto h-full w-full max-w-[400px] flex-shrink-0 bg-[#ffffff] md:h-screen">
          <EmploymentFormsHeader />
          <div className="">
            <div className="mx-auto w-full max-w-[1000px] flex-shrink-0">
              <div className="mx-auto  w-full  bg-[#F9FBFF]">
                {' '}
                <div className="">
                  {/* {isPostPosApplicationFormLoading && <FullPageLoader />} */}

                  <div className="mt-8 flex h-full max-h-[800px] w-full flex-col items-center justify-center px-4">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="30" cy="30" r="30" fill="#4D00AC" />
                      <g clip-path="url(#clip0_3141_60721)">
                        <path
                          d="M44.6896 20.0926L25.6885 39.0924C25.5607 39.2206 25.4089 39.3224 25.2417 39.3918C25.0745 39.4613 24.8953 39.497 24.7143 39.497C24.5332 39.497 24.354 39.4613 24.1868 39.3918C24.0197 39.3224 23.8678 39.2206 23.7401 39.0924L16.3921 31.7375C16.2643 31.6093 16.1125 31.5075 15.9453 31.438C15.7782 31.3686 15.5989 31.3329 15.4179 31.3329C15.2369 31.3329 15.0576 31.3686 14.8905 31.438C14.7233 31.5075 14.5715 31.6093 14.4437 31.7375C14.3155 31.8653 14.2137 32.0171 14.1442 32.1843C14.0748 32.3514 14.0391 32.5307 14.0391 32.7117C14.0391 32.8927 14.0748 33.072 14.1442 33.2391C14.2137 33.4063 14.3155 33.5581 14.4437 33.6859L21.7945 41.0353C22.5699 41.8092 23.6207 42.244 24.7163 42.244C25.8119 42.244 26.8628 41.8092 27.6382 41.0353L46.638 22.0396C46.766 21.9119 46.8676 21.7602 46.9369 21.5931C47.0062 21.4261 47.0419 21.247 47.0419 21.0661C47.0419 20.8853 47.0062 20.7062 46.9369 20.5391C46.8676 20.3721 46.766 20.2204 46.638 20.0926C46.5102 19.9644 46.3584 19.8626 46.1912 19.7932C46.024 19.7237 45.8448 19.688 45.6638 19.688C45.4827 19.688 45.3035 19.7237 45.1363 19.7932C44.9692 19.8626 44.8173 19.9644 44.6896 20.0926Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3141_60721">
                          <rect width="33" height="33" fill="white" transform="translate(14 14)" />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="mt-[42px]">
                      <h1 className="text-center text-xl font-semibold text-[#16020E]">
                        Transaction Successful!
                      </h1>
                      <p className="mt-2 text-center text-[13px] text-[#757575]">
                        {' '}
                        {viewInvoiceData?.merchant?.company_name}
                      </p>
                      <div className="mt-3 h-[1px] w-[328px] max-w-[328px] bg-[#C7AFE4]"></div>{' '}
                      <h1 className="mt-6 text-center text-[13px] font-semibold text-[#16020E]">
                        Amount paid{' '}
                        <span className="text-[#CC00C1]">₦{viewInvoiceData?.amount}</span>
                      </h1>
                      <p className="mt-[12px] text-center text-xs font-medium text-[#4E00AD]">
                        {' '}
                        {moment(viewInvoiceData?.paid_at).format('MMMM Do YYYY, h:mm:ss a')}
                      </p>
                    </div>

                    <div className="mt-20"></div>
                    <Link href="/downloadapp">
                      <button
                        type="submit"
                        className="mt-8 w-full rounded-xl bg-[#4D00AC] py-[13px] text-white"
                      >
                        Done
                      </button>
                    </Link>
                    {/* <Link href="/receipt">
                      <button
                        type="submit"
                        className="mt-4 w-full rounded-xl border border-[#4D00AC] py-[13px] font-medium text-[#4E00AD]"
                      >
                        View Receipt
                      </button>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionSuccess
