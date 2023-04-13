import { prisma } from '../../database/database';

class ListMachinesService {
    async execute() {
        const machine = await prisma.machine.findMany({
            
        });

        return machine;
    }
}

export { ListMachinesService };
