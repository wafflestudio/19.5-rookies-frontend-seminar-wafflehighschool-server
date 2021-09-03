import { validGrade, validName } from './student.dto';
export declare class StudentEntity {
    id: number;
    name: validName;
    grade: validGrade;
    profile_img?: string | null;
}
