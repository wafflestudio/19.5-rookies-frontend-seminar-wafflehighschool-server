import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { LocalAuthGuard } from './auth/local-auth-guard';
import { AuthService } from './auth/auth.service';

@Controller()
@ApiTags('ping')
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  getHello(): string {
    return 'pong';
  }

  @UseGuards(LocalAuthGuard)
  @Post('v1/auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
