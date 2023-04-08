import { Request, Response } from 'express';
import { EditUserService } from '../../services/users/EditUserService';

interface IRequestBody {
    idUser:string,
    email: string,
    name: string,
    lastName: string
}

class EditUserController {
    async handle(request: Request, response: Response) {
        const { idUser, email, name, lastName } = request.body as IRequestBody;
        const service = new EditUserService();

        try {
            if (!name || !lastName || !email || !idUser) {
                throw new Error('Campos incompletos');
            }

            const user = await service.execute(idUser, email, name, lastName);

            return response.status(200).json({ updated: user });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { EditUserController };
