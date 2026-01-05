import ContactForm from '@/components/ContactForm'
import LanguageText from '@/components/LanguageText'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'LegitShot | Contact Me'
}

export default function Page() {

  return (
    <div 
    className='w-full p-4 flex flex-col items-left gap-4 h-full text-black overflow-hidden'>

      <LanguageText variant='h1' text='/contact' className='lobster text-3xl md:text-5xl lg:text-7xl drop-shadow-2xl font-black'/>

      <ContactForm />

      <div className='h-[400px] w-[400px] absolute left-0 lg:left-[60%] top-[100px] -z-[1] opacity-10 lg:opacity-50'>
        <Image
        alt='logo'
        src="/images/logo.png"
        className='h-full object-cover drop-shadow-2xl invert'
        height={400}
        width={400}
        />
      </div>
    </div>
  )
}
