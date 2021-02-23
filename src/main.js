import { createApp } from "vue"
import Saints from './components/SaintSeiya/Saints.vue'

createApp(Saints).mount('#saints')
var saints = new Vue({
	el: '#saints'
});

export default saints