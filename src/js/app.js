require('./bootstrap');

window.Vue = require('vue');

// Набор прелоадеров
import Spinner from 'vue-spinkit'
Vue.component('Spinner', Spinner);

// Пример компонента
Vue.component('example-component', require('./components/ExampleComponent').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
