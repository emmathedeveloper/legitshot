import LanguageText from '@/components/LanguageText'
import React from 'react'
import localFont from 'next/font/local'

const Lobster = localFont({ src: './fonts/lobster.ttf' })

export default function Page() {
  return (
    <div className='h-100dvh w-100dvw flex flex-col justify-center gap-4 p-4 relative'>

      <LanguageText className={`cursor-pointer rounded-full px-4 leading-relaxed drop-shadow-md`} variant='p' text='smallCaption'/>

      <LanguageText className={`font-black leading-relaxed text-3xl lg:text-7xl lg:leading-[1.6] drop-shadow-md p-2`} variant='h1' text='boldCaption'/>

    </div>
  )
}
