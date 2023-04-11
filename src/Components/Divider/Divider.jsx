import React from 'react'
import image from "../../assets/k.jpg"
import image_a from "../../assets/FF.png"
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
                            <h2 className="card-title">Murder Mystery 2</h2>
                            <p className='leading-8 '> Désormais détectives privés lançant leur propre agence, <br /> Nick et Audrey Spitz
                                se retrouvent au centre d'une enquête <br /> internationale à Paris lorsqu'un ami est enlevé.</p>
                            <div className="card-actions justify-end">
                            <Link to={'/Notfound'}>
                                <button className="btn btn-primary">Afficher plus</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div> 
               
                <div className="divider lg:divider-horizontal"></div> 
                
                <div className="grid flex-grow card bg-base-300 rounded-box place-items-center border-2 border-indigo-500/100">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure className="image w-full h-full"><img src={image_a}  alt="Shoes"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">John Wick : Chapitre 4</h2>
                            <p>John Wick affronte ses adversaires les plus mortels dans <br />le quatrième volet de la série. 
                             Le prix de sa tête ne cessant d'augmenter, <br /> Wick mène son combat à l'échelle mondiale</p>
                            <div className="card-actions justify-end">
                                <Link to={'/Notfound'}>
                                    <button className="btn btn-primary">Afficher plus</button>
                                </Link>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Divider