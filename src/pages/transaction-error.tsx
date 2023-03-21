import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { EmploymentFormsHeader } from '@/components/layout'
// import { InputRadio, InputError } from '@/components/elements'

const TransactionError: NextPage = () => {
  type SendMessageDto = {
    save_card: string
  }

  const {
    register,
    // control,
    // handleSubmit,
    // formState: { errors },
  } = useForm<SendMessageDto>({
    mode: 'onTouched',
  })

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
                  {/* {isPostPosApplicationFormLoading && <FullPageLoader />} */}

                  <div className="mt-8 flex h-full max-h-[800px] w-full flex-col items-center justify-center px-4">
                    <svg
                      width="72"
                      height="71"
                      viewBox="0 0 72 71"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="36" cy="35" r="30" fill="#D63056" />
                      <path
                        d="M44.668 44.5962L27.9397 26.0176"
                        stroke="white"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M45.5923 26.9426L27.0137 43.6709"
                        stroke="white"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div className="mt-[42px]">
                      <h1 className="text-center text-xl font-semibold text-[#16020E]">
                        Transaction was not completed
                      </h1>
                      <p className="mt-2 text-center text-[13px] text-[#757575]">Shoprite Lekki</p>
                      <div className="mt-3 h-[1px] w-[328px] max-w-[328px] bg-[#C7AFE4]"></div>{' '}
                      <h1 className="mt-6 text-center text-[13px] font-semibold text-[#16020E]">
                        Amount paid <span className="text-[#CC00C1]">₦18,000</span>
                      </h1>
                      <p className="mt-[12px] text-center text-xs font-medium text-[#4E00AD]">
                        {' '}
                        25th September, 2022 at 14:24
                      </p>
                    </div>

                    <div className="mt-20"></div>
                    <Link href="/card-details">
                      <button
                        type="submit"
                        className="mt-8 w-full rounded-xl bg-[#4D00AC] py-[13px] text-white"
                      >
                        Try Again
                      </button>
                    </Link>
                    <Link href="/card-details">
                      <button
                        type="submit"
                        className="mt-4 w-full rounded-xl border border-[#4D00AC] py-[13px] font-medium text-[#4E00AD]"
                      >
                        Change payment method
                      </button>
                    </Link>

                    <div className="mt-2 flex w-full items-center">
                      <input
                        type="checkbox"
                        placeholder="Save this card"
                        {...register('save_card', {})}
                        className="mx-3"
                      />
                      <p className="text-[13px] font-medium">Save this card</p>
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

export default TransactionError
