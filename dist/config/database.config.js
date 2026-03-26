"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV !== 'production',
    ssl: {
        rejectUnauthorized: false,
    },
}));
//# sourceMappingURL=database.config.js.map