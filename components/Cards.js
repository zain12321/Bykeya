import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
function Cards(props) {
    const { title, image, desc, button} = props
  return (
    <div className='flex pl-9 pt-9 space-x-3 pb-11'>
          <div className='bg-[#FFFFFF] w-[530px] shadow-xl rounded-bl-xl rounded-br-xl '>
              <img 
              className="h-[390px] w-[530px]"
              src={image} alt="" />
              <h1 className='text-2xl font-bold text-[#242948] pl-8 pt-3'>{title}</h1>
              <p className='text-[#242948] py-5 pl-8 font-semibold'>{desc}</p>
       <button className='flex items-center text-[#02AF34] font-bold pl-8 pb-8'>{button}
       
       <CgArrowLongRight className='pl-3 pt-[2px] h-5 w-8'/></button>

          </div>
    </div>
  )
}

export default Cards










// <div className='px-28 pt-9 space-x-3 pb-11'>
// <div className='bg-[#FFFFFF] w-[530px]'>
//     <img 
//     className="h-[300px] w-[530px]"
//     src="https://bykea.com/wp-content/uploads/2020/02/Updated-1.jpg" alt="" />
//     <h1 className='text-2xl font-bold text-[#242948] pl-8 pt-3'>Safety</h1>
//     <p className='text-[#242948] py-5 pl-8 font-semibold'>All of our partners hold a valid driver’s
//          license, are tracked and <br/>undergo a thorough background check to 
//         guarantee your safety. Your <br/>trip is insured as a passenger and as a shipper.</p>
// <button className='flex items-center text-[#02AF34] font-bold pl-8'>Read More<MdArrowForward className='pl-3 h-5 w-8'/></button>

// </div>
// </div>