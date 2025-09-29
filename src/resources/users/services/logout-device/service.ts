// src/resources/users/services/logout-device/service.ts
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/database/schemas/user.schema';
import { type ClerkClient } from '@clerk/backend';
import { LogoutDeviceDto } from './dto';

@Injectable()
export class LogoutDeviceService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
    @Inject('ClerkClient')
    private readonly clerkClient: ClerkClient
  ) {}

  async execute(dto: LogoutDeviceDto) {
    console.log('logout_device', dto.clerk_session_id);

    await this.userModel
      .findOneAndUpdate(
        { 'loggedDevices.clerkSessionId': dto.clerk_session_id },
        { $pull: { loggedDevices: { clerkSessionId: dto.clerk_session_id } } }
      )
      .exec();

    await this.clerkClient.sessions.revokeSession(dto.clerk_session_id);

    return 'Successfully logged out device';
  }
}
