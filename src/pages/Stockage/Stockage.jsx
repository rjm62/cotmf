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
             <img src={photoPageStockage} alt= "hangar avec des palettes" />
             <figcaption>
                <p className='withDecoration'>Notre entrepôt idéalement situé à Desvres :</p>
                <p>25 minutes de l'A16 et de l'A26</p>
                <p>2H30 de Paris et de Bruxelles</p>
                <p></p>
                <p></p>
                <p className='withDecoration'>Une capacité de stockage :</p>
                <p>- Interne de 500 palettes 80 X 120</p>
                <p>- Externe de 2000 m2</p>
                <p></p>
                <p></p>
                <p>Zone sécurisée surveillée 24h/24</p>
            </figcaption>
            {display=="ON" ? <Contact />: ("")}
        </div>
    )
}

export default Stockage