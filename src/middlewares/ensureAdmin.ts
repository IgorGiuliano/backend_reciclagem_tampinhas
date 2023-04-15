import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
    role: string;
}

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    try {
        const { sub, role } = verify(authToken, process.env.JWT_SECRET) as IPayload;

        if (role !== 'ADMIN') { // Verifique se a role é "ADMIN" aqui
            return response.status(403).json({ Message: 'Acesso negado, usuário não é administrador' });
        }

        request.id = sub;

        return next();
    } catch (err: unknown) {
        if (err instanceof Error) {
            return response.status(401).json({ Error: err.message });
        }
    }

    return null;
}
