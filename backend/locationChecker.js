// anotherFile.js

const { getTopSpeedSegments } = require('./speedData');
<<<<<<< Updated upstream
fetch('path/to/your/data.json')
=======
fetch('C:\Users\theog\OneDrive\Desktop\Coding projects\USA_CA_BayArea_geojson (2)')
>>>>>>> Stashed changes
  .then(response => response.json())
  .then(data => {
    // Work with your data here
    console.log(data);
  })
  .catch(error => console.error(error));
  
  for(i =0; i < 5; i++){
    for(w = 0; w < data.length; w++)
    {
        if(getTopSpeedSegments[i].code == data[w].properties.code)
        {
            console.log(getTopSpeedSegments[i].code);
        }
    }
}