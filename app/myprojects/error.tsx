"use client"
import LanguageText from '@/components/LanguageText'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Error() {
  return (
    <div className='fixed h-dvh w-dvw top-0 bg-white flex items-center flex-col gap-8'>
        <Image height={100} width={100} src='/images/logo.png' alt='logo' className='invert'/>

        <h1 className='font-black text-3xl md:text-5xl'>Oop's, Something went horribly wrong.</h1>

        <Link replace href='/'>
            <LanguageText variant='p' text='/'/>
        </Link>
    </div>
  )
}
