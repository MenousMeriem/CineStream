// import Pagination from "../Components/Paginations/Paginations"
import Card from "../Components/Card/Card"
import Divider from "../Components/Divider/Divider"
import Hero from "../Components/Hero/Hero"
import data from '../data/movies.json'

export default function Accueil() {

    return (
        <div>
            <Hero/>
            <Divider/>
            <h1 className='text-3xl font-black leading-loose pl-28 pt-10'>
                Listes des films
            </h1>
            <div className="flex flex-wrap justify-evenly gap-4 ">
                {/*  grid gap-x-6 gap-y-6 grid-cols-3 */}
                {
                    data.map((crd,idx)=> (
                        <Card key={idx} 
                            titre={crd.Title} image={crd.Poster} annee={crd.Released} temps={crd.Runtime} genre={crd.Genre} 
                            director={crd.Director} writer={crd.Writer} acteur={crd.Actors} plot={crd.Plot} language={crd.Language}
                            country={crd.Country} awards={crd.Awards} 
                        />
                    ))
                }
            </div>
            {/* <Pagination/> */}
        </div>
    )
}