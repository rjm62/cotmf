import { useState, useRef } from 'react';
import {useContext} from 'react';
import {DataContext} from '../../utils/Context/DataContext';
import emailjs from '@emailjs/browser';
import '../../style/Contact.css';
import { useOutletContext } from 'react-router-dom';

function Contact() { 
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [statut, setStatut] = useState("non indiqué")
    const [checkbox, setCheckbox] = useState("")
    const [message, setMessage] = useState("")
    const [lastNameCheck, setLastNameCheck] = useState(10)
    const [emailCheck, setEmailCheck] = useState(20)
    const [particulierChoosen, setParticulierChoosen] = useState("")
    const [professionnelChoosen, setProfessionnelChoosen] = useState("")
    const [stockageAsked, setStockageAsked] = useState(false)
    const [transportAsked, setTransportAsked] = useState(false)
    const [logistiqueAsked, setLogistiqueAsked] = useState(false)
    const [ventesAsked, setVentesAsked] = useState(false)
    const [stockageRequest, setStockageRequest] = useState("")
    const [transportRequest, setTransportRequest] = useState("")
    const [logistiqueRequest, setLogistiqueRequest] = useState("")
    const [ventesRequest, setVentesRequest] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [thanks, setThanks] = useState(true)
    const [spinner, setSpinner] = useState(true)
    const {contactButton, setContactButton} = useContext(DataContext)
    const {isContactOpen, setIsContactOpen} = useContext(DataContext)
    console.log(contactButton)
    
    const [sendMessage, setSendMessage] = useState("En cours de traitement...")
    const serviceId = 'service_5goaltg'
    const templateId = 'template_odf40lg'
    const publicKey = 'Ur_I_y3LsHvbROGoK'

    const templateParams = {
        from_name: lastName + ' '+ ' ' +firstName +' '+' '+ ' cette personne est un ' + ' ' +particulierChoosen + professionnelChoosen + ' ' + ', et sa demande concerne: '+' ' +stockageRequest +' ' + ' ' + ' '+transportRequest + ' ' + ' '+logistiqueRequest + ' ' + ' '+ventesRequest,
        from_email: email,
        to_name: 'Monsieur Falempin',
        message :message,
    }

    const contactPageClose = (event) => {
        event.preventDefault()
        setContactButton(!contactButton)
        setIsContactOpen(false)
    }

    const lastNameChangeAndCheck = (event) => {
        event.preventDefault()
        setLastName(event.target.value)
        if(event.target.value.length>2) {
            setLastNameCheck(0);
            setLastNameError("");
        }
        else {
            setLastNameCheck(10);
        }
    }

    const emailChangeAndCheck = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
        let regEmail=new RegExp("^[a-z0-9\.\-_]+[a-z0-9]*@[a-z0-9]{2,}\.[a-z\.\-_]+[a-z\-_]{2,}$", "i")
        var check =(regEmail.test(event.target.value))
        if(check=== true) {
            setEmailCheck(0);
            setEmailError("");
        }
        else {
            setEmailCheck(20)
        }
    }

    const toggleParticulierChoosen = () => {
        setParticulierChoosen(!particulierChoosen)
        setProfessionnelChoosen("")
        particulierChoosen === false ? (setParticulierChoosen("")) :(setParticulierChoosen("particulier"))
    }

    const toggleProfessionnelChoosen = () => {
        setProfessionnelChoosen(!professionnelChoosen)
        setParticulierChoosen("")
        professionnelChoosen === false ? (setProfessionnelChoosen("")) : (setProfessionnelChoosen("professionnel"))
    }

    const toggleStockageAsked = () => {
        setStockageAsked(!stockageAsked) 
        stockageAsked === false ? (setStockageRequest("stockage")) : (setStockageRequest(""))
    }

    const toggleTransportAsked = () => {
        setTransportAsked(!transportAsked)
        transportAsked === false ? (setTransportRequest("transport")) : (setTransportRequest(""))
    }

    const toggleLogistiqueAsked = () => {
        setLogistiqueAsked(!logistiqueAsked)
        logistiqueAsked === false ? (setLogistiqueRequest("logistique")) : (setLogistiqueRequest(""))
    }

    const toggleVentesAsked = () => {
        setVentesAsked(!ventesAsked)
        ventesAsked === false ? (setVentesRequest("ventes")) : (setVentesRequest(""))
    }

    const selectedStatut = (choice) => {
        setStatut(choice)
    }

    const send = (event) => {
        event.preventDefault()

    const resultCheck = lastNameCheck + emailCheck

        switch (resultCheck) {
            case 0 :
                setLastNameError("")
                setEmailError( "")
                setThanks(false)

                emailjs.send(serviceId, templateId, templateParams, publicKey)
                     .then(
                       (response) => {
                         console.log('SUCCESS!', response);
                         setSendMessage("Nous avons bien reçu votre message, vous allez recevoir un mail de confirmation.");
                         setSpinner(false)
                       },
                       (error) => {
                         console.log('FAILED...', error.text);
                         setSendMessage("Désolé un problème dans l'envoi est survenu, veuillez réessayer ou envoyer un mail à: co.tmf.pro@gmail.com.");
                         setSpinner(false)
                       },
                     );
                return;

            case 10 :
                setLastNameError("veuillez entrer votre nom")
                setEmailError( "")
                return;

            case 20 :
                setLastNameError("")
                setEmailError( "l'adresse mail n'est pas conforme")
                return;

            case 30 :
                setLastNameError("veuillez entrer votre nom")
                setEmailError( "l'adresse mail n'est pas conforme")

                return;

            default :
                return;
        }

    } 
    
    return (
        <div className="pageContainer">
            {thanks===true ? (
            <div className='exitFormInfosContainer'>
                <div className='exitContainer' onClick={contactPageClose}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className='formInfosContainer' >
                    <form className='form' onSubmit={(e) => send(e)} >
                        <div className='field'>
                            <label htmlFor='lastName'>Nom</label>
                            <input type='text' id='lastName' name='lastName' onChange={lastNameChangeAndCheck} />
                        </div>
                        <p className='error' > &nbsp;{lastNameError}</p>
                        <div className='field'>
                            <label htmlFor='firstName'>Prénom</label>
                            <input type='text' id='firstName' name='firstName' onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <p className='error' > &nbsp;</p>
                        <div className='field'>
                            <label htmlFor='mail'>Adresse mail</label>
                            <input type='email' id='mail' name='mail' onChange={emailChangeAndCheck} />
                        </div>
                        <p className='error'>&nbsp;{emailError}</p>


                        <legend htmlFor='statut'>Statut</legend>
                        <div className='checkboxField'>
                            <div className='checkboxUnitary'>
                            <input type='radio' id='particulier' name='particulier' className='checkbox' value= {particulierChoosen} onChange={toggleParticulierChoosen} />
                            <label htmlFor='particulier'>Particulier</label>
                            </div>
                            <div className='checkboxUnitary'>
                            <input type='radio' id='professionnel' name='professionnel' className='checkbox' value= {professionnelChoosen} onChange={toggleProfessionnelChoosen} />
                            <label htmlFor='professionnel'>Professionnel</label>
                            </div>
                


                        </div>
                        <p className='error'>&nbsp;</p>
                        <legend>Votre demande concerne :</legend>
                        <div className='checkboxField'>
                            <div className='checkboxUnitary'>
                            <input type='checkbox' id='stockage'name='stockage' className='checkbox' value= {stockageAsked}  onChange={toggleStockageAsked}/>
                            <label htmlFor='stockage'>Stockage</label>
                            </div>
                            <div className='checkboxUnitary'>
                            <input type='checkbox' id='transport' name='transport' className='checkbox' value= {transportAsked} onChange={toggleTransportAsked} />
                            <label htmlFor='transport'>Transport</label>
                            </div>
                        </div>
                        <div className='checkboxField'>
                            <div className='checkboxUnitary'>
                            <input type='checkbox' id='logistique' name='logistique' className='checkbox' value= {logistiqueAsked} onChange={toggleLogistiqueAsked} />
                            <label htmlFor='logistique'>Logistique</label>
                            </div>
                            <div className='checkboxUnitary'>
                            <input type='checkbox' id='ventes' name='ventes' className='checkbox' value= {ventesAsked} onChange={toggleVentesAsked} />
                            <label htmlFor='ventes'>Ventes</label>
                            </div>
                        </div>
                        <div className='field message'>
                            <label htmlFor='message'>Message</label>
                            <textarea name="message" onChange={(e) =>setMessage(e.target.value)} />
                        </div>
                        <button >ENVOI</button>                
                    </form>
                    <div className='infos'>
                        <h2 className='title'>Coordonnées:</h2>
                        <div className='phone'> 
                            <i className="fa-solid fa-phone"></i>
                            <p className='phoneNumber'>06-73-04-36-16</p>
                        </div>
                        <div className='location'>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>72b route du Petit Parenty   62250 PARENTY</p>
                        </div>
                        <div className='email'>
                        <i className="fa-solid fa-envelope"></i>
                            <p>co.tmf.pro@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div> ) 
            : (<div className='thankYou'>
                 <div className='exitContainer' onClick={contactPageClose}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className='messageContainer'>
                    <p>{sendMessage}</p>
                    {spinner ===true ? <div className='spinnerContainer'>
                        <div className='spinner'> </div>
                    </div> : ""}
                </div>
            </div>)}
        </div>
    )
}

export default Contact