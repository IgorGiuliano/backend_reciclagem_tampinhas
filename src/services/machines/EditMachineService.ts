import { prisma } from '../../database/database';

class EditMachineService {
    async execute(idMachine: string, location:string) {
        const machine = await prisma.machine.update({
            where: {
                id_machine: idMachine
            },
            data: {
                location
            }
        });

        return machine;
    }
}

export { EditMachineService };
