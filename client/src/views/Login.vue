<template>
  <v-row align='center' justify='center'>
    <v-col xs='11' sm='10' md='8' lg='5' xl='4'>
      <v-card class='v-card elevation-5'>
        <v-toolbar dark dense flat fluid class='primary'>
          <v-toolbar-title>Войти</v-toolbar-title>
        </v-toolbar>
        <v-form
          @submit.prevent='submit'
        >
          <v-card-text>
            <v-text-field prepend-icon='mdi-at' name='login' label='Логин' type='text'/>
            <v-text-field prepend-icon='mdi-lock' name='password' label='Пароль' id='password' type='password'/>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn color='primary'>Войти</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script scoped>
  export default {
    setup: () => {
      return {
        //
      };
    },
    data: () => ({

    }),
  };
</script>

<style scoped>

</style>
