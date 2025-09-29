// src/resources/users/services/update-notification-token/dto.ts
import { IsString, IsOptional } from 'class-validator';

export class UpdateNotificationTokenParamsDto {
  @IsString()
  id: string;
}

export class UpdateNotificationTokenDto {
  @IsString()
  expoPushToken: string;

  @IsOptional()
  @IsString()
  device?: string;

  @IsOptional()
  @IsString()
  deviceBrand?: string;

  @IsOptional()
  @IsString()
  deviceModel?: string;

  @IsOptional()
  @IsString()
  deviceName?: string;

  @IsOptional()
  @IsString()
  deviceOS?: string;

  @IsOptional()
  @IsString()
  deviceOsVersion?: string;

  @IsString()
  clerkSessionId: string;
}
