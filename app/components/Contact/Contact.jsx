import React from 'react'
import Image from 'next/image'
import { assets} from "@/assets/assets"

const Contact = () => {
  return (
    <div className='bg-[url("/footer-bg-color.png")] bg-center bg-no-repeat ' id='contact'>
        <div className='flex flex-col items-center justify-center gap-6'>
            <p className='text-sm'>Connect with me</p>
            <h2 className='text-4xl font-semibold'>Get in touch</h2>
            <p>I'd love to hear from you! If you have any questions, comments or 
           feedback, please use the form below.</p>
        </div>

        <form action="" className='max-w-2xl w-full mx-auto flex flex-col gap-4 py-5 px-4 sm:px-8'>
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
                <input type="text" placeholder='Enter your name' className='w-full sm:w-1/2 border border-gray-400 py-2 px-4 rounded' />
                <input type="email" placeholder='Enter your email' className='w-full sm:w-1/2 border border-gray-400 py-2 px-4 rounded' />
            </div>
            <textarea placeholder='Your message' className='w-full border border-gray-400 py-2 px-4 rounded min-h-[300px] resize-y' />
            <button type="submit" className='w-40 mx-auto bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition'>Send</button>
        </form>
    </div>
  )
}

export default Contact