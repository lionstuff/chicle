<template>
  <v-hover #default='{ hover }'>
    <v-card
      class='ma-0'
      dark
      flat
      max-height='320'
      tile
      width='220'
    >
      <v-img
        transition='fade-transition'
        :lazy-src='`https://picsum.photos/200/300?random=${props.id}0`'
        :src='`https://picsum.photos/200/300?random=${props.id}0`'
        class='ma-0 mx-auto px-2'
        gradient='to top, rgba(12,12,12,.2), rgba(12,12,12,.2)'
        height='320'
        max-height='320'
        max-width='220'
        min-height='320'
        min-width='220'
        style='object-fit: cover;'
        width='220'
      >
        <template #placeholder transition='fade-transition'>
          <base-image-placeholder/>
        </template>

        <v-card
          class='ma-0 mx-auto transparent'
          flat
          tile
          outlined
          height='220'
          width='100%'
        >
          <v-card-title class='ma-0 mx-auto pa-0 pt-1 d-flex align-center justify-center'>
            Card #{{ props.id }}
          </v-card-title>

          <v-sheet
            class='body-1 ma-0 mx-auto my-2 pa-0 v-card v-card--flat v-card__text v-sheet text-content__cover d-flex align-end justify-center'
            height='100%'
            max-height='100%'
            max-width='100%'
            min-height='100%'
            min-width='100%'
          >
            <v-row
              class='mx-auto pa-1 v-card v-card--hover text-content'
              v-if='hover'
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati optio est qui nam, hic, harum exercitationem sunt, fugiat id corporis ullam illo nostrum ad illum. Itaque at amet eligendi qui!
            </v-row>

            <v-row
              v-else
              class='ma-0 pa-0 d-flex justify-space-between'
            >
              <!-- BEGIN Card Info section -->

                <!-- BEGIN Gift Block -->
                  <v-col
                    class='ma-0 pa-1'
                  >
                    <v-btn text large icon class='success'>
                      <v-icon color='white'>mdi-gift</v-icon>
                    </v-btn>
                  </v-col>
                <!-- END Gift Block -->
                <!-- BEGIN Sale Block -->
                  <v-col
                    class='ma-0 pa-0'
                  >
                    <base-sale-block :props='{ ...price }'/>
                  </v-col>
                <!-- END Sale Block -->

              <!-- END Card Info section -->
            </v-row>

          </v-sheet>

          <v-card-actions class='ma-0 mx-auto pa-0'>
            <v-btn normal block color='primary' clas='ma-0 mx-auto pa-0 d-flex align-center justify-center'>
              <v-col class='ma-0 pa-0 text--disabled font-weight-thin' style='text-decoration: line-through;'>
                {{ price.old }} {{ currency }}
              </v-col>
              <v-col class='ma-0 pa-0'>
                {{ price.new }} {{ currency }}
              </v-col>
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-img>
    </v-card>
  </v-hover>
</template>

<script scoped>
  import { computed, reactive } from '@vue/composition-api';
  export default {
    props: ['props'],
    setup: ({ props: { ...props } }) => {
      const currency = computed(() => `руб`);
      const priceOld = computed(() => (Math.round(Math.random() * 1e3) + Math.random() * 1).toFixed(2));
      const price = reactive({
        old: priceOld.value,
        new: computed(() => (priceOld.value - Math.floor(Math.random() * `1e${(priceOld.value.split('.')[0].length - 1)}`)).toFixed(2)),
      });

      return {
        currency,
        price,
      };
    },
  };
</script>

<style lang="css" scoped>
  .text-content {
    line-height: 1.9em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    background: linear-gradient(to bottom, rgba(12,12,12,.1), rgba(12,12,12,.2)) !important;
  }
  .text-content__cover {
    object-fit: cover;
    background: linear-gradient(to bottom, rgba(250,250,250,.1), rgba(250,250,250,.1));
  }
</style>
