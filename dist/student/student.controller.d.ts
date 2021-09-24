import { StudentService } from './student.service';
import { DeleteStudentResponseDto, GetStudentDetailResponseDto, GetStudentSummaryResponseDto, PatchStudentResponseDto } from './student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudents(req: any): Promise<GetStudentSummaryResponseDto[]>;
    createStudent(body: any, req: any): Promise<{
        success: boolean;
    }>;
    getStudent(params: any): Promise<GetStudentDetailResponseDto>;
    lockStudent(params: any, req: any): Promise<PatchStudentResponseDto>;
    unlockStudent(params: any, req: any): Promise<PatchStudentResponseDto>;
    patchStudent(params: any, body: any, req: any): Promise<PatchStudentResponseDto>;
    deleteStudent(params: any, req: any): Promise<DeleteStudentResponseDto>;
}
