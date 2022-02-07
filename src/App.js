import {useState, useEffect, useContext} from 'react'
import './App.css';
import NFTtokenResource from './components/NFTtokenResource'
import {data} from './MasterWineList'
import Box from '@mui/material/Box';
// import { ChainContext}  from './context/Context'



// Name: key.Name,
// Country: key.Country,
// Region: key.Region,
// Rating: key.Rating,
// Price: key.Price,
// Year: key.Year,
// URL: images[0].url,
// ID: v4()



function App() {
  
 
  return (
    <Box sx={{ width: '100%',
        display: 'flex',
        flexWrap: 'wrap',     
        justifyContent:'space-around'}}> 
       {      

        data.map(event => (<NFTtokenResource key={event.ID}
        Name={event.Name}
        Price={event.Price}  
        URL={event.URL}    
        Year={event.Year}
        ID = {event.ID}
        Rating = {event.Rating}
        />))
 
     }            
      
     </Box>
  );
}

export default App;
