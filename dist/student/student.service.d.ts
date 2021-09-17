import { Repository } from 'typeorm';
import { ReqUserDto } from '../user/user.dto';
import { UserEntity } from '../user/user.entity';
import { StudentEntity } from './student.entity';
import { CreateStudentRequestDto } from './student.dto';
import { CommentService } from './student-comment/student-comment.service';
export declare class StudentService {
    private studentRepository;
    private userRepository;
    private commentService;
    constructor(studentRepository: Repository<StudentEntity>, userRepository: Repository<UserEntity>, commentService: CommentService);
    getGuardedStudent(student: CreateStudentRequestDto): {
        name: string;
        grade: 1 | 2 | 3;
    };
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
        grade: 1 | 2 | 3;
    } & StudentEntity>;
    delete({ username }: {
        username: any;
    }, id: number): Promise<{
        success: true;
    }>;
}
