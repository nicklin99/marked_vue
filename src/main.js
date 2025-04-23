import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './components/extension'
import ChartContent from './components/ChartContent.vue'
import EchartDemo from './components/EchartDemo.vue'

const app = createApp(App)
app.component('ChartContent', ChartContent)
app.component('EchartDemo', EchartDemo)
app.mount('#app')
