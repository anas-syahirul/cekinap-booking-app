import mongoose from 'mongoose';
import { logger } from './logger';
import dotenv from 'dotenv';

dotenv.config();
mongoose
  .connect(`${process.env.DB}`)
  .then(() => {
    logger.info('Connected to MongoDB');
  })
  .catch((error) => {
    logger.info('Could not connect to DB');
    logger.info(error);
    process.exit(1);
  });
