import { prisma } from '../../database/database';

class EditUserService {
    async execute(idUser: string, email:string, name:string, lastName:string) {
        const user = await prisma.user.update({
            where: {
                id_user: idUser
            },
            data: {
                name,
                last_name: lastName,
                email
            },
            select: {
                id_user: true,
                name: true,
                last_name: true,
                email: true
            }
        });

        return user;
    }
}

export { EditUserService };
