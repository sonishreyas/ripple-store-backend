import express from 'express';
import cors from 'cors';
import  dotenv from "dotenv";
import bodyParser from 'body-parser';
import { initializeConnectionTodb } from './db';

dotenv.config();

const app = express()

app.use(bodyParser.json());
app.use(cors());

initializeConnectionTodb();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})