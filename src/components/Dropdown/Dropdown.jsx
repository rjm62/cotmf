import {useState} from 'react'
import '../../style/Dropdown.css'

function Dropdown({selectedStatut}) {
    const [openCollapse, setOpenCollapse]= useState(true);
    const [selectionDisplay, setSelectionDisplay] =useState("")
    const statut = ["Professionnel", "Particulier"]

    const closeCollapseContent = () => {
        setOpenCollapse(true)
    }

    const openCollapseContent = () => {
        setOpenCollapse(false)
    }

    const choice = (event) => {
        event.preventDefault()
        setSelectionDisplay(event.target.value)
        selectedStatut(event.target.value)
        setOpenCollapse(true)
        console.log(event.target.value)
    }

    return (
        <div>
            {openCollapse=== false ?
            <div className='collapseContainer' >
                <div className='collapse'>
                    <p>{selectionDisplay}</p>
                <i className="fa-solid fa-chevron-up" onClick={closeCollapseContent}></i>
                </div>
                <div className='collapseContent' onClick={choice}> { statut.map((detail) => {
                        return <option className='position' key={detail} >{detail}</option>
                    })}     
                </div>
            </div> : 
             <div className='collapseContainer'>
                <div className='collapse'>
                    <p>{selectionDisplay}</p>
                <i className="fa-solid fa-chevron-down" onClick={openCollapseContent}></i>
                </div>
            </div>}
        </div>
    )
}
export default Dropdown