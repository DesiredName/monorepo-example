import { User } from '@monorepo/db-client-entries';

export interface DBClientBuilderOptions {
    connection_string: string;
}

export interface DBClientServiceResponse<T> {
    is_ok: boolean;
    error?: any;
    data?: T;
}

export interface DBClientService {
    users: {
        list: () => Promise<DBClientServiceResponse<User>>;
        create: (
            id: string,
            data: Partial<User>,
        ) => Promise<DBClientServiceResponse<User | null>>;
        get: (id: string) => Promise<DBClientServiceResponse<User | null>>;
        update: (
            id: string,
            data: Partial<User>,
        ) => Promise<DBClientServiceResponse<boolean>>;
        delete: (id: string) => Promise<DBClientServiceResponse<boolean>>;
    };
}
