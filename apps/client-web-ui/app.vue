<template>
  <div>
    this is
    <UIInput placeholder="an input" />
    <hr>
    <div v-if="isLoading">loading users list...</div>
    <div v-else-if="users.length === 0">
      No users fethced, press button to fetch
      <UIButton title="fetch users now" @click="fetchUsers" />
    </div>
    <div v-else>
      {{ users }}
    </div>
  </div>
</template>

<script>
import { UIButton, UIInput } from '@monorepo/ui-components';
import '@monorepo/ui-components/style.css'

export default {
  data: () => ({
    isLoading: false
  }),

  components: {
    UIButton,
    UIInput
  },

  setup() {
    const config = useAppConfig();
    const base_url = config['server-connection-string'];

    const {
      users,
      list,
    } = useUsers(base_url);

    return {
      users,
      list
    }
  },

  methods: {
    async fetchUsers() {
      this.isLoading = true;
      await this.list();
      this.isLoading = false;
    }
  }
}
</script>