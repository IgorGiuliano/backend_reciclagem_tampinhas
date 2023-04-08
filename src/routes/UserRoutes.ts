import { Router } from 'express';
import { DisableUserController } from '@controllers/users/DisableUserController';
import { EditUserController } from '@controllers/users/EditUserController';
import { ListUsersController } from '@controllers/users/ListUsersController';
import { LoginController } from '@controllers/users/LoginController';
import { RegisterUserController } from '@controllers/users/RegisterUserController';

const userRoutes = Router();

userRoutes.post('/login', new LoginController().handle);
userRoutes.post('/register_user', new RegisterUserController().handle);
userRoutes.put('/edit_user', new EditUserController().handle);
userRoutes.get('/list_users', new ListUsersController().handle);
userRoutes.delete('/delete_user', new DisableUserController().handle);

export { userRoutes };
