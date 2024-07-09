import Dropdown from '../../components/Dropdown/Dropdown'
import '../../style/Contact.css'
function Contact() {
    return (
        <div className="pageContainer">
            <div className='exitFormInfosContainer'>
                <div className='exitContainer'>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div className='formInfosContainer'>
                    <div className='form'>
                        <div className='field'>
                            <label htmlFor='lastName'>Nom</label>
                            <input type='text' id='lastName' name='lastName' />
                        </div>
                        <p className='error' >&nbsp;</p>
                        <div className='field'>
                            <label htmlFor='firstName'>Prénom</label>
                            <input type='text' id='lastName' name='lastName' />
                        </div>
                        <p className='error'>&nbsp;</p>
                        <div className='field'>
                            <label htmlFor='mail'>Adresse mail</label>
                            <input type='email' id='mail' name='mail' />
                        </div>
                        <p className='error'>&nbsp;</p>
                        <div className='field'>
                            <label htmlFor='statut'>Statut</label>
                            <Dropdown />
                        </div>
                        <p className='error'>&nbsp;</p>
                        <legend>Votre demande concerne:</legend>
                        <div className='checkboxField'>
                            <input type='checkbox' id='stockage'name='demande' value='stockage' />
                            <label htmlFor='stockage'>Stockage</label>
                            <input type='checkbox' id='transport' name='demande' value='transport' />
                            <label htmlFor='transport'>Transport</label>
                        </div>
                        <div className='field message'>
                            <label htmlFor='message'>Message</label>
                            <textarea name="message" />
                        </div>
                        <div className='button'>
                            <p>ENVOI</p>
                        </div>                
                    </div>
                    <div className='infos'>
                        <h2 className='title'>Coordonnées:</h2>
                        <div className='phone'> 
                            <i class="fa-solid fa-phone"></i>
                            <p className='phoneNumber'>06-73-04-36-16</p>
                        </div>
                        <div className='location'>
                            <i class="fa-solid fa-location-dot"></i>
                            <p>72b route du Petit Parenty   62250 PARENTY</p>
                        </div>
                        <div className='email'>
                        <i class="fa-solid fa-envelope"></i>
                            <p>co.tmf.pro@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact