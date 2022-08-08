import express from 'express';
import cors from 'cors';
import  dotenv from "dotenv";
dotenv.config();

import bodyParser from 'body-parser';
import { initializeConnectionTodb } from './db';
import { errorHandler, routeNotFoundHandler } from "./middlewares";
import {products} from "./routers";

const app = express()

app.use(bodyParser.json());
app.use(cors());

initializeConnectionTodb();

app.get('/', (req, res) => {
  res.send('Welcome to Ripple Store')
})

app.use('/products', products);

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