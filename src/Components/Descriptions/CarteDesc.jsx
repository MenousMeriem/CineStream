import React from 'react'

function CarteDesc({titre, temps , annee, genre,director, writer, acteur, plot,language, country, awards}) {
  return (
    <div>
        <div className="min-h-full border-2 border-indigo-500/100 rounded-lg">
            <div className='flex flex-col pl-11 pt-10 li leading-10	text-lg '>
              <div>
                  <h1 className='text-2xl'>Titre : {titre}</h1>
              </div>  
              <div>
                  <p>temps : {temps}</p>
              </div>
              <div>
                  <p>Année : {annee}</p>
              </div>
              <div>
                  <p>Genre : {genre}</p> 
              </div>
              <div>
                  <p>Director : {director}</p>
              </div>
              <div>
                  <p>Writer : {writer}</p>
              </div>
              <div>
                  <p>Actors : {acteur}</p> 
              </div>
              <div>
                  <p> Plot : {plot}</p> 
              </div>
              <div>
                  <p> Language : {language}</p>
              </div>
              <div>
                  <p> Country  : {country}</p>
              </div>
              <div>
                  <p> Awards : {awards}</p> 
              </div>
            </div>
        </div>
    </div>
  )
}

export default CarteDesc