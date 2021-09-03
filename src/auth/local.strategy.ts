import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from './auth.service';
import { LoginRequestDto } from './auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'username',
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const loginUserDto: LoginRequestDto = {
      username,
      password,
    };

    const user = await this.authService.validateUser(loginUserDto);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
