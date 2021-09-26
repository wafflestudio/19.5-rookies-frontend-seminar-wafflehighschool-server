"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('WaffleHS API Doc')
        .setDescription('와플고등학교 명단관리 프로그램 서버 api 문서')
        .setVersion('1.0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map