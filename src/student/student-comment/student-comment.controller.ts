import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from '../../auth/jwt-auth-guard';
import { StudentEntity } from '../student.entity';

import { CommentEntity } from './student-comment.entity';
import { CommentService } from './student-comment.service';

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
    isArray: true,
    type: StudentEntity,
  })
  async getComments(@Param() param): Promise<CommentEntity[]> {
    return await this.commentService.findByStudent(param.id);
  }

  @Post()
  @ApiOperation({
    summary: '학생 댓글 작성 API',
    description: '해당 학생에 댓글을 작성한다.',
  })
  async createComment(@Param() param, @Req() req, @Body() body) {
    return await this.commentService.create(req.user, param.id, body);
  }
}
