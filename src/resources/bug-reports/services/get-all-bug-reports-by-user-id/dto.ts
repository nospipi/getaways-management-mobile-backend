import { IsString } from 'class-validator';

export class GetAllBugReportsByUserIdDto {
  @IsString()
  user_id: string;
}
