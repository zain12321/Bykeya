import React from 'react'
import ReactPlayer from 'react-player'
function Video() {
  return (
    <div className='mt-11 mb-9'>
           <ReactPlayer 
          //  className="h-[600px] w-[1346px]"
           height={630} width={1349}
          url="https://www.youtube.com/watch?v=_SZl0Lf73Ik" /> 
    </div>
  )
}

export default Video