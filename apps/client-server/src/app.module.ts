import { Module } from '@nestjs/common';
import { UsersController } from './users/controller';
import { UsersService } from './users/service';
import { DBService } from './db/service';

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [DBService, UsersService]
})
export class AppModule {}
