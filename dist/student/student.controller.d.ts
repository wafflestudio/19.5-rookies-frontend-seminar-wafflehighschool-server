import { UserEntity } from '../user/user.entity';
import { StudentService } from './student.service';
import { StudentEntity } from './student.entity';
import { CreateStudentRequestDto, DeleteStudentResponseDto, PatchStudentResponseDto } from './student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudents(req: any): Promise<StudentEntity[]>;
    createStudent(body: CreateStudentRequestDto, req: any): Promise<{
        user: UserEntity;
        name: string;
        grade: import("./student.dto").validGrade;
        profile_img?: string;
        email: string;
        phone: string;
        major: "android" | "frontend" | "backend" | "iOS" | "design";
    } & StudentEntity>;
    getStudent(params: any): Promise<StudentEntity>;
    patchStudent(params: any, body: any, req: any): Promise<PatchStudentResponseDto>;
    deleteStudent(params: any, req: any): Promise<DeleteStudentResponseDto>;
}
