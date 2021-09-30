import { AuthService } from './auth.service';
import { CheckTokenResponseDto } from './auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    check_token(req: any): Promise<CheckTokenResponseDto>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
