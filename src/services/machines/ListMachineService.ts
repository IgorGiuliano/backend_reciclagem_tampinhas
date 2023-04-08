import { prisma } from '../../database/database';

class ListMachineService {
    async execute() {
        const machine = await prisma.machine.findMany({
            select: {
                id_machine: true,
                location: true
            }
        });

        return machine;
    }
}

export { ListMachineService };
