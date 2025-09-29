// src/resources/users/services/logout-device/controller.ts
import {
  Controller,
  Patch,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LogoutDeviceService } from './service';
import { LogoutDeviceDto } from './dto';

@Controller('users')
export class LogoutDeviceController {
  constructor(private readonly logoutDeviceService: LogoutDeviceService) {}

  @Patch('logout_device/:clerk_session_id')
  async handle(@Param() params: LogoutDeviceDto) {
    try {
      return await this.logoutDeviceService.execute(params);
    } catch (err: any) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
