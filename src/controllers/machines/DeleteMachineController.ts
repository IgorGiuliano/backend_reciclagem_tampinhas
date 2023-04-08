import { Request, Response } from 'express';
import { DeleteMachineService } from '../../services/machines/DeleteMachineService';

interface IRequestBody {
    idUser:string
}

class DeleteMachineController {
    async handle(request: Request, response: Response) {
        const { idUser } = request.body as IRequestBody;
        const service = new DeleteMachineService();

        try {
            const machine = await service.execute(idUser);

            return response.status(200).json({ deleted: machine });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { DeleteMachineController };
