'use client'
import getLanguage from '@/language'
import { useEffect, useState } from 'react'
type TextVariants = 'p' | 'h1' | 'h2' | 'h3' | 'b' | 'input'

interface LanguageTextProps {
    variant: TextVariants,
    text: string,
    className?: string,
}

export default function LanguageText(
    { variant , text , className = '' } : LanguageTextProps
) {

  const [language , setLanguage] = useState<{[key: string] : any}>({})

  useEffect(() => {
    setLanguage(getLanguage())
  } , [])

  if(variant === 'h1'){
    return <h1 className={className}>{ language[text] }</h1>
  }else{
    return <p className={className}>{ language[text] }</p>
  }
}
