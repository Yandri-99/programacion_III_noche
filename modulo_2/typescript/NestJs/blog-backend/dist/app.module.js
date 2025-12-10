"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const basic_module_1 = require("./basic/basic.module");
const users_module_1 = require("./users/users.module");
const categories_module_1 = require("./categories/categories.module");
const posts_module_1 = require("./posts/posts.module");
const auth_module_1 = require("./auth/auth.module");
const mail_module_1 = require("./mail/mail.module");
const mongoose_1 = require("@nestjs/mongoose");
const cursos_module_1 = require("./cursos/cursos.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI || ''),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: Number(process.env.DB_PORT || 5432),
                username: process.env.DB_USER || 'postgres',
                password: process.env.DB_PASS || 'postgres',
                database: process.env.DB_NAME || 'blog',
                autoLoadEntities: true,
                synchronize: true,
            }),
            basic_module_1.BasicModule,
            users_module_1.UsersModule,
            categories_module_1.CategoriesModule,
            posts_module_1.PostsModule,
            auth_module_1.AuthModule,
            mail_module_1.MailModule,
            cursos_module_1.CursosModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map