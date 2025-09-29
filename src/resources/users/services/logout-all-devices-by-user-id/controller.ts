// src/resources/users/services/logout-all-devices-by-user-id/controller.ts
import {
  Controller,
  Patch,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LogoutAllDevicesByUserIdService } from './service';
import { LogoutAllDevicesByUserIdDto } from './dto';

@Controller('users')
export class LogoutAllDevicesByUserIdController {
  constructor(
    private readonly logoutAllDevicesService: LogoutAllDevicesByUserIdService
  ) {}

  @Patch('logout_all_devices_by_user_id/:id')
  async handle(@Param() params: LogoutAllDevicesByUserIdDto) {
    try {
      return await this.logoutAllDevicesService.execute(params);
    } catch (err: any) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
