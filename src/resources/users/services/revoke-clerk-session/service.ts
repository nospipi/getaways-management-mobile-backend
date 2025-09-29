// src/resources/users/services/revoke-clerk-session/service.ts
import { Injectable, Inject } from '@nestjs/common';
import { type ClerkClient } from '@clerk/backend';

@Injectable()
export class RevokeClerkSessionService {
  constructor(
    @Inject('ClerkClient')
    private readonly clerkClient: ClerkClient
  ) {}

  async execute(email: string) {
    console.log('revokeClerkSessionByEmail called with email:', email);

    const users = await this.clerkClient.users.getUserList({
      emailAddress: [email],
    });

    if (users?.data?.length === 0) {
      throw new Error('User not found');
    }

    const user = users.data[0];

    const sessions = await this.clerkClient.sessions.getSessionList({
      userId: user.id,
    });

    const revokePromises = sessions?.data?.map((session) =>
      this.clerkClient.sessions.revokeSession(session.id)
    );

    await Promise.all(revokePromises);
    console.log(`All sessions revoked for user: ${email}`);

    return { success: true, message: `Logged out user: ${email}` };
  }
}
