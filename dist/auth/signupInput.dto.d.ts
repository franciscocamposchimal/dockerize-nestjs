import { User } from '../prisma/prisma.binding';
export declare class SignupInput implements Partial<User> {
    email: string;
    password: string;
}
