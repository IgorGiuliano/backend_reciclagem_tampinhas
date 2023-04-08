import { prisma } from '../../database/database';

class ListMachinesService {
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

export { ListMachinesService };
