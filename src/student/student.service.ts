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
import { CreateStudentRequestDto } from './student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {
    this.getGuardedStudent.bind(this);
  }

  getGuardedStudent(
    student: CreateStudentRequestDto,
  ): Omit<StudentEntity, 'id' | 'user'> {
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
      profile_img: null,
      email: null,
      phone: null,
      major: null,
    };
  }

  async findByUser({ username }: ReqUserDto): Promise<StudentEntity[]> {
    const user = await this.userRepository.findOne({ where: { username } });
    return this.studentRepository.find({ where: { user } });
  }

  async find(id: number): Promise<StudentEntity> {
    const foundStudent = await this.studentRepository.findOne(id);
    if (!foundStudent) {
      throw new IdNotFoundException();
    }
    return foundStudent;
  }

  async patch(id: number, data: Partial<StudentEntity>) {
    if (data.id || data.name || data.grade || data.user) {
      throw new BadDataException();
    }

    if (isEmpty(data)) {
      return { success: true as const };
    }

    if (data.email) {
      const domain = data.email.split('@');
      if (domain.length !== 2 || domain[1] !== 'waffle.hs.kr') {
        throw new BadDataException();
      }
    }

    if (data.major) {
      if (!['frontend', 'backend', 'android', 'iOS'].includes(data.major)) {
        throw new BadDataException();
      }
    }

    if (data.phone) {
      if (!/[0-9]{3}-[0-9]{3,4}-[0-9]{4}/.test(data.phone)) {
        throw new BadDataException();
      }
    }

    const updateResult = await this.studentRepository.update(id, data);
    if (updateResult.affected === 0) {
      throw new IdNotFoundException();
    }

    return { success: true as const };
  }

  async create({ username }, student: CreateStudentRequestDto) {
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

    return await this.studentRepository.save(guardedStudent);
  }

  async delete(id: number) {
    const deletedResult = await this.studentRepository.delete(id);
    if (deletedResult.affected === 0) {
      throw new IdNotFoundException();
    }
    return { success: true as const };
  }
}
