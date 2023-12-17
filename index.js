import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductRouter from './routes/ProductRoute.js';

// Environment
dotenv.config();
const { APP_PORT } = process.env;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(ProductRouter);

app.listen(APP_PORT, () => {
  console.log(`Server running at port ${APP_PORT}`);
})