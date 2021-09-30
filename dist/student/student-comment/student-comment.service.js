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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const student_entity_1 = require("../student.entity");
const user_entity_1 = require("../../user/user.entity");
const student_exception_1 = require("../student.exception");
const student_comment_entity_1 = require("./student-comment.entity");
let CommentService = class CommentService {
    constructor(userRepository, studentRepository, commentRepository) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.commentRepository = commentRepository;
    }
    async findByStudentPaginated(id, page) {
        const student = await this.studentRepository.findOne({ where: { id } });
        const [comments, count] = await this.commentRepository.findAndCount({
            where: { student },
            select: ['id', 'content', 'datetime'],
            take: 20,
            skip: (page - 1) * 20,
        });
        return { data: comments, count };
    }
    async create({ username }, id, data) {
        Object.keys(data).forEach((key) => {
            if (!['content'].includes(key)) {
                throw new student_exception_1.BadDataException();
            }
        });
        if (!data.content) {
            throw new student_exception_1.BadDataException();
        }
        const user = await this.userRepository.findOne({ where: { username } });
        const student = await this.studentRepository.findOne({
            where: { id, user },
        });
        if (!student) {
            throw new student_exception_1.IdNotFoundException();
        }
        await this.commentRepository.save({
            content: data.content,
            student,
        });
        return { success: true };
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(student_entity_1.StudentEntity)),
    __param(2, (0, typeorm_2.InjectRepository)(student_comment_entity_1.CommentEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=student-comment.service.js.map