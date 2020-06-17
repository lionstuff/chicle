<template>
  <v-icon
    color='white'
    style='filter: drop-shadow(0px 0px 2px red);'
    :small='breakpoints.small'
  >
    mdi-star-outline
  </v-icon>
</template>

<script type='text/javascript' scoped>
  'use strict';
  import { useBreakpoints } from '@/composition/useBreakpoints.js';
  export default {
    props: ['props'],
    setup: (props, context) => {
      return {
        ...useBreakpoints(context),
      };
    },
  };
</script>
