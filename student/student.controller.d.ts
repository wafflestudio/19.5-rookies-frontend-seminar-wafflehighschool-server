import { StudentService } from './student.service';
import { StudentEntity } from './student.entity';
import { DeleteStudentResponseDto, PatchStudentResponseDto } from './student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudents(): Promise<StudentEntity[]>;
    createStudent(body: any): Promise<Omit<StudentEntity, "id"> & StudentEntity>;
    getStudent(params: any): Promise<StudentEntity>;
    patchStudent(params: any, body: any): Promise<PatchStudentResponseDto>;
    deleteStudent(params: any): Promise<DeleteStudentResponseDto>;
}
