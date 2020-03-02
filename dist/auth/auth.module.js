"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
const auth_resolver_1 = require("./auth.resolver");
const jwt_strategy_1 = require("./jwt.strategy");
const prisma_module_1 = require("../prisma/prisma.module");
const privateKey = fs.readFileSync(path.join(__dirname, `../keys/private.key`), 'utf8');
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            prisma_module_1.PrismaModule,
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
            }),
            jwt_1.JwtModule.register({
                privateKey: privateKey,
                signOptions: {
                    expiresIn: '60s',
                    algorithm: 'RS256',
                },
            }),
        ],
        providers: [auth_service_1.AuthService, auth_resolver_1.AuthResolver, jwt_strategy_1.JwtStrategy]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map