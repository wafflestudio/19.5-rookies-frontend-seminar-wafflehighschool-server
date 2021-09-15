import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { StudentEntity } from '../student/student.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => StudentEntity, (student) => student.user)
  students: StudentEntity[];
}
