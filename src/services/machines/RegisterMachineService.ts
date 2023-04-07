import { prisma } from '../../database/database';

class RegisterMachineService {
    async execute(idMachine: string, location: string) {
        const machine = await prisma.machine.findFirst({
            where: {
                id_machine: idMachine
            }
        });

        if (!machine) {
            const Machine = await prisma.machine.create({
                data: {
                    id_machine: idMachine,
                    location
                }
            });

            return Machine;
        }

        throw new Error(`A máquina ${idMachine}, já foi cadastrada!`);
    }
}

export { RegisterMachineService };
