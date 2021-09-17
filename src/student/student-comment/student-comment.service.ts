import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { StudentEntity } from '../student.entity';
import { UserEntity } from '../../user/user.entity';
import { IdNotFoundException } from '../student.exception';

import { CommentEntity } from './student-comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}

  async findByStudent(id: number): Promise<CommentEntity[]> {
    const student = await this.studentRepository.findOne({ where: { id } });
    return await this.commentRepository.find({ where: { student } });
  }

  async create(
    { username },
    id: number,
    { content }: { content: string },
  ): Promise<any> {
    const user = await this.userRepository.findOne({ where: { username } });
    const student = await this.studentRepository.findOne({
      where: { id, user },
    });

    if (!student) {
      throw new IdNotFoundException();
    }

    return await this.commentRepository.save({ content, student });
  }
}
