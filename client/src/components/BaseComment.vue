<template>
  <v-hover #default='{ hover }'>
    <v-row
      :class='[breakpoints.large ? "pa-2" : "pa-1", `ma-0 v-card v-card--flat`]'
      align='center'
      justify='start'
    >
      <v-row
        :class='[breakpoints.large ? "pa-2" : "pa-1", `secondary`]'
        align='center'
        justify='start'
      >
        <v-avatar
          :class='[`primary pa-1`, breakpoints.large ? `elevation-5` : `elevation-1`]'
          :size='breakpoints.large ? `64` : `40`'
          v-if='true'
        >
          <v-img
            :height='breakpoints.large ? `56` : `32`'
            :lazy-src='`https://picsum.photos/100/100/?random=${props.id}`'
            :src='`https://picsum.photos/100/100/?random=${props.id}`'
            :width='breakpoints.large ? `56` : `32`'
          >
            <template #placeholder>
              <base-image-placeholder/>
            </template>
          </v-img>
        </v-avatar>

        <v-icon
          :style='{ "filter": "drop-shadow(0px 0px 2px black)" }'
          :x-large='breakpoints.large'
          class='ma-0 pa-0'
          color='primary'
          left
          v-else
        >
          mdi-shield-account
        </v-icon>

        <v-subheader
          :class='[breakpoints.large ? `pa-2` : `pa-1`, `ma-0 secondary--text text--lighten-4 fill-height subtitle-2`]'
          dark
        >
          {{ props.email }}
        </v-subheader>

        <v-spacer/>

        <v-col cols='auto' align='center' justify='end' class='ma-0 pa-1' v-if='true'>
          <base-rating
            :key='`ratingIcon${icon}`'
            v-for='icon in Math.round(Math.random() * 5)'
          />
        </v-col>

        <v-divider vertical class='ma-2'/>

        <v-col cols='auto' align='center' justify='end' class='ma-0 pa-1'>
          <v-chip
            :small='breakpoints.small'
            class='secondary darken-2 overline'
            dark
            disabled
          >
            {{ getDate() }}
          </v-chip>
        </v-col>
      </v-row>

      <v-row
        :class='[breakpoints.large ? `elevation-3 pa-5` : `elevation-1 pa-0`, `secondary darken-1`]'
        :wrap='true'
        align='start'
        justify='start'
      >
        <v-col cols='auto'>{{ props.name }}</v-col>
        <v-col cols='12' class='ma-0'>
          <v-divider/>
        </v-col>
        <v-col cols='auto'>{{ props.body }}</v-col>
      </v-row>
    </v-row>
  </v-hover>
</template>

<script scoped>
  import { computed } from '@vue/composition-api';
  import { useBreakpoints } from '@/composition/useBreakpoints.js';
  export default {
    props: ['props'],
    setup: (props, context) => {
      const date = computed(() => Date.now());
      const getDate = () => {
        return new Date(date.value - Math.round(Math.random() * 1e9)).toLocaleString('ru-RU');
      };
      return {
        getDate,
        ...useBreakpoints(context),
      };
    },
  };
</script>
