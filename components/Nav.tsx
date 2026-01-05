'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import LanguageText from './LanguageText'
import { Facebook, GalleryHorizontalEnd, Home, Info, Instagram, Menu, MessageCircle, X } from 'lucide-react'
import LinkButton from './LinkButton'

interface NavProps {
    className?: string,
}

export default function Nav({ className = '' } : NavProps) {

  const links = [
    {
      href: '/',
      icon: Home
    },
    {
      href: '/about',
      icon: Info
    },
    {
      href: '/myprojects',
      icon: GalleryHorizontalEnd
    },
    {
      href: '/contact',
      icon: MessageCircle
    }
  ]

  const [ navOpen , setNavOpen ] = useState(false)

  const pathname = usePathname()

  return (
    <nav className='h-full flex flex-col items-center justify-between p-4 bg-white'> 
        <Link href='/'>
          <Image src='/images/logo.png' alt='logo' height={40} width={40} className='invert'/>
        </Link>

        <div className='flex flex-col gap-8'>
          {links.map((link , i) => (
            <LinkButton href={link.href} key={i} 
            className={`block p-2 rounded ${pathname === link.href ? 'bg-purple-500 text-white' : 'hover:bg-gray-200 '}`}>
              <link.icon />
            </LinkButton>
          ))}
        </div>

        <div className='py-4'>
            <Link 
            className='transition-all mb-8 block p-2 hover:bg-gray-300 rounded'
            href="https://www.instagram.com/legit_shot_/" target="_blank" rel="noopener noreferrer">
                <Instagram />
            </Link>

            <Link 
            className='transition-all block p-2 hover:bg-gray-300 rounded'
            href="https://www.facebook.com/profile.php?id=100069209882570&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <Facebook />
            </Link>
        </div>
    </nav>
  )
}
