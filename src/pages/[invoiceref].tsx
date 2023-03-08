import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import moment from 'moment'

import { EmploymentFormsHeader } from '@/components/layout'
import { useModalControl } from '@/hooks'
import { PaymentInvoice, useInvoiceRef } from '@/features/invoice'

const Invoice: NextPage = () => {
  const router = useRouter()
  const { invoiceref } = router.query

  const { data: viewInvoiceData } = useInvoiceRef(invoiceref as string)

  console.log(viewInvoiceData)

  const {
    isModalOpen: isSuccessModalOpen,
    closeModal: closeSuccessModal,
    openModal: openSuccessModal,
  } = useModalControl()

  return (
    <>
      <div className="h-screen w-full bg-[#4d00ac]">
        <div className="mx-auto h-screen w-full max-w-[1000px] flex-shrink-0 bg-[#ffffff]">
          <EmploymentFormsHeader />
          <div className="h-full xl:flex xl:justify-evenly">
            <div className="mx-auto w-full max-w-[1000px] flex-shrink-0">
              <div className="mx-auto  w-full  bg-[#F9FBFF]">
                {' '}
                <div className="">
                  {/* {isPostPosApplicationFormLoading && <FullPageLoader />} */}

                  {/* <div className="flex h-full w-full flex-col items-center justify-center px-5 pt-16 pb-5 md:mb-[89px] md:px-16 md:pt-[106px]">
                    <h1 className="mb-4 font-sans text-2xl font-semibold text-employment-blue-light md:mb-6 md:text-[33px]">
                      Input your email to continue
                    </h1>
                    <p className="max-w-[732px] font-sans font-normal text-[#646464] md:text-[19px]">
                      POS Registration Form. Please note that the POS is not for sale. However, a
                      caution fee will be required. The POS remains the property of the issuing
                      company but after 2 years of active use, the ownership will be transferred.
                    </p>
                  </div> */}
                  <div className="mt-4 flex h-full max-h-[800px] w-full flex-col items-start justify-start px-4">
                    <h1 className="font-sans text-[18px] font-semibold text-[#4E00AD] md:text-[33px]">
                      Hello!
                    </h1>
                    <p className="mt-2 font-sans text-[13px] font-medium">
                      Welcome to <span className=" text-[#4E00AD]">magenta</span>, the fastest way
                      to make and receive payment.
                    </p>

                    <div className="mt-[34px] flex h-[259px] max-h-[259px] w-full flex-col items-center justify-center rounded-lg bg-[#EEE8F8]">
                      <p className="text-[13px] font-medium text-[#172B4D]">
                        you have a pending payment from
                      </p>
                      <h1 className="mt-[21px] text-[20px] font-semibold text-black ">
                        {viewInvoiceData?.branch_address}
                      </h1>
                      <div className="mt-[21px] rounded-lg border border-[#EFAFEB] bg-[#FAE5F9] py-4 px-6 text-2xl text-[#4E00AD]">
                        <p>₦{viewInvoiceData?.amount}</p>
                      </div>
                      <p className="mt-[21px] text-xs font-medium text-[#4E00AD]">
                        {moment(viewInvoiceData?.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                      </p>
                    </div>

                    <div className="flex w-full items-end justify-end">
                      <button
                        className="mt-3 text-[13px] text-[#4E00AD] underline"
                        onClick={() => openSuccessModal()}
                      >
                        View More
                      </button>
                    </div>
                    <Link href="/card-details">
                      <button
                        type="submit"
                        className="mt-8 w-full rounded-xl bg-[#4D00AC] py-[13px] text-white"
                      >
                        Make payment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <EmploymentFormsFooter /> */}
          <PaymentInvoice
            isModalOpen={isSuccessModalOpen}
            closeModal={closeSuccessModal}
            merchant={viewInvoiceData?.merchant?.company_name}
            branch={viewInvoiceData?.branch_name}
            amount={viewInvoiceData?.amount}
            date_initiated={moment(viewInvoiceData?.created_at).format('MMMM Do YYYY, h:mm:ss a')}
            time={moment(viewInvoiceData?.created_at).format('h:mm:ss a')}
          />
        </div>
      </div>
    </>
  )
}

export default Invoice
