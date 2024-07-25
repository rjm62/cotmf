import logistique1 from '../../assets/img/logistique1.png'
import logistique2 from '../../assets/img/logistique2.png'
import logistique3 from '../../assets/img/logistique3.jpg'
import '../../style/Logistique.css'

function Logistique() {
    return (
        <div className="logistiqueContainer">
            <figure>
                <img src={logistique1} alt="" />
                <figcaption>Dépotage empotage de containers</figcaption>
            </figure>
            <figure>
                <img src={logistique2} alt="" />
                <figcaption>Reconditionnement de palettes</figcaption>
            </figure>
            <figure>
                <img src={logistique3} alt="" />
                <figcaption>Préparation de commandes</figcaption>
            </figure>
        </div>
    )
}

export default Logistique