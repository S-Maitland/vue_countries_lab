import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//create eventBUs to carry payload on vents rom one component to another
//where the direction is child -> parent or child -> .. Cannot
//be Parent to child as that is done via props.
export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
