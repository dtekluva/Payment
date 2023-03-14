import * as React from 'react'
import type { NextPage } from 'next'
import PinInput from 'react-pin-input'
import { useRouter } from 'next/router'

import { EmploymentFormsHeader } from '@/components/layout'
import { useOtpPin } from '@/features/otpPin'
import { useNotificationModalControl } from '@/hooks'
import { NotificationCreateCardModal } from '@/components/elements'

const ConfirmPin: NextPage = () => {
  const router = useRouter()
  const { otppin } = router.query

  const {
    message: successModalMessage,
    isModalOpen: isSuccessModalOpen,
    closeModal: closeSuccessModal,
    openModal: openSuccessModal,
  } = useNotificationModalControl()

  const [otpToken, setOtpToken] = React.useState('')

  const handleChange = (value: string) => {
    console.log(value, 'change')
  }

  const handleComplete = (value: string) => {
    setOtpToken(value)
  }

  const { data: viewCards } = useOtpPin(otppin as string, otpToken)
  console.log(viewCards, 'view cards')

  React.useEffect(() => {
    if (viewCards?.length == 0) {
      openSuccessModal("You don't have any cards saved, click to create card...")
    }
  }, [openSuccessModal, viewCards?.length])

  return (
    <>
      <NotificationCreateCardModal
        headingText={successModalMessage}
        label={successModalMessage}
        type="success"
        allowDismiss
        closeModal={closeSuccessModal}
        isModalOpen={isSuccessModalOpen}
        invoiceReferenece={otppin as string}
      />

      <div className="h-full w-full overflow-hidden bg-[#4d00ac]">
        <div className="mx-auto h-screen w-full max-w-[1000px] flex-shrink-0 bg-[#ffffff]">
          <EmploymentFormsHeader />
          <div className="h-full xl:flex xl:justify-evenly">
            <div className="mx-auto w-full max-w-[1000px] flex-shrink-0">
              <div className="mx-auto  w-full  bg-[#F9FBFF]">
                {' '}
                <div className="">
                  {/* {isPostPosApplicationFormLoading && <FullPageLoader />} */}

                  <form action="">
                    <div className="mt-4 flex h-full max-h-[800px] w-full flex-col items-start justify-start px-4">
                      <h1 className=" mt-6 font-sans text-[18px] font-semibold text-black md:mb-6 md:text-[33px]">
                        Enter OTP PIN
                      </h1>
                      <p className="mt-2 font-sans text-[13px] font-medium text-[#172B4D] ">
                        Kindly enter OTP pin to continue transaction
                      </p>

                      <div className="mt-6 flex w-full items-center justify-center">
                        <PinInput
                          length={6}
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
                            width: '40px',
                            height: '40px',
                          }}
                          inputFocusStyle={{ borderColor: 'Transparent' }}
                          onComplete={handleComplete}
                          autoSelect={false}
                        />
                      </div>

                      {/* <Link href="/transaction-success"> */}
                      <button
                        type="submit"
                        className="mt-8 w-full rounded-xl bg-[#4D00AC] py-[13px] text-white"
                      >
                        Continue
                      </button>
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
