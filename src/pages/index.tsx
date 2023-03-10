import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { EmploymentFormsHeader } from '@/components/layout'
import { InputError, InputField } from '@/components/elements'

const Index: NextPage = () => {
  type SendMessageDto = {
    email: string
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
                    <div className="mt-[129px] flex h-full max-h-[800px] w-full flex-col items-center justify-center px-4">
                      <h1 className="mb-4 font-sans text-[18px] font-semibold text-black md:mb-6 md:text-[33px]">
                        Input your email to continue
                      </h1>

                      <InputField
                        autoFocus={true}
                        id="email"
                        type="email"
                        placeholder="e.g magenta@example.com"
                        className="h-12 rounded-lg border-2 border-[#E0E0E0] bg-[#E2E6EE]"
                        registration={register('email', {
                          required: true,
                        })}
                      />
                      {errors.email && (
                        <InputError text={errors.email.message || 'This field is required'} />
                      )}

                      <Link href="/invoice">
                        <button
                          type="submit"
                          className="mt-8 w-full rounded-xl bg-[#4D00AC] py-[13px] text-white"
                        >
                          Make payment
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

export default Index
