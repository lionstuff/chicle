<template>
  <v-row class='ma-0 pa-0 fluid fill-height' align='start' justify='start'>
    <v-col cols='auto' align='start' justify='start'>
      <v-card dark class='ma-0 v-card elevation-5' width='300'>
        <v-avatar
          size='300'
          color='secondary darken-2'
          class='v-card'
        >
          <v-img
            height='300'
            width='300'
            src='https://picsum.photos/300/300/?random=1'
            lazy-src='https://picsum.photos/300/300/?random=1'
            v-if='true'
          />
          <v-row v-else class='ma-0 fill-height' align='center' justify='center'>
            <v-card-title class='title text-uppercase secondary--text'>
              {{ user.name }}
            </v-card-title>
          </v-row>
        </v-avatar>
        <v-card-title v-if='true' class='title text-uppercase secondary--text text--lighten-2'>
          {{ user.name }}
        </v-card-title>
        <v-card-text>
          <div v-for='(field, f) in Object.keys(user)' :key='`userField${f}`' v-if='typeof user[field] !== `object` && field !== `id`'>{{ user[field] }}</div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script scoped>
  'use strict';
  import apiVersions from '@/api';
  const api = apiVersions['v0.1'];

  import { ref, computed, onMounted } from '@vue/composition-api';

  export default {
    setup: (props, context) => {
      const user = ref({});

      onMounted(async () => {
        const id = context.root._route.params.id || 1;
        const result = await api.get(`/users/${id <= 10 ? id : Math.round(Math.random() * 1e1)}`);
        user.value = result.data;
      });

      return {
        user,
      };
    },
  };
</script>
