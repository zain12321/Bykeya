import React from 'react'
import { CgLoadbar } from 'react-icons/cg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Experience() {
  return (
    <div >
        <p className='text-gray-500 font-bold pl-11 xl:pl-32 pt-20'>CUSTOMERS SHARE THEIR EXPERIENCES</p>
        <h1 className='text-[#000000] text-4xl tracking-wide font-bold pl-11 xl:pl-32 pt-6 '>A Community full of stories</h1>
        <div className='flex bg-[#FFFFFF] mx-11 xl:mx-32 my-6 w-[900px] xl:w-[1090px] rounded-xl shadow-xl'>
            <div className=''>

            <div className=' h-[330px] w-[500px]'>  
               <div />
   
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
<div className=''>
<img className='h-[560px] xl:h-[396px] xl:w-[500px]' 
loading="lazy" src="https://bykea.com/wp-content/uploads/2020/03/sundus-s.jpg" alt="" />


 

</div>
<div>
<img className="'h-[560px] xl:h-[396px] xl:w-[500px]" loading="lazy" src="https://bykea.com/wp-content/uploads/2020/03/zubair-a-1.jpg" alt="" />
</div>

         <div>  
     <img
     className='h-[560px] xl:h-[396px] xl:w-[500px]' src="https://bykea.com/wp-content/uploads/2020/03/kashif-q.jpg" alt=""
     /></div>
     </Carousel>
     </div>
            </div>
            <div className='px-4 py-12'>
         <p className='text-xl text-[#242948] font-semibold'> least 30 minutes to
          over an hour and second option<br/> 
          come and get your own ride book your favourie best<br/> 
          was rickshaw  we are availaibleat Rs 150 to 180d we are<br/>.can you get this rid befor if not able then you ca get
          <br/> Bottomline, it suite
          was you can get ride book  d<br/>Bottomline, it suite
           me well, will surely use in the future.”​</p>
           <h1 className="text-2xl text-[#000000] mt-5 font-bold">Zain B.</h1>
          <div className='flex mt-4'>
          <CgLoadbar className='text-[#00AA2F] h-16 w-12 '/>
          <CgLoadbar className='text-gray-400 hover:text-[#00AA2F] h-16 w-12 '/>
          <CgLoadbar className='text-gray-400 hover:text-[#00AA2F] h-16 w-12'/>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Experience