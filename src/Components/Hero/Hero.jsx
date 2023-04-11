import React from 'react'
import image from "../../assets/hh.jpg"


function Hero() {
  return (
    <div>
       <div className="hero ">
       <figure className=""><img src={image}/></figure>
        <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center ">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl font-bold text-white">Bienvenue sur notre site de streaming ! </h1>
              <p className="mb-5 text-2xl text-white">Nous avons rassemblé les meilleurs titres de différentes plateformes de streaming 
              pour vous offrir une expérience de visionnage ultime.</p>
              <button className="btn btn-primary">Voir film</button>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Hero 