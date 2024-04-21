import express from 'express';
import { json, urlencoded } from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

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
app.use(json({ extended : true}))
app.use(urlencoded({ extended: true }));
app.listen(port, (req, res) => {
  console.log(`App listening at http://localhost:${port}`);
});
