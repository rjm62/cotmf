import photoPageStockage from '../../assets/img/stockage3.png'
import  '../../style/Stockage.css'

function Stockage() {
    return (
        <div className="stockageContainer"> 
             <img src={photoPageStockage} alt= "ttt" />
             <figcaption>
                <p>Situation géographique: Desvres</p>
                <p>A 25 minutes de l'A16 et de l'A26</p>
                <p>A 2H30 de Paris</p>
                <p>Capacité de stockage interne:  500 palettes 80X120</p>
                <p>Capacité de stockage externe: 2000m2</p>
                <p>Surveillance du site 24H/24H</p>
                <p>Zone entièrement fermée</p>
            </figcaption>

        </div>
    )
}

export default Stockage