<template>
  <v-hover #default='{ hover }'>
    <v-app-bar
      :collapse='!hover'
      :dense='false'
      :fade-img-on-scroll='true'
      :short='true'
      :tile='false'
      class='elevation-5 text-uppercase body-2 ma-2 pink'
      clipped-left
      dark
      fixed
      floating
      fluid
      scroll-threshold='350'
      style='opacity: 0.85;'
    >
<!--       <template #img>
        <v-img
          :aspect-ratio='16/9'
          :lazy-src='`https://picsum.photos/800/600?random=1`'
          :src='`https://picsum.photos/800/600?random=1`'
          gradient='to top, rgba(12,12,12,.0), rgba(250,50,50,.6)'
          min-width='100vw'
          style='object-fit: cover; filter: blur(10px);'
          width='100vw'
        />
      </template> -->

      <v-app-bar-nav-icon/>

      <v-slide-x-reverse-transition mode='in-out'>
        <div v-if='!hover'>Chicle</div>
      </v-slide-x-reverse-transition>

      <v-slide-x-reverse-transition mode='in-out'>
        <v-btn text v-if='hover' @click='navigate(`login`)'>
          {{ hover ? 'Войти' : 'Chicle' }}
          <v-icon right>mdi-login</v-icon>
        </v-btn>
      </v-slide-x-reverse-transition>

      <v-slide-x-reverse-transition mode='in-out'>
        <v-btn text v-if='hover' @click='navigate(`shop`)'>
          Магазин
          <v-icon right>mdi-cart</v-icon>
        </v-btn>
      </v-slide-x-reverse-transition>

      <v-slide-x-reverse-transition mode='in-out'>
        <v-text-field
          hide-details
          placeholder='Поиск'
          prepend-icon='mdi-magnify'
          single-line
          v-if='hover'
        />
      </v-slide-x-reverse-transition>

    </v-app-bar>
  </v-hover>
</template>

<script scoped>
  export default {
    setup(props, context) {
      const navigate = (path) => context.root.$router.push(`/${path}`);

      return {
        navigate,
      };
    },
  };
</script>

<style scoped>

</style>
