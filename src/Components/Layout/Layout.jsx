import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import data from '../../data/movies.json' ; 
// import image_one from "../../assets/Ci.png";

function Layout() {
  return (
    <div className='text-white'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    {/* <figure className="image w-11 h-11"><img src={image_one}  alt="Shoes"/></figure> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink  to={'/'} >Accueil</NavLink></li>
                        <li><NavLink to={'/Notfound'}>Films</NavLink></li>
                        <li><NavLink to={'/Notfound'}>Séries</NavLink></li>
                        <li><NavLink to={'/Notfound'}>Documentaires</NavLink></li>
                        <li tabIndex={0}>
                            <NavLink to={'/Notfound'}>
                                Catégories
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                </svg>
                            </NavLink>
                            <ul className="p-2">
                                <li><NavLink>Films</NavLink></li>
                                <li><NavLink>Séries</NavLink></li>
                                <li><NavLink>Documentaires</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to={'/Notfound'}> A propos de nous </NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 
                                14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 
                                17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            
        </div>

            <main className=''>
                <Outlet/>
            </main> 

            {/* Footer : */}

            
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    {/* <figure className="imageFooter"><img src={image_one} alt="Logo"/></figure> */}
                </div> 
                <div>
                    <span className="footer-title">SKILLS BUILDERS</span> 
                    <NavLink className="link link-hover">Acceuil</NavLink> 
                    <NavLink className="link link-hover">Formations</NavLink> 
                    <NavLink className="link link-hover">Nos Projets</NavLink> 
                    <NavLink className="link link-hover">Carrières</NavLink>
                </div> 
                <div>
                    <span className="footer-title">CARRIERE</span> 
                    <NavLink className="link link-hover">Nous Rejoindre</NavLink> 
                    <NavLink className="link link-hover">Recrutements</NavLink> 
                    <NavLink className="link link-hover">Stages</NavLink>   
                </div> 
                <div>
                    <span className="footer-title">Informations</span> 
                    <NavLink className="link link-hover">FAQ</NavLink> 
                    <NavLink className="link link-hover">Calendrier</NavLink> 
                    <NavLink className="link link-hover">Méntion Légales</NavLink>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span> 
                    <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Entrez Votre Adresse Mail</span>
                    </label> 
                    <div className="relative">
                        <input type="text" placeholder="nom@site.com" className="input input-bordered w-full pr-16" /> 
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">S'inscrire</button>
                    </div>
                    </div>
                </div> 
            
            </footer>
    
    </div>
)
}

export default Layout