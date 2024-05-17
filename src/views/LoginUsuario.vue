<template>
  <div style="background-color: midnightblue;">
    <v-row align="center" justify="center" style="height: 100vh;">
      <v-col cols="12" sm="8" md="6">
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
          <v-form>
          <div class="text-subtitle-1 text-medium-emphasis">Login</div>

          <v-text-field v-model="cpfcnpj" density="compact" placeholder="Email" prepend-inner-icon="mdi-email-outline"
            variant="outlined"></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Password
          </div>

          <v-text-field v-model="senha" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
            density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
            @click:append-inner="visible = !visible"></v-text-field>

          <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="login">
            Entrar
          </v-btn>

          <v-alert v-if="error" type="error">{{ error }}</v-alert>
        </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>

import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'LoginUsuario',
  data() {
    return {
      visible: false
    }
  },
  setup() {
    const cpfcnpj = ref('');
    const senha = ref('');
    const error = ref('');

    const login = () => {
        axios.post('http://localhost:3000/login', { cpfcnpj: cpfcnpj.value, senha: senha.value })
        .then(response => {
          if (response.data.sucesso) {
            localStorage.setItem('login', JSON.stringify(response.data.sucesso));
            error.value = '';
            window.location.href = '/paginaInicial';
          } else {
            error.value = 'Credenciais inválidas ou não autorizado';
          }
        })
        .catch ( err => {
        console.log(err)
        error.value = 'Erro ao tentar fazer login';
      })
    };

    return { 
      cpfcnpj,
      senha,
      login,
      error 
    };
  }
}
</script>