// src/resources/bug-reports/services/get-all-bug-reports/controller.ts
import { Controller, Get } from '@nestjs/common';
import { GetAllBugReportsService } from './service';
import { Public } from 'src/decorators/public.decorator';

//------------------------------------------------------

@Public()
@Controller('bug-reports')
export class GetAllBugReportsController {
  constructor(
    private readonly getAllBugReportsService: GetAllBugReportsService
  ) {}

  @Get()
  async getAll() {
    return this.getAllBugReportsService.execute();
  }
}
