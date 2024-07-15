import  {Link} from 'react-router-dom'
// import Contact from '../../pages/Contact/Contact'
import '../../style/Header.css'

function Header() {
    const essai="OUI"
    return (
        <div className="headerContainer">
            <h1 className='notranslate'> Co.TMF</h1>
            <nav className='navHeader'>
                <div>
                    <Link to="/"className='headerLink'>ACCUEIL</Link>
                </div>
                <div>
                    <Link to="/Stockage" className='headerLink'>STOCKAGE</Link>
                </div>
                <div>
                    <Link to="/Transport" className='headerLink'>TRANSPORT</Link>
                </div>
                <div>
                    <Link to="/Logistique" className='headerLink'>LOGISTIQUE</Link>
                </div>
                <div className="contactModal">
                    <p className='headerLink modal'>CONTACT</p>
                </div>
                <div className='mobileNav'>
                    <i className="fa-solid fa-bars icon"></i>
                    <div className='choice'>
                        <p>STOCKAGE</p>
                        <p>TRANSPORT</p>
                        <p>LOGISTIQUE</p>
                        <p>CONTACT</p>
                    </div>
                </div>  
            </nav>
            {/* {essai=="OUI" ? <Contact /> : ("")} */}
        </div>
    )
}

export default Header