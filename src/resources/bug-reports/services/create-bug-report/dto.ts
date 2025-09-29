import { IsString, IsOptional } from 'class-validator';

export class CreateBugReportDto {
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  user?: string;
}
