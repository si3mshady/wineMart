const axios = require("axios").default;
require('dotenv').config()

const clientId = process.env.REACT_APP_CLIENT_ID
const fetchImage = async (keyword='Lirac') => {

    var options = {
        method: 'GET',
        url: `https://api.unsplash.com/search/photos?client_id=${clientId}&query=${keyword}`       
      };

    const response =  await axios.request(options)    
    const url = response.data.results[0].urls.regular
    console.log(url)
    return url
   
}

// fetchImage()

export default fetchImage



// https://unsplash.com/documentation#search-photos