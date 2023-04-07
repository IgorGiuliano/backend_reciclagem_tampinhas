import { Request, Response } from 'express';
import { RegisterMachineService } from '../../services/machines/RegisterMachineService';

interface IRequestBody {
    idMachine: string,
    location: string
}

class RegisterController {
    async handle(request: Request, response: Response) {
        const { idMachine, location } = request.body as IRequestBody;
        const service = new RegisterMachineService();

        try {
            const machine = await service.execute(idMachine, location);

            return response.status(200).json({ registered: machine });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { RegisterController };
