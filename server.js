const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const pageSize = 20;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', express.static(path.join(__dirname, './public')));


/* Get all swatches */
app.get('/swatches', (req, res) => {
  const page = req.query.page;
  fetchSwatches('all', page, pageSize, res.json.bind(res));
});

/* Get random swatch */
app.get('/swatches/random', (req, res) => {
  const page = req.query.page;
  fetchSwatches('random-single', page, pageSize, res.json.bind(res));
});

/* Get swatches by color family */
app.get('/swatches/:family', (req, res) => {
  if (req.params.family === 'reds' || req.params.family === 'red') {
    fetchSwatches('red', res.json.bind(res));
  }

  else if (req.params.family === 'greens' || req.params.family === 'green') {
    fetchSwatches('green', res.json.bind(res));
  }

  else {
    fs.readFile('./swatchData.json', (err, data) => {
      fetchSwatches('all', res.json.bind(res));
    })
  }
});

app.listen(port, () => { console.log(`App running on port ${port}!`) });

/* Helpers */
const fetchSwatches = (color, page, pageSize, responder) => {
  fs.readFile('./swatchData.json', (err, data) => {
    if (err) { throw err };

    const parsedData = JSON.parse(data);

    if (color === 'all') {
      --page;
      const slicedData = parsedData.colors.slice(page * pageSize, (page + 1) * pageSize);
      const pageCount = Math.ceil(parsedData.colors.length / pageSize);
      const response = { pages: pageCount, swatches: slicedData };
      responder(response);
    }

    else if (color === 'random-single') {
      const randomSwatch = parsedData.colors[Math.floor(Math.random() * parsedData.colors.length)];
      const response = { swatches: randomSwatch };
      responder(response);
    }

    else {
      const filteredData = parsedData.colors.filter(swatch => swatch.family === color);
      responder(filteredData);
    }
  }
  )
}