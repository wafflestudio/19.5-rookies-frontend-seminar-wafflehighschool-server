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
exports.GetStudentDetailResponseDto = exports.GetStudentSummaryResponseDto = exports.DeleteStudentResponseDto = exports.PatchStudentResponseDto = exports.CreateStudentResponseDto = exports.PatchStudentRequestDto = exports.CreateStudentRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStudentRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '이름', example: '김와플', required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStudentRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '학년', example: 2, required: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStudentRequestDto.prototype, "grade", void 0);
exports.CreateStudentRequestDto = CreateStudentRequestDto;
class PatchStudentRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '프로필 사진 링크',
        example: 'https://wafflestudio.com',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatchStudentRequestDto.prototype, "profile_img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '이메일',
        example: 'example@waffle.hs.kr',
        required: false,
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], PatchStudentRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '폰 번호',
        example: '000-0000-0000',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatchStudentRequestDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '전공',
        example: null,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PatchStudentRequestDto.prototype, "major", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '잠김 여부',
        example: false,
        required: false,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PatchStudentRequestDto.prototype, "locked", void 0);
exports.PatchStudentRequestDto = PatchStudentRequestDto;
class CreateStudentResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부' }),
    __metadata("design:type", Boolean)
], CreateStudentResponseDto.prototype, "success", void 0);
exports.CreateStudentResponseDto = CreateStudentResponseDto;
class PatchStudentResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부' }),
    __metadata("design:type", Boolean)
], PatchStudentResponseDto.prototype, "success", void 0);
exports.PatchStudentResponseDto = PatchStudentResponseDto;
class DeleteStudentResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '성공 여부' }),
    __metadata("design:type", Boolean)
], DeleteStudentResponseDto.prototype, "success", void 0);
exports.DeleteStudentResponseDto = DeleteStudentResponseDto;
class GetStudentSummaryResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'id',
        example: 1,
        nullable: false,
    }),
    __metadata("design:type", Number)
], GetStudentSummaryResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '이름',
        example: '김와플',
        nullable: false,
    }),
    __metadata("design:type", String)
], GetStudentSummaryResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '학년',
        example: 1,
        nullable: false,
    }),
    __metadata("design:type", Number)
], GetStudentSummaryResponseDto.prototype, "grade", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '프로필 사진 링크',
        example: 'https://wafflestudio.com',
        required: false,
    }),
    __metadata("design:type", String)
], GetStudentSummaryResponseDto.prototype, "profile_img", void 0);
exports.GetStudentSummaryResponseDto = GetStudentSummaryResponseDto;
class GetStudentDetailResponseDto extends GetStudentSummaryResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '프로필 사진 링크',
        example: 'https://qwer.asdf.asdfasdf/asdfhhfascsashvfqw.asdc.png',
        nullable: true,
    }),
    __metadata("design:type", String)
], GetStudentDetailResponseDto.prototype, "profile_img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '이메일 주소',
        example: 'example@waffle.hs.kr',
        nullable: true,
    }),
    __metadata("design:type", String)
], GetStudentDetailResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '전화번호',
        example: '000-0000-0000',
        nullable: true,
    }),
    __metadata("design:type", String)
], GetStudentDetailResponseDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '전공',
        example: 'frontend',
        nullable: true,
    }),
    __metadata("design:type", String)
], GetStudentDetailResponseDto.prototype, "major", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '잠김 여부',
        example: true,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], GetStudentDetailResponseDto.prototype, "locked", void 0);
exports.GetStudentDetailResponseDto = GetStudentDetailResponseDto;
//# sourceMappingURL=student.dto.js.map