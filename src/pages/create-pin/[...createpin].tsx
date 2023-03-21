import * as React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

import { EmploymentFormsHeader } from '@/components/layout'
import PinInput from 'react-pin-input'
import { useInvoiceRef } from '@/features/invoice'
import { usePostPassword } from '@/features/password'

type FormValues = {
  email: string
  transaction_pin: string
  token: string
}

const CreatePin: NextPage = () => {
  const router = useRouter()
  const { createpin = [] } = router.query

  const invoiceReferenece = createpin[0]
  const otpToken = createpin[1]

  const [password, setPassword] = React.useState('')

  const { data: viewInvoiceData } = useInvoiceRef(invoiceReferenece as string)

  const { mutate: postPassword } = usePostPassword()

  const handleChange = (value: string) => {
    console.log(value)
  }

  const handleComplete = (value: string) => {
    setPassword(value)
  }

  const { handleSubmit, reset } = useForm<FormValues>({})

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const updatedData = {
      ...data,
      email: viewInvoiceData?.client_email,
      transaction_pin: password,
      token: otpToken,
    }

    postPassword(updatedData, {
      onSuccess: ({ data: getMessage }) => {
        console.log(getMessage.message)
        router.push('/transaction-success')
        reset()
      },
    })
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
                  <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4 flex h-full max-h-[800px] w-full flex-col items-start justify-start px-4">
                      <h1 className=" mt-6 font-sans text-[18px] font-semibold text-black md:mb-6 md:text-[33px]">
                        Finally, create your transaction PIN
                      </h1>
                      <p className="mt-2 font-sans text-[13px] font-medium text-[#172B4D] ">
                        For a quick transaction, create a 4-digit transactional pin to approve every
                        transaction on the platform.
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

                      {/* <Link href="/confirm-pin"> */}
                      <button
                        type="submit"
                        className="mt-8 w-full rounded-xl bg-[#4D00AC] py-[13px] text-white"
                      >
                        Continue
                      </button>
                      {/* </Link> */}
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

export default CreatePin
