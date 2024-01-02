import {React, createContext, useState} from 'react';

export const DataContext = createContext();

export const Context = ({children}) => {

    const [peopleData, setPeopleData] = useState([]);
    
    const info ={ peopleData, setPeopleData}
  return (
    <DataContext.Provider value={info}>
        {children}
    </DataContext.Provider>
  )
}

export default Context