<template>
  <v-parallax
    class='ma-0 v-card--flat elevation-10'
    height='690'
    lazy-src='https://picsum.photos/1980/1080/?random=1'
    src='https://picsum.photos/1980/1080/?random=1'
    style='object-fit: cover; height: 100vh'
  >

    <!-- Begin Search -->
    <v-row class='ma-0 fill-height' align='center' justify='center'>
      <v-col
        :cols='breakpoints.small ? 11 : 8'
        align='center'
        justify='center'
      >
        <v-text-field
          :placeholder='`Найдите то, что вам нужно`'
          :value='getSearchValue'
          @input='getSearchItems'
          background-color='pink'
          class='ma-0 pa-0 transparent'
          color='white'
          full-width
          outlined
          ref='SearchInput'
          rounded
          solo
          style='opacity: 0.85;'
        >
          <template #prepend-inner>
            <v-icon
              left
              :large='breakpoints.large'
              class='my-2 py-2'
              color='pink lighten-3'
            >
              mdi-magnify
            </v-icon>
          </template>

          <template #append>
            <v-row :wrap='true' align='center' justify='end' class='ma-0 pa-0'>
              <v-fade-transition group :appear='true' mode='out-in'>
                  <!-- :class='[`ml-1`, [`success`, `error`, `warning`, `info`][c], `lighten-3 ${[`success`, `error`, `warning`, `info`][c]}--text text--lighten-3`]' -->
                <v-chip
                  :key='`searchChip${c}`'
                  :small='breakpoints.small'
                  @click:close='clickClose(chip)'
                  class='ml-1 pink lighten-4 pink--text text--lighten-4'
                  close
                  light
                  outlined
                  ripple
                  v-for='(chip, c) in chips'
                >
                  {{ chip }}
                </v-chip>
              </v-fade-transition>
            </v-row>
          </template>

<!--
          <template #message='{ key, message }'>
            <v-chip light class='pink--text' v-for='(chip, c) in chips' :key='`searchChip${key}`' close>
              {{ chip }}
            </v-chip>
          </template>
 -->
        </v-text-field>
<!--
        <v-chip light class='pink--text' v-for='(chip, c) in chips' :key='`searchChip${key}`'>
          {{ chip }}
        </v-chip>
 -->
      </v-col>
    </v-row>
    <!-- End Search -->
  </v-parallax>
</template>

<script scoped>
  'use strict';
  import { ref, computed } from '@vue/composition-api';
  import { useFocus } from '@/composition/useFocus.js';
  import { useBreakpoints } from '@/composition/useBreakpoints.js';

  export default {
    setup: (props, context) => {

      const items = ref([]);
      const chips = computed(() => items.value);

      const getSearchItems = v => items.value = v.split(' ').filter(v => v.length);

      const getSearchValue = computed(() => items.value.join(' '));

      const { focus } = useFocus(context);
      const clickClose = chip => {
        items.value.splice(items.value.indexOf(chip), 1);
        focus('SearchInput');
      };

      return {
        chips,
        clickClose,
        getSearchItems,
        getSearchValue,
        ...useBreakpoints(context),
      };
    },
  };
</script>
