'use client'
import * as React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { EmploymentFormsHeader } from '@/components/layout'
import { useOtpPin } from '@/features/otpPin'

const AllCards: NextPage = () => {
  const router = useRouter()
  const { allcardsparams = [] } = router.query

  const invoiceReferenece = allcardsparams[0]
  const otpToken = allcardsparams[1]

  console.log(invoiceReferenece, otpToken, 'invoice and otp')

  const { data: viewCards } = useOtpPin(invoiceReferenece as string, otpToken)
  console.log(viewCards, 'view params cards')

  return (
    <>
      <div className="h-full w-full overflow-hidden bg-[#4d00ac]">
        <div className="mx-auto h-full w-full max-w-[1000px] flex-shrink-0 bg-[#ffffff]">
          <EmploymentFormsHeader />
          <div className="h-full pb-6 xl:flex xl:justify-evenly">
            <div className="mx-auto w-full max-w-[1000px] flex-shrink-0">
              <div className="mx-auto  w-full  bg-[#F9FBFF]">
                {' '}
                <div className="">
                  <div className="mt-4 flex h-full max-h-[800px] w-full flex-col items-start justify-start px-4">
                    <h1 className=" mt-6 font-sans text-[18px] font-semibold text-black md:mb-6 md:text-[33px]">
                      Pick a card to complete payment
                    </h1>
                    <div className="h-full w-full">
                      <ul>
                        {viewCards?.map(
                          ({
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-expect-error
                            id,
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-expect-error
                            card_last_four_digit,
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-expect-error
                            brand,
                          }) => {
                            return (
                              <li key={`${id}`} className="mt-4 w-full">
                                <button
                                  onClick={() =>
                                    console.log(id, invoiceReferenece, card_last_four_digit)
                                  }
                                  className="flex h-[auto] w-full items-center gap-6 rounded-lg border bg-white px-[18px] py-[24px] text-start"
                                >
                                  <div className="h-[32px] w-[40px] bg-[url('/images/mastercard.png')] bg-cover bg-center px-7 py-3"></div>
                                  <div>
                                    {' '}
                                    <div className="flex items-center text-base font-semibold">
                                      <p className="mt-2">*********</p>
                                      <p className="ml-1"> {card_last_four_digit}</p>
                                    </div>
                                    <p className="mt-[9px] text-xs font-light text-[#676767]">
                                      {brand}
                                    </p>
                                  </div>
                                  <div className="ml-8">
                                    {' '}
                                    <svg
                                      width="32"
                                      height="32"
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        x="32"
                                        y="32"
                                        width="32"
                                        height="32"
                                        rx="16"
                                        transform="rotate(180 32 32)"
                                        fill="#FAE5F9"
                                      />
                                      <path
                                        d="M9 16.9999L19 16.9999L15.71 20.2899C15.6163 20.3829 15.5419 20.4935 15.4911 20.6154C15.4403 20.7372 15.4142 20.8679 15.4142 20.9999C15.4142 21.132 15.4403 21.2627 15.4911 21.3845C15.5419 21.5064 15.6163 21.617 15.71 21.7099C15.8974 21.8962 16.1508 22.0007 16.415 22.0007C16.6792 22.0007 16.9326 21.8962 17.12 21.7099L21.41 17.4099C21.7856 17.0366 21.9978 16.5295 22 15.9999C21.9951 15.4738 21.7832 14.9708 21.41 14.5999L17.12 10.3C17.0268 10.2074 16.9162 10.1341 16.7946 10.0842C16.6731 10.0344 16.5429 10.0089 16.4115 10.0094C16.2801 10.0099 16.1501 10.0362 16.0288 10.0869C15.9076 10.1376 15.7976 10.2117 15.705 10.305C15.6124 10.3982 15.5391 10.5088 15.4893 10.6303C15.4394 10.7519 15.414 10.8821 15.4144 11.0135C15.4149 11.1449 15.4412 11.2749 15.492 11.3961C15.5427 11.5173 15.6168 11.6274 15.71 11.72L19 14.9999L9 14.9999C8.73478 14.9999 8.48043 15.1053 8.29289 15.2928C8.10536 15.4804 8 15.7347 8 15.9999C8 16.2652 8.10536 16.5195 8.29289 16.7071C8.48043 16.8946 8.73478 16.9999 9 16.9999Z"
                                        fill="#CC00C1"
                                      />
                                    </svg>
                                  </div>
                                </button>
                              </li>
                            )
                          }
                        )}
                      </ul>
                    </div>
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

export default AllCards
