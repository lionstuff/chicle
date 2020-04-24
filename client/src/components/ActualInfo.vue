<template>
  <v-card outlined class='ma-0 mx-auto pa-0' width='100%' height='120'>
    <v-row align='center' justify='center' class='ma-0 fill-height' :wrap='false'>
      <v-col class='ma-0' align='start' justify='center' cols='2'>
        <v-img
          :aspect-ratio='16/9'
          lazy-src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_Ministry_of_Health_of_Russia.svg/180px-Emblem_of_Ministry_of_Health_of_Russia.svg.png'
          max-height='84'
          max-width='84'
          min-height='84'
          min-width='84'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Emblem_of_Ministry_of_Health_of_Russia.svg/180px-Emblem_of_Ministry_of_Health_of_Russia.svg.png'
          style='object-fit: cover;'
        />
      </v-col>

      <v-col
        align='start'
        class='ma-0 mx-auto pa-0 subtitle-1 text--primary text--lighten-4 d-flex align-start justify-center'
        cols='auto'
        justify='center'
      >
        Последняя информация о коронавирусе COVID-19
      </v-col>

      <v-col class='ma-0' align='end' justify='center'>
        <v-btn
          color='warning'
          href='https://www.rosminzdrav.ru/ministry/covid19'
          outlined
          target='_blank'
          x-large
        >
          <v-icon x-large left class='mr-4'>mdi-information</v-icon>
          Подробнее
        </v-btn>
      </v-col>

    </v-row>
  </v-card>
</template>

<script scoped>
  'use strict';
  export default {

  };
</script>

<style scoped>

</style>
