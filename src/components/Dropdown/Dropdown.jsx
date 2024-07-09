import {useState} from 'react'
import '../../style/Dropdown.css'

function Dropdown() {
    const [selectionDisplay, setSelectionDisplay] =useState("COUCOU")
    return (
        <div className='collapseContainer'>
            <div className='collapse'>
                <p>{selectionDisplay}</p>
            <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div className='collapseContent' >
                <p> Chef d'entreprise</p>
                <p>Particulier</p>
            </div>
        </div>
    )
}
export default Dropdown