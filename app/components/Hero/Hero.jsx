import { assets } from "@/assets/assets"
import Image from 'next/image'
import React from 'react'
import { Ovo } from 'next/font/google'

const Hero = () => {
  return (
    <div className='header-section flex flex-col h-screen items-center my-24  '>
        <div className="header-image">
            <Image src={assets.profile_img} className='max-w-3xl'/>


        </div>
        <div className="header-content flex flex-col gap-3 my-10">
            <div className='flex items-center gap-3'>
                 <p className=' font-semibold text-lg '>Hi! I’m William Mark</p>
                 <Image src={assets.hand_icon} className='w-7 h-7' alt='hand-icon'/>
            </div>
           
        
        </div>
            <div className="header-heading text-3xl md:text-4xl lg:text-5xl max-w-2xl  flex flex-col gap-3 ">
                <h1>frontend web developer  </h1>
                <h1 className="mx-auto">based in london</h1>
                
              
        
            </div>
            <div className="header-para my-3  block max-w-[500px]">
                <p>        <p>I am a frontend developer from California, USA with 10 years of experience in multiple 
companies like Microsoft, Tesla and Apple.</p>
                                           </p>
            </div>
            <div className="buttons flex items-center gap-3 border-gray-200">
                <button className='flex items-center gap-2 bg-black rounded-full text-white py-2 px-4'>Connect with me
                    <span>
                        <Image src={assets.right_arrow_bold_dark} className='w-4 h-5'/>
                       
                        </span>
                         </button>
                        <button className='flex items-center gap-2 border-gray-500 px-4 py-2'>
                    <span> <Image src={assets.download_icon} className='w-4 h-5'/></span>My resume </button>

             
              
            </div>



    </div>
  )
}

export default Hero