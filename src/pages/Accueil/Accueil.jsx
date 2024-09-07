import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import storagePicture from '../../assets/img/storagePicture.webp'
import transportPicture from '../../assets/img/transportPicture.webp'
import logisticsPicture from '../../assets/img/logisticsPicture.webp'
import Contact from '../Contact/Contact'
import '../../style/Accueil.css'

function Accueil() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const {isContactOpen, setIsContactOpen} = useContext(DataContext)
    const [isContactAllowed, setIsContactAllowed] = useState(false)
    const [display, setDisplay] = useState("OFF")

    useEffect(() => {
        isContactOpen && isContactAllowed === true ? setDisplay("ON") : setDisplay("OFF")
        setIsContactAllowed(true)
    }, [contactButton]) 

    return (
        <>
            <div className='accueilContainer'> 
                <figure className='picture'>
                    <img src={storagePicture} alt="photo de cartons" />
                    <div className='filter'>   
                    </div>
                </figure>
                <figure className='picture'>
                    <img src={transportPicture} alt="photo de route" />
                    <div className='filter'>   
                    </div>
                </figure>
                <figure className='picture'>
                    <img src={logisticsPicture} alt="photo gestion de camions" />
                    <div className='filter'>   
                    </div>
                </figure>
                {display=="ON" ? <Contact /> : ("")}
            </div>      
        </>
    )
}

export default Accueil