import { prisma } from '../../database/database';

class RegisterCapCollectService {
    async execute(idMachine: string, cpfUser: string, color: string, quantity: number) {
        if (color !== 'RED' && color !== 'GREEN' && color !== 'BLUE' && color !== 'WHITE' && color !== 'OTHER') {
            throw new Error('Cor inválida');
        }

        const machinecap = await prisma.capColor.create({
            data: {
                machineId: idMachine,
                color,
                count: quantity
            }
        });

        const user = await prisma.user.findUnique({
            where: {
                cpf: cpfUser
            }
        });

        if (!user) {
            throw new Error('CPF inválido');
        }

        const usercap = await prisma.userCapColor.create({
            data: {
                cpf_user: cpfUser,
                color,
                count: quantity
            }
        });

        return { machinecap, usercap };
    }
}

export { RegisterCapCollectService };
