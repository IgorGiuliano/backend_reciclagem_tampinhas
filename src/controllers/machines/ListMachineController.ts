import { Request, Response } from 'express';
import { ListMachinesService } from '../../services/machines/ListMachinesService';

class ListMachinesController {
    async handle(request: Request, response: Response) {
        const service = new ListMachinesService();

        try {
            const result = await service.execute();

            return response.status(200).json({ machines: result });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { ListMachinesController };
