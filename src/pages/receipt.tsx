import type { NextPage } from 'next'
import Link from 'next/link'

import { EmploymentFormsHeader } from '@/components/layout'

const Receipt: NextPage = () => {
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
                  <div className="flex h-full max-h-[800px] w-full flex-col items-start justify-start px-4">
                    <div>
                      <h1 className=" mt-6 font-sans text-[20px] font-semibold text-black md:mb-6 md:text-[33px]">
                        ₦18,200.00
                      </h1>
                      <p className="mt-2 font-sans text-[13px] font-medium text-[#172B4D] ">
                        Shoprite, Ikoyi.
                      </p>
                      <p className="mt-2 font-sans text-[13px] font-medium text-[#6B778C] ">
                        Today,5:30pm
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-3">
                      <button className="flex items-center gap-2 rounded bg-[#EEE8F8] py-2 px-3 text-[13px] font-medium text-[#4E00AD]">
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3141_60792)">
                            <path
                              d="M12.6667 9.83315C12.1797 9.83496 11.6992 9.94409 11.2593 10.1528C10.8193 10.3614 10.4308 10.6645 10.1213 11.0405L6.52133 9.41515C6.61291 9.11847 6.66184 8.81028 6.66667 8.49982C6.66235 8.19273 6.615 7.88776 6.526 7.59382L10.122 5.96049C10.6266 6.55429 11.3242 6.95136 12.0924 7.08196C12.8606 7.21256 13.6502 7.06835 14.3227 6.67465C14.9951 6.28095 15.5074 5.66293 15.7695 4.92911C16.0316 4.1953 16.0268 3.3926 15.7559 2.66197C15.485 1.93134 14.9654 1.3195 14.2883 0.933875C13.6112 0.548251 12.8199 0.413503 12.0533 0.553292C11.2867 0.693081 10.5939 1.09847 10.0965 1.69827C9.59908 2.29808 9.32887 3.05395 9.33333 3.83315C9.33333 3.92782 9.35333 4.01715 9.36133 4.10982L5.4 5.90782C4.816 5.43192 4.08667 5.17031 3.33333 5.16649C2.44928 5.16649 1.60143 5.51768 0.976311 6.1428C0.351189 6.76792 0 7.61577 0 8.49982C0 9.38388 0.351189 10.2317 0.976311 10.8568C1.60143 11.482 2.44928 11.8332 3.33333 11.8332C4.08341 11.8301 4.81004 11.5714 5.39333 11.0998L9.36133 12.8912C9.35333 12.9838 9.33333 13.0725 9.33333 13.1665C9.33333 13.8258 9.52883 14.4702 9.8951 15.0184C10.2614 15.5666 10.782 15.9938 11.3911 16.2461C12.0001 16.4984 12.6704 16.5644 13.317 16.4358C13.9636 16.3072 14.5575 15.9897 15.0237 15.5235C15.4899 15.0573 15.8073 14.4634 15.936 13.8168C16.0646 13.1702 15.9986 12.5 15.7463 11.8909C15.494 11.2818 15.0667 10.7612 14.5186 10.3949C13.9704 10.0287 13.3259 9.83315 12.6667 9.83315V9.83315ZM12.6667 2.49982C12.9304 2.49982 13.1882 2.57802 13.4074 2.72453C13.6267 2.87104 13.7976 3.07927 13.8985 3.32291C13.9994 3.56654 14.0258 3.83463 13.9744 4.09327C13.9229 4.35192 13.7959 4.58949 13.6095 4.77596C13.423 4.96243 13.1854 5.08942 12.9268 5.14087C12.6681 5.19231 12.4001 5.16591 12.1564 5.06499C11.9128 4.96408 11.7045 4.79318 11.558 4.57391C11.4115 4.35465 11.3333 4.09686 11.3333 3.83315C11.3333 3.47953 11.4738 3.14039 11.7239 2.89034C11.9739 2.6403 12.313 2.49982 12.6667 2.49982V2.49982ZM3.33333 9.83315C3.06963 9.83315 2.81184 9.75496 2.59257 9.60845C2.37331 9.46194 2.20241 9.2537 2.10149 9.01007C2.00058 8.76643 1.97417 8.49834 2.02562 8.2397C2.07707 7.98106 2.20405 7.74348 2.39052 7.55701C2.57699 7.37054 2.81457 7.24355 3.07321 7.19211C3.33185 7.14066 3.59994 7.16706 3.84358 7.26798C4.08721 7.3689 4.29545 7.5398 4.44196 7.75906C4.58847 7.97833 4.66667 8.23611 4.66667 8.49982C4.66667 8.85344 4.52619 9.19258 4.27614 9.44263C4.02609 9.69268 3.68696 9.83315 3.33333 9.83315ZM12.6667 14.4998C12.403 14.4998 12.1452 14.4216 11.9259 14.2751C11.7066 14.1286 11.5357 13.9204 11.4348 13.6767C11.3339 13.4331 11.3075 13.165 11.359 12.9064C11.4104 12.6477 11.5374 12.4101 11.7239 12.2237C11.9103 12.0372 12.1479 11.9102 12.4065 11.8588C12.6652 11.8073 12.9333 11.8337 13.1769 11.9346C13.4205 12.0356 13.6288 12.2065 13.7753 12.4257C13.9218 12.645 14 12.9028 14 13.1665C14 13.5201 13.8595 13.8592 13.6095 14.1093C13.3594 14.3593 13.0203 14.4998 12.6667 14.4998Z"
                              fill="#4E00AD"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3141_60792">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        share
                      </button>
                      <button className="flex items-center gap-2 rounded bg-[#EEE8F8] py-2 px-3 text-[13px] font-medium text-[#4E00AD]">
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3141_60796)">
                            <path
                              d="M8.02081 13.1667C8.28354 13.1671 8.54378 13.1156 8.78655 13.0152C9.02933 12.9147 9.24986 12.7673 9.43547 12.5813L12.0481 9.96667L11.1055 9.02667L8.68347 11.4493L8.66614 0.5H7.33281L7.35014 11.4387L4.93681 9.02533L3.99414 9.96667L6.60681 12.5793C6.7922 12.7655 7.01255 12.9133 7.25521 13.0141C7.49787 13.1149 7.75805 13.1667 8.02081 13.1667Z"
                              fill="#4E00AD"
                            />
                            <path
                              d="M14.6667 11.1667V14.5001C14.6667 14.6769 14.5964 14.8465 14.4714 14.9715C14.3464 15.0965 14.1768 15.1667 14 15.1667H2C1.82319 15.1667 1.65362 15.0965 1.5286 14.9715C1.40357 14.8465 1.33333 14.6769 1.33333 14.5001V11.1667H0V14.5001C0 15.0305 0.210714 15.5392 0.585786 15.9143C0.960859 16.2894 1.46957 16.5001 2 16.5001H14C14.5304 16.5001 15.0391 16.2894 15.4142 15.9143C15.7893 15.5392 16 15.0305 16 14.5001V11.1667H14.6667Z"
                              fill="#4E00AD"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3141_60796">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Download
                      </button>
                    </div>

                    <div className="mt-4 w-[328px] max-w-[328px] rounded-lg border border-[#EEE8F8] py-[13px] px-4">
                      <p className="text-[13px] font-medium text-[#505F79]">Status</p>
                      <p className="mt-[11px] text-[13px] font-medium text-[#16020E]">
                        Success. Merchant has successfully claimed the payment
                      </p>

                      <div className="flex w-full items-end justify-end">
                        <button className="bg-[#EFFDEC] py-1 px-3 text-[13px] text-[#1EBF46]">
                          Successful
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 w-[328px] max-w-[328px] rounded-lg border border-[#EEE8F8] py-[13px] px-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[13px] font-medium text-[#505F79]">Beneficiary</p>
                        <p className="text-[13px] font-medium text-black">Fakeyede Moyosore</p>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <p className="text-[13px] font-medium text-[#505F79]">Payment method</p>
                        <p className="text-[13px] font-medium text-black">Mastercard **362</p>
                      </div>
                    </div>

                    <div className="mt-4 w-[328px] max-w-[328px] rounded-lg border border-[#EEE8F8] py-[13px] px-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[13px] font-medium text-[#505F79]">Transaction ID</p>
                        <p className="text-[13px] font-medium text-black">22221222256</p>
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <p className="text-[13px] font-medium text-[#505F79]">Transaction fee</p>
                        <p className="text-[13px] font-medium text-black">₦200</p>
                      </div>
                    </div>

                    <Link href="/downloadapp">
                      <button
                        type="button"
                        className="mt-8 w-full rounded-xl bg-[#4D00AC] py-[13px] text-white"
                      >
                        Done
                      </button>
                    </Link>
                  </div>
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

export default Receipt
