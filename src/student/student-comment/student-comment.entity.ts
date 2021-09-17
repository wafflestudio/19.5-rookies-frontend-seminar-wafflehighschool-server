import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { StudentEntity } from '../student.entity';

@Entity()
export class CommentEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'id', example: 14112 })
  id: number;

  @Column({ nullable: false })
  @ApiProperty({
    description: '락',
    example: true,
  })
  content: string;

  @ManyToOne(() => StudentEntity, (student) => student.comments)
  student: StudentEntity;

  @CreateDateColumn()
  datetime: Date;
}
