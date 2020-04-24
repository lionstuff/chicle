<template>
  <v-carousel
    :cycle='isMouseover'
    :height='$vuetify.breakpoint.smAndDown ? `75vh` : `80vh` /* [TODO] Based on breakpoints */'
    @mouseenter.native='setCycle(false)'
    @mouseleave.native='setCycle()'
    class='ma-0 pa-0 v-card'
    dark
    delimiter-icon='mdi-circle'
    hide-delimiter-background
    interval='5000'
    lazy
    next-icon='mdi-chevron-right-circle'
    prev-icon='mdi-chevron-left-circle'
    show-arrows-on-hover
  >
      <!-- reverse-transition='slide-x-reverse-transition' -->
      <!-- transition='slide-x-transition' -->
    <v-carousel-item
      :key='`section${i}`'
      class='ma-0 pa-0'
      v-for='(section, i) in colors'
    >
      <v-sheet
        :color='colors[i]'
        class='ma-0 pa-0 v-card'
        height='100%'
        min-height='100%'
        min-width='100%'
        width='100%'
      >
        <v-row
          align='center'
          class='ma-0 pa-0'
          justify='center'
        >
          <v-col
            :cols='$vuetify.breakpoint.smAndDown ? `auto` : 8'
            align='center'
            class='ma-0 pa-0'
            justify='center'
          >
            <v-sheet
              :height='$vuetify.breakpoint.smAndDown ? `75vh` : `80vh` /* [TODO] Based on breakpoints */'
              class='ma-0 pa-0 v-card--flat v-card__tile'
              max-width='100%'
              min-width='100%'
            >
              <v-img
                :aspect-ratio='16/9'
                :class='`${colors[i]}--text text--lighten-2`'
                :lazy-src='`https://picsum.photos/800/600?random=${i}00`'
                :src='`https://picsum.photos/800/600?random=${i}00`'
                gradient='to left, rgba(0,0,0,.0), rgba(255,255,255,.2)'
                height='100%'
                style='object-fit: cover;'
              >
                <v-row
                  align='center'
                  class='fill-height ma-0 pa-0'
                  justify='center'
                >
                  <v-card-title
                    :class='`${colors[i]} display-1 transparent-text text-uppercase elevation-5`'
                    style='border: 5px rgba(0,0,0,.8) solid; border-radius: 0.6vw; background-image: linear-gradient(to right, rgba(255,255,255,.4), rgba(255,255,255,.0));'
                  >
                    Заголовок {{ i }}
                  </v-card-title>
                </v-row>
              </v-img>
            </v-sheet>
          </v-col>
          <v-col align='center' justify='center' cols='4' class='ma-0 pa-0 px-4 transparent'
            style='background-image: linear-gradient(to right, rgba(0,0,0,.0), rgba(255,255,255,.4));'
          >
            <v-sheet
              class='transparent'
              :height='$vuetify.breakpoint.smAndDown ? `75vh` : `80vh` /* [TODO] Based on breakpoints */'
            >
              <v-row class='fill-height' align='center' justify='center'>
                <v-card-text>
                  <v-col
                    v-for='text in 3'
                    :key='`text${text}`'
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati optio est qui nam, hic, harum exercitationem sunt, fugiat id corporis ullam illo nostrum ad illum. Itaque at amet eligendi qui!
                  </v-col>
                </v-card-text>
                <v-spacer/>
                <v-card-actions>
                  <v-btn block outlined :color='`${colors[i]} lighten-4`' dark>
                    Подробнее
                  </v-btn>
                </v-card-actions>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script scoped>
  'use strict';
  import { ref, computed } from '@vue/composition-api';
  export default {
    setup: () => {
      const colors = computed(() => ['error', 'warning', 'indigo', 'info', 'success', 'cyan', 'pink', 'purple', 'lime']);
      const isMouseover = ref(true);
      const setCycle = (value = true) => {
        if (isMouseover.value === value) return;
        isMouseover.value = value;
      };

      return {
        colors,
        isMouseover,
        setCycle,
      };
    },
  };
</script>

<style scoped>
</style>
