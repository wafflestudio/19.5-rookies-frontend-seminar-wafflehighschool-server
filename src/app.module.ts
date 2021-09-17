import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './student/student-comment/student-comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    StudentModule,
    UserModule,
    AuthModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
