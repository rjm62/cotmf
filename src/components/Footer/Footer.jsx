import  {Link} from 'react-router-dom'
import '../../style/Footer.css'

function Footer() {
    return (
        <div className='footerContainer'>
            <nav className='navFooter'>
                <div>
                    <Link to="/MentionsLégales" className='footerLink'>Mentions légales</Link>
                </div>
                <div>
                    <Link to="/Politique de confidentialité" className='footerLink'>Politique de confidentialité</Link>
                </div>
                <div className='footerLink'>Contact</div>
            </nav>
            <div>
                <p className='footerLink copyright'><i className="fa-regular fa-copyright"></i>&nbsp; 2024  Co.TMF <i>&nbsp;&nbsp;&nbsp;&nbsp;</i>  tous droits réservés</p>
            </div>
        </div>
    )
}

export default Footer