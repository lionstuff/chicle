<template>
  <l-map
    :center='props.coords'
    :maxZoom='17'
    :minZoom='1'
    :zoom='10'
    class='map'
    ref='map'
  >
      <!-- :subdomains='subdomains' -->
    <l-tile-layer
      :url='url'
      :attribution='attribution'
    />
  </l-map>
</template>

<script scoped>
  'use strict';
  // import L from 'leaflet';
  import { ref, watchEffect, onMounted } from '@vue/composition-api';

  export default {
    props: ['props'],
    data: () => ({
      attribution: '&copy;&nbsp;<a href=\'https://osm.org/copyright\'>OpenStreetMap</a> contributors',
      // center: [0, 0],

      icon: L.icon({
        // iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      }),

      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png', // [OK] v1
      // url: 'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', // [*]
      // url: 'https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', // [X]
      // url: 'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', // [OK]
      // url: 'https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', // [OK] v2
      // subdomains: ['mt0','mt1','mt2','mt3'],
    }),
    computed: {
      getCenter() { // [OK]
        return L.latLng(this.props.coords);
      },
      mapObject() { // [OK]
        return this.$refs.map.mapObject;
      },
    },
    methods: {
      setView(coords) { // [OK]
        this.mapObject.setView(coords);
      },
    },
    mounted() { // [OK]
      this.mapObject.attributionControl.remove();
      // this.mapObject.zoomControl.remove();
      L.marker(this.getCenter, { icon: this.icon }).addTo(this.mapObject);
      this.setView(this.getCenter);
    },
    setup: (props, context/*{ props: { ...props }}*/) => {
      // const attribution = ref('&copy;&nbsp;<a href=\'https://osm.org/copyright\'>OpenStreetMap</a> contributors');
      // const center = ref([58, 42]);

      // const icon = context.L.icon({
      //   // iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      //   iconUrl: require('leaflet/dist/images/marker-icon.png'),
      //   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
      // });

      // const url = ref('https://{s}.tile.osm.org/{z}/{x}/{y}.png');

      // url: 'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
      // subdomains: ['mt0','mt1','mt2','mt3'],

      // url: 'http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png',
      // selectedTileSet: 'https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
      // tileSets: [
      //   {
      //     name: 'OSM.org',
      //     url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      //   },
      //   {
      //     name: 'Streets',
      //     url: 'https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      //   },
      //   {
      //     name: 'Hybrid',
      //     url: 'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
      //   },
      //   {
      //     name: 'Satellite',
      //     url: 'https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
      //   },
      //   {
      //     name: 'Terrain',
      //     url: 'https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
      //   },
      //   {
      //     name: 'Terrain Stamen',
      //     url: 'http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png',
      //   },
      // ],

      // const mapObject = computed(() => context.refs.map.mapObject);

      // onMounted(() => {
      //   mapObject.value.attributionControl.remove();
      //   // mapObject.value.zoomControl.remove();
      //   if (Object.keys(context.root.$route.query).length) {
      //     mapObject.value.center = L.latLng(context.root.$route.query.item.coords);
      //   } else {
      //     mapObject.value.center = props.coords;
      //   }
      // });

      // watchEffect(context.parent.$vuetify.breakpoint, () => {
      //   mapObject.value.setView(context.root.$data.getCenter);
      // });

      return {
        // attribution,
        // center,
        // icon,
        // url,
      };
    },
  };
</script>

<style scoped>
  .map {
    height: 100%;
    width: 100%;
    min-height: 100%;
    min-width: 100%;
    cursor: default !important;
  }
  .leaflet-tooltip {
    border-radius: 0.6vw !important;
    background: transparent !important;
    padding: 0px !important;
    margin: 0px;
    border: none !important;
  }
  .leaflet-popup-content-wrapper,
  .leaflet-popup-content,
  .leaflet-tooltip-content-wrapper,
  .leaflet-tooltip-content {
    border-radius: 0.6vw !important;
    border: none !important;
    cursor: default !important;
    padding: 0px !important;
  }
  /* .leaflet-tooltip, */
  .leaflet-popup-content-wrapper,
  .leaflet-tooltip-content-wrapper {
    border-radius: 0.6vw !important;
    border: none !important;
    object-fit: cover;
    /*opacity: 0.95;*/
    margin: 0px !important;
  }
  .leaflet-tooltip-content, .leaflet-tooltip-content-wrapper {
    padding: 0.6vw !important;
  }
  .leaflet-popup-content,
  .leaflet-tooltip-content {
    margin: 0px !important;
    padding: 0px !important;
  }
  /*.leaflet-popup-tip-container {
    width: 40px;
    height: 20px;
    position: relative;
    left: 50%;
    top: -117px;
    margin-left: -20px;
    overflow: hidden;
    pointer-events: none;
    transform: rotate(180deg);
  }

  .leaflet-tooltip-content-wrapper, .leaflet-tooltip-content {
  }
  .leaflet-tooltip-content-wrapper {
  }
  .leaflet-tooltip-content {
  }
  .leaflet-tooltip-tip-container {
  }*/
</style>
