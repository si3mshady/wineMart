const pd = require("node-pandas")
const GoogleImages = require('google-images');
const fs = require('fs')
const { v4  } = require('uuid');


const cseId = '522ec7ef7f924440d'
const apikey = 'AIzaSyDLmuRviT1sKD0N75RjfY9gkSrHLRKbFDw'
const client = new GoogleImages(cseId, apikey);


const parseCSV = () => {
    df = pd.readCsv('./Red.csv')
    const wineList = df
     return Array.from(wineList).splice(0,50)   
}  

var wl = parseCSV()

wl.forEach(key => {

    client.search(key.Name, {num: 1}).then(images => {      
     
        var element = {
            Name: key.Name,
            Country: key.Country,
            Region: key.Region,
            Rating: key.Rating,
            Price: key.Price,
            Year: key.Year,
            URL: images[0].url,
            ID: v4()
        }        
        
        fs.appendFile('MasterWineList.json',JSON.stringify(element) + ',' + '\n', 'utf8',
                
                function(err) {     
                    if (err) throw err;
                    
                    console.log("Data is appended to file successfully.")   
        });
        
        })


}
)

  
// const processImageList = async (list) => {
//     const arr = []
//         list.forEach(key => { client.search(key.Name, {num: 1})
//         .then(image => {
//             fs.appendFile('sample.txt',JSON.stringify(image), 'utf8',
//             // callback function
//             function(err) {     
//                 if (err) throw err;
//                 // if no error
//                 console.log("Data is appended to file successfully.")
//         });
            
//         })

        
    
    
//     })

    
        

        
// }
// var wl = parseCSV()
// processImageList(wl)


// https://developers.google.com/custom-search/v1/overview#prerequisites