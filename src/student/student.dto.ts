import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export type validGrade = 1 | 2 | 3;
export type validName = string;

export class CreateStudentRequestDto {
  @ApiProperty({ description: '이름', example: '김와플', required: true })
  @IsString()
  name: string;

  @ApiProperty({ description: '학년', example: 2, required: true })
  @IsNumber()
  grade: number;
}

export class PatchStudentRequestDto {
  @ApiProperty({
    description: '프로필 사진 링크',
    example: 'https://wafflestudio.com',
    required: false,
  })
  @IsString()
  profile_img?: string;

  @ApiProperty({
    description: '이메일',
    example: 'example@waffle.hs.kr',
    required: false,
  })
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: '폰 번호',
    example: '000-0000-0000',
    required: false,
  })
  @IsString()
  phone?: string;

  @ApiProperty({
    description: '전공',
    example: 'frontend',
    required: false,
  })
  @IsString()
  major?: 'frontend' | 'backend' | 'android' | 'iOS' | null;
}

export class PatchStudentResponseDto {
  @ApiProperty({ description: '성공 여부' })
  success: true;
}

export class DeleteStudentResponseDto {
  @ApiProperty({ description: '성공 여부' })
  success: true;
}
