import { ApiProperty } from '@nestjs/swagger';

export class GetCommentResponseDto {
  @ApiProperty({
    description: 'id',
    example: 1,
    nullable: false,
  })
  id: number;

  @ApiProperty({
    description: '내용',
    example: '이건 댓글입니다',
    nullable: false,
  })
  content: string;

  @ApiProperty({
    description: '댓글 작성 시간',
    example: '2021-09-19T02:55:27.861Z',
    nullable: false,
  })
  datetime: Date;
}

export class CreateCommentRequestDto {
  @ApiProperty({
    description: '댓글 내용',
    example: '이건 댓글입니다',
    nullable: false,
  })
  content: string;
}

export class CreateCommentResponseDto {
  @ApiProperty({
    description: '성공 여부',
    example: true,
    nullable: false,
  })
  success: boolean;
}
