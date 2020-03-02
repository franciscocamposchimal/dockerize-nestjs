import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { SignupInput } from './signupInput.dto';
export declare class AuthResolver {
    private readonly jwt;
    private readonly prisma;
    constructor(jwt: JwtService, prisma: PrismaService);
    users(user: any): Promise<import("../prisma/prisma.binding").User[]>;
    login({ email, password }: {
        email: any;
        password: any;
    }, res: any): Promise<import("../prisma/prisma.binding").User>;
    signup(res: any, signupInput: SignupInput): Promise<import("../prisma/prisma.binding").User>;
}
