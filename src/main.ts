import express from 'express';
import cors from 'cors';
import  dotenv from "dotenv";
import bodyParser from 'body-parser';
import { initializeConnectionTodb } from './db';
import { errorHandler, routeNotFoundHandler } from "./middlewares";

dotenv.config();

const app = express()

app.use(bodyParser.json());
app.use(cors());

initializeConnectionTodb();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

/**
 * 404 Route Handler
 */
 app.use(routeNotFoundHandler);

/**
* Error Handler
*/
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server Started`)
})