import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import photoPageStockage from '../../assets/img/stockage.webp'
import Contact from '../Contact/Contact'
import  '../../style/Stockage.css'

function Stockage() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const {isContactOpen, setIsContactOpen} = useContext(DataContext)
    const [isContactAllowed, setIsContactAllowed] = useState(false)
    const [display, setDisplay] = useState("OFF")

    useEffect(() => {
        isContactOpen && isContactAllowed === true ? setDisplay("ON") : setDisplay("OFF")
        setIsContactAllowed(true)
    }, [contactButton]) 
    
    return (
        <section className="stockageContainer"> 
            <div className='imageContainer'>
                <img src={photoPageStockage} alt= "hangar avec des palettes" />
            </div>
            <div className='commentContainer'>
                <h1 className='withDecoration'>Stockage marchandises :</h1>
                <p><span>Nous disposons d'un entrepôt de 1500m2 et 3000m2 extérieurs dédié au 
                    stockage et à l'entreposage de marchandises dans le Pas de Calais, région
                    Haut de France .</span>
                    <br /> <br />
                <span>&Agrave; proximité des autoroutes A16 et A26, 20min .</span>
                <br /> <br />
                <span>Entièrement sécurisé, notre dépôt est un lieu de stockage et entreposage
                     sûr pour marchandises de toutes sortes .</span></p>
            </div>
            {display=="ON" ? <Contact />: ("") }
        </section>
    )
}

export default Stockage