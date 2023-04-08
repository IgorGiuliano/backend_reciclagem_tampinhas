import { Router } from 'express';
import { DeleteMachineController } from '@controllers/machines/DeleteMachineController';
import { EditMachineController } from '@controllers/machines/EditMachineController';
import { ListMachinesController } from '@controllers/machines/ListMachineController';
import { RegisterMachineController } from '@controllers/machines/RegisterMachineController';

const machineRoutes = Router();

machineRoutes.post('/register_machine', new RegisterMachineController().handle);
machineRoutes.get('/list_machines', new ListMachinesController().handle);
machineRoutes.put('/edit_machine', new EditMachineController().handle);
machineRoutes.delete('/delete_machine', new DeleteMachineController().handle);

export { machineRoutes };
