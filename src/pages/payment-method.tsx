import type { NextPage } from 'next'
import Link from 'next/link'

import { EmploymentFormsHeader } from '@/components/layout'

const PaymentMethod: NextPage = () => {
  return (
    <>
      <div className="h-full w-full overflow-hidden bg-[#4d00ac]">
        <div className="mx-auto md:h-screen h-full w-full  max-w-[500px] flex-shrink-0 bg-[#ffffff]">
          <EmploymentFormsHeader />
          <div className="h-full xl:flex xl:justify-evenly">
            <div className="mx-auto w-full max-w-[1000px] flex-shrink-0">
              <div className="mx-auto  w-full  bg-[#F9FBFF]">
                {' '}
                <div className="">
                  <div className="mt-4 flex h-full max-h-[800px] w-full flex-col items-center justify-center px-4">
                    <h1 className=" mt-[120px] font-sans text-[18px] font-semibold text-black md:mb-6 md:text-[33px]">
                      Choose payment method
                    </h1>
                    <div className="">
                      <Link href="/transaction-success">
                        <button
                          type="submit"
                          className="mt-8 w-full rounded-xl bg-[#4D00AC] py-[13px] text-white"
                        >
                          saved cards
                        </button>
                      </Link>
                      <Link href="/card-details">
                        <button
                          type="submit"
                          className="mt-4 w-full rounded-xl border border-[#4D00AC] py-[13px] font-medium text-[#4E00AD]"
                        >
                          New card
                        </button>
                      </Link>
                    </div>
                  </div>
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

export default PaymentMethod
