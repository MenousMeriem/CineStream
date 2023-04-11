import React from 'react'

function Video({video}) {
  return (
    <div className=''>
        <iframe className="w-full aspect-video" src={video} title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen >
        </iframe>
    </div>
  )
}

export default Video