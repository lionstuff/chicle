<template>
  <v-btn x-large block text color='yellow' class='display-1 d-flex align-end justify-end'>
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
