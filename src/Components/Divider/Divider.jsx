import React from 'react'
import image from "../../assets/hh.jpg"
import { Link } from 'react-router-dom'
import Description from '../../Pages/Description'


function Divider() {
  return (
        <div className='' >
            <h1 className=' text-white text-3xl font-black leading-loose pt-10 pb-5 pr-10 pl-10 '>
              Films populaires
            </h1>
            <div className="flex flex-col w-full h-full lg:flex-row pt-10 pb-10 pr-10 pl-10 ">
                <div className="grid flex-grow h-full card bg-base-300 rounded-box place-items-center border-2 border-indigo-500/100">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure className="image w-11/12 h-full"><img src={image} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                            <Link to={'/Description'}>
                                <button className="btn btn-primary">Clique ici</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div> 
               
                <div className="divider lg:divider-horizontal"></div> 
                
                <div className="grid flex-grow card bg-base-300 rounded-box place-items-center border-2 border-indigo-500/100">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure className="image w-full h-full"><img src={image}  alt="Shoes"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Divider