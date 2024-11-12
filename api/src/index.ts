import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { logger } from './utils/logger';
import dotenv from 'dotenv';
import './utils/connectDB';
import { UserRouter } from './user/user.route';

const app: Application = express();
const port: Number = 4000;

// parse body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();

// cors access handler
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.listen(port, () => logger.info(`Server is listening on port ${port}`));

const _routes: [string, Router][] = [['/api/auth', UserRouter]];
_routes.forEach((route) => {
  const [url, router] = route;
  app.use(url, router);
});
