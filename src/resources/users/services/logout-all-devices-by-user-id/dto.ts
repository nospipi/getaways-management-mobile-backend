// src/resources/users/services/logout-all-devices-by-user-id/dto.ts
import { IsString } from 'class-validator';

export class LogoutAllDevicesByUserIdDto {
  @IsString()
  id: string;
}
