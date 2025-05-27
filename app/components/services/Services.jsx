import React from 'react'

import {assets, serviceData} from "@/assets/assets"
import Image from 'next/image'
const Services = () => {
  return (
    <div className='flex flex-col items-center my-10 mx-auto'>
        <div className='text-2xl font-light '>
            <h2>What i Offers</h2>

        </div>
        <div className='flex items-center flex-col  space-y-5 '>
            <h1 className='text-4xl font-semibold'>My services</h1>
            <p className='max-w-[500px] py-5 px-6 text-sm'>I am a frontend developer from California, USA with 10 years of experience in multiple 
               companies like Microsoft, Tesla and Apple.</p>

        </div>
        <div className='flex flex-col md:flex-row md:items-center gap-10  max-w-5xl'>


    

        {serviceData.map((service)=>{
            return(
                <div key={service} className='flex flex-col items-start gap-5 border border-gray-400 w-100 px-5 py-5 hover:bg-pink-100 hover:translate-y-1 duration-300'>
                    <Image src={service.icon} alt="" className='w-15 '/>
                    <h2 className='text-2xl font-medium'>{service.title}</h2>
                    <p className='text-sm'>{service.description}</p>

                </div>
            )
        })}
            </div>
    </div>
  )
}

export default Services