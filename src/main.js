import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

var app = new Vue({
	el: '#app',
  data: {
      name: '',
      counter: 0
  }
});

export default app