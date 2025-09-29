// src/resources/users/services/logout-device/dto.ts
import { IsString } from 'class-validator';

export class LogoutDeviceDto {
  @IsString()
  clerk_session_id: string;
}
