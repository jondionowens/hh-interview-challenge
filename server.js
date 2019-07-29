const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const data = 

app.use('/', express.static(path.join(__dirname, './public')));

app.get('/swatches/', (req, res) => {
    res.json({"get": "all"});
});

app.get('/swatches/:family', (req, res) => {
  if (req.params.family === 'reds') {
    res.json({"get": "red"});
  }
});


app.listen(port, () => {
  console.log(`App running on port ${port}!`);
})
