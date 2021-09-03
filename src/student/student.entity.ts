import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { validGrade, validName } from './student.dto';

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
}
