<template>
  <v-carousel
    dark
    :height='670 /* [TODO] Based on breakpoints */'
    hide-delimiters
    lazy
    next-icon='mdi-chevron-right-circle'
    prev-icon='mdi-chevron-left-circle'
  >
      <!-- reverse-transition='slide-x-reverse-transition' -->
      <!-- transition='slide-x-transition' -->
    <v-carousel-item
      v-for='adsItem in 3 /* [TIP] 3-5 for best perfomance on mobile devices */'
      :key='`adsItem${adsItem}`'
    >
      <v-row :wrap='true' align='center' justify='space-between' class='ma-0 mx-auto pa-0'>
       <base-item-vertical v-for='card in 10 /* [TODO] Based on breakpoints */' :key='`card${card}`' class='mx-auto my-2' :props='getItemProps(`${adsItem}${card}0`)'/>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script scoped>
  'use strict';
  import { useItems } from '@/composition/useItems.js';
  export default {
    props: ['props'],
    setup: (props) => {
      return {
        ...useItems(),
      };
    },
  };
</script>
