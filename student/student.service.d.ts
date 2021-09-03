import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';
import { CreateStudentRequestDto } from './student.dto';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<StudentEntity>);
    getGuardedStudent(student: CreateStudentRequestDto): Omit<StudentEntity, 'id'>;
    findAll(): Promise<StudentEntity[]>;
    find(id: number): Promise<StudentEntity>;
    patch(id: number, data: Partial<StudentEntity>): Promise<{
        success: true;
    }>;
    create(student: any): Promise<Omit<StudentEntity, "id"> & StudentEntity>;
    delete(id: number): Promise<{
        success: true;
    }>;
}
