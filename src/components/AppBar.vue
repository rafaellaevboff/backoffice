<template>
  <div v-if="!isRotaLogin">
    <v-container style="margin: 0px; padding: 12px 0px 16px;" fluid fill-height>
      <v-row align="center" justify="space-between" style="background-color: midnightblue;">
        <v-btn icon="mdi-menu" variant="text" style="margin-left: 10px; color: white;"></v-btn>
        <v-col cols="auto">
          <v-toolbar-title style="color: white;">Meu App</v-toolbar-title>
        </v-col>
        <v-col cols="auto">
          <v-btn icon="mdi-logout" variant="text" @click="logout" style="margin-right: 10px; color: white;">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const isRotaLogin = computed(() => router.currentRoute.value.name === 'login');
    const user = ref(JSON.parse(localStorage.getItem('user')));

    const logout = () => {
      localStorage.removeItem('user');
      window.location.href = '/';
    };

    return {
      isRotaLogin,
      user,
      logout
    };
  },
  computed: {

  },
}
</script>