import React from 'react'
// import Router from 'next/router'

import { Modal, Button } from '@/components/elements'

interface ModalResolveDisputeProps {
  closeModal: () => void
  isModalOpen: boolean
  merchant: string;
  branch: string;
  amount: string;
  date_initiated: string;
  time: string;
}

export const PaymentInvoice: React.FunctionComponent<ModalResolveDisputeProps> = ({
  isModalOpen,
  closeModal,
  amount,
  branch,
  date_initiated,
  merchant,
  time
}) => {
  return (
    <>
      <Modal
        label="Consent confirmation"
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        width="465px"
        height="500px"
        className=" text-left"
      >
        <div className="flex flex-col items-start justify-start rounded-xl bg-[#fff]">
          <div className="flex w-full flex-col items-start justify-start">
            <div className="w-full">
              {' '}
              <h1
                className="font-sans text-lg font-semibold
            text-black"
              >
                Pending Invoice
              </h1>
              <div
                className="mt-4 w-full border border-dashed border-[#C7AFE4]
            "
              ></div>
            </div>

            <div className="mt-3 w-full">
              <p
                className="text-lg font-medium 
            text-[#505F79]"
              >
                Merchant: <span className="text-[#4E00AD]">{merchant}</span>
              </p>
              <div
                className="mt-2 w-full border border-dashed border-[#C7AFE4]
            "
              ></div>
            </div>

            <div className="mt-3 w-full">
              <p
                className="text-lg font-medium 
            text-[#505F79]"
              >
                Branch: <span className="text-[#4E00AD]">{branch}</span>
              </p>
              <div
                className="mt-2 w-full border border-dashed border-[#C7AFE4]
            "
              ></div>
            </div>

            <div className="mt-3 w-full">
              <p
                className="text-lg font-medium 
            text-[#505F79]"
              >
                Amount: <span className="text-[#4E00AD]">{amount}</span>
              </p>
              <div
                className="mt-2 w-full border border-dashed border-[#C7AFE4]
            "
              ></div>
            </div>

            <div className="mt-3 w-full">
              <p
                className="text-lg font-medium 
            text-[#505F79]"
              >
                Date initiated: <span className="text-[#4E00AD]">{date_initiated}</span>
              </p>
              <div
                className="mt-2 w-full border border-dashed border-[#C7AFE4]
            "
              ></div>
            </div>

            <div className="mt-3 w-full">
              <p
                className="text-lg font-medium 
            text-[#505F79]"
              >
                Time: <span className="text-[#4E00AD]">{time}</span>
              </p>
              <div
                className="mt-2 w-full border border-dashed border-[#C7AFE4]
            "
              ></div>
            </div>

            <div className="mt-3 flex w-full items-center justify-center gap-[20px] px-[33px] py-[12px]">
              <Button
                variant="invoice"
                className="w-full py-6"
                centered
                size="base"
                onClick={() => {
                  closeModal()
                }}
              >
                Close invoice
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      <style jsx>
        {`
          .gradient {
            background: linear-gradient(90deg, #107ee2 -2.59%, #032282 104.34%);
          }
        `}
      </style>
    </>
  )
}
