
import  {Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import currentScreenWidth from '../../currentScreenWidth.jsx'
import {DataContext} from '../../utils/Context/DataContext'
import '../../style/Header.css'

function Header() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const {isContactOpen, setIsContactOpen} = useContext(DataContext)
    const mobile = currentScreenWidth()
    const [mobileNav, setMobileNav] = useState(false)
    const [iconType, setIconType] = useState("fa fa-bars")
    const [iconStyle, setIconStyle] = useState('iconContainer')
  
    const openContactPage =(event) => {
        event.preventDefault()
        setContactButton(!contactButton)
        setIsContactOpen(true)
    }

    const changingStyle = () => {
        if (iconStyle=='iconContainer') {
            setIconStyle('iconContainer mouse')
        }
        else {
            setIconStyle('iconContainer') 
        }
    }

    const openingClosingHamburger = (event => {
        event.preventDefault()
        setMobileNav(!mobileNav)
        if(iconType=="fa fa-bars") {
            setIconType("fa-solid fa-xmark")
        }
        else {
            setIconType("fa fa-bars")
        }
    })

    const closingHamburger = (event) => {
        event.preventDefault()
        setMobileNav(!mobileNav)
        setIconType("fa fa-bars")
    }

    return (
        <header>
            <h1> Co.TMF</h1>
            {mobile >=750 ? (
            <nav className='navHeader'>              
                    <Link to="/"className='headerLink'>ACCUEIL</Link>               
                    <Link to="/Stockage" className='headerLink'>STOCKAGE</Link>  
                    <Link to="/Transport" className='headerLink'>TRANSPORT</Link> 
                    <Link to="/Logistique" className='headerLink'>LOGISTIQUE</Link> 
                    <Link to="/Ventes" className='headerLink'>VENTES</Link>        
                <div className="contactModal">
                    <p className='headerLink modal' onClick={(e) => openContactPage(e)}>CONTACT</p>
                </div>
            </nav>) : ( 
                <div className='hamburgerContainer'>
                    <div className={iconStyle} onMouseEnter={changingStyle} onMouseLeave={changingStyle}>
                        <i className={iconType} onClick={openingClosingHamburger}></i>
                    </div>
            {mobileNav===true ? (
                <nav className='hamburgerLink' onClick={(e) => closingHamburger(e)}>
                        <Link to="/"className='headerMobileLink'>ACCUEIL</Link>
                        <Link to="/Stockage" className='headerMobileLink'>STOCKAGE</Link>                     
                        <Link to="/Transport" className='headerMobileLink'>TRANSPORT</Link>              
                        <Link to="/Logistique" className='headerMobileLink' >LOGISTIQUE</Link>  
                        <Link to="/Ventes" className='headerMobileLink'>VENTES</Link>
                        <div className="contactModal">
                            <div className='headerMobileLink modal' onClick={(e) => openContactPage(e)}>CONTACT</div>
                        </div>
                </nav>) : ('')}
            </div>)}
        </header>
    )
}

export default Header