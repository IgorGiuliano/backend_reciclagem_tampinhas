import { Router } from 'express';
import { DisableUserController } from '@controllers/users/DisableUserController';
import { EditUserController } from '@controllers/users/EditUserController';
import { ListUsersController } from '@controllers/users/ListUsersController';
import { LoginController } from '@controllers/users/LoginController';
import { RegisterUserController } from '@controllers/users/RegisterUserController';
import { GetTotalPointsUsersController } from '@controllers/users/GetTotalPointsUserController';
import { ensureAuthenticated } from '@middlewares/ensureAuthentication';
import { ensureAdmin } from '@middlewares/ensureAdmin';

const userRoutes = Router();

userRoutes.post('/login', new LoginController().handle);
userRoutes.post('/register_user', new RegisterUserController().handle);
userRoutes.get('/list_users', ensureAuthenticated, new ListUsersController().handle);
userRoutes.get('/get_points', ensureAuthenticated, new GetTotalPointsUsersController().handle);
userRoutes.put('/edit_user', ensureAuthenticated, new EditUserController().handle);
userRoutes.delete('/delete_user', ensureAuthenticated, new DisableUserController().handle);

export { userRoutes };
