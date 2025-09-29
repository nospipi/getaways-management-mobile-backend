// src/common/services/database.service.ts
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseService implements OnApplicationBootstrap {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  onApplicationBootstrap() {
    if (this.connection.readyState === 1) {
      console.log('✅ MongoDB connection ready!');
    } else {
      console.log('ℹ️ MongoDB connection state:', this.connection.readyState);
    }

    this.connection.on('connected', () => console.log('✅ MongoDB connected'));
    this.connection.on('error', (err) =>
      console.error('❌ MongoDB connection error:', err)
    );
    this.connection.on('disconnected', () =>
      console.warn('⚠️ MongoDB disconnected')
    );
  }
}
