import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StudentEntity } from '../student.entity';
import { UserEntity } from '../../user/user.entity';

import { CommentEntity } from './student-comment.entity';
import { CommentController } from './student-comment.controller';
import { CommentService } from './student-comment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentEntity, UserEntity, CommentEntity]),
  ],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService],
})
export class CommentModule {}
