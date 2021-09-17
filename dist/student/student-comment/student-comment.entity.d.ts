import { StudentEntity } from '../student.entity';
export declare class CommentEntity {
    id: number;
    content: string;
    student: StudentEntity;
    datetime: Date;
}
