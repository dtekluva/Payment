import type { NextPage } from 'next'
import Link from 'next/link'

import { EmploymentFormsHeader } from '@/components/layout'
import PinInput from 'react-pin-input'

const TransactionPin: NextPage = () => {
  const handleChange = (value: string) => {
    console.log(value)
  }

  const handleComplete = (value: string) => {
    console.log(value)
  }

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
                  <form action="">
                    <div className="mt-4 flex h-full max-h-[800px] w-full flex-col items-center justify-center px-4">
                      <h1 className=" mt-6 font-sans text-[18px] font-semibold text-black md:mb-6 md:text-[33px]">
                        Your Magenta PIN
                      </h1>
                      <p className="mt-2 text-center font-sans text-[20px] font-medium text-[#4E00AD] ">
                        ₦18,000
                      </p>

                      <div className="mt-6 flex w-full items-center justify-center">
                        <PinInput
                          length={4}
                          initialValue="o"
                          onChange={handleChange}
                          type="numeric"
                          inputMode="number"
                          secret
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

                      <Link href="/confirm-pin">
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

export default TransactionPin
