import React from 'react'

function About() {
  return (
    <div className='flex  justify-center mx-32 space-x-6 mt-20'>
         <div className='text-[#242948] pt-16'>
             <h1 className='text-4xl font-bold py-6'>About Bykeya</h1>
             <p className='text-[20px] py-6 pb-8'>We are on a journey to build affordable technology 
                 solutions <br/>that will create income-generating opportunities for ns of <br/>
                 thousands in Pakistan, while addressing rampant challenges in <br/>the tetransportation,
                  logistics and payments sectors of the<br/>  country.</p>
                  <button className='bg-[#242948] text-[#FFFFFF] h-11 w-44 rounded-lg font-bold tracking-wide 
                  px-2 py-2 mt-11'>Learn about Bykeya</button>
         </div>
         <div>
             <img
             className='h-[500px] w-[500px]  pl-4 rounded-xl '
              src="https://bykea.com/wp-content/uploads/2020/03/IMG_3437-scaled.jpeg" alt="" />
         </div>
    </div>
  )
}

export default About