import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validate({ id }: {
        id: any;
    }): Promise<import("../prisma/prisma.binding").User>;
}
