'use client'
import getLanguage from '@/language'
import emailjs from '@emailjs/browser'
import { PhoneCall, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function ContactForm() {

  const router = useRouter()

  async function sendEmail(e: { currentTarget: HTMLFormElement , preventDefault: () => void }){

    e.preventDefault()

    const target = e.currentTarget
    
    emailjs
    .sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? '', process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? '', target, {
      publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('Email Sent!');

        router.push('/')
      },
      (error) => {
        console.log('Couldn\'t send Email...', error.text);
      },
    );
  }

  const [language , setLanguage] = useState<{[key: string] : any}>({})

  useEffect(() => {
    setLanguage(getLanguage())
  } , [])

  return (
    <form onSubmit={sendEmail} className='grid grid-cols-2 w-full max-w-[500px] p-4 gap-8'>
        
    <textarea
    placeholder={language.yourMessage}
    className='resize-none rounded bg-transparent p-2 col-span-2 border-2 border-zinc-400 hover:border-zinc-900 focus:outline-none lobster'
    name="message" rows={5}
    ></textarea>

    <input 
    className='border-b-2 border-zinc-400 hover:border-zinc-900 focus:outline-none lobster bg-transparent'
    type='text' required name='firstname' placeholder={language.firstName}
    />
    <input 
    className='border-b-2 border-zinc-400 hover:border-zinc-900 focus:outline-none lobster bg-transparent'
    type='text' required name='lastname' placeholder={language.lastName}
    />
    <input 
    className='border-b-2 border-zinc-400 hover:border-zinc-900 focus:outline-none lobster bg-transparent'
    type='email' required name='email' placeholder={language.email}
    />
    <input 
    className='border-b-2 border-zinc-400 hover:border-zinc-900 focus:outline-none lobster bg-transparent'
    type='number' required name='phone' placeholder={language.phoneNumber}
    />

    <button
    type='submit'
    className='w-full grid place-items-center rounded bg-black text-white p-4 col-span-2'>
      <Send />
    </button>

    <a 
    href='tel:+2348164561667'
    className='place-items-center poppins rounded bg-black text-white p-4 flex items- justify-center gap-2 col-span-2'>
        <PhoneCall />
    </a>
  </form>
  )
}
