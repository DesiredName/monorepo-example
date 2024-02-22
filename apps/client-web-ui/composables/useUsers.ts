import { type User } from '@monorepo/db-client-entries';
import { ref } from 'vue';

const users = ref<User[]>([]);

export default function useUsers(base_url: string) {
    const list = async () => {
        const { data } = await useAsyncData<User[]>('users_list', () =>
            $fetch(`${base_url}/users/list`)
        );

        if (data.value != null) {
            users.value = [...data.value];
        }
    };

    return {
        users,
        list
    };
}
