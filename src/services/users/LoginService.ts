import { sign } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prisma } from '../../database/database';

interface IUserResponse {
    id_user: string,
    name: string,
    last_name: string,
    email: string,
    password: string
}

class LoginService {
    async execute(email: string, password: string) {
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        }) as IUserResponse;

        console.log(user);

        if (!user) {
            throw new Error('O usuário não foi cadastrado');
        }

        if (!(await bcrypt.compare(password, user.password))) {
            throw new Error('Usuário ou senha incorretos');
        }

        const token = sign({
            user: {
                name: user.name
            }
        },
        process.env.JWT_SECRET,
        {
            subject: user.id_user,
            expiresIn: '1d'
        });

        return { token, data: { id: user.id_user, name: user.name, email: user.email } };
    }
}

export { LoginService };
