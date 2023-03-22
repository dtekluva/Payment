import type { NextPage } from 'next'
import QRCode from 'react-qr-code'

import { PayLinkHeader } from '@/components/layout'

const PayLink: NextPage = () => {
  return (
    <>
      <div className="h-full w-full bg-[#4d00ac]">
        <div className="mx-auto h-full w-full max-w-[400px] flex-shrink-0 bg-[#ffffff] md:h-screen">
          <PayLinkHeader />
          <div className="">
            <div className="mx-auto w-full max-w-[1000px] flex-shrink-0">
              <div className="mx-auto  w-full  bg-[#F9FBFF]">
                {' '}
                <div className="mt-32 flex h-full w-full flex-col items-center justify-center">
                  <div className="qr-bg center rounded-xl bg-white bg-[url('/images/qrbg.png')] bg-contain  p-2">
                    {' '}
                    <QRCode
                      size={256}
                      style={{ height: 'auto', maxWidth: '210px', width: '100%' }}
                      value={'https://payments.magentapass.co/'}
                      viewBox={`0 0 256 256`}
                    />
                  </div>

                  <p className="mt-12 font-sans text-base font-medium text-black">
                    Scan to make payment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <EmploymentFormsFooter /> */}
        </div>
      </div>

      <style jsx>{`
        .qr-bg {
          box-shadow: 2px 2px 7px rgba(157, 157, 157, 0.19), -2px -2px 7px rgba(157, 157, 157, 0.19);
        }
      `}</style>
    </>
  )
}

export default PayLink
