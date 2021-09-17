import { UserEntity } from '../user/user.entity';
import { validGrade, validName } from './student.dto';
export declare class StudentEntity {
    id: number;
    name: validName;
    grade: validGrade;
    profile_img?: string | null;
    email: string;
    phone: string;
    major: 'frontend' | 'backend' | 'android' | 'iOS' | 'design';
    locked: boolean;
    user: UserEntity;
}
