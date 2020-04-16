<template>
  <v-container grid-list-lg class='ma-0 mx-auto pa-3'>

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

      <!-- BEGIN Main Banner Block -->
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
      <!-- END Main Banner Block -->

      <!-- BEGIN Ads Items Block -->
      <v-row :wrap='true' align='center' justify='start'>
        <base-item-vertical class='mx-auto' v-for='card in 10' :key='`card${card}`' :props='{ id: card }'/>
      </v-row>
      <!-- END Ads Items Block -->

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

    <!-- END Main Section -->



    <!-- BEGIN Footer Section -->

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
