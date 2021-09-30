import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { LocalAuthGuard } from './local-auth-guard';
import { AuthService } from './auth.service';
import {
  CheckTokenResponseDto,
  LoginRequestDto,
  LoginResponseDto,
} from './auth.dto';
import { JwtAuthGuard } from './jwt-auth-guard';

@ApiTags('auth')
@Controller('v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('check_token')
  @ApiOperation({
    summary: '토큰 체크',
    description:
      '토큰이 살아있는지 확인합니다. 살아있지 않을 경우 401 Unauthorized입니다.',
  })
  @ApiOkResponse({
    type: CheckTokenResponseDto,
    status: 200,
  })
  async check_token(@Request() req) {
    return this.authService.checkUserToken(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({
    summary: '로그인',
    description: '로그인합니다.',
  })
  @ApiBody({
    type: LoginRequestDto,
  })
  @ApiOkResponse({
    type: LoginResponseDto,
  })
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
