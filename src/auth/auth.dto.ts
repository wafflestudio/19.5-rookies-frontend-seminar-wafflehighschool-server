import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestDto {
  @ApiProperty({
    description: '아이디 (깃헙 유저네임으로 등록해드린)',
    example: 'user-github-username',
    nullable: false,
  })
  username: string;

  @ApiProperty({
    description: '비밀번호',
    example: 'test',
    nullable: false,
  })
  password: string;
}

export class LoginResponseDto {
  @ApiProperty({
    description: '토큰값',
    example: 'eyJ어쩌구저쩌구',
    nullable: false,
  })
  access_token: string;
}

export class CheckTokenResponseDto {
  @ApiProperty({
    description: '살아있는지 여부',
    example: true,
    nullable: false,
  })
  checked: boolean;
}
