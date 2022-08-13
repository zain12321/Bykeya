import React from 'react'
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill, BsLinkedin } from 'react-icons/bs'
import { RiFacebookLine } from 'react-icons/ri'
import { IoLogoTwitter } from 'react-icons/io'
import { AiOutlineInstagram } from 'react-icons/ai'
// import {  } from 'react-icons/bs'
function Footer() {
  return (
    <div className='bg-[#242948] text-[#FFFFFF]'>
               <div className='flex pt-11 ml-6 xl:ml-24 space-x-16 border-b-2 pb-7 w-[960px] xl:w-[1100px]'>
              
           <div className=''>
               <div className='space-y-3'>
               <img src="https://bykea.com/wp-content/uploads/2020/02/Image-1.png"
               alt=""/>
               <h1>Moving Pakistan Forward</h1>
               </div>
               <div className='flex flex-col mt-6 space-y-2'>
                  <div className='flex items-center space-x-2'>
                  <BsTelephoneFill/>
                <span>  023383838383</span>
                  </div>
                   <div className='flex items-center space-x-3'><MdEmail/>
                 <span>  @bykeyagmail.com</span>
                   </div>
               </div>
               <div className='flex  mt-8 space-x-4'>
            <img className='h-16 w-28' src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
         alt=""/>
     <img
     className='h-16 w-28' src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
         alt=""/>
         <img
         className='h-16 w-28 ' src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
         alt=""/>
            </div>
           </div>
         
            <div className=' mt-2 ml-9 '>
                <h1 className='font-bold text-[18px]'>About</h1>
                <div className='pt-3 '>
                <ul className='flex flex-col space-y-2 font-semibold text-[16px]'>
                 <li>Company </li>
                 <li>Team</li>
                 <li>Mission vision& values</li>
                 <li>Social Impact</li>
                 <li>Press & Media</li>
                 <li>Carrer</li>
                 <li>Franchise</li>
                 <li>Security</li>
               
                </ul>
                </div>
            </div>
            <div className=' mt-2 ml-9'>
                <h1 className='font-bold text-[18px]'>Products</h1>
                <div className='pt-3'>
                <ul className='flex flex-col space-y-2 font-semibold text-[16px]'>
                 <li>Ride </li>
                 <li>Insuarance</li>
                 <li>Payment</li>
                 <li>Shops</li>
                 <li>Deliveries</li>
                 <li>Groceries</li>
                 <li>Quick Commerce</li>
                 <li>Food</li>
                 <li>Bykya for Buissness</li>
      
                </ul>
                </div>
            </div>
            <div className=' mt-2 ml-9'>
                <h1 className='font-bold text-[18px]'>Bykya Partner</h1>
                <div className='pt-3'>
                <ul className='flex flex-col space-y-2 font-semibold text-[16px]'>
                 <li>About Partner </li>
                 <li>Help Center</li>
                 <li>FAQs</li>
                 <li>Contact us</li>
              
                </ul>
                </div>
            </div>
               </div>






















               <div className='flex pb-32 items-center px-28 space-x-36 pt-7'>
                 <div>
                   <h1 className='text-lg font-semibold'>All Rights Reserved Bykea Pakistan</h1>
                 </div>
                 <div>
                   <ul className='flex space-x-3 text-md mr-11 font-bold'>
                     <li>Privacy Policy</li>
                     <li>Accessibility</li>
                     <li>Safety</li>
                     <li>Terms</li>
                   </ul>
                 </div>
                 <div className='flex space-x-4'>
                   <RiFacebookLine className='h-6 w-6 bg-slate-100 text-[#242948] rounded-full pt-[1px]'/>
                  <IoLogoTwitter className='h-6 w-6 rounded-full pt-[1px]'/>
                  <AiOutlineInstagram className='h-6 w-6   rounded-full pt-[1px]'/>
                  <BsLinkedin className='h-6 w-6 bg-[#242948]'/>
                 </div>
               </div>
    </div>
  )
}

export default Footer