import { Router } from 'express';
import { login, register } from './user.controller';

export const UserRouter: Router = Router();

UserRouter.post('/register', register);
UserRouter.post('/login', login);
