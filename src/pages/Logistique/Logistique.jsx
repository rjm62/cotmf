import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import logistique1 from '../../assets/img/logistique1.png'
import logistique2 from '../../assets/img/logistique2.png'
import logistique3 from '../../assets/img/logistique3.jpg'
import Contact from '../Contact/Contact'
import '../../style/Logistique.css'

function Logistique() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const [display, setDisplay] = useState("OFF")
 
useEffect(() => {
    contactButton ===true ? setDisplay("ON") : setDisplay("OFF")
}, [contactButton]) 

    return (
        <div className="logistiqueContainer">
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
        </div>
    )
}

export default Logistique