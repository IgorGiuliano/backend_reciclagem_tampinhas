import { Request, Response } from 'express';
import { GetCapCollectService } from '../../services/caps/GetCapsCollectedService';

class GetCapCollectController {
    async handle(request: Request, response: Response) {
        const service = new GetCapCollectService();

        try {
            const cap = await service.execute();

            return response.status(200).json(cap);
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { GetCapCollectController };
