import { Repository } from 'typeorm';
import { StudentEntity } from '../student.entity';
import { UserEntity } from '../../user/user.entity';
import { CommentEntity } from './student-comment.entity';
import { GetCommentResponseDto } from './student-comment.dto';
export declare class CommentService {
    private userRepository;
    private studentRepository;
    private commentRepository;
    constructor(userRepository: Repository<UserEntity>, studentRepository: Repository<StudentEntity>, commentRepository: Repository<CommentEntity>);
    findByStudentPaginated(id: number, page: number): Promise<GetCommentResponseDto>;
    create({ username }: {
        username: any;
    }, id: number, data: {
        content: string;
    }): Promise<any>;
}
