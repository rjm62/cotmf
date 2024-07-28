import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import camion from '../../assets/img/transport.png'
import Contact from '../Contact/Contact'
import '../../style/Transport.css'

function Transport() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const [display, setDisplay] = useState("OFF")
 
    useEffect(() => {
        contactButton ===true ? setDisplay("ON") : setDisplay("OFF")
    }, [contactButton]) 

    return (
        <div className="transportContainer"> 
            <img src={camion} alt= "camion sur une route" />
            <figcaption>
                <div className='gap'>
                    <p>Nos véhicules livrent dans les:</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Hauts de France</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Régions Parisiennes et Ile de France</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Belgique</p>
                </div>
                <p></p>
                <p></p>
                <p>Nous effectuons également l'affrétement sur toute la France et les pays limitrophes</p>
                <p></p>
                <p></p>
                <p>Transport partiel ou complet</p>
            </figcaption>
            {display=="ON" ? <Contact />: ("")}
        </div>
    )
}

export default Transport