// src/resources/users/services/logout-all-devices-by-user-id/service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/database/schemas/user.schema';
import { LogoutAllDevicesByUserIdDto } from './dto';
import { RevokeClerkSessionService } from '../revoke-clerk-session/service';

//---------------------------------------------------------------------------

@Injectable()
export class LogoutAllDevicesByUserIdService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
    private readonly revokeClerkSessionService: RevokeClerkSessionService
  ) {}

  async execute(dto: LogoutAllDevicesByUserIdDto) {
    console.log('logout_all_devices', dto.id);

    const user = await this.userModel
      .findByIdAndUpdate(dto.id, {
        loggedDevices: [],
      })
      .exec();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.revokeClerkSessionService.execute(user?.contact?.email || 'n/a');

    return 'Successfully logged out all devices';
  }
}
