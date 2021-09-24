import { Repository } from 'typeorm';
import { ReqUserDto } from '../user/user.dto';
import { UserEntity } from '../user/user.entity';
import { StudentEntity } from './student.entity';
import { CreateStudentRequestDto, GetStudentDetailResponseDto, GetStudentSummaryResponseDto, PatchStudentRequestDto, PatchStudentResponseDto } from './student.dto';
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
    findByUser({ username, }: ReqUserDto): Promise<GetStudentSummaryResponseDto[]>;
    find(id: number): Promise<GetStudentDetailResponseDto>;
    setLock({ username }: {
        username: any;
    }, id: number, locked: boolean): Promise<PatchStudentResponseDto>;
    patch({ username }: {
        username: any;
    }, id: number, data: PatchStudentRequestDto): Promise<{
        success: true;
    }>;
    create({ username }: {
        username: any;
    }, student: CreateStudentRequestDto): Promise<{
        success: boolean;
    }>;
    delete({ username }: {
        username: any;
    }, id: number): Promise<{
        success: true;
    }>;
}
