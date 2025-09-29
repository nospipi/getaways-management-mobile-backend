// src/bug-reports/bug-reports.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BugReportSchema } from 'src/database/schemas/bug-report';

import { CreateBugReportService } from './services/create-bug-report/service';
import { CreateBugReportController } from './services/create-bug-report/controller';
import { GetAllBugReportsByUserIdService } from './services/get-all-bug-reports-by-user-id/service';
import { GetAllBugReportsByUserIdController } from './services/get-all-bug-reports-by-user-id/controller';

import { GetAllBugReportsService } from './services/get-all-bug-reports/service';
import { GetAllBugReportsController } from './services/get-all-bug-reports/controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'bug_report', schema: BugReportSchema },
    ]),
  ],
  providers: [
    CreateBugReportService,
    GetAllBugReportsByUserIdService,
    GetAllBugReportsService,
  ],
  controllers: [
    CreateBugReportController,
    GetAllBugReportsByUserIdController,
    GetAllBugReportsController,
  ],
})
export class BugReportsModule {}
