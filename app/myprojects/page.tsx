import GalleryView from '@/components/GalleryView'
import { Metadata } from 'next'
import local from 'next/font/local'
import React from 'react'

export const metadata: Metadata = {
  title: 'LegistShot | My Projects'
}

const Lobster = local({ src: '../fonts/lobster.ttf' })

const getGalleryImages = async () => {

  const url = process.env.IMAGE_API_ENDPOINT as string

  const data = await fetch(url , { cache: 'no-store' })

  return await data.json()
}

export default async function Page() {

  const res = await getGalleryImages() as { images: string[] , videos: string[] }

  return (
    <div className='w-full p-4 flex flex-col items-left gap-10 h-full text-black'>        
        <GalleryView res={res}/>
    </div>
  )
}
