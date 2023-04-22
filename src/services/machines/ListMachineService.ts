import { prisma } from '../../database/database';

class ListMachinesService {
    async execute() {
        const machines = await prisma.machine.findMany({
            include: {
                collectedCaps: {
                    select: {
                        color: true,
                        count: true
                    }
                }
            }
        });

        const list = machines.map((machine) => {
            const { id_machine: machineId, collectedCaps } = machine;
            const totalCapsByColor = collectedCaps.reduce((acc, { color, count }) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-plus-operands
                acc[color] = (acc[color] || 0) + count;
                return acc;
            }, {});
            return { machineId, totalCapsByColor };
        });

        return list;
    }
}

export { ListMachinesService };
