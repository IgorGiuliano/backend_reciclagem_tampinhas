import { prisma } from '../../database/database';

class EditUserService {
    async execute(idUser: string, email:string, name:string, lastName:string) {
        const user = await prisma.user.update({
            where: {
                id_user: idUser,
                email
            },
            data: {
                name,
                last_name: lastName,
                email
            }
        });

        return user;
    }
}

export { EditUserService };
