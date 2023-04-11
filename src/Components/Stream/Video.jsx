import React from 'react'

function Video({video}) {
  console.log(video)
  return (
    <div className='w-screen h-screen'>
        <iframe className="w-full aspect-video" src={video} title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen >
        </iframe>
    </div>
  )
}

export default Video