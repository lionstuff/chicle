<template>
  <v-carousel
    cycle
    dark
    delimiter-icon='mdi-circle'
    height='585'
    hide-delimiter-background
    interval='5000'
    lazy
    next-icon='mdi-chevron-right-circle'
    prev-icon='mdi-chevron-left-circle'
    show-arrows-on-hover
  >
    <v-carousel-item
      :key='`section${i}`'
      reverse-transition='slide-x-reverse-transition'
      transition='slide-x-transition'
      v-for='(section, i) in colors'
    >
      <v-sheet
        :color='colors[i]'
        height='100%'
      >
        <v-row
          align='center'
          class='fill-height pa-0 ma-0'
          justify='center'
        >
          <v-col cols='8'>
            <v-card
              class='transparent'
              flat
              height='550'
              tile
            >
              <v-img
                :class='`${colors[i]}--text text--lighten-2`'
                :lazy-src='`https://picsum.photos/800/600?random=${i}00`'
                :src='`https://picsum.photos/800/600?random=${i}00`'
                gradient='to left, rgba(0,0,0,.0), rgba(255,255,255,.4)'
                height='100%'
                style='object-fit: cover;'
              >
                <v-row
                  class='fill-height'
                  align='center'
                  justify='center'
                >
                  <v-card-title
                    :class='`${colors[i]} display-1 transparent-text text-uppercase`'
                    style='border: 1px rgba(0,0,0,.2) solid; border-radius: 0.6vw; background-image: linear-gradient(to right, rgba(0,0,0,.6), rgba(0,0,0,.0));'
                  >
                    Заголовок {{ i }}
                  </v-card-title>
                </v-row>
              </v-img>
            </v-card>
          </v-col>
          <v-col align='center' justify='center' cols='4'>
            <v-card height='550' flat class='transparent'>
              <v-sheet
                height='100%'
                style='background-image: linear-gradient(to right, rgba(0,0,0,.0), rgba(255,255,255,.5));'
                class='transparent pa-4'
              >
                <v-row class='fill-height' align='center' justify='center'>
                <v-card-text>
                  <div
                    v-for='text in 3'
                    :key='`text${text}`'
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati optio est qui nam, hic, harum exercitationem sunt, fugiat id corporis ullam illo nostrum ad illum. Itaque at amet eligendi qui!
                  </div>
                </v-card-text>
                <v-spacer/>
                <v-card-actions>
                  <v-btn block outlined :color='`${colors[i]} lighten-4`' dark>
                    Подробнее
                  </v-btn>
                </v-card-actions>
                </v-row>
              </v-sheet>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script scoped>
  import { computed } from '@vue/composition-api';
  export default {
    setup() {
      const colors = computed(() => ['error', 'warning', 'indigo', 'info', 'success', 'cyan', 'pink']);
      return {
        colors
      };
    },
  };
</script>

<style scoped>
  .transparent-text {
    /* font-family: 'Rubik One', sans-serif; */
    /* font-size: 50px; */
    /* text-transform: uppercase; */
    /* background: #000A; */
    display: table;
    /* margin: 20px auto; */
    color: white;
    /* border-radius: 5px; */
    mix-blend-mode: multiply;
    /* padding: 5px 10px; */
  }
</style>
