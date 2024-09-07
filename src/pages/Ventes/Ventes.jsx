import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import palette1 from '../../assets/img/palette1.webp'
import palette2 from '../../assets/img/palette2.webp'
import Contact from '../Contact/Contact'
import '../../style/Ventes.css'

function Ventes() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const {isContactOpen, setIsContactOpen} = useContext(DataContext)
    const [isContactAllowed, setIsContactAllowed] = useState(false)
    const [display, setDisplay] = useState("OFF")

    useEffect(() => {
        isContactOpen && isContactAllowed === true ? setDisplay("ON") : setDisplay("OFF")
        setIsContactAllowed(true)
    }, [contactButton]) 
    
    return (
        <section className="ventesContainer">
            <figure>
                <img src={palette1} alt="chargement d'un container" />
                <figcaption>Palettes Europe 1er choix</figcaption>
            </figure>
            <figure>
                <img src={palette2} alt="photo d'une palette de cartons" />
                <figcaption>Palettes Europe 2ème choix</figcaption>
            </figure>
            {display=="ON" ? <Contact /> : ("")}
        </section>
    )
}

export default Ventes