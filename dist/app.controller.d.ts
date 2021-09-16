import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    getHello(): string;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
