import DBClientServiceBuilder, {
    DBClientServiceResponse
} from '@monorepo/db-client';
import { User } from '@monorepo/db-client-entries';

import { Injectable } from '@nestjs/common';

const db_client = DBClientServiceBuilder({
    connection_string: 'http://some.domain'
});

@Injectable()
export class DBService {
    async list(): Promise<DBClientServiceResponse<User[]>> {
        return db_client.users.list();
    }
}
