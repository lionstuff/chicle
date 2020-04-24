<template>
  <v-hover #default='{ hover }'>
    <v-card
      :to='props !== `undefined` ? `/items/${props.id}` : ``'
      class='ma-0 v-card elevation-2'
      dark
      flat
      hover
      max-height='320'
      tile
      width='220'
    >
      <v-img
        :aspect-ratio='16/9'
        :lazy-src='`https://picsum.photos/220/320?random=${props.id}0`'
        :src='`https://picsum.photos/220/320?random=${props.id}0`'
        class='ma-0 mx-auto pa-1'
        gradient='to top, rgba(12,12,12,.1), rgba(12,12,12,.1)'
        height='320'
        max-height='320'
        max-width='220'
        min-height='320'
        min-width='220'
        style='object-fit: cover;'
        transition='fade-transition'
        width='220'
      >
        <template #placeholder transition='fade-transition'>
          <base-image-placeholder/>
        </template>

        <!-- BEGIN Card Info section -->
        <v-card
          class='ma-0 mx-auto v-card transparent'
          flat
          height='220'
          outlined
          tile
          width='100%'
        >
          <v-card-title class='ma-0 mx-auto pa-0 pt-1 d-flex align-center justify-center'>
            {{ /* props.title */ }}
            Card #{{ props.id }}
          </v-card-title>

          <v-sheet
            class='body-1 ma-2 mx-auto pa-0 v-card v-card--flat elevation-0 v-card__text text-content__cover d-flex align-end justify-center'
            height='100%'
            max-height='100%'
            max-width='100%'
            min-height='100%'
            min-width='100%'
            width='100%'
          >
            <v-row
              class='mx-auto pa-1 v-card v-card--hover text-content'
              v-if='hover'
            >
              {{ /* props.description */ }}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati optio est qui nam, hic, harum exercitationem sunt, fugiat id corporis ullam illo nostrum ad illum. Itaque at amet eligendi qui!
            </v-row>

            <v-row
              v-else
              class='ma-0 pa-0 d-flex justify-space-between'
              :wrap='false'
            >
              <!-- BEGIN Gift Block -->
              <!-- TODO Add v-if='props.gift'-->
              <v-col
                cols='1'
                class='ma-0 pa-1'
                v-if='props.hasGift'
              >
                <v-btn text large icon class='success'>
                  <v-icon color='white'>mdi-gift</v-icon>
                </v-btn>
              </v-col>
              <!-- END Gift Block -->

              <!-- BEGIN Sale Block -->
              <v-col
                align='end'
                justify='end'
                class='ma-0 pa-0'
              >
                <base-sale-block :props='{ ...props.price }'/>
              </v-col>
              <!-- END Sale Block -->

            </v-row>

          </v-sheet>

          <v-card-actions class='ma-0 mx-auto pa-0'>
            <v-btn normal block color='primary' class='d-flex align-center justify-center' @click.stop='click()'>
              <v-col class='ma-0 pa-0 text--disabled font-weight-thin' style='text-decoration: line-through;'>
                {{ props.price.old }} {{ props.currency }}
              </v-col>
              <v-col class='ma-0 pa-0'>
                {{ props.price.new }} {{ props.currency }}
              </v-col>
            </v-btn>
          </v-card-actions>
        </v-card>
        <!-- END Card Info section -->

      </v-img>
    </v-card>
  </v-hover>
</template>

<script scoped>
  'use strict';
  import { onMounted } from '@vue/composition-api';

  export default {
    props: ['props'],
    setup: ({ props: { ...props } }) => {
      const click = () => console.log('click..');
      return {
        click,
      };
    },
  };
</script>

<style type='text/css' lang='css' scoped>
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
    background: linear-gradient(to bottom, rgba(255,255,255,.1), rgba(255,255,255,.1));
  }
</style>
