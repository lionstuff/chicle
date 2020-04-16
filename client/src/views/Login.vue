<template>
  <v-container fluid fill-height class='mx-auto'>
    <v-row align='center' justify='center'>
      <v-col cols='8' xs12 sm8 md4>
        <v-card class='elevation-12'>
          <v-toolbar dark color='primary'>
            <v-toolbar-title>Войти</v-toolbar-title>
  <!--
            <v-spacer/>
            <v-tooltip bottom>
              <template #activator='{ on }'>
                <v-btn
                  v-on='on'
                  icon
                >
                  <v-icon>mdi-xml</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
  -->
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon='mdi-account' name='login' label='Login' type='text'></v-text-field>
              <v-text-field prepend-icon='mdi-lock' name='password' label='Password' id='password' type='password'></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color='primary'>Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script scoped>
  export default {
    data: () => ({

    }),
  };
</script>

<style scoped>

</style>
