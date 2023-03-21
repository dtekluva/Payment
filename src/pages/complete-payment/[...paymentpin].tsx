import * as React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import type { AxiosError } from 'axios'

import { EmploymentFormsHeader } from '@/components/layout'
import PinInput from 'react-pin-input'
import { usePostCardPayment } from '@/features/card-payment'
import { NotificationModalPayment } from '@/components/elements'
import { useNotificationModalControl } from '@/hooks'
import { formatAxiosErrorMessage } from '@/utils'

type FormValues = {
  transaction_ref: string
  card_id: string
  transaction_pin: string
}

const CreatePin: NextPage = () => {
  const router = useRouter()
  const { paymentpin = [] } = router.query

  const invoiceReferenece = paymentpin[0]
  const cardid = paymentpin[1]

  const {
    message: successModalMessage,
    isModalOpen: isSuccessModalOpen,
    closeModal: closeSuccessModal,
    openModal: openSuccessModal,
  } = useNotificationModalControl()

  const {
    message: errorModalMessage,
    isModalOpen: isErrorModalOpen,
    closeModal: closeErrorModal,
    openModal: openErrorModal,
  } = useNotificationModalControl()

  const [password, setPassword] = React.useState('')
  const [notice, setNotice] = React.useState('')

  const handleChange = (value: string) => {
    console.log(value)
  }
  const handleComplete = (value: string) => {
    setPassword(value)
  }

  const { handleSubmit, reset } = useForm<FormValues>({})

  const { mutate: postCardPayment } = usePostCardPayment()

  console.log()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const updatedData = {
      ...data,
      transaction_ref: invoiceReferenece,
      transaction_pin: password,
      card_id: cardid,
    }

    postCardPayment(updatedData, {
      onSuccess: ({ data: getMessage }) => {
        openSuccessModal(getMessage.message)
        // router.push('/transaction-success')
        reset()
      },
      onError: (error) => {
        console.log(error)
        const errorMessage = formatAxiosErrorMessage(error as AxiosError)
        // launchNotification('error', errorMessage as string)

        openErrorModal(errorMessage as string)

        if (errorMessage == 'Invalid PIN') {
          closeErrorModal()
          setNotice('input correct pin')
        } else if (errorMessage == 'Insufficient funds') {
          setNotice('input correct pin')
          router.back()
        } else if (errorMessage?.includes('Charge attempt cannot be fulfilled until')) {
          setNotice('Oops wait for duration or select another card')

          setTimeout(() => {
            router.back()
          }, 2000)
        }
      },
    })
  }

  return (
    <>
      <NotificationModalPayment
        headingText={successModalMessage}
        label={successModalMessage}
        type="success"
        allowDismiss
        closeModal={closeSuccessModal}
        isModalOpen={isSuccessModalOpen}
        transactionRef={invoiceReferenece}
      />
      <NotificationModalPayment
        headingText={errorModalMessage}
        label={errorModalMessage}
        type="error"
        notice={notice}
        allowDismiss
        closeModal={closeErrorModal}
        isModalOpen={isErrorModalOpen}
      />
      <div className="h-full w-full overflow-hidden bg-[#4d00ac]">
        <div className="mx-auto h-full w-full max-w-[500px]  flex-shrink-0 bg-[#ffffff] md:h-screen">
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
