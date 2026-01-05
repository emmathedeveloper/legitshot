import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
    children?: any
    className?: string
    hoverText?: string
    href: string
}

export default function LinkButton(
    { className , children , href } : LinkButtonProps
) {
  return (
    <Link href={href} className={`${className}`}>
        {children}
    </Link>
  )
}
