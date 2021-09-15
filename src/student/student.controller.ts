import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
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
import { StudentEntity } from './student.entity';
import {
  CreateStudentRequestDto,
  DeleteStudentResponseDto,
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
    description: '모든 학생의 정보를 불러온다.',
  })
  @ApiOkResponse({
    isArray: true,
    type: StudentEntity,
  })
  async getStudents(): Promise<StudentEntity[]> {
    return this.studentService.findAll();
  }

  @Post()
  @ApiBody({ type: CreateStudentRequestDto })
  @ApiCreatedResponse({ description: '성공', type: StudentEntity })
  @ApiBadRequestResponse({
    description: '올바르지 않은 학년, 이름 혹은 동명이인 존재',
    type: WrrsException,
  })
  @ApiOperation({ summary: '학생 생성', description: '학생을 생성한다.' })
  async createStudent(
    @Body()
    body,
  ) {
    return this.studentService.create(body);
  }

  @Get(':id')
  @ApiOperation({
    summary: '학생 정보 가져오기',
    description: 'id를 이용하여 학생의 정보를 불러온다.',
  })
  @ApiOkResponse({
    type: StudentEntity,
  })
  @ApiBadRequestResponse({ type: WrrsException })
  getStudent(@Param() params): Promise<StudentEntity> {
    return this.studentService.find(params.id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '학생 정보 수정하기',
    description: '학생의 정보를 수정한다.',
  })
  @ApiBody({ type: PatchStudentRequestDto })
  @ApiOkResponse({
    type: PatchStudentResponseDto,
  })
  @ApiBadRequestResponse({ type: WrrsException })
  async patchStudent(
    @Param() params,
    @Body() body,
  ): Promise<PatchStudentResponseDto> {
    return this.studentService.patch(params.id, body);
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
  async deleteStudent(@Param() params): Promise<DeleteStudentResponseDto> {
    return this.studentService.delete(params.id);
  }
}
