import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export type validGrade = 1 | 2 | 3;
export type validName = string;

export class CreateStudentRequestDto {
  @ApiProperty({ description: '이름', example: '김와플', required: true })
  @IsString()
  name: string;

  @ApiProperty({ description: '학년', example: 2, required: true })
  @IsNumber()
  grade: number;

  @ApiProperty({
    description: '프로필 사진 링크',
    example: 'https://wafflestudio.com',
    required: true,
  })
  profile_img: string | null;

  @ApiProperty({
    description: '이메일',
    example: 'example@wafflehs.com',
    required: true,
  })
  email: string | null;

  @ApiProperty({
    description: '폰 번호',
    example: '000-0000-0000',
    required: true,
  })
  phone: string | null;

  @ApiProperty({
    description: '전공',
    example: 'frontend',
    required: true,
  })
  major: 'frontend' | 'backend' | 'android' | 'iOS' | null;
}

export class PatchStudentRequestDto {
  @ApiProperty({ description: '수정 가능한 데이터', required: false })
  profile_img?: string;
}

export class PatchStudentResponseDto {
  @ApiProperty({ description: '성공 여부' })
  success: true;
}

export class DeleteStudentResponseDto {
  @ApiProperty({ description: '성공 여부' })
  success: true;
}
