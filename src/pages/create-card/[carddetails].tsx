import type { NextPage } from 'next'
// import Link from 'next/link'
import { useRouter } from 'next/router'
import { usePaystackPayment } from 'react-paystack'

import { EmploymentFormsHeader } from '@/components/layout'
import { useInvoiceRef } from '@/features/invoice'

const CardDetails: NextPage = () => {
  const router = useRouter()
  const { carddetails } = router.query

  const { data: viewInvoiceData } = useInvoiceRef(carddetails as string)

  console.log(viewInvoiceData?.client_email, '')

  const config = {
    reference: new Date().getTime().toString(),
    email: viewInvoiceData?.client_email,
    amount: viewInvoiceData?.billed_amount * 100,
    publicKey: 'pk_live_c2948535846ef1012400bfeabf45ab02fe350e8c',
    currency: 'NGN',
    channel: ['card'],
    metadata: {
      reason: '',
      source: 'web',
    },
  }

  // you can call this function anything
  const onSuccess = (reference: unknown) => {
    console.log(reference)
    router.push('/create-pin')
  }

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
    // alert("Test Redirect")
  }

  const PaystackPaymentHook = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const initializePayment = usePaystackPayment(config)

    return (
      <div className="w-full">
        <button
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            initializePayment(onSuccess, onClose)
          }}
          type="button"
          className="focus:ring-wise-purple-light disabled:opacity-60' hover:bg-green-10 mt-8 w-full space-x-2 rounded-xl bg-[#4D00AC] px-16 py-[13px] text-center text-xl font-medium text-white transition duration-500 ease-in-out hover:scale-[1.02] focus:outline-none focus:ring-2
          focus:ring-green-500 focus:ring-opacity-30 focus:ring-offset-2 focus:ring-offset-white active:scale-[0.95] disabled:scale-100 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="h-full w-full overflow-hidden bg-[#4d00ac]">
        <div className="mx-auto h-full w-full max-w-[1000px] flex-shrink-0 bg-[#ffffff] pb-8">
          <EmploymentFormsHeader />
          <div className="h-full xl:flex xl:justify-evenly">
            <div className="mx-auto w-full max-w-[1000px] flex-shrink-0">
              <div className="mx-auto  w-full  bg-[#F9FBFF]">
                {' '}
                <div className="">
                  {/* {isPostPosApplicationFormLoading && <FullPageLoader />} */}

                  <form action="">
                    <div className="mt-4 flex h-full max-h-[800px] w-full flex-col items-start justify-start px-4">
                      <div className="">
                        <button type="button" className="" onClick={() => router.back()}>
                          <svg
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="19" cy="19" r="19" fill="#EEE8F8" />
                            <path
                              d="M16.57 12.9302L10.5 19.0002L16.57 25.0702"
                              stroke="#4E00AD"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M27.4999 19H10.6699"
                              stroke="#4E00AD"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <h1 className=" mt-6 font-sans text-[18px] font-semibold text-black md:mb-6 md:text-[33px]">
                        Enter card details
                      </h1>
                      <p className="mt-2 font-sans text-[13px] font-medium text-[#172B4D] ">
                        Verify that the cardholder&apos;s name and other information are exactly as
                        it appears on the card.
                      </p>

                      <PaystackPaymentHook />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <EmploymentFormsFooter /> */}
        </div>
      </div>
    </>
  )
}

export default CardDetails
