import {useState, useEffect, useContext} from 'react'
import './App.css';
import NFTtokenResource from './components/NFTtokenResource'

import Box from '@mui/material/Box';
import {WineContext} from './context/wineContext'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

// import { ChainContext}  from './context/Context'
// import {data} from './MasterWineList.js'


// Name: key.Name,
// Country: key.Country,
// Region: key.Region,
// Rating: key.Rating,
// Price: key.Price,
// Year: key.Year,
// URL: images[0].url,
// ID: v4()



function App() {

  const {starterData} = useContext(WineContext)

  
 
  return (
    <>
     {/* <div style={{width:'100%',height:'20px', backgroundColor:'blue'}}>NAVBAR</div>  */}
     {/* <div style={{display: 'flex'}}> */}

    {/* <div style={{backgroundColor:'red'}}>SIDEBAR</div> */} 

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
