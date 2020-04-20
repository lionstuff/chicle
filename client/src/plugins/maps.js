import Vue from 'vue';
import L from 'leaflet';
import * as Vue2Leaflet from 'vue2-leaflet';
// import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';
// import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol';
// import { LMap, LCircleMarker, LMarker, LPopup, LTileLayer } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
// import 'leaflet.markercluster/dist/MarkerCluster.css';
// import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

Vue.use(L);

Vue.component('l-map', Vue2Leaflet.LMap);
// Vue.component('l-circle', Vue2Leaflet.LCircle);
// Vue.component('l-circle-marker', Vue2Leaflet.LCircleMarker);
// Vue.component('l-marker-cluster', Vue2LeafletMarkerCluster);
Vue.component('l-marker', Vue2Leaflet.LMarker);
// Vue.component('l-popup', Vue2Leaflet.LPopup);
// Vue.component('l-tooltip', Vue2Leaflet.LTooltip);
// // Vue.component('l-locatecontrol', Vue2LeafletLocatecontrol);
// // Vue.component('l-feature-group', Vue2Leaflet.LFeatureGroup);
Vue.component('l-tile-layer', Vue2Leaflet.LTileLayer);
