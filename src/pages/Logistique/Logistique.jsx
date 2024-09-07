import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import logistique1 from '../../assets/img/logistique1.webp'
import logistique2 from '../../assets/img/logistique2.webp'
import logistique3 from '../../assets/img/logistique3.webp'
import Contact from '../Contact/Contact'
import '../../style/Logistique.css'

function Logistique() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const {isContactOpen, setIsContactOpen} = useContext(DataContext)
    const [isContactAllowed, setIsContactAllowed] = useState(false)
    const [display, setDisplay] = useState("OFF")

    useEffect(() => {
        isContactOpen && isContactAllowed === true ? setDisplay("ON") : setDisplay("OFF")
        setIsContactAllowed(true)
    }, [contactButton]) 

    return (
        <section className="logistiqueContainer">
            <figure>
                <img src={logistique1} alt="chargement d'un container" />
                <figcaption>Dépotage/Empotage de conteneurs</figcaption>
            </figure>
            <figure>
                <img src={logistique2} alt="photo d'une palette de cartons" />
                <figcaption>Reconditionnement de palettes</figcaption>
            </figure>
            <figure>
                <img src={logistique3} alt="identification d'une palette filmé par une personne" />
                <figcaption>Préparation de commandes</figcaption>
            </figure>
            {display=="ON" ? <Contact /> : ("")}
        </section>
    )
}

export default Logistique