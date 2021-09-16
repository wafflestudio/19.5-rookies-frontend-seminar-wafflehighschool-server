import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    findOne(username: string): Promise<UserEntity | undefined>;
}
