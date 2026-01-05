"use client"
import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className='fixed h-dvh w-dvw top-0 grid place-items-center bg-white'>
        <Image height={100} width={100} src='/images/logo.png' alt='logo' className='invert animate-bounce'/>
    </div>
  )
}
