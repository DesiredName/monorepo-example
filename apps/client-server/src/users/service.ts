import { User } from '@monorepo/db-client-entries';
import { Injectable } from '@nestjs/common';
import { DBService } from './../db/service';

@Injectable()
export class UsersService {
    constructor(private db_service: DBService) {}

    async list(): Promise<User[]> {
        const result = await this.db_service.list();

        if (result.is_ok === true) {
            return result.data;
        } else {
            /* Maybe log error, warning or just ignore */
            return [];
        }
    }
}
