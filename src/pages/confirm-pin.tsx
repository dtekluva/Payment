import type { NextPage } from 'next'
import Link from 'next/link'

import { EmploymentFormsHeader } from '@/components/layout'
import PinInput from 'react-pin-input'

const ConfirmPin: NextPage = () => {
  const handleChange = (value: string) => {
    console.log(value)
  }

  const handleComplete = (value: string) => {
    console.log(value)
  }

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
                      <h1 className=" mt-6 font-sans text-[18px] font-semibold text-black md:mb-6 md:text-[33px]">
                        Confirm transaction PIN
                      </h1>
                      <p className="mt-2 font-sans text-[13px] font-medium text-[#172B4D] ">
                        Kindly re-enter the transaction PIN you entered to continue
                      </p>

                      <div className="mt-6 flex w-full items-center justify-center">
                        <PinInput
                          length={4}
                          initialValue="o"
                          onChange={handleChange}
                          type="numeric"
                          inputMode="number"
                          style={{ padding: '10px', margin: 'auto' }}
                          inputStyle={{
                            marginRight: '10px',
                            background: '#E2E6EE',
                            borderRadius: '8px',
                            borderColor: 'Transparent',
                          }}
                          inputFocusStyle={{ borderColor: 'Transparent' }}
                          onComplete={handleComplete}
                          autoSelect={false}
                        />
                      </div>

                      <Link href="/transaction-success">
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

export default ConfirmPin
