import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, PostsModule, CommentsModule],
  controllers: [AppController],  // Đảm bảo controller này đã được thêm vào đây
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe 
    }
  ],
})
export class AppModule {}
