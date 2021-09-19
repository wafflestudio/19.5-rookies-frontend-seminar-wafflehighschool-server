import { Repository } from 'typeorm';
import { StudentEntity } from '../student.entity';
import { UserEntity } from '../../user/user.entity';
import { CommentEntity } from './student-comment.entity';
export declare class CommentService {
    private userRepository;
    private studentRepository;
    private commentRepository;
    constructor(userRepository: Repository<UserEntity>, studentRepository: Repository<StudentEntity>, commentRepository: Repository<CommentEntity>);
    findByStudent(id: number): Promise<CommentEntity[]>;
    create({ username }: {
        username: any;
    }, id: number, data: {
        content: string;
    }): Promise<any>;
}
