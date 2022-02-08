import React, { useEffect, useState} from 'react'

import {data} from '../MasterWineList'

export const WineContext = React.createContext();

// make context to fetch data from local 
export const WineProvider = ({children}) => { 

    const [starterData, setData] = useState([])

    useEffect(() => {
        
      const result =  data.filter((val) => {
           return val.Name !== 'Steiner 2013' && val.Name !== 'Tradition 2014';
            
      })

    setData(result)
       

    }   )
   

    return (
        <WineContext.Provider value={{starterData}}>
            {children}
        </WineContext.Provider>
    )



}
