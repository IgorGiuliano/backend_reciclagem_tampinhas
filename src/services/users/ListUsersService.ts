import { prisma } from '../../database/database';

class ListUsersService {
    async execute() {
        const users = await prisma.user.findMany({
            where: {
                role: 'ADMIN'
            },
            select: {
                id_user: true,
                name: true,
                last_name: true,
                email: true
            }
        });

        return users;
    }
}

export { ListUsersService };
