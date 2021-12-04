import axios from 'axios';
window.axios = 'axios';
axios.defaults.baseURL = 'http://localhost:8000/api/';

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window._ = require('lodash');

try {
    require('bootstrap');
} catch (e) {}

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import routes from './router/index'

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes),
});
