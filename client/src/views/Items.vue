<template>
  <v-container grid-list-lg class='mx-auto'>
    <!-- BEGIN Item Gallery -->
    <v-row class='my-5 mx-auto' align='center' justify='center'>
      <!-- <base-carousel :props='props.images'/> -->
      <base-carousel/>
    </v-row>
    <!-- END Item Gallery -->

    <!-- BEGIN Information Block -->
    <v-row class='my-5 mx-auto' align='center' justify='center'>
      <actual-info/>
    </v-row>
    <!-- END Information Block -->

    <!-- BEGIN Information's tabs -->
    <v-row class='my-5 mx-auto' align='center' justify='center'>
      <v-tabs
        :align-with-title='false'
        :center-active='true'
        :grow='$vuetify.breakpoint.smAndDown'
        :optional='false'
        :show-arrows='$vuetify.breakpoint.smAndDown'
        :vertical='!$vuetify.breakpoint.smAndDown'
        class='ma-0 v-card v-card--flat'
      >
        <v-tab
          :class='[`ma-0`, !$vuetify.breakpoint.smAndDown ? `pa-4 d-flex justify-start` : ``]'
          :key='`tab${t}`'
          v-for='(tab, t) in tabs'
        >
          <v-icon left>{{ tab.icon }}</v-icon>
          {{ tab.caption }}
        </v-tab>
        <v-tab-item v-for='(tabItemCard, i) in tabs' :key='`tabItemCard${i}`' class='v-card v-card--flat' :style='{ ...getStyle }'>
          <v-card
            :height='$vuetify.breakpoint.smAndDown ? `80vh` : `50vh`'
            :style='{ ...getStyle, "overflow": "hidden" }'
            class='pa-0 v-card v-card--flat'
            width='100%'
          >
            <v-card-title v-if='tabItemCard.type !== `map` && tabItemCard.type !== `user`'>
              {{ getItemProps($route.params.id).description.title }}
            </v-card-title>
            <v-card-text v-if='tabItemCard.type !== `map` && tabItemCard.type !== `user`'>
              {{ getItemProps($route.params.id).description.body }}
            </v-card-text>

            <!-- BEGIN Maps Block -->
            <base-map
              v-if='tabItemCard.type === `map`'
              class='v-card v-card--flat'
              :style='{ ...getStyle }'
              :props='{ coords: getItemProps($route.params.id).coords }'
            />
            <!-- END Maps Block -->

            <!-- BEGIN User Block -->
              <!-- :props='{ id: $route.params.id }' -->
            <base-item-vertical
              v-if='tabItemCard.type === `user`'
              class='ma-4 pa-0 mb-0'
              :props='getItemProps($route.params.id)'
            />
            <!-- END User Block -->
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-row>
    <!-- END Information's tabs -->
  </v-container>
</template>

<script scoped>
  'use strict';
  import { ref, computed, onMounted } from '@vue/composition-api';
  import { useItems } from '@/composition/useItems.js';
  export default {
    props: ['props'],
    setup: (props, context/*{ props: { ...props }}*/) => {
      const getStyle = computed(() => {
        if (context.parent.$vuetify.breakpoint.smAndDown) {
          return {
            'border-top-left-radius': '0px !important',
            'border-top-right-radius': '0px !important',
          };
        } else {
          return {
            'border-top-left-radius': '0px !important',
            'border-bottom-left-radius': '0px !important',
          };
        }
      });

      const tabs = ref([
        { icon: `mdi-information`, caption: `Описание` },
        { icon: `mdi-comment`, caption: `Комментарии` },
        { icon: `mdi-map-marker`, caption: `На карте`, type: 'map' },
        { icon: `mdi-account`, caption: `Пользователь`, type: 'user' }
      ]);

      return {
        getStyle,
        tabs,
        ...useItems(),
      };
    },
  };
</script>

<style type='text/css' lang='css' scoped>
</style>
