import React from 'react'
import image from "../../assets/hh.jpg"

function Card() {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border-2 border-indigo-500/100">
        <figure className="image w-full h-full"><img src={image}  alt="Shoes"/></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card