import LanguageText from '@/components/LanguageText'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'LegitShot | About Me'
}

export default function Page() {
  return (
    <div className='h-full overflow-x-hidden p-4 focus:outline-none'>
        <LanguageText 
            variant='h1'
            text='aboutBoldCaption'
            className={`text-3xl md:text-5xl lg:text-7xl drop-shadow-2xl font-black`}
        />

        <LanguageText
            variant='p' 
            text='aboutSmallCaption'
            className='poppins drop-shadow-2xl whitespace-pre-line leading-loose'
        />

        <div className='h-[400px] w-[400px] absolute lg:left-[60%] left-0 top-[100px] -z-[1] opacity-10 lg:opacity-50'>
            <Image alt='logo' src='/images/logo.png' className='h-full object-contain lg:object-cover drop-shadow-2xl invert' width={400} height={400}/>
        </div>
    </div>
  )
}
