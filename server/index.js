const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes.js');
const cors = require('cors');

const app = express();

const port = 3000

var allowCrossDomain = function (req, res, next)
  {
  res.header('Allow-Control-Allow-Origin', '*');
  res.header('Allow-Control-Allow-Methods', 'POST');
  res.header('Allow-Control-Allow-Headers', 'Content-Type');
}
  
app.use(allowCrossDomain)

app.use('/run', userRoutes)
app.use(cors())
app.use(bodyParser.json({ extended : true}))
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, (req, res) => {
  console.log(`App listening at http://localhost:${port}`);
});
