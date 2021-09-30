import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../../auth/jwt-auth-guard';

import { CommentService } from './student-comment.service';
import {
  CreateCommentRequestDto,
  CreateCommentResponseDto,
  GetCommentResponseDto,
} from './student-comment.dto';

@UseGuards(JwtAuthGuard)
@Controller('v1/student/:id/comment')
@ApiTags('학생 관리 API')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  @ApiOperation({
    summary: '학생 댓글 정보 API',
    description: '해당 학생의 모든 댓글을 불러온다.',
  })
  @ApiOkResponse({
    type: GetCommentResponseDto,
  })
  async getComments(
    @Param() param,
    @Query('page') page: number,
  ): Promise<GetCommentResponseDto> {
    return await this.commentService.findByStudentPaginated(param.id, page);
  }

  @Post()
  @ApiOperation({
    summary: '학생 댓글 작성 API',
    description: '해당 학생에 댓글을 작성한다.',
  })
  @ApiBody({
    type: CreateCommentRequestDto,
  })
  @ApiOkResponse({
    type: CreateCommentResponseDto,
  })
  async createComment(
    @Param() param,
    @Req() req,
    @Body() body,
  ): Promise<CreateCommentResponseDto> {
    return await this.commentService.create(req.user, param.id, body);
  }
}
