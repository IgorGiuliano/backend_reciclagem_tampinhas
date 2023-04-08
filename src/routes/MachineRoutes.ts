import { RegisterMachineController } from '@controllers/machines/RegisterMachineController';
import { Router } from 'express';

const machineRoutes = Router();

machineRoutes.post('/register_machine', new RegisterMachineController().handle);

export { machineRoutes };
