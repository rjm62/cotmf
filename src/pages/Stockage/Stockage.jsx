import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import photoPageStockage from '../../assets/img/stockage.png'
import Contact from '../Contact/Contact'
import  '../../style/Stockage.css'

function Stockage() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const [display, setDisplay] = useState("OFF")
 
    useEffect(() => {
        contactButton ===true ? setDisplay("ON") : setDisplay("OFF")
    }, [contactButton]) 

    return (
        <div className="stockageContainer"> 
            <div className='imageContainer'>
                <img src={photoPageStockage} alt= "hangar avec des palettes" />
            </div>
            <div className='commentContainer'>
                <h2 className='withDecoration'>Stockage marchandises :</h2>
                <p>Nous disposons d'un entrepôt de 1500m2 et 3000m2 extérieurs dédié au 
                    stockage et à l'entreposage de marchandises dans le Pas de Calais, région
                    Haut de France .
                </p>
                <p>&Agrave; proximité des autoroutes A16 et A26, 20min .</p>
                <p></p>
                <p>Entièrement sécurisé, notre dépôt est un lieu de stockage et entreposage
                     sûr pour marchandises de toutes sortes .  
                </p>
            </div>
            {display=="ON" ? <Contact />: ("")}
        </div>
    )
}

export default Stockage