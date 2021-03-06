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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const wrrs_exception_1 = require("../common/exceptions/wrrs-exception");
const jwt_auth_guard_1 = require("../auth/jwt-auth-guard");
const student_service_1 = require("./student.service");
const student_dto_1 = require("./student.dto");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async getStudents(req) {
        return this.studentService.findByUser(req.user);
    }
    async getStudentStats() {
        return this.studentService.getStats();
    }
    async createStudent(body, req) {
        return this.studentService.create(req.user, body);
    }
    getStudent(params) {
        return this.studentService.find(params.id);
    }
    async lockStudent(params, req) {
        return this.studentService.setLock(req.user, params.id, true);
    }
    async unlockStudent(params, req) {
        return this.studentService.setLock(req.user, params.id, false);
    }
    async patchStudent(params, body, req) {
        return this.studentService.patch(req.user, params.id, body);
    }
    async deleteStudent(params, req) {
        return this.studentService.delete(req.user, params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '학생 정보 API',
        description: '현재 로그인된 유저에게 연결된 모든 학생의 요약된 정보를 불러온다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        isArray: true,
        type: student_dto_1.GetStudentSummaryResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudents", null);
__decorate([
    (0, common_1.Get)('stat'),
    (0, swagger_1.ApiOperation)({
        summary: '학생 통계 API',
        description: '모든 유저에게 연결된 모든 학생들의 학년별 인원 정보를 불러온다. 대시보드에 사용하면 된다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: student_dto_1.GetStudentStatResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudentStats", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: student_dto_1.CreateStudentRequestDto }),
    (0, swagger_1.ApiCreatedResponse)({ description: '성공', type: student_dto_1.CreateStudentResponseDto }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: '올바르지 않은 학년 / 이름, 해당 학년에 동명이인 존재, 올바르지 않은 필드 존재',
        type: wrrs_exception_1.WrrsException,
    }),
    (0, swagger_1.ApiOperation)({ summary: '학생 생성', description: '학생을 생성한다.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: '학생 정보 가져오기',
        description: 'id를 이용하여 학생의 자세한 정보를 불러온다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: student_dto_1.GetStudentDetailResponseDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ type: wrrs_exception_1.WrrsException }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "getStudent", null);
__decorate([
    (0, common_1.Post)(':id/lock'),
    (0, swagger_1.ApiOperation)({
        summary: '학생 잠그기',
        description: '해당 id의 학생을 잠근다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: student_dto_1.PatchStudentResponseDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ type: wrrs_exception_1.WrrsException }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "lockStudent", null);
__decorate([
    (0, common_1.Post)(':id/unlock'),
    (0, swagger_1.ApiOperation)({
        summary: '학생 잠금 해제',
        description: '해당 id의 학생을 잠금 해제한다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: student_dto_1.PatchStudentResponseDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ type: wrrs_exception_1.WrrsException }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "unlockStudent", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: '학생 정보 수정하기',
        description: '학생의 정보를 수정한다. 빈 값이면 null을 보내야 한다.',
    }),
    (0, swagger_1.ApiBody)({ type: student_dto_1.PatchStudentRequestDto }),
    (0, swagger_1.ApiOkResponse)({
        type: student_dto_1.PatchStudentResponseDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ type: wrrs_exception_1.WrrsException }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "patchStudent", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: '학생 삭제',
        description: 'id를 이용하여 학생을 삭제한다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: student_dto_1.DeleteStudentResponseDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        type: wrrs_exception_1.WrrsException,
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteStudent", null);
StudentController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('v1/student'),
    (0, swagger_1.ApiTags)('학생 관리 API'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map