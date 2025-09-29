// src/resources/bug-reports/services/create-bug-report/controller.ts

import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateBugReportService } from './service';
import { CreateBugReportDto } from './dto';

@Controller('bug-reports')
export class CreateBugReportController {
  constructor(private readonly createService: CreateBugReportService) {}

  @Post()
  async handle(@Body() dto: CreateBugReportDto) {
    try {
      return await this.createService.execute(dto);
    } catch (err: any) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
