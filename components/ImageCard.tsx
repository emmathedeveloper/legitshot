import Image from 'next/image'
import React from 'react'

interface ImageCardProps {
    src: string
}

export default function ImageCard({ src } : ImageCardProps) {
  return (
    <div className='flex flex-1 h-[100px] md:h-[200px] items-center justify-center p-4 rounded-lg overflow-hidden shadow-lg bg-[#ffffff50] backdrop-blur-lg'>
        <div className='h-full w-full rounded-lg overflow-hidden'>
            <Image priority width={100} height={100} alt='img' src={src} className='h-full w-full object-cover hover:grayscale transition-all'/>
        </div>
    </div>
  )
}
