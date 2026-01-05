import React from 'react'

interface BackgroundImageProps {
  children?: any
}

export default function BackgroundImage(
  { children } : BackgroundImageProps
) {
  return (
    <div className='h-full w-full relative wrapper flex'>
      {children}
    </div>
  )
}
