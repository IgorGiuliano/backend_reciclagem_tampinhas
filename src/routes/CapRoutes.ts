import { GetCapCollectController } from '@controllers/caps/GetCapsCollectedController';
import { RegisterCapCollectController } from '@controllers/caps/RegisterCapCollectController';
import { ensureAuthenticated } from '@middlewares/ensureAuthentication';
import { Router } from 'express';

const capRoutes = Router();

capRoutes.post('/register_collected_cap', new RegisterCapCollectController().handle);
capRoutes.get('/get_collected_cap', ensureAuthenticated, new GetCapCollectController().handle);

export { capRoutes };
