<template>
  <div style="background-color: midnightblue;">
    <v-row align="center" justify="center" style="height: 100vh;">
      <v-col cols="12" sm="8" md="6">
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
          <div class="text-subtitle-1 text-medium-emphasis">Login</div>

          <v-text-field density="compact" placeholder="Email" prepend-inner-icon="mdi-email-outline"
            variant="outlined"></v-text-field>

          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Password
          </div>

          <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
            density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
            @click:append-inner="visible = !visible"></v-text-field>

          <v-btn block class="mb-8" color="blue" size="large" variant="tonal">
            Entrar
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    visible: false,
  }),
}
</script>