import Logo from "../../components/Logo.jsx"
import NavBar from "../../components/NavBar.jsx"
import Footer from "../../components/Footer"
import InfosLogement from "../../components/InfosLogement.jsx"
import { useParams } from "react-router-dom"
import kasa from "../../assets/kasa.json"
import PageIntrouvable from "../PageIntrouvable/PageIntrouvable.jsx"


const FicheLogement = () => {

    const {id} = useParams();
    const kasaFiltre = kasa.find((logement) =>
    logement.id === id)

    if(!kasaFiltre) {return <PageIntrouvable />}

    return (
        <div className="conteneurPage">
            <header className="conteneurNav">
                <Logo couleur="rose" />
                <NavBar />
            </header>
            <main>
                <section>
                    <InfosLogement logement={kasaFiltre} />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default FicheLogement;