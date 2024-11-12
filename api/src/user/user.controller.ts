import { Request, Response } from 'express';
import User from './user.model';
import { checkPassword, hashing } from '../utils/hashing';
import { logger } from '../utils/logger';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password: `${hashing(password)}`,
    });
    logger.info('Success register user');
    res.status(201).json({
      statusCode: 201,
      message: 'Success register user',
      data: true,
    });
    return;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`ERR: auth - register = ${error.message}`);
      res
        .status(500)
        .send({ status: false, statusCode: 500, message: error.message });
      return;
    } else {
      logger.error(`ERR: auth - register = ${error}`);
      res.status(500).send({ status: false, statusCode: 500, message: error });
      return;
    }
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({
        statusCode: 404,
        message: 'invalid email',
        data: false,
      });
      return;
    }
    const isValid = checkPassword(password, user.password);
    if (!isValid) {
      res
        .status(401)
        .json({ statusCode: 401, message: 'Invalid Password', data: false });
      return;
    }
    const secretKey = process.env.JWT_SECRET;
    const accessToken = jwt.sign({ ...user }, `${secretKey}`, {
      expiresIn: '1d',
    });
    logger.info('Login Success');
    res
      .status(200)
      .cookie('token', accessToken)
      .json({
        statusCode: 200,
        message: 'Login success',
        data: { user: { email: user.email, name: user.name } },
      });
    return;
  } catch (error) {
    if (error instanceof Error) {
      logger.error(`ERR: auth - login = ${error.message}`);
      res
        .status(500)
        .send({ status: false, statusCode: 500, message: error.message });
      return;
    } else {
      logger.error(`ERR: auth - login = ${error}`);
      res.status(500).send({ status: false, statusCode: 500, message: error });
      return;
    }
  }
};
