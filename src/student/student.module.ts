import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from '../user/user.entity';

import { StudentEntity } from './student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { CommentModule } from './student-comment/student-comment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentEntity, UserEntity]),
    CommentModule,
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
