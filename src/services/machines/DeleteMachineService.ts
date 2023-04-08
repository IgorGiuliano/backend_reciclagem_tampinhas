import { prisma } from '../../database/database';

class DeleteMachineService {
    async execute(idMachine: string) {
        const machine = await prisma.machine.delete({
            where: {
                id_machine: idMachine
            }
        });

        return machine;
    }
}

export { DeleteMachineService };
