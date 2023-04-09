import { Request, Response } from 'express';
import { GetTotalPointsUserService } from '../../services/users/GetTotalPointsUserService';

interface IRequestBody {
    idUser:string
}

class GetTotalPointsUsersController {
    async handle(request: Request, response: Response) {
        const { idUser } = request.body as IRequestBody;

        const service = new GetTotalPointsUserService();

        try {
            const result = await service.execute(idUser);

            return response.status(200).json({ points: result });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { GetTotalPointsUsersController };
