import express from "express";
import { json, urlencoded } from "body-parser";
import userRoutes from './routes/userRoutes.js'

const app = express();

const port = 3000

app.use('/', userRoutes)

app.use(json({ extended : true}))
app.use(urlencoded({ extended: true }));
app.listen(port, (req, res) => {
  console.log(`App listening at http://localhost:${port}`);
});
