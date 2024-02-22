import lodash from 'lodash';
import { User } from '@monorepo/db-client-entries';
import { DBClientBuilderOptions, DBClientService } from './types';

const { uniqueId } = lodash;

function DBClientServiceBuilder(
    _options: DBClientBuilderOptions
): DBClientService {
    // Do some init work, using options.
    // This list is just for DEMO only.
    const users: Map<string, User> = new Map([
        [
            '1',
            {
                ID: '1',
                Name: 'Dan'
            }
        ],
        [
            '2',
            {
                ID: '2',
                Name: 'Jane'
            }
        ],
        [
            '3',
            {
                ID: '3',
                Name: 'Sam'
            }
        ],
        [
            '4',
            {
                ID: '4',
                Name: 'Pam'
            }
        ]
    ]);

    return {
        users: {
            async list() {
                return { is_ok: true, data: Array.from(users.values()) };
            },

            async create(data) {
                const new_user: User = {
                    ID: uniqueId(),
                    Name: data.Name ?? 'NA'
                };

                users.set(new_user.ID, new_user);

                return { is_ok: true, data: new_user };
            },

            async get(id) {
                const user = users.get(id);

                return { is_ok: true, data: user };
            },

            async update(id, data) {
                const old_user = users.get(id);

                if (old_user == null) {
                    return {
                        is_ok: false,
                        error: 'User not found'
                    };
                }

                const updated_user: User = {
                    ...old_user,
                    ...data,
                    ID: id
                };

                users.set(updated_user.ID, updated_user);

                return { is_ok: true, data: true };
            },

            async delete(id) {
                if (users.has(id)) {
                    users.delete(id);

                    return { is_ok: true };
                } else {
                    return {
                        is_ok: false,
                        error: 'User not found'
                    };
                }
            }
        }
    };
}

export default DBClientServiceBuilder;
export * from './types.js';
