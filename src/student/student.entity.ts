import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { UserEntity } from '../user/user.entity';

import { validGrade, validName } from './student.dto';
import { CommentEntity } from './student-comment/student-comment.entity';

@Entity()
export class StudentEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'id', example: 14112 })
  id: number;

  @Column()
  @ApiProperty({ description: '이름', example: '김와플' })
  name: validName;

  @Column()
  @ApiProperty({ description: '학년', example: 2 })
  grade: validGrade;

  @Column({ nullable: true })
  @ApiProperty({
    description: '프로필 사진 링크',
    example: 'https://wafflestudio.com',
  })
  profile_img?: string | null;

  @Column({ nullable: true })
  @ApiProperty({
    description: '이메일',
    example: 'example@waffle.hs.kr',
  })
  email: string;

  @Column({ nullable: true })
  @ApiProperty({
    description: '전화번호',
    example: '000-0000-0000',
  })
  phone: string;

  @Column({ nullable: true })
  @ApiProperty({
    description: '전공',
    example: 'frontend',
  })
  major: 'frontend' | 'backend' | 'android' | 'iOS' | 'design';

  @Column({ nullable: false, default: false })
  @ApiProperty({
    description: '락',
    example: true,
  })
  locked: boolean;

  @ManyToOne(() => UserEntity, (user) => user.students)
  user: UserEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.student, {
    cascade: true,
  })
  comments: CommentEntity[];
}
