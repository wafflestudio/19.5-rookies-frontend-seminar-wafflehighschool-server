import { StudentService } from './student.service';
import { StudentEntity } from './student.entity';
import { DeleteStudentResponseDto, GetStudentDetailResponseDto, GetStudentSummaryResponseDto, PatchStudentResponseDto } from './student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudents(req: any): Promise<GetStudentSummaryResponseDto[]>;
    createStudent(body: any, req: any): Promise<{
        user: import("../user/user.entity").UserEntity;
        name: string;
        grade: 1 | 2 | 3;
    } & StudentEntity>;
    getStudent(params: any): Promise<GetStudentDetailResponseDto>;
    patchStudent(params: any, body: any, req: any): Promise<PatchStudentResponseDto>;
    deleteStudent(params: any, req: any): Promise<DeleteStudentResponseDto>;
}
