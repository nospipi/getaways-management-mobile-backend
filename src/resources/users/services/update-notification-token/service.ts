// src/resources/users/services/update-notification-token/service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/database/schemas/user.schema';
import {
  UpdateNotificationTokenDto,
  UpdateNotificationTokenParamsDto,
} from './dto';

@Injectable()
export class UpdateNotificationTokenService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>
  ) {}

  async execute(
    params: UpdateNotificationTokenParamsDto,
    dto: UpdateNotificationTokenDto
  ) {
    const user = await this.userModel.findById(params.id).exec();

    if (!user) {
      throw new Error('User not found');
    }

    const loggedDevice = user.loggedDevices.find(
      (d) => d.clerkSessionId === dto.clerkSessionId
    );

    if (loggedDevice) {
      loggedDevice.token = dto.expoPushToken;
      loggedDevice.expoPushToken = dto.expoPushToken;
      loggedDevice.device = dto.device;
      loggedDevice.deviceBrand = dto.deviceBrand;
      loggedDevice.deviceModel = dto.deviceModel;
      loggedDevice.deviceOS = dto.deviceOS;
      loggedDevice.deviceName = dto.deviceName;
      loggedDevice.deviceOsVersion = dto.deviceOsVersion;
      loggedDevice.clerkSessionId = dto.clerkSessionId;
    } else {
      user.loggedDevices.push({
        token: dto.expoPushToken,
        expoPushToken: dto.expoPushToken,
        device: dto.device,
        deviceBrand: dto.deviceBrand,
        deviceModel: dto.deviceModel,
        deviceOS: dto.deviceOS,
        deviceOsVersion: dto.deviceOsVersion,
        deviceName: dto.deviceName,
        clerkSessionId: dto.clerkSessionId,
        createdAt: new Date(),
      });
    }

    await user.save();

    return true;
  }
}
