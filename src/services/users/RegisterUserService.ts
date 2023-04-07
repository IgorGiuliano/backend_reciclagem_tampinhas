import bcrypt from 'bcrypt';
import { prisma } from '../../database/database';

class RegisterUserService {
    async execute(name: string, lastName: string, email: string, cpf: string, password: string, role: string) {
        if (role !== 'NORMAL' && role !== 'ADMIN') {
            throw new Error('Cargo inválido!');
        }

        const user = await prisma.user.findFirst({
            where: {
                email
            }
        });

        if (!user) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            const User = await prisma.user.create({
                data: {
                    email,
                    password: hash,
                    name,
                    last_name: lastName,
                    cpf,
                    role
                }
            });

            return User;
        }

        throw new Error(`O email ${email}, já está sendo utilizado!`);
    }
}

export { RegisterUserService };
