import { Request, Response } from 'express';
import { EditMachineService } from '../../services/machines/EditMachineService';

interface IRequestBody {
    idMachine:string,
    location: string
}

class EditMachineController {
    async handle(request: Request, response: Response) {
        const { idMachine, location } = request.body as IRequestBody;
        const service = new EditMachineService();

        try {
            if (!location || !idMachine) {
                throw new Error('Campos incompletos');
            }

            const machine = await service.execute(idMachine, location);

            return response.status(200).json({ updated: machine });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { EditMachineController };
