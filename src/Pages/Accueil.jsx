
import Cards from "../Components/Card/Cards"
import Divider from "../Components/Divider/Divider"
import Hero from "../Components/Hero/Hero"
import Pagination from "../Components/Paginations/Paginations"

export default function Accueil() {

    return (
        <div>
            <Hero/>
            <Divider/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Pagination/>
        </div>
    )
}