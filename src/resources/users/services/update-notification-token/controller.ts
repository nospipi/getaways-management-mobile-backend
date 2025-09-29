// src/resources/users/services/update-notification-token/controller.ts
import {
  Controller,
  Patch,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UpdateNotificationTokenService } from './service';
import {
  UpdateNotificationTokenDto,
  UpdateNotificationTokenParamsDto,
} from './dto';

@Controller('users')
export class UpdateNotificationTokenController {
  constructor(
    private readonly updateNotificationTokenService: UpdateNotificationTokenService
  ) {}

  @Patch('update_notification_token/:id')
  async handle(
    @Param() params: UpdateNotificationTokenParamsDto,
    @Body() body: UpdateNotificationTokenDto
  ) {
    try {
      return await this.updateNotificationTokenService.execute(params, body);
    } catch (err: any) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
