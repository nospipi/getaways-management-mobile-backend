// src/resources/users/services/get-signed-user/service.ts
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/database/schemas/user.schema';
import { type ClerkClient } from '@clerk/backend';
import type { Request } from 'express';

@Injectable()
export class GetSignedUserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<UserDocument>,
    @Inject('ClerkClient')
    private readonly clerkClient: ClerkClient
  ) {}

  async execute(req: Request) {
    console.log('GET /api/users/get_signed_user');
    const userId = (req as any)?.user?.id;

    if (!userId) {
      throw new Error('User not authenticated');
    }

    console.log('User ID is present:', userId);

    const clerkUser = await this.clerkClient?.users?.getUser(userId);
    const email = clerkUser?.primaryEmailAddress?.emailAddress;

    if (!email) {
      throw new Error('User email not found');
    }

    const user = await this.userModel
      .findOne({ 'contact.email': email })
      .select('-password')
      .exec();

    if (!user) {
      throw new Error(`This email is not registered (${email})`);
    }

    return user;
  }
}
