import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../data/movies.json'
import CarteDesc from '../Descriptions/CarteDesc'


function Card({titre, image, annee, temps, genre}) {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border-2 border-indigo-500/100 ">
        <figure className="image w-full h-full"><img src={image}  alt="Shoes"/></figure>
          <div className="card-body">
            <h2 className="card-title">{titre}</h2>
            <p className='leading-8 '>
              Année : {annee} <br />
              Durée : {temps} <br />
              Genre : {genre}
            </p>
            <Link to={`/Description/${titre}`}>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Afficher plus</button>
              </div>                            
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Card