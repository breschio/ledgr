import type { ReactNode } from 'react'

interface PhoneMockupProps {
  screenBg?: string
  children: ReactNode
}

export function PhoneMockup({
  screenBg = '#FAF9F6',
  children,
}: PhoneMockupProps) {
  return (
    <div className="flex w-[414px] shrink-0 flex-col items-center rounded-[56px] bg-[#1A1916] p-3 [box-shadow:0_48px_96px_#1A19162E]">
      <div
        className="relative flex w-[390px] shrink-0 flex-col overflow-clip rounded-[46px]"
        style={{ backgroundColor: screenBg, height: 880 }}
      >
        {children}
        <div className="absolute left-1/2 top-[22px] h-9 w-[126px] -translate-x-1/2 rounded-[20px] bg-black" />
      </div>
      <div className="flex justify-center pb-1 pt-2">
        <div className="h-[5px] w-[140px] shrink-0 rounded-full bg-[#2A2926]" />
      </div>
    </div>
  )
}
