<template>
  <v-hover #default='{ hover }'>
    <!-- <v-col :cols='hover ? 5 : 2' fluid> -->
      <v-app-bar
        dark
        fixed
        floating
        :src='`https://picsum.photos/800/600?random`'
        clipped-left
        :fade-img-on-scroll='true'
        :short='true'
        :collapse='!hover'
        scroll-threshold='350'
        :tile='false'
        :dense='false'
        class='elevation-5 text-uppercase body-2'
      >
        <!-- <v-app-bar-nav-icon/> -->

        <div>{{ hover ? 'Войти' : 'Chicle' }}</div>

        <v-slide-x-reverse-transition>
          <v-btn icon v-if='hover' @click='navigate(`login`)'>
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </v-slide-x-reverse-transition>

        <!-- <v-spacer v-if='hover'/> -->

        <v-slide-x-reverse-transition>
          <div v-if='hover'>Магазин</div>
        </v-slide-x-reverse-transition>
        <v-slide-x-reverse-transition>
          <v-btn icon v-if='hover' @click='navigate(`shop`)'>
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </v-slide-x-reverse-transition>

        <v-slide-x-reverse-transition>
          <v-text-field
            hide-details
            placeholder='Поиск'
            prepend-icon='mdi-magnify'
            single-line
            v-if='hover'
          />
        </v-slide-x-reverse-transition>

      </v-app-bar>
    <!-- </v-col> -->
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
