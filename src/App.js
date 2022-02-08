import {useState, useEffect, useContext} from 'react'
import './App.css';
import NFTtokenResource from './components/NFTtokenResource'

import Box from '@mui/material/Box';
import {WineContext} from './context/wineContext'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

function App() {

  const {starterData} = useContext(WineContext)

  
 
  return (
    <>


    <NavBar />
    <div style={{display: 'flex'}}>

    <SideBar />
   
    <Box  sx={{ 
        display: 'flex',        
        flexWrap: 'wrap',     
        justifyContent:'space-evenly'}}> 
       {      

starterData.map(event => (<NFTtokenResource key={event.ID}
        Name={event.Name}
        Price={event.Price}  
        URL={event.URL}    
        // Year={event.Year}
        ID = {event.ID}
        Rating = {event.Rating}
        />))
 
     }            
      
     </Box>



    </div>
    

     </>
  );
}

export default App;
