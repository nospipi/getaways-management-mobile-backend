// src/resources/bug-reports/services/get-bug-reports-by-user/service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BugReportDocument } from 'src/database/schemas/bug-report';
import { GetAllBugReportsByUserIdDto } from './dto';

@Injectable()
export class GetAllBugReportsByUserIdService {
  constructor(
    @InjectModel('bug_report')
    private readonly bugReportModel: Model<BugReportDocument>
  ) {}

  async execute(dto: GetAllBugReportsByUserIdDto) {
    try {
      return await this.bugReportModel
        .find({ user: dto.user_id })
        .sort({ date: -1 })
        .exec();
    } catch (err) {
      throw new Error(err.toString());
    }
  }
}
