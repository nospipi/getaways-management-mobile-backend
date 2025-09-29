// src/resources/users/services/get-signed-user/controller.ts
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { GetSignedUserService } from './service';
import type { Request } from 'express';

@Controller('users')
export class GetSignedUserController {
  constructor(private readonly getSignedUserService: GetSignedUserService) {}

  @Get('get_signed_user')
  async handle(@Req() req: Request) {
    try {
      return await this.getSignedUserService.execute(req);
    } catch (err: any) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
