import camion from '../../assets/img/20.png'
import '../../style/Transport.css'

function Transport() {
    return (
        <div className="transportContainer"> 
            <img src={camion} alt= "ttt" />
            <figcaption>
                <div className='gap'>
                    <p>nos véhicules livrent dans les:</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Hauts de France</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Régions Parisiennes et Ile de France</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Belgique</p>
                </div>
                <p></p>
                <p></p>
                <p>Nous effectuons également l'affrétement sur toute la France et les pays limitrophes</p>
                <p></p>
                <p></p>
                <p>Transport partiel ou complet</p>
            </figcaption>
        </div>
    )
}

export default Transport