const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const pageSize = 2;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', express.static(path.join(__dirname, './public')));


/* ROUTES */
app.get('/swatches', (req, res) => {
  const page = req.query.page;
  fetchSwatches('all', page, pageSize, res.json.bind(res));
});

app.get('/swatches/:family', (req, res) => {
  if (req.params.family === 'reds' || req.params.family === 'red') {
    fetchSwatches('red', res.json.bind(res));
  } 
  
  else if (req.params.family === 'greens' || req.params.family === 'green') {
    fetchSwatches('green', res.json.bind(res));
  } 
  
  else {
    fs.readFile('./data.json', (err, data) => {
      fetchSwatches('all', res.json.bind(res));
    })
  }
});

app.listen(port, () => { console.log(`App running on port ${port}!`) });

/* HELPERS */
const fetchSwatches = (color, page, pageSize, responder) => {
  fs.readFile('./data.json', (err, data) => {
      if (err) { throw err };

      const parsedData = JSON.parse(data);

      if (color === 'all') {
        --page;
        console.log(parsedData.colors.slice(page * pageSize, (page + 1) * pageSize))
        responder(parsedData.colors.slice(page * pageSize, (page + 1) * pageSize))
      } 
      
      else {
        const filteredData = parsedData.colors.filter(swatch => swatch.family === color);
        responder(filteredData);
      }
    }
  )
}