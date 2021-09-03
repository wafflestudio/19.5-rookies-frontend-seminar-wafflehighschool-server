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
const student_entity_1 = require("./student.entity");
const student_exception_1 = require("./student.exception");
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
        this.getGuardedStudent.bind(this);
    }
    getGuardedStudent(student) {
        const { grade, name, profile_img } = student;
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
        const guardedProfileImg = (() => {
            if (typeof profile_img !== 'string' && profile_img != null) {
                throw new student_exception_1.BadDataException();
            }
            return profile_img || null;
        })();
        return {
            name: guardedName,
            grade: guardedGrade,
            profile_img: guardedProfileImg,
        };
    }
    findAll() {
        return this.studentRepository.find();
    }
    async find(id) {
        const foundStudent = await this.studentRepository.findOne(id);
        if (!foundStudent) {
            throw new student_exception_1.IdNotFoundException();
        }
        return foundStudent;
    }
    async patch(id, data) {
        if (data.id || data.name || data.grade) {
            throw new student_exception_1.BadDataException();
        }
        if ((0, lodash_1.isEmpty)(data)) {
            return { success: true };
        }
        const updateResult = await this.studentRepository.update(id, data);
        if (updateResult.affected === 0) {
            throw new student_exception_1.IdNotFoundException();
        }
        return { success: true };
    }
    async create(student) {
        const guardedStudent = this.getGuardedStudent(student);
        const foundStudent = await this.studentRepository.findOne({
            where: guardedStudent,
        });
        if (foundStudent) {
            throw new student_exception_1.DuplicatedStudentException();
        }
        return await this.studentRepository.save(guardedStudent);
    }
    async delete(id) {
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
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map