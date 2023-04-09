import { RegisterCapCollectController } from '@controllers/caps/RegisterCapCollectController';
import { Router } from 'express';

const capRoutes = Router();

capRoutes.post('/register_collected_cap', new RegisterCapCollectController().handle);

export { capRoutes };
