import React from 'react'
import { MdOutlineArrowForward } from 'react-icons/md'
function Supper() {
  return (
    <div className='bg-gray-100 '> 
      <div className='pl-24 pt-32 space-y-9'>
      <h1 className='text-4xl font-bold
      '>Bykea is your everyday, everything <span className='text-[#15b141] font-semibold'>Super App</span></h1>
        <p className='text-md font-medium'>From helping you reach work at rates 
            cheaper than a rickshaw to transferring money to friends and family, Bykea can do <br/>it all and more.

        </p>
      </div>
        <div className='pl-24 pt-24 '>
            <ul className='flex space-x-9 text-lg font-bold text-[#242948]'>
                <li className='bg-[#FFFFFF] w-16 h-14 pt-4 rounded-tr-2xl rounded-tl-2xl
                 pl-3 text-[#00AA2F]'>Ride</li>
                <li className='pb-2 pt-3'>Delivery</li>
                <li className='pb-2 pt-3'>Payments</li>
                <li className='pb-2 pt-3'>Food</li>
                <li className='pb-2 pt-3'>Shops</li>
                <li className='pb-2 pt-3'>Groceries</li>
                <li className='pb-2 pt-3'>Quick Comerce</li>
            </ul>
        </div>
        <div className='flex ml-24 bg-[#FFFFFF] w-[1130px] shadow-xl rounded-tr-xl rounded-bl-2xl rounded-br-2xl
        '>
            <div>
              <h1 className='pt-5 text-4xl text-[#00AA2F] pl-6 font-bold'>Ride</h1>
              <p className='pt-6 pl-6 text-lg text-[#000000]'>Bykea understands that motorbikes are not just a key means<br/> of personal transport in Pakistan, 
              but they also offer a<br/> convenient way to dodge traffic. We offer bike rides at a fare <br/>
              lower than a three wheel rickshaw and faster than a commute<br/> on a bus. No matter what your 
              destination, a Bykea partner is<br/> always there.</p>
              <button className='flex pl-5 items-center pt-9 text-[#00AA2F]'>Read More
               <MdOutlineArrowForward className='pl-2 h-4 w-7'/></button>
            </div>
            <div className='pt-14'>
          <img 
         className='h-[360px] w-[600px]' src="https://bykea.com/wp-content/uploads/2020/02/03-Bykea-Lower-Banner-SJ-Ride-e1583937139583.png"
          alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Supper