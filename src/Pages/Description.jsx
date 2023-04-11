import CarteDesc from "../Components/Descriptions/CarteDesc";
import HeroDesc from "../Components/Descriptions/HeroDesc";
import data from "../data/movies.json"
import   {useParams} from "react-router-dom"

export default function Description () {
    const param = useParams("movie")
    const currentMovie = data.filter(movie  => movie.Title === param.movie )
    return (
        <div>
            <HeroDesc titre={currentMovie[0].Title} image={currentMovie[0].Poster}/>
            <CarteDesc  titre={currentMovie[0].Title} 
                        temps={currentMovie[0].Runtime} 
                        annee={currentMovie[0].Year} 
                        genre={currentMovie[0].Genre}
                        director={currentMovie[0].Director} 
                        writer={currentMovie[0].Writer} 
                        acteur={currentMovie[0].Actors} 
                        plot={currentMovie[0].Plot}
                        language={currentMovie[0].Language} 
                        country={currentMovie[0].Country} 
                        awards={currentMovie[0].Awards}
            />
        </div>  
    )
}