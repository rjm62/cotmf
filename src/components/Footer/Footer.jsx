import  {Link} from 'react-router-dom'
import {useContext} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import '../../style/Footer.css'

function Footer() {
    const {contactButton, setContactButton} = useContext(DataContext)
  
    const openContactPage =(event) => {
        event.preventDefault()
        setContactButton(!contactButton)
    }
    return (
        <div className='footerContainer'>
            <nav className='navFooter'>
                <div>
                    <Link to="/MentionsLegales" className='footerLink'>Mentions légales</Link>
                </div>
                <div>
                    <Link to="/PolitiqueDeConfidentialite" className='footerLink'>Politique de confidentialité</Link>
                </div>
                <div className='footerLink' onClick={openContactPage}>Contact</div>
            </nav>
            <div>
                <p className='footerLink copyright'><i className="fa-regular fa-copyright"></i>&nbsp; 2024  Co.TMF <i>&nbsp;&nbsp;&nbsp;&nbsp;</i>  tous droits réservés</p>
            </div>
        </div>
    )
}

export default Footer