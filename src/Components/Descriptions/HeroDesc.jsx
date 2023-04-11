import React from 'react'
import { Link } from 'react-router-dom'


function HeroDesc({titre,image}) {

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 text-white">
        <div className="hero-content flex-col lg:flex-row border-2 border-indigo-500/100 rounded-lg ">
          <figure className="image max-w-sm rounded-box shadow-2xl"><img src={image} /></figure>
            <div>
              <h1 className="text-5xl font-bold"> {titre} </h1>
              <p className="py-6"></p>
              <div className='flex justify-end'>
                <Link to={'/Film'}> 
                  <button className="btn btn-primary "> Voir le film </button> 
                </Link>
              </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroDesc