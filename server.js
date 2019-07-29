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
    (async function () {
      const results = await fetchSwatches('red');
      res.json({ 'data': 'results' });
  })();
  } else if (req.params.family === 'greens' || req.params.family === 'green') {
    fs.readFile('./data.json', (err, data) => {
      if (err) { throw err };
      let parsedData = JSON.parse(data);
      res.json(parsedData);
    })
  } else {
    fs.readFile('./data.json', (err, data) => {
      if (err) { throw err };
      let parsedData = JSON.parse(data);
      res.json(parsedData);
    })
  }

  /// Catch-all, returns all swatches if there isn't a matching family


});

app.listen(port, () => { console.log(`App running on port ${port}!`) });



// HELPERS

const fetchSwatches = (color) => {
  fs.readFile('./data.json', (err, data) => {
    if (err) { throw err };
    const parsedData = JSON.parse(data);
    console.log(parsedData)
    filteredData = parsedData.colors.filter(swatch => swatch.family === 'red');
  }
  )
}