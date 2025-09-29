// src/resources/bug-reports/services/get-all-bug-reports/service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BugReportDocument } from 'src/database/schemas/bug-report';

@Injectable()
export class GetAllBugReportsService {
  constructor(
    @InjectModel('bug_report')
    private readonly bugReportModel: Model<BugReportDocument>
  ) {}

  async execute() {
    return this.bugReportModel.find().sort({ date: -1 }).exec();
  }
}
