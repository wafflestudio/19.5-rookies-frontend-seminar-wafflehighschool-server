import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { LoginRequestDto } from './auth.dto';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService);
    validateUser(loginUserDto: LoginRequestDto): Promise<any>;
    login(body: LoginRequestDto): Promise<{
        accessToken: string;
    }>;
}
