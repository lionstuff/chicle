<template>
  <v-container grid-list-lg class='mx-auto'>

    <!-- BEGIN Head Section -->

      <!-- BEGIN Head Premium Block -->
      <v-row class='my-5 mx-auto' align='center' justify='center'>
        <base-carousel/>
      </v-row>
      <!-- END Head Premium Block -->

      <!-- BEGIN Information Block -->
      <v-row class='my-5 mx-auto' align='center' justify='center'>
        <actual-info/>
      </v-row>
      <!-- END Information Block -->

    <!-- END Head Section -->



    <!-- BEGIN Main Section -->

      <!-- BEGIN Middle Banner Block -->
      <v-row class='my-5 mx-auto' align='center' justify='center'>
        <v-card class='pa-2' width='100%' height='200'>
          <v-card-title primary-title>
            <h3 class='display-1'>Заголовок</h3>
          </v-card-title>
          <v-card-text class='body-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate odit quos! Aliquam, sint accusamus. Distinctio soluta, eligendi officiis nihil optio rem similique quibusdam modi veniam, fugit explicabo porro voluptatibus!</v-card-text>
          <v-card-actions>
            <v-btn color='primary'>text</v-btn>
            <v-btn color='primary'>text</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <!-- END Middle Banner Block -->

      <!-- BEGIN Main Sales Items Block -->
      <v-row :wrap='true' align='center' justify='space-between' class='ma-0 mx-auto pa-0'>
        <base-item-vertical class='mx-auto my-2' v-for='card in 5' :key='`card${card}`' :props='{ id: card }'/>
      </v-row>
      <!-- END Main Sales Items Block -->

      <!-- BEGIN Middle Banner Block -->
      <v-row class='my-5 mx-auto' align='center' justify='center'>
        <v-card class='pa-2' width='100%' height='200'>
          <v-card-title primary-title>
            <h3 class='display-1'>Заголовок</h3>
          </v-card-title>
          <v-card-text class='body-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate odit quos! Aliquam, sint accusamus. Distinctio soluta, eligendi officiis nihil optio rem similique quibusdam modi veniam, fugit explicabo porro voluptatibus!</v-card-text>
          <v-card-actions>
            <v-btn color='primary'>text</v-btn>
            <v-btn color='primary'>text</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <!-- END Middle Banner Block -->

      <!-- BEGIN Middle Ads Items Block -->
      <v-row align='center' justify='center' class='ma-0 mx-auto pa-0'>
        <base-ads-carousel/>
      </v-row>
      <!-- END Middle Ads Items Block -->

    <!-- END Main Section -->



    <!-- BEGIN Footer Section -->

      <!-- BEGIN Footer Banner Block -->
      <v-row class='my-5 mx-auto' align='center' justify='center'>
        <v-card class='pa-2' width='100%' height='200'>
          <v-card-title primary-title>
            <h3 class='display-1'>Заголовок</h3>
          </v-card-title>
          <v-card-text class='body-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate odit quos! Aliquam, sint accusamus. Distinctio soluta, eligendi officiis nihil optio rem similique quibusdam modi veniam, fugit explicabo porro voluptatibus!</v-card-text>
          <v-card-actions>
            <v-btn color='primary'>text</v-btn>
            <v-btn color='primary'>text</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <!-- END Footer Banner Block -->

      <!-- BEGIN Footer Premium Block -->
      <v-row class='my-5 mx-auto' align='center' justify='center'>
        <base-carousel/>
      </v-row>
      <!-- END Footer Premium Block -->

      <!-- BEGIN Footer Banner Block -->
      <v-row class='my-5 mx-auto' align='center' justify='center'>
        <v-card class='pa-2' width='100%' height='200'>
          <v-card-title primary-title>
            <h3 class='display-1'>Заголовок</h3>
          </v-card-title>
          <v-card-text class='body-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate odit quos! Aliquam, sint accusamus. Distinctio soluta, eligendi officiis nihil optio rem similique quibusdam modi veniam, fugit explicabo porro voluptatibus!</v-card-text>
          <v-card-actions>
            <v-btn color='primary'>text</v-btn>
            <v-btn color='primary'>text</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <!-- END Footer Banner Block -->

      <!-- BEGIN Footer Sales Items Block -->
      <v-row align='center' justify='center' class='ma-0 mx-auto pa-0'>
        <base-ads-carousel/>
      </v-row>
      <!-- END Footer Sales Items Block -->

      <!-- BEGIN Footer Banner Block -->
      <v-row class='my-5 mx-auto' align='center' justify='center'>
        <v-card class='pa-2' width='100%' height='200'>
          <v-card-title primary-title>
            <h3 class='display-1'>Заголовок</h3>
          </v-card-title>
          <v-card-text class='body-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate odit quos! Aliquam, sint accusamus. Distinctio soluta, eligendi officiis nihil optio rem similique quibusdam modi veniam, fugit explicabo porro voluptatibus!</v-card-text>
          <v-card-actions>
            <v-btn color='primary'>text</v-btn>
            <v-btn color='primary'>text</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <!-- END Footer Banner Block -->

      <!-- BEGIN Footer Ads Items Block -->
      <v-row :wrap='true' align='center' justify='space-between' class='ma-0 mx-auto pa-0'>
        <base-item-vertical class='mx-auto my-2' v-for='card in 5' :key='`card${card}`' :props='{ id: card }'/>
      </v-row>
      <!-- END Footer Ads Items Block -->

      <!-- BEGIN Footer Banner Block -->
      <v-row class='my-5 mx-auto' align='center' justify='center'>
        <v-card class='pa-2' width='100%' height='200'>
          <v-card-title primary-title>
            <h3 class='display-1'>Заголовок</h3>
          </v-card-title>
          <v-card-text class='body-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptate odit quos! Aliquam, sint accusamus. Distinctio soluta, eligendi officiis nihil optio rem similique quibusdam modi veniam, fugit explicabo porro voluptatibus!</v-card-text>
          <v-card-actions>
            <v-btn color='primary'>text</v-btn>
            <v-btn color='primary'>text</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <!-- END Footer Banner Block -->

      <!-- BEGIN Footer Premium Block -->
      <v-row class='my-5 mx-auto' align='center' justify='center'>
        <base-carousel/>
      </v-row>
      <!-- END Footer Premium Block -->

    <!-- END Footer Section -->

  </v-container>
</template>

<script scoped>
  export default {
    setup() {

      return {
      };
    },
  };
</script>

<style scoped>
</style>
