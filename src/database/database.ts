/* eslint-disable no-use-before-define */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined; // this MUST BE a var
}

export const prisma = global.prisma || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}
