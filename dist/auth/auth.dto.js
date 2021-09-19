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
exports.LoginResponseDto = exports.LoginRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class LoginRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '아이디 (깃헙 유저네임으로 등록해드린)',
        example: 'user-github-username',
        nullable: false,
    }),
    __metadata("design:type", String)
], LoginRequestDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '비밀번호',
        example: 'test',
        nullable: false,
    }),
    __metadata("design:type", String)
], LoginRequestDto.prototype, "password", void 0);
exports.LoginRequestDto = LoginRequestDto;
class LoginResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '토큰값',
        example: 'eyJ어쩌구저쩌구',
        nullable: false,
    }),
    __metadata("design:type", String)
], LoginResponseDto.prototype, "access_token", void 0);
exports.LoginResponseDto = LoginResponseDto;
//# sourceMappingURL=auth.dto.js.map