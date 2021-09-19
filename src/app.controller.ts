import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ping')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({
    summary: '핑퐁',
    description: '연결 잘 됐는지 확인하는 핑퐁',
  })
  @ApiOkResponse({
    type: 'pong',
  })
  async getHello(): Promise<'pong'> {
    return 'pong';
  }
}
