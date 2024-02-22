import { type User } from '@monorepo/db-client-entries';

export const useUsersStore = defineStore('usersStore', {
    state: () => ({
        users: [] as User[]
    }),
    actions: {
        async fetch() {
            const { data } = await useFetch<User[]>(
                `http://localhost:3000/users/list`,
                {
                    lazy: true,
                    server: false
                }
            );

            if (data.value != null) {
                console.log(data);
                this.users.push(...data.value);
            }
        }
    }
});
