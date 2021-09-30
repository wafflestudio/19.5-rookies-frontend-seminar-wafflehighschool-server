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
exports.CreateCommentResponseDto = exports.CreateCommentRequestDto = exports.GetCommentResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetCommentResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '데이터 목록',
        example: [
            { id: 1, content: '이건 댓글', dateTime: '2021-09-19T02:55:27.861Z' },
            { id: 2, content: '이건 댓글2', dateTime: '2021-09-20T02:55:27.861Z' },
        ],
        nullable: false,
    }),
    __metadata("design:type", Array)
], GetCommentResponseDto.prototype, "data", void 0);
exports.GetCommentResponseDto = GetCommentResponseDto;
class CreateCommentRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '댓글 내용',
        example: '이건 댓글입니다',
        nullable: false,
    }),
    __metadata("design:type", String)
], CreateCommentRequestDto.prototype, "content", void 0);
exports.CreateCommentRequestDto = CreateCommentRequestDto;
class CreateCommentResponseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '성공 여부',
        example: true,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], CreateCommentResponseDto.prototype, "success", void 0);
exports.CreateCommentResponseDto = CreateCommentResponseDto;
//# sourceMappingURL=student-comment.dto.js.map