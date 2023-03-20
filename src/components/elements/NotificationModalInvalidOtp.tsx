import * as React from 'react'
import { DialogContent, DialogOverlay } from '@reach/dialog'
import clsx from 'clsx'
import { useForm, SubmitHandler } from 'react-hook-form'

import { usePostEmail } from '@/features/email'
import { useNotificationModalControl } from '@/hooks'
import { NotificationModalOtp } from '@/components/elements'

type FormValues = {
  email: string
}

interface NotificationModalProps {
  headingText: string
  type: 'success' | 'error' | 'intermediate'
  isModalOpen: boolean
  closeModal: () => void
  label: string
  width?: string
  className?: string
  allowDismiss?: boolean
  invoiceReferenece?: string
  email?: string
}

export const NotificationModalInvalidOtp: React.FunctionComponent<NotificationModalProps> = ({
  headingText,
  type,
  isModalOpen,
  label,
  width = '568px',
  className = '',
  closeModal,
  allowDismiss = false,
  invoiceReferenece,
  email,
}) => {
  const {
    message: successModalMessage,
    isModalOpen: isSuccessModalOpen,
    closeModal: closeSuccessModal,
    openModal: openSuccessModal,
  } = useNotificationModalControl()

  const { handleSubmit, reset } = useForm<FormValues>({})

  console.log(email)

  const { mutate: postEmail } = usePostEmail()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const updatedData = {
      ...data,
      email: email as string,
    }

    postEmail(updatedData, {
      onSuccess: ({ data: getMessage }) => {
        openSuccessModal(getMessage.message)
        reset()
      },
    })
  }

  // const handleClickResponse = () => {
  //   if (type === 'success') {
  //     router.push(`/otp-pin/${invoiceReferenece}`)
  //   } else {
  //     closeModal()
  //   }
  // }
  return (
    <>
      <NotificationModalOtp
        headingText={successModalMessage}
        label={successModalMessage}
        type="success"
        allowDismiss
        closeModal={closeSuccessModal}
        isModalOpen={isSuccessModalOpen}
        invoiceReferenece={invoiceReferenece as string}
      />
      <DialogOverlay
        isOpen={isModalOpen}
        onDismiss={allowDismiss ? closeModal : () => null}
        style={{ backgroundColor: 'hsla(0, 0%, 0%, 0.38)', zIndex: 1000 }}
      >
        <div className="w-full flex-shrink-0">
          <DialogContent
            aria-label={label}
            /**
             * Reach UI doesn't work very well with Styled JSX or Tailwind.
             * Override defaults inline and style containing div instead.
             */
            style={{
              width: '90%',
              padding: '0',
              position: 'relative',
              zIndex: 4,
              maxWidth: width,
              background: 'white',
              borderRadius: 10,
            }}
          >
            <div
              className={clsx(
                'border-collapse overflow-auto rounded-[10px]',
                type === 'success' && 'bg-green-50 bg-opacity-70 text-[#4E00AD]',
                type === 'error' && 'bg-red-50 bg-opacity-70 text-red-900',
                type === 'intermediate' && 'bg-blue-50 bg-opacity-70 text-blue-900',
                className
              )}
            >
              <header className="p-8 pb-5 text-xl font-bold md:text-3xl">
                <h2 className="w-full max-w-[350px]">{headingText}</h2>
              </header>

              <div className="relative bg-white text-sm">
                <p className="w-full max-w-[361px] px-8 py-5 text-neutral-500">
                  Click resend OTP button, a new OTP will be sent to you Email
                </p>

                {type === 'success' && (
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-8 -top-1/2 hidden sm:block"
                  >
                    <path
                      d="M40 7.5C33.5721 7.5 27.2886 9.40609 21.944 12.9772C16.5994 16.5484 12.4338 21.6242 9.97393 27.5628C7.51408 33.5014 6.87047 40.0361 8.12449 46.3404C9.37851 52.6448 12.4738 58.4358 17.019 62.981C21.5643 67.5262 27.3552 70.6215 33.6596 71.8755C39.964 73.1295 46.4986 72.4859 52.4372 70.0261C58.3758 67.5662 63.4516 63.4006 67.0228 58.056C70.5939 52.7114 72.5 46.4279 72.5 40C72.4835 31.3855 69.0541 23.1286 62.9627 17.0373C56.8714 10.9459 48.6145 7.51652 40 7.5V7.5ZM55.4688 34.3125L37.1563 51.8125C36.6828 52.2579 36.0562 52.504 35.4063 52.5C35.0886 52.5046 34.7731 52.4461 34.4781 52.3281C34.1831 52.2101 33.9144 52.0349 33.6875 51.8125L24.5313 43.0625C24.2773 42.8409 24.0708 42.5703 23.9241 42.2669C23.7774 41.9634 23.6935 41.6335 23.6776 41.2968C23.6617 40.9602 23.714 40.6238 23.8314 40.3079C23.9488 39.9919 24.1288 39.703 24.3607 39.4585C24.5927 39.2139 24.8716 39.0188 25.1809 38.8848C25.4901 38.7508 25.8233 38.6807 26.1603 38.6787C26.4973 38.6768 26.8313 38.743 27.142 38.8734C27.4528 39.0038 27.734 39.1957 27.9688 39.4375L35.4063 46.5312L52.0313 30.6875C52.5174 30.2634 53.1486 30.0436 53.793 30.0741C54.4373 30.1046 55.045 30.383 55.4889 30.8511C55.9328 31.3192 56.1785 31.9407 56.1748 32.5858C56.171 33.2309 55.9181 33.8496 55.4688 34.3125Z"
                      fill="#92CEAC"
                    />
                  </svg>
                )}
                {type === 'error' && (
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-8 -top-1/2 hidden sm:block"
                  >
                    <path
                      d="M40 7.5C33.5721 7.5 27.2886 9.40609 21.944 12.9772C16.5994 16.5484 12.4338 21.6242 9.97393 27.5628C7.51408 33.5014 6.87047 40.0361 8.12449 46.3404C9.37851 52.6448 12.4738 58.4358 17.019 62.981C21.5643 67.5262 27.3552 70.6215 33.6596 71.8755C39.964 73.1295 46.4986 72.4859 52.4372 70.0261C58.3758 67.5662 63.4516 63.4006 67.0228 58.056C70.5939 52.7114 72.5 46.4279 72.5 40C72.4835 31.3855 69.0541 23.1286 62.9627 17.0373C56.8714 10.9459 48.6145 7.51652 40 7.5V7.5ZM51.7813 48.2188C52.2507 48.6927 52.5141 49.3329 52.5141 50C52.5141 50.6671 52.2507 51.3073 51.7813 51.7812C51.3034 52.2433 50.6647 52.5016 50 52.5016C49.3353 52.5016 48.6966 52.2433 48.2188 51.7812L40 43.5313L31.7813 51.7812C31.3034 52.2433 30.6647 52.5016 30 52.5016C29.3353 52.5016 28.6966 52.2433 28.2188 51.7812C27.7493 51.3073 27.4859 50.6671 27.4859 50C27.4859 49.3329 27.7493 48.6927 28.2188 48.2188L36.4688 40L28.2188 31.7812C27.8201 31.2955 27.6164 30.6789 27.6472 30.0512C27.678 29.4236 27.9412 28.8299 28.3855 28.3855C28.8299 27.9412 29.4236 27.678 30.0512 27.6472C30.6789 27.6164 31.2955 27.8201 31.7813 28.2188L40 36.4687L48.2188 28.2188C48.7045 27.8201 49.3212 27.6164 49.9488 27.6472C50.5764 27.678 51.1702 27.9412 51.6145 28.3855C52.0588 28.8299 52.322 29.4236 52.3528 30.0512C52.3837 30.6789 52.1799 31.2955 51.7813 31.7812L43.5313 40L51.7813 48.2188Z"
                      fill="#F3AEAF"
                    />
                  </svg>
                )}
              </div>

              <div className="p-8">
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                  <button
                    type="submit"
                    className={clsx(
                      'focus:ring-wise-purple-light w-full space-x-2 rounded-lg px-16 py-4 text-center text-2xl  font-medium text-white transition duration-500 ease-in-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-opacity-30 focus:ring-offset-2 focus:ring-offset-white active:scale-[0.95] disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-60',
                      type === 'success' && 'hover:bg-green-10 bg-[#4E00AD] focus:ring-green-500',
                      type === 'error' && 'hover:bg-red-10 bg-red-700 focus:ring-red-500',
                      type === 'intermediate' && 'hover:bg-red-10 bg-blue-700 focus:ring-blue-500'
                    )}
                    // onClick={handleClickResponse}
                  >
                    Resend OTP
                  </button>
                </form>
              </div>
            </div>
          </DialogContent>
        </div>
      </DialogOverlay>
    </>
  )
}
