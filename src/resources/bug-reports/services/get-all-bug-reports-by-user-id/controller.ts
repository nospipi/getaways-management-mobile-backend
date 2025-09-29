// src/resources/bug-reports/services/get-bug-reports-by-user/controller.ts

import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GetAllBugReportsByUserIdService } from './service';
import { GetAllBugReportsByUserIdDto } from './dto';

@Controller('bug-reports')
export class GetAllBugReportsByUserIdController {
  constructor(private readonly getService: GetAllBugReportsByUserIdService) {}

  @Get('get_bug_reports_by_user_id/:user_id')
  async handle(@Param() params: GetAllBugReportsByUserIdDto) {
    try {
      return await this.getService.execute(params);
    } catch (err: any) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
