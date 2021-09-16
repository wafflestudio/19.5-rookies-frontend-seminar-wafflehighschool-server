import { Repository } from 'typeorm';
import { ReqUserDto } from '../user/user.dto';
import { UserEntity } from '../user/user.entity';
import { StudentEntity } from './student.entity';
import { CreateStudentRequestDto } from './student.dto';
export declare class StudentService {
    private studentRepository;
    private userRepository;
    constructor(studentRepository: Repository<StudentEntity>, userRepository: Repository<UserEntity>);
    getGuardedStudent(student: CreateStudentRequestDto): Omit<StudentEntity, 'id' | 'user'>;
    findByUser({ username }: ReqUserDto): Promise<StudentEntity[]>;
    find(id: number): Promise<StudentEntity>;
    patch({ username }: {
        username: any;
    }, id: number, data: Partial<StudentEntity>): Promise<{
        success: true;
    }>;
    create({ username }: {
        username: any;
    }, student: CreateStudentRequestDto): Promise<{
        user: UserEntity;
        name: string;
        grade: import("./student.dto").validGrade;
        profile_img?: string;
        email: string;
        phone: string;
        major: "android" | "frontend" | "backend" | "iOS" | "design";
    } & StudentEntity>;
    delete({ username }: {
        username: any;
    }, id: number): Promise<{
        success: true;
    }>;
}
