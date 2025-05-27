import React from 'react'
import { assets, workData} from "@/assets/assets"
import Image from 'next/image'



const Portfolio = () => {

  return (
    <div className='my-20 py-10' id='portfolio'>
          <div className='flex flex-col items-center my-10 mx-auto'>
        <div className='text-2xl font-light '>
            <h2>My latest work</h2>

        </div>
        <div className='flex items-center flex-col  space-y-5 '>
            <h1 className='text-4xl font-semibold my-4'>My Work</h1>
            <p className='max-w-[500px] py-5 px-6 text-sm'>Welcome to my web development portfolio! Explore a collection of projects showcasing
my expertise in front-end development.</p>
              

        </div>
      <div className='max-w-6xl w-full  grid grid-cols-2 sm:grid-cols-3 sm:px-10 md:grid-cols-4 mx-auto gap-10'>     
      {workData.map((work) => (
        <div
          key={work.title}
          className="aspect-square bg-no-repeat bg-center bg-cover relative rounded-lg :"
          style={{ backgroundImage: `url(${work.bgImage})`}}
        >
          <div>
            <div className='flex flex-col gap-3 absolute bottom-5 left-4 bg-white  px-10 py-2 rounded-lg w-10/12 hover:-translate-y-1 duration-300'>
            <div className='flex flex-col items-center justify-center bg-white relative'>
              
                <p className='text-lg max-w-md'>{work.title}</p>
              
                 <p className='text-[12px] font-extralight py-2 '>{work.description}</p>
                 <div className='flex items-center absolute translate-x-12 rounded-[50%] py-2 px-3 border border-gray-400'>
                    <Image src={assets.send_icon} alt='img' className='w-6 h-6 '/>
                 </div>
            </div>

             
             
            </div>
 
      </div>
        </div>
      ))}
     
     </div>

        
      
  

</div>
    
    
     

    </div>
  )
}

export default Portfolio