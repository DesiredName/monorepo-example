import { DBClientBuilderOptions, DBClientService } from './types';

function DBClientServiceBuilder(
    options: DBClientBuilderOptions,
): DBClientService {
    // Do some init work, using options

    return {
        users: {
            async list() {
                return { is_ok: true };
            },

            async create(id, data) {
                return { is_ok: true };
            },

            async get(id) {
                return { is_ok: true };
            },

            async update(id, data) {
                return { is_ok: true };
            },

            async delete(id) {
                return { is_ok: true };
            },
        },
    };
}

export default DBClientServiceBuilder;
