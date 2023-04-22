import { prisma } from '../../database/database';

class GetTotalPointsUserService {
    async execute(idUser: string) {
        const user = await prisma.user.findUnique({
            where: {
                id_user: idUser
            },
            select: {
                cpf: true
            }
        });

        const points = await prisma.userCapColor.groupBy({
            by: ['color'],
            where: {
                cpf_user: user.cpf
            },
            _sum: {
                count: true
            }
        });

        return points;
    }
}

export { GetTotalPointsUserService };
