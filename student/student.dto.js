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
exports.DeleteStudentResponseDto = exports.PatchStudentResponseDto = exports.PatchStudentRequestDto = exports.CreateStudentRequestDto = void 0;
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
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '프로필 사진 링크',
        example: 'https://wafflestudio.com',
        required: true,
    }),
    __metadata("design:type", String)
], CreateStudentRequestDto.prototype, "profile_img", void 0);
exports.CreateStudentRequestDto = CreateStudentRequestDto;
class PatchStudentRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정 가능한 데이터', required: false }),
    __metadata("design:type", String)
], PatchStudentRequestDto.prototype, "profile_img", void 0);
exports.PatchStudentRequestDto = PatchStudentRequestDto;
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
//# sourceMappingURL=student.dto.js.map