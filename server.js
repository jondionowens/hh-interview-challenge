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
    fetchSwatches('red', res.json.bind(res));
  } else if (req.params.family === 'greens' || req.params.family === 'green') {
    fetchSwatches('green', res.json.bind(res));
  } else {
    fs.readFile('./data.json', (err, data) => {
      fetchSwatches('red', res.json.bind(res));
    })
  }
});

app.listen(port, () => { console.log(`App running on port ${port}!`) });

// HELPERS
const fetchSwatches = (color, responder) => {
  fs.readFile('./data.json', 
    (err, data) => {
      if (err) { throw err };
      const parsedData = JSON.parse(data);
      const filteredData = parsedData.colors.filter(swatch => swatch.family === color);
      console.log(filteredData)
      responder({ data: filteredData });
    }
  )
}