import { StudentEntity } from '../student/student.entity';
export declare class UserEntity {
    id: number;
    username: string;
    password: string;
    students: StudentEntity[];
}
