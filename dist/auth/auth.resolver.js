"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs = require("bcryptjs");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const decorators_1 = require("../shared/decorators/decorators");
const signupInput_dto_1 = require("./signupInput.dto");
const graphql_auth_guard_1 = require("./graphql-auth.guard");
let AuthResolver = class AuthResolver {
    constructor(jwt, prisma) {
        this.jwt = jwt;
        this.prisma = prisma;
    }
    async users(user) {
        console.log("USER: ", user);
        return await this.prisma.query.users(null);
    }
    async login({ email, password }, res) {
        const user = await this.prisma.query.user({ where: { email } });
        if (!user) {
            throw Error('Email or password incorrect');
        }
        const valid = await bcryptjs.compare(password, user.password);
        if (!valid) {
            throw Error('Email or password incorrect');
        }
        const jwt = this.jwt.sign({ id: user.id });
        res.cookie('token', jwt, { httpOnly: true });
        return user;
    }
    async signup(res, signupInput) {
        const emailExists = await this.prisma.exists.User({
            email: signupInput.email,
        });
        if (emailExists) {
            throw Error('Email is already in use');
        }
        const password = await bcryptjs.hash(signupInput.password, 10);
        const user = await this.prisma.mutation.createUser({
            data: {
                email: signupInput.email,
                password: password
            }
        });
        const jwt = this.jwt.sign({ id: user.id });
        res.cookie('token', jwt, { httpOnly: true });
        return user;
    }
};
__decorate([
    graphql_1.Query(),
    common_1.UseGuards(graphql_auth_guard_1.GqlAuthGuard),
    __param(0, decorators_1.GqlUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "users", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, graphql_1.Args('data')),
    __param(1, decorators_1.ResGql()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    graphql_1.Mutation(),
    __param(0, decorators_1.ResGql()),
    __param(1, graphql_1.Args('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, signupInput_dto_1.SignupInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signup", null);
AuthResolver = __decorate([
    graphql_1.Resolver('Auth'),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map