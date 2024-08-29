import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import palette1 from '../../assets/img/palette1.png'
import palette2 from '../../assets/img/palette2.png'
import Contact from '../Contact/Contact'
import '../../style/Ventes.css'

function Ventes() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const [display, setDisplay] = useState("OFF")
 
useEffect(() => {
    contactButton ===true ? setDisplay("ON") : setDisplay("OFF")
}, [contactButton]) 

    return (
        <div className="ventesContainer">
            <figure>
                <img src={palette1} alt="chargement d'un container" />
                <figcaption>Palettes Europe 1er choix</figcaption>
            </figure>
            <figure>
                <img src={palette2} alt="photo d'une palette de cartons" />
                <figcaption>Palettes Europe 2ième choix</figcaption>
            </figure>
            {display=="ON" ? <Contact /> : ("")}
        </div>
    )
}

export default Ventes