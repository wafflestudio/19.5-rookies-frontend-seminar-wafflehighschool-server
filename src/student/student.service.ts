import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { isEmpty } from 'lodash';

import { ReqUserDto } from '../user/user.dto';
import { UserEntity } from '../user/user.entity';

import { StudentEntity } from './student.entity';
import {
  BadDataException,
  DuplicatedStudentException,
  IdNotFoundException,
  InvalidGradeException,
  InvalidNameException,
} from './student.exception';
import {
  CreateStudentRequestDto,
  CreateStudentResponseDto,
  GetStudentDetailResponseDto,
  GetStudentSummaryResponseDto,
  PatchStudentRequestDto,
  PatchStudentResponseDto,
} from './student.dto';
import { CommentService } from './student-comment/student-comment.service';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private commentService: CommentService,
  ) {
    this.getGuardedStudent.bind(this);
  }

  getGuardedStudent(student: CreateStudentRequestDto): {
    name: string;
    grade: 1 | 2 | 3;
  } {
    const { grade, name } = student;
    const guardedGrade = (() => {
      if (grade !== 1 && grade !== 2 && grade !== 3) {
        throw new InvalidGradeException();
      }
      return grade;
    })();

    const guardedName = (() => {
      if (!name.match(/^[가-힣]{2,3}$/)) {
        throw new InvalidNameException();
      }
      return name;
    })();

    return {
      name: guardedName,
      grade: guardedGrade,
    };
  }

  async findByUser({
    username,
  }: ReqUserDto): Promise<GetStudentSummaryResponseDto[]> {
    const user = await this.userRepository.findOne({ where: { username } });
    const students = await this.studentRepository.find({
      where: { user },
      select: ['id', 'name', 'grade', 'profile_img'],
    });

    return students as GetStudentSummaryResponseDto[];
  }

  async find(id: number): Promise<GetStudentDetailResponseDto> {
    const foundStudent = await this.studentRepository.findOne(id, {
      select: [
        'id',
        'grade',
        'locked',
        'name',
        'phone',
        'major',
        'email',
        'profile_img',
      ],
    });
    if (!foundStudent) {
      throw new IdNotFoundException();
    }
    return foundStudent as GetStudentDetailResponseDto;
  }

  async setLock(
    { username },
    id: number,
    locked: boolean,
  ): Promise<PatchStudentResponseDto> {
    const user: UserEntity = await this.userRepository.findOne({
      where: { username },
    });

    const found = await this.studentRepository.findOne({ where: { id, user } });
    if (!found) {
      throw new IdNotFoundException();
    }

    const updateResult = await this.studentRepository.update(id, { locked });
    if (updateResult.affected === 0) {
      throw new IdNotFoundException();
    }

    await this.commentService.create({ username }, id, {
      content: `[정보 변경] ${username}\n${locked ? '잠금 설정' : '잠금 해제'}`,
    });

    return { success: true as const };
  }

  async patch({ username }, id: number, data: PatchStudentRequestDto) {
    const user: UserEntity = await this.userRepository.findOne({
      where: { username },
    });

    Object.keys(data).forEach((key) => {
      if (!['profile_img', 'email', 'phone', 'major'].includes(key)) {
        throw new BadDataException();
      }
    });

    if (isEmpty(data)) {
      throw new BadDataException();
    }

    if (data.email) {
      const domain = data.email.split('@');
      if (domain.length !== 2 || domain[1] !== 'waffle.hs.kr') {
        throw new BadDataException();
      }
    }

    if (data.major) {
      if (
        !['frontend', 'backend', 'android', 'iOS', null].includes(data.major)
      ) {
        throw new BadDataException();
      }
    }

    if (data.phone) {
      if (!/[0-9]{3}-[0-9]{3,4}-[0-9]{4}/.test(data.phone)) {
        throw new BadDataException();
      }
    }

    const found = await this.studentRepository.findOne({ where: { id, user } });
    if (!found) {
      throw new IdNotFoundException();
    }

    const updateResult = await this.studentRepository.update(id, data);
    if (updateResult.affected === 0) {
      throw new IdNotFoundException();
    }

    await this.commentService.create({ username }, id, {
      content: `[정보 변경] ${username}\n${JSON.stringify(data)}`,
    });

    return { success: true as const };
  }

  async create(
    { username },
    student: CreateStudentRequestDto,
  ): Promise<CreateStudentResponseDto> {
    Object.keys(student).forEach((key) => {
      if (!['name', 'grade'].includes(key)) {
        throw new BadDataException();
      }
    });

    const user: UserEntity = await this.userRepository.findOne({
      where: { username },
    });

    const guardedStudent = { ...this.getGuardedStudent(student), user };
    const foundStudent = await this.studentRepository.findOne({
      where: {
        name: guardedStudent.name,
        grade: guardedStudent.grade,
        user: guardedStudent.user,
      },
    });
    if (foundStudent) {
      throw new DuplicatedStudentException();
    }

    const created = await this.studentRepository.save(guardedStudent);

    return { success: true, id: created.id };
  }

  async delete({ username }, id: number) {
    const user = await this.userRepository.findOne({ where: { username } });
    const found = await this.studentRepository.findOne({ where: { id, user } });
    if (!found) {
      throw new IdNotFoundException();
    }
    const deletedResult = await this.studentRepository.delete(id);
    if (deletedResult.affected === 0) {
      throw new IdNotFoundException();
    }
    return { success: true as const };
  }
}
