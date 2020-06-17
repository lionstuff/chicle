<template>
  <v-container
    :grid-list-lg='breakpoints.large'
    :grid-list-sm='breakpoints.small'
    class='mx-auto my-auto'
  >
    <!-- BEGIN Item Gallery -->
    <v-row :class='[breakpoints.small ? `my-2` : `my-5`, `mx-auto`]' align='start' justify='center'>
      <!-- <base-carousel :props='props.images'/> -->
      <base-carousel/>
    </v-row>
    <!-- END Item Gallery -->

    <!-- BEGIN Information Block -->
    <v-row :class='[breakpoints.small ? `my-2` : `my-5`, `mx-auto`]' align='start' justify='center'>
      <actual-info/>
    </v-row>
    <!-- END Information Block -->

    <!-- BEGIN Information's tabs -->
    <v-row :class='[breakpoints.small ? `my-2` : `my-5`, `mx-auto`]' align='start' justify='center'>
      <v-tabs
        :align-with-title='false'
        :center-active='true'
        :grow='breakpoints.small'
        :optional='false'
        :show-arrows='breakpoints.small'
        :vertical='breakpoints.large'
        class='ma-0 v-card v-card--flat'
      >
        <v-tab
          :class='[`ma-0`, breakpoints.large ? `pa-4 d-flex justify-start` : ``]'
          :key='`tab${t}`'
          v-for='(tab, t) in tabs'
        >
          <v-icon left>{{ tab.icon }}</v-icon>
          {{ tab.caption }}
        </v-tab>
        <v-tab-item v-for='(tabItemCard, i) in tabs' :key='`tabItemCard${i}`' class='v-card v-card--flat' :style='{ ...getStyle }'>
          <v-card
            :height='tabItemCard.type === `map` ? breakpoints.small ? `68vh` : `45vh` : `100%`'
            :style='{ ...getStyle, "overflow": "hidden" }'
            class='pa-0 v-card v-card--flat'
            width='100%'
          >
            <v-card-title v-if='tabItemCard.type === `info`' class='ma-0 pb-2'>
              {{ getItemProps($route.params.id).info.title }}
            </v-card-title>
            <v-col cols='12' class='ma-0 py-0' v-if='tabItemCard.type === `info`'>
              <v-divider/>
            </v-col>
            <v-card-text v-if='tabItemCard.type === `info` || tabItemCard.type === `comments`'>

              {{ tabItemCard.type === 'info' ? getItemProps($route.params.id).info.body : '' }}

              <!-- BEGIN Comments -->
              <v-data-iterator
                :items-per-page.sync='itemsPerPage'
                :items='getItemProps($route.params.id).comments'
                :page='page'
                class='ma-0 pa-0'
                hide-default-footer
                locale='ru-RU'
                v-if='tabItemCard.type === `comments`'
              >
                <template #header>
                  <base-pagination/>
                </template>

                <template #default='props'>
                  <base-comment
                    :key='`comment${comment.id}`'
                    :props='comment'
                    v-for='(comment, c) in props.items'
                  />
                </template>

                <template #footer>
                  <base-pagination/>
                </template>

              </v-data-iterator>
              <!-- END Comments -->

              <!-- BEGIN Add Comment -->
              <v-row class='ma-0 pt-4' align='start' justify='end' v-if='tabItemCard.type === `comments`'>
                <v-hover #default='{ hover }'>
                  <v-slide-x-transition mode='out-in'>
                    <v-btn :key='`addCommentBtn`' rounded outlined v-if='!addComment' @click='addComment = true' :color='!hover ? `primary` : ``' :class='hover ? `primary` : ``'>
                      <v-icon :left='hover'>mdi-plus</v-icon>
                      {{ hover ? 'Добавить комментарий' : '' }}
                    </v-btn>
                  </v-slide-x-transition>
                </v-hover>
              </v-row>
              <base-comment-add-form v-if='addComment' class='pa-1'/>
              <!-- END Add Comment -->

            </v-card-text>

            <!-- BEGIN Maps Block -->
            <base-map
              :props='getItemProps($route.params.id)'
              :style='{ ...getStyle }'
              class='v-card v-card--flat'
              v-if='tabItemCard.type === `map`'
            />
            <!-- END Maps Block -->

            <!-- BEGIN User Block -->
              <!-- :props='{ id: $route.params.id }' -->
            <base-item-vertical
              :props='getItemProps($route.params.id)'
              class='ma-4 pa-0 mb-0'
              v-if='tabItemCard.type === `user`'
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
  import { ref, computed } from '@vue/composition-api';
  import { useItems } from '@/composition/useItems.js';
  import { useBreakpoints } from '@/composition/useBreakpoints.js';
  // import { useItems, useBreakpoints } from '@/composition';
  export default {
    props: ['props'],
    setup: (props, context/*{ props: { ...props }}*/) => {
      const { breakpoints } = useBreakpoints(context);
      const getStyle = computed(() => {
        if (breakpoints.small) {
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
        { icon: `mdi-information`, caption: `Описание`, type: 'info' },
        { icon: `mdi-comment`, caption: `Комментарии`, type: 'comments' },
        { icon: `mdi-map-marker`, caption: `На карте`, type: 'map' },
        { icon: `mdi-account`, caption: `Пользователь`, type: 'user' }
      ]);

      const addComment = ref(false);

      return {
        getStyle,
        tabs,
        addComment,
        ...useItems(),
        ...useBreakpoints(context),
      };
    },
  };
</script>

<style type='text/css' lang='css' scoped>
</style>
