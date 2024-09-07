import {createContext, useState} from 'react'

export const DataContext = createContext();

 export const DataContextProvider = ({children}) =>{
    const [isContactOpen, setIsContactOpen] = useState(false)
    const [contactButton, setContactButton] = useState(false)
    
    return (    
        <DataContext.Provider value ={{ contactButton, setContactButton, isContactOpen, setIsContactOpen}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider