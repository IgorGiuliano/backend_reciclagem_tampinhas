import { LoginController } from '@controllers/users/LoginController';
import { RegisterUserController } from '@controllers/users/RegisterUserController';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/login', new LoginController().handle);
userRoutes.post('/register_user', new RegisterUserController().handle);

export { userRoutes };
