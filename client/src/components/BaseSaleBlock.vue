<template>
  <v-btn x-large text color='yellow' class='display-1 ma-0 d-flex align-end'>
    {{ getPercent }}
    <v-icon large right>mdi-sale</v-icon>
  </v-btn>
</template>

<script scoped>
  import { computed } from '@vue/composition-api';
  export default {
    props: ['props'],
    setup: ({ props: { ...props } }) => {
      const getPercent = computed(() => (((props.new - props.old) / props.new) * 100).toFixed(1));
      return {
        getPercent,
      };
    },
  };
</script>

<style scoped>

</style>
