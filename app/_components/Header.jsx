import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Header() {
  return (
    <div className="flex items-center justify-between p-5 shadow-md">
    <Image src='/logo.svg' width={40} height={40} alt="img" className="w-[60px] md:w-[80px]"/>
    <ul className="hidden md:flex gap-14 font-medium text-lg">
      <li className="hover:text-primary transition-all duration-300 cursor-pointer">Product</li>
      <li className="hover:text-primary transition-all duration-300 cursor-pointer">Pricing</li>
      <li className="hover:text-primary transition-all duration-300 cursor-pointer">Contact Us</li>
      <li className="hover:text-primary transition-all duration-300 cursor-pointer">About Us</li>
    </ul>
    <div>
    <Button variant="ghost">Login</Button>
    <Button>Get Started</Button>
    </div>
  </div>
  )
}

export default Header