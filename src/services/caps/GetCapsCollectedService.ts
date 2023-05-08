import { prisma } from '../../database/database';

class GetCapCollectService {
    async execute() {
        const total = await prisma.capColor.aggregate({
            _sum: {
                count: true
            }
        });

        const caps = await prisma.capColor.groupBy({
            by: ['color'],
            _sum: {
                count: true
            },
            orderBy: {
                color: 'asc'
            }
        });

        const capsPerHour = await prisma.capColor.findMany({
            select: {
                machineId: true,
                color: true,
                count: true,
                createdAt: true
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 25
        });

        return [total, caps, capsPerHour];
    }
}

export { GetCapCollectService };
