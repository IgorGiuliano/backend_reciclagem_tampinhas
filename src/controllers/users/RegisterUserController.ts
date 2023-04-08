import { Request, Response } from 'express';
import { RegisterUserService } from '../../services/users/RegisterUserService';
import isValidCPF from '../../utils/validators/cpfValidator';

interface IRequestBody {
    email: string,
    password: string,
    passwordConfirmation: string,
    name: string,
    lastName: string,
    cpf: string,
    role: string,
}

class RegisterUserController {
    async handle(request: Request, response: Response) {
        const { email, password, passwordConfirmation, name, lastName, cpf, role } = request.body as IRequestBody;
        const service = new RegisterUserService();

        try {
            if (!name || !lastName || !email || !cpf || !password || !passwordConfirmation) {
                throw new Error('Campos incompletos');
            }

            if (password !== passwordConfirmation) {
                throw new Error('As senhas não conferem');
            }

            if (password.length < 6) {
                throw new Error('Senha com menos de 6 caracteres');
            }

            // Validando o CPF sem bibliotecas
            if (!isValidCPF(cpf)) {
                throw new Error('CPF inválido');
            }

            const user = await service.execute(name, lastName, email, cpf, password, role);

            return response.status(200).json({ registered: user });
        } catch (err: unknown) {
            if (err instanceof Error) {
                return response.status(400).json({ Error: err.message });
            }
        }

        return null;
    }
}

export { RegisterUserController };
