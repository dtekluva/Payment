import type { NextPage } from 'next'
import { useForm, SubmitHandler } from 'react-hook-form'
import type { AxiosError } from 'axios'

import { EmploymentFormsHeader } from '@/components/layout'
import { InputError, InputField } from '@/components/elements'
import { usePostEmail } from '@/features/email'
import { formatAxiosErrorMessage } from '@/utils'
import { useNotificationModalControl } from '@/hooks'
import { NotificationModal } from '@/components/elements'

const UserEmail: NextPage = () => {

  type SendMessageDto = {
    email: string
  }

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SendMessageDto>({
    mode: 'onTouched',
  })

  const { mutate: postEmail, isLoading: isPostEmailLoading } = usePostEmail()

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

  const onSubmit: SubmitHandler<SendMessageDto> = (data) => {
    postEmail(data, {
      onSuccess: ({ data: getMessage }) => {
        openSuccessModal(getMessage.message)
        console.log(getMessage.message)
        reset()
      },

      onError: (error) => {
        const errorMessage = formatAxiosErrorMessage(error as AxiosError)
        openErrorModal(errorMessage as string)
        console.log(errorMessage)
      },
    })
  }

  return (
    <>
      <NotificationModal
        headingText={successModalMessage}
        label={successModalMessage}
        type="success"
        allowDismiss
        closeModal={closeSuccessModal}
        isModalOpen={isSuccessModalOpen}
      />

      <NotificationModal
        headingText={errorModalMessage}
        label={errorModalMessage}
        type="error"
        allowDismiss
        closeModal={closeErrorModal}
        isModalOpen={isErrorModalOpen}
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

                  <form onSubmit={handleSubmit(onSubmit)}>
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

                      <button
                        type="submit"
                        className="mt-8 w-full rounded-xl bg-[#4D00AC] py-[13px] text-white"
                      >
                        {isPostEmailLoading && <span>Loading</span>}
                        {!isPostEmailLoading && <span> Make payment</span>}
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

export default UserEmail
