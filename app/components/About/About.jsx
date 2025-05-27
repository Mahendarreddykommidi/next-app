import Image from 'next/image'
import React from 'react'
import {assets, infoList, toolsData} from "../../../assets/assets"

const About = () => {
  return (
    <div id='about'>
 <div className=' flex flex-col items-center gap-3'>
            <p className='text-lg'>Introduction</p>
            <p className='text-4xl font-semibold '>About me</p>

        </div>


    <div className='flex flex-col items-center py-5 md:flex-row md:justify-between md:gap-6 md:items-start px-6 md:px-[10%]'>
       
         

        <div className='about-image'>
            
            <Image src={assets.user_image} className='w-64 sm:w-80 shadow-2xl rounded-lg'/>

        </div>
        <div className='about-content py-5 max-w-2xl leading-5'>
            
         
       
            <p className='text-lg max-w-[700px]'>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career,
                 I have had the privilege of collaborating with prestigious organizations, 
                 contributing to their success and growth.</p>
            

   <div className="cards py-10 flex flex-col md:flex-row gap-5 items-center justify-between    ">
            {infoList.map((info,i)=>{
                return(
                    <div key={i} className='flex flex-col py-10 w-100 h-60 px-5 items-start gap-5 md:gap-8  border-[0.5px] border-gray-800 hover:-translate-y-2  '>
                       <Image src={info.icon} alt='' className='w-10 h-10'/>
                       <p>{info.title}</p>
                       <p className='text-sm max-w-2xl block leading-3'>{info.description}</p>
                       
                    

                    </div>
                )
            })}
          </div>
          <ul>
            <h4>Tools i use</h4>
            <li className='flex items-center gap-10 my-5'>
              {toolsData.map((tool,index)=>{
                return (
                  <div key={index} className='border border-gray-400 w-15 h-15 flex items-center justify-center'>
                  <Image src={tool} className='w-10 py-5 '/>


                  </div>
                )
              })}


            </li>
          </ul>
        </div>
    

    </div>
     
    </div>
  )
}

export default About