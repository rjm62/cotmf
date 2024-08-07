import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import Contact from '../Contact/Contact'
import  '../../style/PolitiqueDeConfidentialite.css'

function PolitiqueDeConfidentialite() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const [display, setDisplay] = useState("OFF")
 
    useEffect(() => {
        contactButton ===true ? setDisplay("ON") : setDisplay("OFF")
    }, [contactButton]) 

    return (
        <div className='politiqueDeConfidentialiteContainer'>
            <p>POLITIQUE DE CONFIDENTIALITE</p>
            {display=="ON" ? <Contact />: ("")}
        </div>
    )
}

export default PolitiqueDeConfidentialite