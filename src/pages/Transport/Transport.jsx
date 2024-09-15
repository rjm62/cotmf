import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import camion from '../../assets/img/transport.webp'
import Contact from '../Contact/Contact'
import '../../style/Transport.css'

function Transport() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const {isContactOpen, setIsContactOpen} = useContext(DataContext)
    const [isContactAllowed, setIsContactAllowed] = useState(false)
    const [display, setDisplay] = useState("OFF")

    useEffect(() => {
        isContactOpen && isContactAllowed === true ? setDisplay("ON") : setDisplay("OFF")
        setIsContactAllowed(true)
    }, [contactButton]) 

    return (
        <section className="transportContainer"> 
            <div className='imageContainer'>
                <img src={camion} alt= "camion sur une route" />
            </div>
            <div className='commentContainer'>        
                <h1>Transport :</h1>
                <br /> <br />
                <p><span>Co.TMF, vous propose un service de transport routier de + 3,5T.</span>
                <br /> <br /> 
                <span>Nous sommes en capacité de répondre à votre demande, que ce soit en
                    lot complet ou partiel dans toute la France, le Bénélux, l'Allemagne 
                    et la Grande Bretagne .</span>
                    <br /> <br /> 
                <span>Nous saurons répondre à votre demande .</span> </p>   
            </div>
            {display=="ON" ? <Contact />: ("")}
        </section>
    )
}

export default Transport