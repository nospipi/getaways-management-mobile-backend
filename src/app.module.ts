// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ClerkClientProvider } from 'src/common/providers/clerk-client.provider';
import { AuthModule } from './auth/auth.module';
import { ClerkAuthGuard } from './guards/clerk-auth.guard';
import { APP_GUARD } from '@nestjs/core';

//---------------------------------------------------------------------------

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ClerkClientProvider,
    {
      provide: APP_GUARD,
      useClass: ClerkAuthGuard,
    },
  ],
})
export class AppModule {}
