'use client'
import React, { useState } from 'react'
import LanguageText from './LanguageText'
import Image from 'next/image'

interface GalleryViewProps {
    res: { images: string[] , videos: string[] }
}

export default function GalleryView(
    { res } : GalleryViewProps
) {
    
  const [ active , setActive ] = useState('photos')

  return (
    <>
        <nav className='flex flex-col lg:flex-row items-center justify-between gap-4'>
          <LanguageText
              variant='h1'
              text='/myprojects' 
              className={`text-3xl md:text-5xl lg:text-7xl drop-shadow-2xl font-black`}
          />

          <div className='bg-white flex items-center gap-4 p-2 rounded'>
            <button 
                onClick={() => setActive('photos')} 
                className={`${active === 'photos' ? 'bg-purple-500 text-white' : ''} rounded px-4 py-2`}
            >Photos</button>

            <button 
                onClick={() => setActive('videos')} 
                className={`${active === 'videos' ? 'bg-purple-500 text-white' : ''} rounded px-4 py-2`}
            >Videos</button>
          </div>
        </nav>


        <section className='h-5/6 overflow-x-hidden relative focus:outline-none'>
          
          {
            active === 'photos' ?

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {res.images.map((s , i) => (
              <div key={i}>
                <Image 
                    key={i}
                    height={300}
                    width={200}
                    src={s} 
                    alt='image' 
                    className='object-cover h-full w-full rounded transition-all hover:scale-105'
                />
              </div>
            ))}
          </div>

            :

            <div className='w-full h-full grid place-items-center'>
                <LanguageText text='comingSoon' variant='h1' className='text-3xl lg:text-5xl font-black'/>
            </div>
          }
        </section>
    </>
  )
}
