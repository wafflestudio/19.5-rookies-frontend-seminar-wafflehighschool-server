import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { WrrsException } from '../common/exceptions/wrrs-exception';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

import { StudentService } from './student.service';
import {
  CreateStudentRequestDto,
  CreateStudentResponseDto,
  DeleteStudentResponseDto,
  GetStudentDetailResponseDto,
  GetStudentStatResponseDto,
  GetStudentSummaryResponseDto,
  PatchStudentRequestDto,
  PatchStudentResponseDto,
} from './student.dto';

@UseGuards(JwtAuthGuard)
@Controller('v1/student')
@ApiTags('학생 관리 API')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  @ApiOperation({
    summary: '학생 정보 API',
    description:
      '현재 로그인된 유저에게 연결된 모든 학생의 요약된 정보를 불러온다.',
  })
  @ApiOkResponse({
    isArray: true,
    type: GetStudentSummaryResponseDto,
  })
  async getStudents(@Req() req): Promise<GetStudentSummaryResponseDto[]> {
    return this.studentService.findByUser(req.user);
  }

  @Get('stat')
  @ApiOperation({
    summary: '학생 통계 API',
    description:
      '모든 유저에게 연결된 모든 학생들의 학년별 인원 정보를 불러온다. 대시보드에 사용하면 된다.',
  })
  @ApiOkResponse({
    type: GetStudentStatResponseDto,
  })
  async getStudentStats(): Promise<GetStudentStatResponseDto> {
    return this.studentService.getStats();
  }

  @Post()
  @ApiBody({ type: CreateStudentRequestDto })
  @ApiCreatedResponse({ description: '성공', type: CreateStudentResponseDto })
  @ApiBadRequestResponse({
    description:
      '올바르지 않은 학년 / 이름, 해당 학년에 동명이인 존재, 올바르지 않은 필드 존재',
    type: WrrsException,
  })
  @ApiOperation({ summary: '학생 생성', description: '학생을 생성한다.' })
  async createStudent(@Body() body, @Req() req) {
    return this.studentService.create(req.user, body);
  }

  @Get(':id')
  @ApiOperation({
    summary: '학생 정보 가져오기',
    description: 'id를 이용하여 학생의 자세한 정보를 불러온다.',
  })
  @ApiOkResponse({
    type: GetStudentDetailResponseDto,
  })
  @ApiBadRequestResponse({ type: WrrsException })
  getStudent(@Param() params): Promise<GetStudentDetailResponseDto> {
    return this.studentService.find(params.id);
  }

  @Post(':id/lock')
  @ApiOperation({
    summary: '학생 잠그기',
    description: '해당 id의 학생을 잠근다.',
  })
  @ApiOkResponse({
    type: PatchStudentResponseDto,
  })
  @ApiBadRequestResponse({ type: WrrsException })
  async lockStudent(
    @Param() params,
    @Req() req,
  ): Promise<PatchStudentResponseDto> {
    return this.studentService.setLock(req.user, params.id, true);
  }

  @Post(':id/unlock')
  @ApiOperation({
    summary: '학생 잠금 해제',
    description: '해당 id의 학생을 잠금 해제한다.',
  })
  @ApiOkResponse({
    type: PatchStudentResponseDto,
  })
  @ApiBadRequestResponse({ type: WrrsException })
  async unlockStudent(
    @Param() params,
    @Req() req,
  ): Promise<PatchStudentResponseDto> {
    return this.studentService.setLock(req.user, params.id, false);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '학생 정보 수정하기',
    description: '학생의 정보를 수정한다. 빈 값이면 null을 보내야 한다.',
  })
  @ApiBody({ type: PatchStudentRequestDto })
  @ApiOkResponse({
    type: PatchStudentResponseDto,
  })
  @ApiBadRequestResponse({ type: WrrsException })
  async patchStudent(
    @Param() params,
    @Body() body,
    @Req() req,
  ): Promise<PatchStudentResponseDto> {
    return this.studentService.patch(req.user, params.id, body);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '학생 삭제',
    description: 'id를 이용하여 학생을 삭제한다.',
  })
  @ApiOkResponse({
    type: DeleteStudentResponseDto,
  })
  @ApiBadRequestResponse({
    type: WrrsException,
  })
  async deleteStudent(
    @Param() params,
    @Req() req,
  ): Promise<DeleteStudentResponseDto> {
    return this.studentService.delete(req.user, params.id);
  }
}
