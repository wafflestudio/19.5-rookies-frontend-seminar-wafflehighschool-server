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
exports.StudentEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../user/user.entity");
const student_comment_entity_1 = require("./student-comment/student-comment.entity");
let StudentEntity = class StudentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({ description: 'id', example: 14112 }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: '이름', example: '김와플' }),
    __metadata("design:type", String)
], StudentEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ description: '학년', example: 2 }),
    __metadata("design:type", Number)
], StudentEntity.prototype, "grade", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({
        description: '프로필 사진 링크',
        example: 'https://wafflestudio.com',
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "profile_img", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({
        description: '이메일',
        example: 'example@waffle.hs.kr',
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({
        description: '전화번호',
        example: '000-0000-0000',
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({
        description: '전공',
        example: 'frontend',
    }),
    __metadata("design:type", String)
], StudentEntity.prototype, "major", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: false }),
    (0, swagger_1.ApiProperty)({
        description: '락',
        example: true,
    }),
    __metadata("design:type", Boolean)
], StudentEntity.prototype, "locked", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.students),
    __metadata("design:type", user_entity_1.UserEntity)
], StudentEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_comment_entity_1.CommentEntity, (comment) => comment.student),
    __metadata("design:type", Array)
], StudentEntity.prototype, "comments", void 0);
StudentEntity = __decorate([
    (0, typeorm_1.Entity)()
], StudentEntity);
exports.StudentEntity = StudentEntity;
//# sourceMappingURL=student.entity.js.map