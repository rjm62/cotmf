import {useContext, useEffect, useState} from 'react'
import {DataContext} from '../../utils/Context/DataContext'
import mentionsLegales from '../../assets/pdf/mentionsLegales.pdf'
import Contact from '../Contact/Contact'
import  '../../style/MentionsLegales.css'

function MentionsLegales() {
    const {contactButton, setContactButton} = useContext(DataContext)
    const [display, setDisplay] = useState("OFF")
 
    useEffect(() => {
        contactButton ===true ? setDisplay("ON") : setDisplay("OFF")
    }, [contactButton]) 

    return (
        <div className="mentionsLegalesContainer">
            <h2>MENTIONS LEGALES</h2>
            <p className='center'>En vigueur au 15 août 2024</p>
            <p></p>
            <p>Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la
                confiance en l'économie numérique, il est porté à la connaissance des
                utilisateurs et visiteurs, ci-après l' "utilisateur", du site Co.TMF,
                ci-après le "site", les présentes mentions légales.</p>
                <p>La connexion et la navigation sur le Site par l'Utilisateur implique
                l'acceptation intégrale et sans réserve des présentes mentions légales.
                </p>
                <p></p>
                <p></p>
                <h3>PROPRIETAIRE DU SITE</h3>
                <p>Identité de l'entreprise</p>
                <p>Nom et prénom accompagnés de EI</p>
                <p>Numéro d'immatriculation</p>
                <p>Mail et numéro de téléphone</p>
                <p>Numéro d'identification à la TVA</p>
                <p></p>
                <p></p>
                <h3>CONCEPTEUR DU SITE</h3>
                <p>RJM62</p>
                <p></p>
                <p></p>
                <h3>HEBERGEUR</h3>
                <p>L'hébergeur du site est la société ....................</p>
                <p>Le siège social est situé au .............</p>
                <p></p>
                <p></p>
                <h3>ACCES AU SITE</h3>
                <p>Le site est normalement accessible à tout moment pour l'utilisateur.
                   Toutefois, l'éditeur pourra à tout moment suspendre, limiter ou interrompre
                   le site afin de procéder, notamment, à des mises à jour ou des modifications 
                   de son contenu.
                   L'éditeur ne pourra en aucun cas être tenu responsable des conséquences éventuelles
                    de cette indisponibilité sur les activités de l'utilisateur.</p>
                    <p></p>
                    <p>Toute utilisation, reproduction, diffusion, commercialisation, modifications
                    de toute ou partie du site, sans autorisation expresse de l'éditeur est prohibée et
                    pourra entraîner des actions et poursuites judiciaires telles que prévues par la 
                    réglementation en vigueur.
                    </p>
                {display=="ON" ? <Contact />: ("")}
        </div>
    )
}

export default MentionsLegales