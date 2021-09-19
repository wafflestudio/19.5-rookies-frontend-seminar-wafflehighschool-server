import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { StudentEntity } from '../student.entity';
import { UserEntity } from '../../user/user.entity';
import { BadDataException, IdNotFoundException } from '../student.exception';

import { CommentEntity } from './student-comment.entity';
import { GetCommentResponseDto } from './student-comment.dto';

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

  async findByStudent(id: number): Promise<GetCommentResponseDto[]> {
    const student = await this.studentRepository.findOne({ where: { id } });
    const comments = await this.commentRepository.find({
      where: { student },
      select: ['id', 'content', 'datetime'],
    });
    return comments as GetCommentResponseDto[];
  }

  async create(
    { username },
    id: number,
    data: { content: string },
  ): Promise<any> {
    Object.keys(data).forEach((key) => {
      if (!['content'].includes(key)) {
        throw new BadDataException();
      }
    });

    if (!data.content) {
      throw new BadDataException();
    }

    const user = await this.userRepository.findOne({ where: { username } });
    const student = await this.studentRepository.findOne({
      where: { id, user },
    });

    if (!student) {
      throw new IdNotFoundException();
    }

    await this.commentRepository.save({
      content: data.content,
      student,
    });

    return { success: true };
  }
}
