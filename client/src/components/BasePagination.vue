<template>
  <v-row class='ma-0 mx-auto' align='center' justify='center'>
    <span class='ma-0 pa-0'>
      Комментариев на странице:
    </span>
    <v-menu offset-y>
      <template #activator='{ on }'>
        <v-btn
          dark
          text
          small
          color='primary'
          class='ma-0 ml-2'
          v-on='on'
        >
          {{ itemsPerPage }}
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list subheader dense class='ma-0 pa-0'>
        <v-list-item
          :key='`numberOfPages-${n}`'
          @click='updateItemsPerPage(number)'
          dense
          v-for='(number, n) in numberOfPages'
        >
          <v-list-item-title>
            <v-row class='ma-0 pa-0 align-center justify-center'>
              {{ number }}
            </v-row>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer/>

    <span :class='[`ma-0 mr-2`, page === pages ? `secondary--text text--lighten-2` : ``]'>
      Страница {{ page }} из {{ pages }}
    </span>

    <v-btn
      :disabled='page === pages'
      :key='`paginationBtn-${b}`'
      @click='btn.click'
      class='ma-0 pa-0'
      color='primary'
      dark
      small
      text
      v-for='(btn, b) in [{ icon: `mdi-chevron-left` }, { icon: `mdi-chevron-right` }]'
    >
      <v-icon>{{ btn.icon }}</v-icon>
    </v-btn>
  </v-row>
</template>

<script scoped>
  'use strict';
  import { ref, computed } from '@vue/composition-api';
  export default {
    props: ['props'],
    setup: (props, context) => {
      // const numberOfPages = ref([5, 10, 15, 30, 50]);
      const numberOfPages = ref([1, 2, 3, 5]);
      const itemsPerPage = ref(numberOfPages.value[0]);
      const updateItemsPerPage = (number) => itemsPerPage.value = number;
      const page = computed(() => props.page || 1);
      const pages = computed(() => props.pages || 1);
      return {
        numberOfPages,
        itemsPerPage,
        page,
        pages,
        updateItemsPerPage,
      };
    },
  };
</script>
