import React from 'react'
import image from '../../assets/Spider.jpg'
function HeroDesc() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 text-white">
        <div className="hero-content flex-col lg:flex-row border-2 border-indigo-500/100 rounded-lg ">
          <figure className="image max-w-sm rounded-box shadow-2xl "><img src={image} /></figure>
            <div>
              <h1 className="text-5xl font-bold ">Box Office News!</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. 
              In deleniti eaque aut repudiandae et a id nisi.</p>
              <div className='flex justify-end'>
                <button className="btn btn-primary">Voir le film </button> 
              </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroDesc