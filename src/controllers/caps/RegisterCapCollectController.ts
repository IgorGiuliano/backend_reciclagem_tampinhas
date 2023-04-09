import { Request, Response } from 'express';
import { RegisterCapCollectService } from '../../services/caps/RegisterCapCollectService';

interface IRequestBody {
    idMachine: string,
    cpfUser: string,
    color: string,
    quantity: number
}

class RegisterCapCollectController {
    async handle(request: Request, response: Response) {
        const { idMachine, cpfUser, color, quantity } = request.body as IRequestBody;
        const service = new RegisterCapCollectService();

        try {
            const machine = await service.execute(idMachine, cpfUser, color, quantity);

            return response.status(200).json({ registered: machine });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { RegisterCapCollectController };
