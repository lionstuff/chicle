<template>
  <v-form
    @submit.prevent='submit'
    class='ma-0 pa-0'
    ref='formComment'
  >
    <v-row
      class='pt-4'
      align='start'
      justify='start'
    >
      <v-col cols='12' class='ma-0 pa-1'>
        <v-textarea
          :height='breakpoints.large ? `23vh` : `40vh`'
          background-color='secondary darken-2'
          counter
          dark
          maxlength='500'
          outlined
          placeholder='Введите текст сообщения'
          v-model='comment'
        >
          <template #label>
            Добавить комментарий
          </template>
        </v-textarea>
      </v-col>
    </v-row>
    <v-row class='pa-1 pb-0' align='center' justify='end'>
      <v-btn text>Отправить</v-btn>
    </v-row>
  </v-form>
</template>

<script scoped>
  'use strict';
  import { ref } from '@vue/composition-api';
  import { useBreakpoints } from '@/composition/useBreakpoints.js';
  export default {
    props: ['props'],
    setup: (props, context) => {
      const comment = ref('');

      return {
        comment,
        ...useBreakpoints(context),
      };
    },
  };
</script>
