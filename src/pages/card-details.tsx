import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { EmploymentFormsHeader } from '@/components/layout'
import { InputError, InputField } from '@/components/elements'

const CardDetails: NextPage = () => {
  const router = useRouter()

  type SendMessageDto = {
    email: string
    card_number: string
    cvv: string
    exp_date: string
    card_label: string
  }

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<SendMessageDto>({
    mode: 'onTouched',
  })
  return (
    <>
      <div className="h-full w-full overflow-hidden bg-[#4d00ac]">
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

                      <div className="mt-6 w-full">
                        <InputField
                          autoFocus={true}
                          id="cardnumber"
                          type="text"
                          label="Card number"
                          placeholder="Card number"
                          className="h-12 rounded-lg border-2 border-[#E0E0E0] bg-[#E2E6EE]"
                          registration={register('card_number', {
                            required: true,
                          })}
                        />
                        {errors.card_number && (
                          <InputError
                            text={errors.card_number.message || 'This field is required'}
                          />
                        )}
                      </div>

                      <div className="mt-5 flex w-full items-center gap-5">
                        <div className="basis-1/2">
                          {' '}
                          <InputField
                            autoFocus={true}
                            id="cardnumber"
                            type="text"
                            label="Exp. date"
                            placeholder="Exp.date"
                            className="h-12 rounded-lg border-2 border-[#E0E0E0] bg-[#E2E6EE]"
                            registration={register('exp_date', {
                              required: true,
                            })}
                          />
                          {errors.exp_date && (
                            <InputError
                              text={errors.exp_date.message || 'This field is required'}
                            />
                          )}
                        </div>
                        <div className="basis-1/2">
                          {' '}
                          <InputField
                            autoFocus={true}
                            id="cardnumber"
                            type="text"
                            label="CVV"
                            placeholder="CVV"
                            className="h-12 rounded-lg border-2 border-[#E0E0E0] bg-[#E2E6EE]"
                            registration={register('cvv', {
                              required: true,
                            })}
                          />
                          {errors.cvv && (
                            <InputError text={errors.cvv.message || 'This field is required'} />
                          )}
                        </div>
                      </div>

                      <div className="mt-6 w-full">
                        <InputField
                          autoFocus={true}
                          id="prefCard"
                          type="text"
                          label="Preferred Card Label"
                          placeholder="Preferred Card Label"
                          className="h-12 rounded-lg border-2 border-[#E0E0E0] bg-[#E2E6EE]"
                          registration={register('card_number', {
                            required: true,
                          })}
                        />
                        {errors.card_number && (
                          <InputError
                            text={errors.card_number.message || 'This field is required'}
                          />
                        )}
                      </div>

                      <Link href="/create-pin">
                        <button
                          type="submit"
                          className="mt-8 w-full rounded-xl bg-[#4D00AC] py-[13px] text-white"
                        >
                          Continue
                        </button>
                      </Link>
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
