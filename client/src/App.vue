<template>
  <v-app class='fluid ma-0 pa-0'>
    <!-- Begin Toolbar -->
    <v-row class='ma-0 pa-0' align='start' justify='start'>
      <base-toolbar class='pink ma-0 pa-0' style='opacity: 0.95'/>
    </v-row>
    <!-- End Toolbar -->

    <v-content class='fluid transparent ma-0'>
      <v-fade-transition :appear='true' mode='out-in'>
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
    setup: () => {
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

  .theme--dark.v-application {
    background: transparent;
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
