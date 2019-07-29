const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');

app.use('/', express.static(path.join(__dirname, './public')));

app.get('/swatches/', (req, res) => {
  res.json({ "get": "all" });
});

app.get('/swatches/:family', (req, res) => {
  if (req.params.family === 'reds' || req.params.family === 'red') {
    let parsedData;
    fs.readFile('./data.json', (err, data) => {
      if (err) { throw err };
      parsedData = JSON.parse(data);
      res.json(parsedData);
    })

    
  } 

  if (req.params.family === 'greens' || req.params.family === 'green') {
    res.json({ "get": "greens" });
  } 

  // Catch-all, returns all swatches if there isn't a matching family
  res.json({ "get": "all" });

});

app.listen(port, () => { console.log(`App running on port ${port}!`) });
