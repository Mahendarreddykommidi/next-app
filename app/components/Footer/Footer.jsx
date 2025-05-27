import Image from 'next/image'
import React from 'react'
import { assets} from "@/assets/assets"

const Footer = () => {
  return (
    <div>       
    <div className='flex flex-col items-center my-10 py--5'>
      <div className='flex flex-col items-center'>
        <Image src={assets.logo} className='w-36' alt='img'/>
        <p className='flex items-center gap-3'>  <Image src={assets.mail_icon} className='w-5' alt='img'/> <span>greatstackdev@gmail.com</span>  </p>
      </div>
    
    </div>
    <hr className=' h-[0.5px] border w-8xl bg-gray-500' />
    <div className='flex items-center justify-between'>
      <p>© 2025 William Mark. All rights reserved.</p>
      <ul className='flex gap-5 sm:gap-6 md:gap-10'>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
        <li>Connect with me</li>
      </ul>

    </div>
    </div>
  )
}

export default Footer