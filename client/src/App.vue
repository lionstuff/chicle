<template>
  <v-app>
    <!-- Begin Toolbar -->
    <v-row class='pa-1 ma-0' align='start' justify='start'>
      <base-toolbar/>
    </v-row>
    <!-- End Toolbar -->

    <v-content>
      <v-fade-transition mode='out-in'>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    setup() {
      //
      return {
        //
      };
    },
  };
</script>

<style>
  *,
  *:after, *:before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: auto;
    cursor: default !important;
  }

  .v-card:not(.v-sheet--tile):not(.v-card--shaped), .v-card {
    border-radius: 0.6vw !important;
  }

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

  .active {
    animation: activeAnimation ease 1s infinite;
  }

  @keyframes activeAnimation {
    0% {
      filter: drop-shadow(0px 0px 0.1vw white);
    }
    25% {
      filter: drop-shadow(0px 0px 0.2vw white);
    }
    50% {
      filter: drop-shadow(0px 0px 0.5vw white);
    }
    75% {
      filter: drop-shadow(0px 0px 1vw skyblue);
    }
    100% {
      filter: drop-shadow(0px 0px 2vw transparent);
    }
  }
</style>
