// src/resources/users/users.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/database/schemas/user.schema';
import { ClerkClientProvider } from 'src/common/providers/clerk-client.provider';

import { GetSignedUserService } from './services/get-signed-user/service';
import { GetSignedUserController } from './services/get-signed-user/controller';

import { LogoutDeviceService } from './services/logout-device/service';
import { LogoutDeviceController } from './services/logout-device/controller';

import { LogoutAllDevicesByUserIdService } from './services/logout-all-devices-by-user-id/service';
import { LogoutAllDevicesByUserIdController } from './services/logout-all-devices-by-user-id/controller';

import { UpdateNotificationTokenService } from './services/update-notification-token/service';
import { UpdateNotificationTokenController } from './services/update-notification-token/controller';

import { RevokeClerkSessionService } from './services/revoke-clerk-session/service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [
    ClerkClientProvider,
    GetSignedUserService,
    LogoutDeviceService,
    LogoutAllDevicesByUserIdService,
    UpdateNotificationTokenService,
    RevokeClerkSessionService,
  ],
  controllers: [
    GetSignedUserController,
    LogoutDeviceController,
    LogoutAllDevicesByUserIdController,
    UpdateNotificationTokenController,
  ],
})
export class UsersModule {}
