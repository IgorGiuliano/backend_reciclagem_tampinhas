import { Request, Response } from 'express';
import { ListUsersService } from '../../services/users/ListUsersService';

class ListUsersController {
    async handle(request: Request, response: Response) {
        const service = new ListUsersService();

        try {
            const result = await service.execute();

            return response.status(200).json({ users: result });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { ListUsersController };
