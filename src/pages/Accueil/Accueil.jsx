import storagePicture from '../../assets/img/storagePicture.jpg'
import transportPicture from '../../assets/img/transportPicture.jpg'
import logisticsPicture from '../../assets/img/logisticsPicture.png'
import Contact from '../Contact/Contact'
import '../../style/Accueil.css'

function Accueil() {
const essai="OUI"

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
            {essai=="OUI" ? <Contact /> : ("")}
        </div>
       
        </>
    )
}

export default Accueil