import { prisma } from '../../database/database';

class DisableUserService {
    async execute(idUser: string) {
        const user = await prisma.user.delete({
            where: {
                id_user: idUser
            }
        });

        return user;
    }
}

export { DisableUserService };
