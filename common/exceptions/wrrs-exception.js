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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.WrrsException = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
class WrrsException extends common_1.HttpException {
    constructor(errorCode, message, statusCode) {
        super({ message, errorCode }, statusCode);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '에러 메세지',
        example: '올바르지 않은 ...입니다.',
    }),
    __metadata("design:type", String)
], WrrsException.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '커스텀 에러 코드', example: 30001 }),
    __metadata("design:type", Number)
], WrrsException.prototype, "errorCode", void 0);
exports.WrrsException = WrrsException;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["BAD_DATA"] = 20000] = "BAD_DATA";
    ErrorCode[ErrorCode["INVALID_GRADE"] = 30000] = "INVALID_GRADE";
    ErrorCode[ErrorCode["INVALID_NAME"] = 30001] = "INVALID_NAME";
    ErrorCode[ErrorCode["DUPLICATED_STUDENT"] = 30002] = "DUPLICATED_STUDENT";
    ErrorCode[ErrorCode["ID_NOT_FOUND"] = 30003] = "ID_NOT_FOUND";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
//# sourceMappingURL=wrrs-exception.js.map