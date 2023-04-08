import { Request, Response } from 'express';
import { DisableUserService } from '../../services/users/DisableUserService';

interface IRequestBody {
    idUser:string
}

class DisableUserController {
    async handle(request: Request, response: Response) {
        const { idUser } = request.body as IRequestBody;
        const service = new DisableUserService();

        try {
            const user = await service.execute(idUser);

            return response.status(200).json({ deleted: user });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { DisableUserController };
