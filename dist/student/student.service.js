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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const lodash_1 = require("lodash");
const user_entity_1 = require("../user/user.entity");
const student_entity_1 = require("./student.entity");
const student_exception_1 = require("./student.exception");
const student_comment_service_1 = require("./student-comment/student-comment.service");
let StudentService = class StudentService {
    constructor(studentRepository, userRepository, commentService) {
        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
        this.commentService = commentService;
        this.getGuardedStudent.bind(this);
    }
    getGuardedStudent(student) {
        const { grade, name } = student;
        const guardedGrade = (() => {
            if (grade !== 1 && grade !== 2 && grade !== 3) {
                throw new student_exception_1.InvalidGradeException();
            }
            return grade;
        })();
        const guardedName = (() => {
            if (!name.match(/^[가-힣]{2,3}$/)) {
                throw new student_exception_1.InvalidNameException();
            }
            return name;
        })();
        return {
            name: guardedName,
            grade: guardedGrade,
        };
    }
    async findByUser({ username, }) {
        const user = await this.userRepository.findOne({ where: { username } });
        const students = await this.studentRepository.find({
            where: { user },
            select: ['id', 'name', 'grade'],
        });
        return students;
    }
    async find(id) {
        const foundStudent = await this.studentRepository.findOne(id, {
            select: ['id', 'grade', 'locked', 'name', 'phone', 'major', 'email'],
        });
        if (!foundStudent) {
            throw new student_exception_1.IdNotFoundException();
        }
        return foundStudent;
    }
    async patch({ username }, id, data) {
        const user = await this.userRepository.findOne({
            where: { username },
        });
        Object.keys(data).forEach((key) => {
            if (!['profile_img', 'email', 'phone', 'major', 'locked'].includes(key)) {
                throw new student_exception_1.BadDataException();
            }
        });
        if ((0, lodash_1.isEmpty)(data)) {
            throw new student_exception_1.BadDataException();
        }
        if (data.email) {
            const domain = data.email.split('@');
            if (domain.length !== 2 || domain[1] !== 'waffle.hs.kr') {
                throw new student_exception_1.BadDataException();
            }
        }
        if (data.major) {
            if (!['frontend', 'backend', 'android', 'iOS', null].includes(data.major)) {
                throw new student_exception_1.BadDataException();
            }
        }
        if (data.phone) {
            if (!/[0-9]{3}-[0-9]{3,4}-[0-9]{4}/.test(data.phone)) {
                throw new student_exception_1.BadDataException();
            }
        }
        const found = await this.studentRepository.findOne({ where: { id, user } });
        if (!found) {
            throw new student_exception_1.IdNotFoundException();
        }
        const updateResult = await this.studentRepository.update(id, data);
        if (updateResult.affected === 0) {
            throw new student_exception_1.IdNotFoundException();
        }
        await this.commentService.create({ username }, id, {
            content: `[정보 변경] ${username}\n${JSON.stringify(data)}`,
        });
        return { success: true };
    }
    async create({ username }, student) {
        Object.keys(student).forEach((key) => {
            if (!['name', 'grade'].includes(key)) {
                throw new student_exception_1.BadDataException();
            }
        });
        const user = await this.userRepository.findOne({
            where: { username },
        });
        const guardedStudent = Object.assign(Object.assign({}, this.getGuardedStudent(student)), { user });
        const foundStudent = await this.studentRepository.findOne({
            where: {
                name: guardedStudent.name,
                grade: guardedStudent.grade,
                user: guardedStudent.user,
            },
        });
        if (foundStudent) {
            throw new student_exception_1.DuplicatedStudentException();
        }
        await this.studentRepository.save(guardedStudent);
        return { success: true };
    }
    async delete({ username }, id) {
        const user = await this.userRepository.findOne({ where: { username } });
        const found = await this.studentRepository.findOne({ where: { id, user } });
        if (!found) {
            throw new student_exception_1.IdNotFoundException();
        }
        const deletedResult = await this.studentRepository.delete(id);
        if (deletedResult.affected === 0) {
            throw new student_exception_1.IdNotFoundException();
        }
        return { success: true };
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(student_entity_1.StudentEntity)),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        student_comment_service_1.CommentService])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map