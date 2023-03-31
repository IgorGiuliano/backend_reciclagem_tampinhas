import { LoginController } from '@controllers/users/LoginController';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/login', new LoginController().handle);

export { userRoutes };
