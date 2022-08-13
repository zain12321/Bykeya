import React from 'react'
import { 
    RiArrowDownSFill } from 'react-icons/ri'
    import { MdOutlineArrowRight
     } from 'react-icons/md'
function Header() {
  return (
    <section className='flex items-center space-x-6 px-0 xl:px-11 py-3 bg-gray-100'>
    <div className='pl-3 xl:pl-[84px]'>
    <img src="https://bykea.com/wp-content/uploads/2021/09/Bykea_logo.svg" alt="" />
    </div>
  
       <div className='pl-14'>
<ul className='flex items-center text-[17px] text-[#00AA2F] font-semibold space-x-[40px]'>

<div className='dropdown'>
    <button className='dropbtn text-[17px] font-semibold flex items-center '>
        About
    <RiArrowDownSFill className='pl-[5px] pt-[3px] h-[26px] w-[26px]'/></button>
    <div class="dropdown-content bg-[#FFFFFF]">
    <a href="#" className='hover:bg-gray-100'>About Us </a>
    <a href="#" className='hover:bg-gray-100'>Social Impact</a>
    <a href="#" className='hover:bg-gray-100'>Press & Media </a>
    <a href="#" className='hover:bg-gray-100'>Our Team </a>
    <a href="#" className='hover:bg-gray-100'>Mission, Vision & Values</a>
    <a href="#" className='hover:bg-gray-100'>Accessbility </a>
    <a href="#" className='hover:bg-gray-100'>Safety </a>
  </div>
   
    
    </div>
    <div className='dropdown'>
    <button className='dropbtn text-[17px] font-semibold flex items-center '>
    Our Services
    <RiArrowDownSFill className='pl-[5px] pt-[3px] h-[26px] w-[26px]'/></button>
 
    <div class="dropdown-content bg-[#FFFFFF]">
    <a href="#"  className='hover:bg-gray-100'>Mobility</a>
    <a href="#"  className='hover:bg-gray-100 flex'>Comerce
    <MdOutlineArrowRight className='h-7 w-7 pt-[2px]'/>
    </a>
    <a href="#"  className='hover:bg-gray-100'>Payment</a>
    <a href="#"  className='hover:bg-gray-100'>Bykeya For Buiseness</a>
  </div>
   
    
    </div>
    <li>Partner </li>
    <li>Franchies</li>
    <div className='dropdowns'>
    <button className='dropbtns text-[17px] font-semibold flex items-center '>
     Help Center
    <RiArrowDownSFill className='pl-[5px] pt-[3px] h-[26px] w-[26px]'/></button>
 
    <div class="dropdown-contents text-[17px] w-[160px]  bg-[#FFFFFF]">
    <a href="#"  className='hover:bg-gray-100'>Frequently Questions</a>
    <a href="#"  className='hover:bg-gray-100'>Contact Us</a>
    <a href="#"  className='hover:bg-gray-100'>Vulnerability Discoluser Program</a>
  </div>
   
    
    </div>
    <li>Career</li>

</ul>
       </div>
       <div className='flex hover:bg-white hover:text-[#00AA2F] text-white  hover:border-1
    hover:border   hover:border-black rounded-md bg-[#00AA2F] h-10 w-40 ml-1'>
    <button className='px-5 py-1 font-bold'>
        Contact Bykeya
    </button>
    </div>

 </section>
  )
}

export default Header