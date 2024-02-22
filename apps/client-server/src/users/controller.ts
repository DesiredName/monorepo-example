import { User } from '@monorepo/db-client-entries';
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './service';

@Controller('users')
export class UsersController {
    constructor(private users_service: UsersService) {}

    @Get('list')
    async list(): Promise<User[]> {
        return this.users_service.list();
    }
}
