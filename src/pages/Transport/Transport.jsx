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
            <div className='imageContainer'>
                <img src={camion} alt= "camion sur une route" />
            </div>
            <div className='commentContainer'>        
                <p>Transport partiel ou complet.</p>
                <p></p>
                <p></p>
                <p>Nous effectuons vos livraisons dans :</p>
                <p>- Les hauts de France</p>
                <p>- La région Parisienne et l'Île de France</p>
                <p>- La Belgique</p>
                <p></p>
                <p></p>
                <p>Nous réalisons également votre affrètement sur toute la France et les pays limitrophes.</p>
            </div>
            {display=="ON" ? <Contact />: ("")}
        </div>
    )
}

export default Transport