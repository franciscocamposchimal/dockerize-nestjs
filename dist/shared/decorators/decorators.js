"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.ResGql = common_1.createParamDecorator((data, [root, args, ctx, info]) => ctx.res);
exports.GqlUser = common_1.createParamDecorator((data, [root, args, ctx, info]) => ctx.req.user);
//# sourceMappingURL=decorators.js.map