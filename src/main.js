import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/global.css';
import Highcharts from 'highcharts';
import drilldown from 'highcharts/modules/drilldown';
import exporting from 'highcharts/modules/exporting';
import accessibility from 'highcharts/modules/accessibility';

// Initialize required modules
drilldown(Highcharts);
exporting(Highcharts);
accessibility(Highcharts);

const app = createApp(App);

app.use(router);

app.mount('#app');
