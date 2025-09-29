import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BugReportDocument } from 'src/database/schemas/bug-report';
import { CreateBugReportDto } from './dto';

@Injectable()
export class CreateBugReportService {
  constructor(
    @InjectModel('bug_report')
    private readonly bugReportModel: Model<BugReportDocument>
  ) {}

  async execute(dto: CreateBugReportDto): Promise<string> {
    const newBugReport = new this.bugReportModel({
      body: dto.text,
      user: dto.user,
    });

    try {
      await newBugReport.save();
      return 'Submitted successfully. Your feedback is very important to us. We will get back to you as soon as possible.';
    } catch (error: any) {
      if (error.name === 'ValidationError') {
        throw new Error(error.message);
      } else {
        throw new Error(error.toString());
      }
    }
  }
}
