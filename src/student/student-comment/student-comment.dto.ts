import { ApiProperty } from '@nestjs/swagger';

type Comment = {
  id: number;
  content: string;
  datetime: Date;
};

export class GetCommentResponseDto {
  @ApiProperty({
    description: '데이터 목록',
    example: [
      { id: 1, content: '이건 댓글', dateTime: '2021-09-19T02:55:27.861Z' },
      { id: 2, content: '이건 댓글2', dateTime: '2021-09-20T02:55:27.861Z' },
    ],
    nullable: false,
  })
  data: Comment[];
  count: number;
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
