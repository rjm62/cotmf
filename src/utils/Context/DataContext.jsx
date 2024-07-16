import {createContext, useState} from 'react'

export const DataContext = createContext();

 export const DataContextProvider = ({children}) =>{
    const [contactButton, setContactButton] = useState(false)
    
    return (    
        <DataContext.Provider value ={{ contactButton, setContactButton}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider